import { InvoiceStatus } from "../../../../generated/prisma/enums.js";
import { prisma } from "../../../lib/prisma.js";
import { AppError } from "../../../utils/errorHandler.js";

const setInvoiceStatusAfterOverDue = async (invoiceId: string) => {
    const overdue = await prisma.invoice.update({
        where:{
            id: invoiceId,
        },
        data:{
            status: InvoiceStatus.OVERDUE
        }
    });
    if(!overdue) throw new AppError("Error setting cornJob (OVERDUE)!", 400);
};

export const cronJobs = {
    setInvoiceStatusAfterOverDue,
}