import { ActivityType } from "../../../generated/prisma/enums.js";
import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/errorHandler.js";
import type { AutoEntrepreneur, AutoEntrepreneurUpdateInput } from "./auto-entrepreneur.types.js";

const profileAutoEntrepreneur = async (id: string) => {    
    const user = await prisma.autoEntrepreneur.findUnique({
        include: {
            user: true,
        },
        where: {
            id: id,
        }
    }) as AutoEntrepreneur | null;
    if (!user) throw new AppError("User not found!", 400);

    delete user.password;
    return user;
};

const updateAutoEntrepreneur = async (id: string, data: AutoEntrepreneurUpdateInput) => {

    const user = await prisma.autoEntrepreneur.findUnique({
        where: {
            id: id,
        }
    });
    if (!user) throw new AppError("User not found!", 400);

    const updatedUser = await prisma.autoEntrepreneur.update({
        where: {
            id: id,
        },
        data: {
            ...data,
        },
        include: {
            user: true,
        }
    }) as unknown as AutoEntrepreneur | null;

    delete updatedUser?.password;
    return updatedUser;
};

export const autoEntrepreneurService = {
    profileAutoEntrepreneur,
    updateAutoEntrepreneur
}