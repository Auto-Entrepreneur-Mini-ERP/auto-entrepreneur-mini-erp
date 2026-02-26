import { AppError } from '../../utils/errorHandler.js';
import { invoiceNumberGenerator } from './utils/invoiceNumberGenerator.js';
import { pagination } from '../../utils/pagination.js';
import { InvoiceStatus } from './invoice.types.js';
import { invoiceExists } from './utils/invoiceExists.js';
import { autoentrepreneurExists } from '../auto-entrepreneur/utils/autoentrepreneurExists.js';
import { CronJob } from 'cron';
import { cronJobs } from './utils/cronJobs.js';
import { prisma } from '../../lib/prisma.js';
import { PaymentMethod, Prisma } from '../../../generated/prisma/browser.js';
import { paymentService } from '../payment/payment.service.js';
import { paymentNumberGenerator } from '../payment/utils/paymentNumberGenerator.js';
import { generateInvoiceHTML } from './utils/invoiceTemplate.js';
import puppeteer from "puppeteer";
const getAllInvoices = async (autoentrepreneurId, page, limit) => {
    autoentrepreneurExists(autoentrepreneurId);
    const startIndex = pagination.paginationIndex(page, limit);
    const invoices = await prisma.invoice.findMany({
        skip: startIndex,
        take: limit,
        where: {
            AutoEntrepreneurId: autoentrepreneurId
        },
        orderBy: {
            issueDate: 'desc',
        },
        include: {
            customer: {
                include: {
                    user: true
                }
            }
        }
    });
    const count = await prisma.invoice.count({
        where: {
            AutoEntrepreneurId: autoentrepreneurId
        }
    });
    if (!invoices)
        throw new AppError("No invoices found", 404);
    return { invoices, count };
};
const getInvoiceById = async (autoentrepreneurId, invoiceId) => {
    autoentrepreneurExists(autoentrepreneurId);
    const invoice = await prisma.invoice.findUnique({
        where: {
            id: invoiceId,
        },
        include: {
            invoiceLines: {
                include: {
                    product: {
                        include: {
                            item: true
                        }
                    },
                    service: {
                        include: {
                            item: true
                        }
                    }
                }
            },
            customer: {
                include: {
                    user: true
                }
            }
        }
    });
    if (!invoice)
        throw new AppError("Invoice not found", 404);
    return invoice;
};
const getInvoiceByNumber = async (autoentrepreneurId, invoiceNumber) => {
    autoentrepreneurExists(autoentrepreneurId);
    const invoices = await prisma.invoice.findMany({
        where: {
            invoiceNumber: { contains: invoiceNumber },
            AutoEntrepreneurId: autoentrepreneurId,
        },
        include: {
            invoiceLines: {
                include: {
                    product: {
                        include: {
                            item: true
                        }
                    },
                    service: {
                        include: {
                            item: true
                        }
                    }
                }
            },
            customer: {
                include: {
                    user: true
                }
            }
        }
    });
    if (!invoices)
        throw new AppError("Invoice not found", 404);
    return invoices;
};
const addInvoice = async (autoentrepreneurId, data) => {
    autoentrepreneurExists(autoentrepreneurId);
    const customerExist = await prisma.customer.findUnique({
        where: {
            id: data.invoice.customerId
        }
    });
    if (!customerExist)
        throw new AppError("Customer does not exist!", 404);
    if (!data.invoice.dueDate)
        throw new AppError("Due date is required", 400);
    const dueDate = new Date(data.invoice.dueDate);
    if (isNaN(dueDate.getTime()))
        throw new AppError("Due date is invalid", 400);
    const lastInvoice = await prisma.invoice.findFirst({
        select: {
            invoiceNumber: true
        },
        orderBy: {
            creationDate: 'desc'
        }
    });
    const newInvoiceNumber = invoiceNumberGenerator(lastInvoice?.invoiceNumber);
    data.invoice.invoiceNumber = newInvoiceNumber;
    // calculate total from invoice lines
    let invoiceSubTotal = 0;
    data.invoiceLine.forEach((line) => {
        invoiceSubTotal += line.quantity * line.unitPrice;
    });
    // calculate total after discount if it iexists
    if (data.invoice.discount)
        data.invoice.totalAmount = invoiceSubTotal - data.invoice.discount;
    else
        data.invoice.totalAmount = invoiceSubTotal;
    // calculate remaining amount if theres a payement
    // check if the paied amount is partial or full 
    if (data.invoice.paidAmount) {
        if (data.invoice.paidAmount === data.invoice.totalAmount) {
            data.invoice.status = InvoiceStatus.PAID;
            data.invoice.remainingAmount = 0;
        }
        else {
            data.invoice.remainingAmount = data.invoice.totalAmount - data.invoice.paidAmount;
            data.invoice.status = InvoiceStatus.PARTIALLY_PAID;
        }
    }
    else if (!data.invoice.paidAmount || data.invoice.paidAmount === 0) {
        data.invoice.remainingAmount = data.invoice.totalAmount;
        data.invoice.status = InvoiceStatus.UNPAID;
    }
    const InvoiceCreateData = {
        invoiceNumber: newInvoiceNumber,
        issueDate: new Date(),
        dueDate: dueDate, status: data.invoice.status,
        subtotal: invoiceSubTotal,
        discount: data.invoice.discount,
        totalAmount: data.invoice.totalAmount,
        paidAmount: data.invoice.paidAmount,
        remainingAmount: data.invoice.remainingAmount,
        notes: data.invoice.notes,
        AutoEntrepreneur: {
            connect: {
                id: autoentrepreneurId
            }
        },
        customer: {
            connect: {
                id: data.invoice.customerId
            }
        },
    };
    const newCompleteInvoice = await prisma.invoice.create({
        data: {
            ...InvoiceCreateData,
            invoiceLines: {
                create: data.invoiceLine
            }
        },
        include: {
            invoiceLines: true,
        }
    });
    if (!newCompleteInvoice)
        throw new Error();
    //create payment based on status
    console.log(newCompleteInvoice.paidAmount);
    if (newCompleteInvoice.paidAmount > 0) {
        const lastPayment = await prisma.payment.findFirst({
            select: {
                reference: true
            },
            orderBy: {
                creationDate: 'desc'
            }
        });
        const newPaymentNumber = paymentNumberGenerator(lastPayment?.reference);
        const PaymentData = {
            reference: newPaymentNumber,
            paymentDate: new Date(),
            paymentMethod: data.invoice.payementMethod,
            amount: newCompleteInvoice.paidAmount,
            AutoEntrepreneur: {
                connect: {
                    id: autoentrepreneurId
                }
            },
            Invoice: {
                connect: {
                    id: newCompleteInvoice.id
                }
            }
        };
        const payment = await prisma.payment.create({
            data: PaymentData
        });
        if (!payment)
            throw new Error();
    }
    // after creation set cron job to change status to OVERDUE after due date reached
    const setOverdue = new CronJob(newCompleteInvoice.dueDate, cronJobs.setInvoiceStatusAfterOverDue);
    setOverdue.start();
    //end
    return newCompleteInvoice;
};
const updateInvoice = async (autoentrepreneurId, invoiceId, data) => {
    autoentrepreneurExists(autoentrepreneurId);
    invoiceExists(invoiceId);
    // check if theres payements for this invoice - cant update invoice with a payement
    const payementExist = await prisma.payment.findMany({
        where: {
            invoiceId: invoiceId
        }
    });
    if (payementExist.length > 0)
        throw new AppError("You cant't update an Invoice with payement related to it!", 400);
    const InvoiceUpdateData = {};
    if (data.invoice.dueDate) {
        const dueDate = new Date(data.invoice.dueDate);
        if (isNaN(dueDate.getTime()))
            throw new AppError("Due date is invalid", 400);
        InvoiceUpdateData.dueDate = dueDate;
    }
    if (data.invoice.status)
        InvoiceUpdateData.status = data.invoice.status;
    // if(data.invoice.discount) InvoiceUpdateData.discount = data.invoice.discount;
    if (data.invoice.notes)
        InvoiceUpdateData.notes = data.invoice.notes;
    let newSubTotal = 0;
    if (data.invoiceLine) {
        data.invoiceLine.forEach(line => {
            newSubTotal += line.quantity * line.unitPrice;
        });
        InvoiceUpdateData.totalAmount = newSubTotal - Number(InvoiceUpdateData.discount);
    }
    // modify total and remaining if thers discount
    await prisma.invoice.update({
        where: {
            id: invoiceId
        },
        data: InvoiceUpdateData
    });
    if (data.invoiceLine) {
        await prisma.invoiceLine.updateMany({
            where: {
                invoiceId: invoiceId
            },
            data: data.invoiceLine
        });
    }
    const updatedInvoice = await prisma.invoice.findUnique({
        where: {
            id: invoiceId
        },
        include: {
            invoiceLines: true,
        }
    });
    if (!updatedInvoice)
        throw new Error();
    return updatedInvoice;
};
const cancelInvoice = async (autoentrepreneurId, invoiceId) => {
    autoentrepreneurExists(autoentrepreneurId);
    invoiceExists(invoiceId);
    const canceled = await prisma.invoice.update({
        where: {
            id: invoiceId,
            AutoEntrepreneurId: autoentrepreneurId
        },
        data: {
            status: InvoiceStatus.CANCELLED
        }
    });
    return canceled;
};
const deleteInvoice = async (autoentrepreneurId, invoiceId) => {
    autoentrepreneurExists(autoentrepreneurId);
    invoiceExists(invoiceId);
    await prisma.invoice.delete({
        where: {
            id: invoiceId,
            AutoEntrepreneurId: autoentrepreneurId
        }
    }).catch(() => { throw new Error(); });
    return true;
};
const generatePdf = async (autoentrepreneurId, invoiceId) => {
    const invoice = await prisma.invoice.findUnique({
        where: {
            id: invoiceId
        },
        include: {
            invoiceLines: {
                include: {
                    product: {
                        include: {
                            item: true,
                        },
                    },
                    service: true,
                },
            },
            customer: {
                include: {
                    user: true,
                },
            },
        },
    });
    const browser = await puppeteer.launch({
        headless: true,
    });
    const page = await browser.newPage();
    const html = generateInvoiceHTML(invoice);
    await page.setContent(html, { waitUntil: "domcontentloaded" });
    const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
    });
    await browser.close();
    return {
        pdf,
        invoiceNumber: invoice?.invoiceNumber
    };
};
export const invoicesService = {
    getAllInvoices,
    getInvoiceById,
    getInvoiceByNumber,
    addInvoice,
    updateInvoice,
    cancelInvoice,
    deleteInvoice,
    generatePdf,
};
//# sourceMappingURL=invoice.service.js.map