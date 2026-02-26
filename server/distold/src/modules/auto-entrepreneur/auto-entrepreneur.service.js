import { ActivityType } from "../../../generated/prisma/enums.js";
import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/errorHandler.js";
import { autoentrepreneurExists } from "./utils/autoentrepreneurExists.js";
const profileAutoEntrepreneur = async (id) => {
    autoentrepreneurExists(id);
    const user = await prisma.autoEntrepreneur.findUnique({
        include: {
            user: true,
        },
        where: {
            id: id,
        }
    });
    if (!user)
        throw new AppError("User not found!", 400);
    delete user.password;
    return user;
};
const updateAutoEntrepreneur = async (id, data) => {
    autoentrepreneurExists(id);
    const AutoEntrepreneurUpdateData = {};
    if (data.autoEntrepreneur?.businessName)
        AutoEntrepreneurUpdateData.businessName = data.autoEntrepreneur.businessName;
    if (data.autoEntrepreneur?.ice)
        AutoEntrepreneurUpdateData.ice = data.autoEntrepreneur.ice;
    if (data.autoEntrepreneur?.logo)
        AutoEntrepreneurUpdateData.logo = data.autoEntrepreneur.logo;
    const UserUpdateData = {};
    if (data.user?.firstName)
        UserUpdateData.firstName = data.user.firstName;
    if (data.user?.lastName)
        UserUpdateData.lastName = data.user.lastName;
    if (data.user?.address)
        UserUpdateData.address = data.user.address;
    if (data.user?.phone)
        UserUpdateData.phone = data.user.phone;
    const updatedUser = await prisma.autoEntrepreneur.update({
        where: {
            id: id,
        },
        data: {
            ...AutoEntrepreneurUpdateData,
            user: {
                update: {
                    ...UserUpdateData
                }
            }
        },
        include: {
            user: true
        }
    });
    delete updatedUser?.password;
    return updatedUser;
};
export const autoEntrepreneurService = {
    profileAutoEntrepreneur,
    updateAutoEntrepreneur
};
//# sourceMappingURL=auto-entrepreneur.service.js.map