import { prisma } from "../../../lib/prisma.js";
import { AppError } from "../../../utils/errorHandler.js";
export const invoiceExists = async (invoiceId) => {
    const invoiceExist = await prisma.invoice.findUnique({
        where: {
            id: invoiceId
        }
    });
    if (!invoiceExist)
        throw new AppError("Auto Entrepreneur with this does not exist!", 404);
};
//# sourceMappingURL=invoiceExists.js.map