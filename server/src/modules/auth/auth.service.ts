import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/errorHandler.js";
import { JWT } from "../../utils/jwt.js";
import { passwordHash, passwordMatch } from "../../utils/passwordHash.js";
import type { loginSchemaInput, registerSchemaInput } from "./auth.types.js";

import { env } from "../../config/env.js"
import type { AutoEntrepreneur } from "../auto-entrepreneur/auto-entrepreneur.types.js";

const createAutoEntrepreneur = async (data: registerSchemaInput) => {

    if(data.password !== data.passwordConfirmation) throw new AppError("Passwords does't match", 400);

    const hashPass = await passwordHash(data.password);

    const AutoE = await prisma.autoEntrepreneur.create({
        data: {
            nom: data.nom,
            prenom: data.prenom,
            email: data.email,
            password: hashPass,
        }
    });

    if(!AutoE) throw new Error();
    return AutoE;
}

const loginAutoEntrepreneur = async (data: loginSchemaInput) => {
    
    const user = await prisma.autoEntrepreneur.findFirst({
        where:{
            email: data.email
        }
    }) as AutoEntrepreneur;
    if(!user) throw new AppError("Invalid Credentials", 400);

    const matchedPass = await passwordMatch(data.password, user.password);
    if(!matchedPass) throw new AppError("Invalid Credentials", 400);

    const tokenData = { id: user.id }

    const token = JWT.createToken(tokenData, env.JWT_SECRET as string);
    if(!token) throw new Error();

    user.jwtToken = token;
    delete user.password;
    return user;
}

// const logout = async (data: logoutSchemaInput) => {

//     const user = await prisma.autoEntrepreneur.findUnique({
//         where: {
//             id: data.id,
//         }
//     }) as AutoEntrepreneur;
//     if(!user) throw new AppError("Usernot found!", 400);

//     user.jwtToken = "";
//     await prisma.autoEntrepreneur.update({
//         where: {
//             id: data.id,
//         },
//         data: user,
//     });
// }

export const authService = {
    createAutoEntrepreneur,
    loginAutoEntrepreneur,
}