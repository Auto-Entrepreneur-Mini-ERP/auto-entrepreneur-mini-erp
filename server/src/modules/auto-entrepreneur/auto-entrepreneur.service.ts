import { TypeActivite } from "../../../generated/prisma/enums.js";
import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/errorHandler.js";
import type { AutoEntrepreneur, AutoEntrepreneurProfileInput, AutoEntrepreneurUpdateInput } from "./auto-entrepreneur.types.js";

const profileAutoEntrepreneur = async (data: AutoEntrepreneurProfileInput) => {
    const user = await prisma.autoEntrepreneur.findUnique({
        where: {
            id: data.id,
        }
    }) as AutoEntrepreneur;
    if (!user) throw new AppError("User not found!", 400);

    delete user.password;
    delete user.jwtToken;
    return user;
};

const updateAutoEntrepreneur = async (data: AutoEntrepreneurUpdateInput) => {

    const user = await prisma.autoEntrepreneur.findUnique({
        where: {
            id: data.id,
        }
    }) as AutoEntrepreneur;
    if (!user) throw new AppError("User not found!", 400);

    let activity: TypeActivite;
    if(data.typeActivite === 'COMMERCE') activity = TypeActivite.COMMERCE;
    else if(data.typeActivite === 'PRESTATION_SERVICE') activity = TypeActivite.PRESTATION_SERVICE;
    else if(data.typeActivite === 'MIXTE') activity = TypeActivite.MIXTE;
    else throw new AppError("Invalid type d'activite!", 400);

    const updatedUser = await prisma.autoEntrepreneur.update({
        where: {
            id: data.id,
        },
        data: {},
    }) as AutoEntrepreneur;

    delete updatedUser.password;
    return updatedUser;
};

export const autoEntrepreneurService = {
    profileAutoEntrepreneur,
    updateAutoEntrepreneur
}