import { prisma } from "../../../lib/prisma.js";
import { AppError } from "../../../utils/errorHandler.js";
export const paymentExists = async (paymentId) => {
    const paymentExists = await prisma.payment.findUnique({
        where: {
            id: paymentId
        }
    });
    if (!paymentExists)
        throw new AppError("Payment with this id does not exist!", 404);
};
//# sourceMappingURL=paymentExists.js.map