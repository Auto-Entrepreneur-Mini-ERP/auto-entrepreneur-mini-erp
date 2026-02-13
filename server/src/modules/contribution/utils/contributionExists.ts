import { prisma } from "../../../lib/prisma.js";
import { AppError } from "../../../utils/errorHandler.js";

export const contributionExists = async (contributionId: string) => {
    const contributionExist = await prisma.contribution.findUnique({
        where:{
            id: contributionId
        }
    });
    if(!contributionExist) throw new AppError("Auto Entrepreneur with this does not exist!", 404);
};