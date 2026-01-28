import { prisma } from "../../../lib/prisma.js";
import { AppError } from "../../../utils/errorHandler.js";

export const paymentExists = async (paymentId: string) => {
    const userExist = await prisma.payment.findUnique({
        where:{
            id: paymentId
        }
    });
    if(!userExist) throw new AppError("Payment with this does not exist!", 404);
};