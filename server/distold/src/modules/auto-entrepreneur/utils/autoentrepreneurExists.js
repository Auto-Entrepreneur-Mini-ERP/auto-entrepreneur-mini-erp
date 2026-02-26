import { prisma } from "../../../lib/prisma.js";
import { AppError } from "../../../utils/errorHandler.js";
export const autoentrepreneurExists = async (autoentrepreneurId) => {
    const userExist = await prisma.autoEntrepreneur.findUnique({
        where: {
            id: autoentrepreneurId
        }
    });
    if (!userExist)
        throw new AppError("Auto Entrepreneur with this does not exist!", 404);
};
//# sourceMappingURL=autoentrepreneurExists.js.map