import { prisma } from '../../../prisma/client.js';
import { AppError } from '../../utils/errorHandler.js';
import { invoiceNumberGenerator } from './utils/invoiceNumberGenerator.js';
import { pagination } from '../../utils/pagination.js';
import { InvoiceStatus, type InvoiceCreateSchemaInput, type InvoiceOutput } from './invoice.types.js';

const getAllInvoices = async (autoentrepreneurId: string, page: number, limit: number) => {

    const startIndex = pagination.paginationIndex(page as number, limit as number)
    
    const invoices = await prisma.invoice.findMany({
        skip: startIndex,
        take: 10,
        where: {
            autoentrepreneurId
        }
    }) as unknown as InvoiceOutput[];

    if(!invoices) throw new AppError("No invoices found", 404);
    return invoices;
};

const getInvoiceById = async (autoentrepreneurId: string, invoiceId: string) => {
    const invoice = await prisma.invoice.findUnique({
        where: {
            id: invoiceId,
            autoentrepreneurId
        },
        include: {
            InvoiceLine: true
        }
    }) as unknown as InvoiceOutput;

    if(!invoice) throw new AppError("Invoice not found", 404);
    return invoice;
};

const addInvoice = async (autoentrepreneurId: string, data: InvoiceCreateSchemaInput) => {

    const userExist = await prisma.autoEntrepreneur.findUnique({
        where:{
            id: autoentrepreneurId
        }
    });
    if(!userExist) throw new AppError("Auto Entrepreneur with this id does not exist!", 404);

    const customerExist = await prisma.customer.findUnique({
        where:{
            id: data.invoice.customerId
        }
    });
    if(!customerExist) throw new AppError("Customer does not exist!", 404);

    const lastInvoice = prisma.invoice.findFirst({
        orderBy:{
            createdAt: 'desc'
        }
    });

    const newInvoiceNumber = invoiceNumberGenerator(lastInvoice.invoiceNumber);
    data.invoice.invoiceNumber = newInvoiceNumber;

    // calculate total from invoice lines
    let invoiceSubTotal = 0;
    data.invoiceLine.forEach((line)=>{
        invoiceSubTotal += line.quantity * line.unitPrice
    });

    // calculate total after discount if it iexists
    if(data.invoice.discount) data.invoice.totalAmount = invoiceSubTotal - data.invoice.discount
    else data.invoice.totalAmount = invoiceSubTotal

    // calculate remaining amount if theres a payement
    // check if the paied amount is partial or full 
    if(data.invoice.paidAmount){
        if(data.invoice.paidAmount === data.invoice.totalAmount){
            data.invoice.status = InvoiceStatus.PAID;
            data.invoice.remainingAmount = 0;
        } else {
            data.invoice.remainingAmount = data.invoice.totalAmount - data.invoice.paidAmount
            // create new payement from payement service
    
            // end
        }
    } else{
        data.invoice.remainingAmount = data.invoice.totalAmount
        data.invoice.status = InvoiceStatus.UNPAID
    }

    const newCompleteInvoice = await prisma.invoice.create({
        data: {
            invoiceNumber: newInvoiceNumber,
            issueDate: data.invoice.issueDate,
            dueDate: data.invoice.dueDate,
            status: data.invoice.status,
            subtotal: invoiceSubTotal,
            discount: data.invoice.discount,
            totalAmount: data.invoice.totalAmount,
            paidAmount: data.invoice.paidAmount,
            remainingAmount: data.invoice.remainingAmount,
            note: data.invoice.note,
            customerId: data.invoice.customerId,
            InvoiceLine:{
                create: data.invoiceLine
            }
        },
        include:{
            InvoiceLine: true,
        }
        
    }) as unknown as InvoiceOutput;
    if(!newCompleteInvoice) throw new Error();

    return newCompleteInvoice;
};

const cancelInvoice = async (autoentrepreneurId: string, invoiceId: string) => {
    const userExist = await prisma.autoEntrepreneur.findUnique({
        where:{
            id: autoentrepreneurId
        }
    });
    if(!userExist) throw new AppError("Auto Entrepreneur with this does not exist!", 404);

    const invoiceExist = await prisma.invoice.findUnique({
        where:{
            id: invoiceId
        }
    });
    if(!invoiceExist) throw new AppError("Auto Entrepreneur with this does not exist!", 404);

    const canceled = await prisma.invoice.update({
        where:{
            id: invoiceId,
            autoentrepreneurId
        },
        data:{
            status: InvoiceStatus.CANCELLED
        }
    }) as unknown as InvoiceOutput;
    return canceled;
};

const deleteInvoice = async (autoentrepreneurId: string, invoiceId: string) => {
    const userExist = await prisma.autoEntrepreneur.findUnique({
        where:{
            id: autoentrepreneurId
        }
    });
    if(!userExist) throw new AppError("Auto Entrepreneur with this does not exist!", 404);

    const invoiceExist = await prisma.invoice.findUnique({
        where:{
            id: invoiceId
        }
    });
    if(!invoiceExist) throw new AppError("Auto Entrepreneur with this does not exist!", 404);

    await prisma.invoice.delete({
        where:{
            autoentrepreneurId,
            id: invoiceId
        }
    }).catch(() => {throw new Error()});

    return true;
};

export const invoicesService = {
    getAllInvoices,
    getInvoiceById,
    addInvoice,
    cancelInvoice,
    deleteInvoice,
};