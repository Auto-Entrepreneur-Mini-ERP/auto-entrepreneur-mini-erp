import type { Prisma } from "../../../generated/prisma/browser.js";
import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/errorHandler.js";
import { pagination } from "../../utils/pagination.js";
import { autoentrepreneurExists } from "../auto-entrepreneur/utils/autoentrepreneurExists.js";
import { paymentExists } from "./utils/paymentExists.js";
import type { PayementMetod ,PaymentCreateInput, PaymentOutput, PaymentUpdateInput } from "./payment.types.js";
import { updateInvoiceAfterCreate, updateInvoiceAfterUpdate } from "./utils/updateInvoicewithPayment.js";
import { paymentNumberGenerator } from "./utils/paymentNumberGenerator.js";

const getAllPayments = async (autoentrepreneurId: string, page: number, limit: number) => {
    autoentrepreneurExists(autoentrepreneurId);

    const startIndex = pagination.paginationIndex(page, limit);

    const payments = await prisma.payment.findMany({
        skip: startIndex,
        take: limit,
        where:{
            AutoEntrepreneurId: autoentrepreneurId
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
    if(!payments) throw new AppError("No payments found!", 404);

    return payments;
};

const getOnePayment = async (autoentrepreneurId: string, paymentId: string) => {
    autoentrepreneurExists(autoentrepreneurId);
    paymentExists(paymentId);

    const payments = await prisma.payment.findMany({
        where:{
            id: paymentId,
            AutoEntrepreneurId: autoentrepreneurId
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
    if(!payments) throw new AppError("No payments found!", 404);

    return payments;
};

const createPayment = async (autoentrepreneurId: string, data: PaymentCreateInput) => {
    autoentrepreneurExists(autoentrepreneurId);

    const lastPayment = await prisma.payment.findFirst({
        select:{
            reference: true
        },
        orderBy:{
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
                id: data.AutoEntrepreneurId
            }
        },
        Invoice: {
            connect:{
                id: data.invoiceId
            }
        }
    };

    const payment = await prisma.payment.create({
        data: PaymentData
    });
    if(!payment) throw new Error();

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
    if(!updatedPayment) throw new Error();

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
        where:{
            id: paymentId
        }
    });
    if(!payment) throw new AppError("Payment not found!", 404);
    
    return true;
};

const reconciliatePayment = async (autoentrepreneurId: string, paymentId: string) => {
    autoentrepreneurExists(autoentrepreneurId);
    paymentExists(paymentId);

    const payment = await prisma.payment.update({
        where:{
            id: paymentId,
        },
        data: {
            isReconciled: true,
        }
    }) as unknown as PaymentOutput;
    if(!payment) throw new Error();

    return payment;
}

const paymentStats = async (autoentrepreneurId: string, periodFrom: string, periodTo: string, paymentMethod: PayementMetod, isReconcieled: string) => {
    autoentrepreneurExists(autoentrepreneurId);        
    
    const payments = await prisma.payment.findMany({
        where:{
            AutoEntrepreneurId: autoentrepreneurId,
            paymentDate: {
                gte: periodFrom,
                lte: periodTo
            },
            isReconciled: isReconcieled === 'true' ? true : false,
            paymentMethod: paymentMethod,
        },
    })
    if(!payments) throw new Error();

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