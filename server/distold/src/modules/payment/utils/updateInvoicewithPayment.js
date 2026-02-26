import { InvoiceStatus } from "../../../../generated/prisma/enums.js";
import { prisma } from "../../../lib/prisma.js";
export const updateInvoiceAfterCreate = async (invoiceId, payment) => {
    const invoice = await prisma.invoice.findUnique({
        where: {
            id: invoiceId
        }
    });
    if (Number(invoice?.paidAmount) + Number(payment.amount) === Number(invoice?.totalAmount)) {
        await prisma.invoice.update({
            where: {
                id: invoiceId
            },
            data: {
                status: InvoiceStatus.PAID,
                paidAmount: Number(invoice?.paidAmount) + Number(payment.amount),
                remainingAmount: 0,
            }
        });
    }
    else if (Number(invoice?.paidAmount) + Number(payment.amount) < Number(invoice?.totalAmount)) {
        await prisma.invoice.update({
            where: {
                id: invoiceId
            },
            data: {
                status: InvoiceStatus.PARTIALLY_PAID,
                paidAmount: Number(invoice?.paidAmount) + Number(payment.amount),
                remainingAmount: Number(invoice?.totalAmount) - Number(invoice?.paidAmount) - Number(payment.amount),
            }
        });
    }
};
export const updateInvoiceAfterUpdate = async (invoiceId, payment) => {
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
//# sourceMappingURL=updateInvoicewithPayment.js.map