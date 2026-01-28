import type { Prisma } from "../../../generated/prisma/browser.js";
import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/errorHandler.js";
import { pagination } from "../../utils/pagination.js";
import { autoentrepreneurExists } from "../auto-entrepreneur/utils/autoentrepreneurExists.js";
import { paymentExists } from "./utils/paymentExists.js";
import type { PaymentCreateInput } from "./payment.types.js";
import { InvoiceStatus } from "../invoice/invoice.types.js";

const getAllPayments = async (autoentrepreneurId: string, page: number, limit: number) => {
    autoentrepreneurExists(autoentrepreneurId);

    const startIndex = pagination.paginationIndex(page, limit);

    const payments = await prisma.payment.findMany({
        skip: startIndex,
        take: limit,
        where:{
            AutoEntrepreneurId: autoentrepreneurId
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
        }
    });
    if(!payments) throw new AppError("No payments found!", 404);

    return payments;
};

const createPayment = async (autoentrepreneurId: string, data: PaymentCreateInput) => {
    autoentrepreneurExists(autoentrepreneurId);

    const PaymentData: Prisma.PaymentCreateInput = {
        reference: data.refrence,
        paymentDate: data.paymentDate,
        paymentMethod: data.payementMethod,
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
    const invoice = await prisma.invoice.findUnique({
        where: {
            id: data.invoiceId
        }
    });
    if(Number(invoice?.paidAmount) + Number(payment.amount) === Number(invoice?.totalAmount)) {
        await prisma.invoice.update({
            where: {
                id: data.invoiceId
            },
            data:{
                status: InvoiceStatus.PAID,
                paidAmount: Number(invoice?.paidAmount) + Number(payment.amount),
                remainingAmount: 0,
            }
        });
    } else if (Number(invoice?.paidAmount) + Number(payment.amount) < Number(invoice?.totalAmount)) {
        await prisma.invoice.update({
            where: {
                id: data.invoiceId
            },
            data:{
                status: InvoiceStatus.PARTIALLY_PAID,
                paidAmount: Number(invoice?.paidAmount) + Number(payment.amount),
                remainingAmount: Number(invoice?.totalAmount) - Number(invoice?.paidAmount) - Number(payment.amount),
            }
        });
    }
    
    return payment;
};

const deletePayment = async (autoentrepreneurId: string, paymentId: string) => {
    autoentrepreneurExists(autoentrepreneurId);
    paymentExists(paymentId);

    // logic to update invoice paidAmount after delete
    const paymentToDelete = await prisma.payment.findUnique({
        where:{
            id: paymentId
        }
    });
    const invoice = await prisma.invoice.findUnique({
        where:{
            id: paymentToDelete?.invoiceId as string
        }
    });

    const newPaidAmount = Number(invoice?.paidAmount) - Number(paymentToDelete?.amount);
    const newRemainingAmount = Number(invoice?.totalAmount) - newPaidAmount;
    let newStatus = InvoiceStatus.PARTIALLY_PAID;

    await prisma.invoice.update({
        where:{
            id: paymentToDelete?.invoiceId as string
        }, 
        data:{
            paidAmount: newPaidAmount,
            remainingAmount: newRemainingAmount,
            status: newStatus,
        }
    });

    // delete payment
    const payment = await prisma.payment.delete({
        where:{
            id: paymentId
        }
    });
    if(!payment) throw new AppError("Payment not found!", 404);
    
    return true;
};

export const paymentService = {
    getAllPayments,
    getOnePayment,
    createPayment,
    deletePayment,
};