import { da } from "zod/locales";
import { TypeActivite } from "../../../generated/prisma/enums.js";
import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/errorHandler.js";
import type { AutoEntrepreneur, AutoEntrepreneurUpdateInput } from "./auto-entrepreneur.types.js";
import type { AutoEntrepreneurUncheckedUpdateInput } from "../../../generated/prisma/models.js";

const profileAutoEntrepreneur = async (id: string) => {    
    const user = await prisma.autoEntrepreneur.findUnique({
        where: {
            id: id,
        }
    }) as AutoEntrepreneur;
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

    let activity: TypeActivite;
    if(data.typeActivite === 'COMMERCE') activity = TypeActivite.COMMERCE;
    else if(data.typeActivite === 'PRESTATION_SERVICE') activity = TypeActivite.PRESTATION_SERVICE;
    else if(data.typeActivite === 'MIXTE') activity = TypeActivite.MIXTE;
    else activity = data.typeActivite as TypeActivite || user.typeActivite as TypeActivite;

    let updateData = {
        nom: user.nom || data.nom as string,
        prenom: user.prenom || data.prenom as string,
        telephone: user.telephone || data.telephone as string,
        address: user.address || data.address as string,
        typeActivite: activity,
        ice: user.ice || data.ice as string,
        logo: user.logo || data.logo as string,
    }

    const updatedUser = await prisma.autoEntrepreneur.update({
        where: {
            id: id,
        },
        data: data as AutoEntrepreneurUncheckedUpdateInput,
    }) as AutoEntrepreneur;

    delete updatedUser.password;
    return updatedUser;
};

export const autoEntrepreneurService = {
    profileAutoEntrepreneur,
    updateAutoEntrepreneur
}