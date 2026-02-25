import type { Prisma } from "../../../generated/prisma/browser.js";
import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/errorHandler.js";
import { pagination } from "../../utils/pagination.js";
import { autoentrepreneurExists } from "../auto-entrepreneur/utils/autoentrepreneurExists.js";
import { paymentExists } from "./utils/paymentExists.js";
import type { PayementMetod, PaymentCreateInput, PaymentOutput, PaymentUpdateInput } from "./payment.types.js";
import { updateInvoiceAfterCreate, updateInvoiceAfterUpdate } from "./utils/updateInvoicewithPayment.js";
import { paymentNumberGenerator } from "./utils/paymentNumberGenerator.js";
import { notificationService } from '../notification/notification.service.js';

const getAllPayments = async (autoentrepreneurId: string, page: number, limit: number) => {
    autoentrepreneurExists(autoentrepreneurId);

    const startIndex = pagination.paginationIndex(page, limit);

    const payments = await prisma.payment.findMany({
        skip: startIndex,
        take: limit,
        where: {
            AutoEntrepreneurId: autoentrepreneurId
        },
        orderBy: [
            {paymentDate: 'desc'},
            {reference: 'desc'}
        ],
        include: {
            Invoice: {
                include: {
                    customer: {
                        include: {
                            user: true
                        }
                    }
                }
            }
        }
    });
    if (!payments) throw new AppError("No payments found!", 404);

    const count = await prisma.payment.count({
    where: {
      AutoEntrepreneurId: autoentrepreneurId
    }
  })
    return {payments, count};
};

const getOnePayment = async (autoentrepreneurId: string, paymentId: string) => {
    autoentrepreneurExists(autoentrepreneurId);
    paymentExists(paymentId);

    const payment = await prisma.payment.findUnique({
        where: {
            id: paymentId,
        },
        include: {
            Invoice: {
                include: {
                    customer: {
                        include: {
                            user: true
                        }
                    }
                }
            }
        }
    });
    if (!payment) throw new AppError("No payments found!", 404);

    return payment;
};

const createPayment = async (autoentrepreneurId: string, data: PaymentCreateInput) => {
    autoentrepreneurExists(autoentrepreneurId);

    const lastPayment = await prisma.payment.findFirst({
        select: {
            reference: true
        },
        orderBy: {
            creationDate: 'desc'
        }
    });

    const newPaymentNumber = paymentNumberGenerator(lastPayment?.reference as string);
    data.refrence = newPaymentNumber;

    const PaymentData: Prisma.PaymentCreateInput = {
        reference: data.refrence,
        paymentDate: new Date(data.paymentDate),
        paymentMethod: data.paymentMethod,
        amount: data.amount,
        notes: data.notes as string,
        transactionNumber: data.transactionNumber as string,
        AutoEntrepreneur: {
            connect: {
                id: autoentrepreneurId
            }
        },
        Invoice: {
            connect: {
                id: data.invoiceId
            }
        }
    };
    const payment = await prisma.payment.create({
        data: PaymentData
    });
    if (!payment) throw new Error();

    // Fetch the invoice to get its number for the notification message
    const invoice = await prisma.invoice.findUnique({ where: { id: payment.invoiceId } });
if (invoice) {
  await notificationService.createPaiementRecuNotification(
    autoentrepreneurId,
    payment.id,
    invoice.invoiceNumber,
    Number(payment.amount),
  );
}

    // logic to update invoice status if needed
    updateInvoiceAfterCreate(data.invoiceId, data);

    return payment;
};

const updatePayment = async (autoentrepreneurId: string, paymentId: string, data: PaymentUpdateInput) => {
    autoentrepreneurExists(autoentrepreneurId);
    paymentExists(paymentId);

    const PaymentUpdateData: Prisma.PaymentUpdateInput = {};
    PaymentUpdateData.amount = data.amount as number;
    PaymentUpdateData.paymentDate = data.paymentDate as Date;
    PaymentUpdateData.paymentMethod = data.paymentMethod as PayementMetod;
    PaymentUpdateData.notes = data.notes as string;
    PaymentUpdateData.transactionNumber = data.transactionNumber as string;

    const updatedPayment = await prisma.payment.update({
        where: {
            id: paymentId
        },
        data: PaymentUpdateData
    });
    if (!updatedPayment) throw new Error();

    // login update invoice after updating payement
    updateInvoiceAfterUpdate(updatedPayment.invoiceId, data);

    return updatedPayment;

};

const deletePayment = async (autoentrepreneurId: string, paymentId: string) => {
    autoentrepreneurExists(autoentrepreneurId);
    paymentExists(paymentId);

    // logic to update invoice paidAmount after delete
    // updateInvoiceAfterDelete(data)

    // delete payment
    const payment = await prisma.payment.delete({
        where: {
            id: paymentId
        }
    });
    if (!payment) throw new AppError("Payment not found!", 404);

    return true;
};

const reconciliatePayment = async (autoentrepreneurId: string, paymentId: string) => {
    autoentrepreneurExists(autoentrepreneurId);
    paymentExists(paymentId);

    const payment = await prisma.payment.update({
        where: {
            id: paymentId,
        },
        data: {
            isReconciled: true,
        }
    }) as unknown as PaymentOutput;
    if (!payment) throw new Error();

    return payment;
}

const paymentStats = async (autoentrepreneurId: string, periodFrom: string, periodTo: string, paymentMethod: PayementMetod, isReconcieled: string) => {
    autoentrepreneurExists(autoentrepreneurId);

    const payments = await prisma.payment.findMany({
        where: {
            AutoEntrepreneurId: autoentrepreneurId,
            paymentDate: {
                gte: periodFrom,
                lte: periodTo
            },
            isReconciled: isReconcieled === 'true' ? true : false,
            paymentMethod: paymentMethod,
        },
    })
    if (!payments) throw new Error();

    return payments;
};


export const paymentService = {
    getAllPayments,
    getOnePayment,
    createPayment,
    updatePayment,
    deletePayment,
    reconciliatePayment,
    paymentStats,
};