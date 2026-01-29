import type { Prisma } from "../../../../generated/prisma/browser.js";
import { InvoiceStatus } from "../../../../generated/prisma/enums.js";
import { prisma } from "../../../lib/prisma.js";
import type { PaymentCreateInput } from "../payment.types.js";

export const updateInvoiceAfterCreate = async (invoiceId: string, payment: PaymentCreateInput) => {
    
    const invoice = await prisma.invoice.findUnique({
            where: {
                id: invoiceId
            }
        });
        if(Number(invoice?.paidAmount) + Number(payment.amount) === Number(invoice?.totalAmount)) {
            await prisma.invoice.update({
                where: {
                    id: invoiceId
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
                    id: invoiceId
                },
                data:{
                    status: InvoiceStatus.PARTIALLY_PAID,
                    paidAmount: Number(invoice?.paidAmount) + Number(payment.amount),
                    remainingAmount: Number(invoice?.totalAmount) - Number(invoice?.paidAmount) - Number(payment.amount),
                }
            });
        }
};

export const updateInvoiceAfterUpdate = async (invoiceId: string, payment: Prisma.PaymentUpdateInput) => {

};

// export const updateInvoiceAfterDelete = async (invoiceId: string) => {
    
//     const invoice = await prisma.invoice.findUnique({
//             where: {
//                 id: invoiceId
//             }
//         });
//         if(Number(invoice?.paidAmount) + Number(payment.amount) === Number(invoice?.totalAmount)) {
//             await prisma.invoice.update({
//                 where: {
//                     id: invoiceId
//                 },
//                 data:{
//                     status: InvoiceStatus.PAID,
//                     paidAmount: Number(invoice?.paidAmount) + Number(payment.amount),
//                     remainingAmount: 0,
//                 }
//             });
//         } else if (Number(invoice?.paidAmount) + Number(payment.amount) < Number(invoice?.totalAmount)) {
//             await prisma.invoice.update({
//                 where: {
//                     id: invoiceId
//                 },
//                 data:{
//                     status: InvoiceStatus.PARTIALLY_PAID,
//                     paidAmount: Number(invoice?.paidAmount) + Number(payment.amount),
//                     remainingAmount: Number(invoice?.totalAmount) - Number(invoice?.paidAmount) - Number(payment.amount),
//                 }
//             });
//         }
// };