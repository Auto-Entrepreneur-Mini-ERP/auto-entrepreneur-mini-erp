import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/errorHandler.js";
import { JWT } from "../../utils/jwt.js";
import { passwordHash, passwordMatch } from "../../utils/passwordHash.js";
import type { loginSchemaInput, registerSchemaInput } from "./auth.types.js";
import crypto from "node:crypto";


import { env } from "../../config/env.js"

const createAutoEntrepreneur = async (data: registerSchemaInput) => {

    if(data.password !== data.passwordConfirmation) throw new AppError("Passwords does't match", 400);

    const hashPass = await passwordHash(data.password);

    const AutoE = await prisma.autoEntrepreneur.create({
        data: {
            nom: data.nom,
            prenom: data.prenom,
            email: data.email,
            password: hashPass,

            telephone: data.telephone ?? "",
            address: data.address ?? "",
            typeActivite: data.typeActivite ?? "COMMERCE",
            tauxImposition: data.tauxImposition ?? 0,
            ice: data.ice ?? crypto.randomUUID()
        }
    });

    if(!AutoE) throw new Error();
    return AutoE;
}

const loginAutoEntrepreneur = async (data: loginSchemaInput) => {
    
    const user = await prisma.autoEntrepreneur.findUnique({
        where:{
            email: data.email
        }
    });
    if(!user) throw new AppError("Invalid Credentials", 400);

    const matchedPass = await passwordMatch(data.password, user.password);
    if(!matchedPass) throw new AppError("Invalid Credentials", 400);

    const tokenData = { id: user.id }

    const token = JWT.createToken(tokenData, env.JWT_SECRET as string);
    if(!token) throw new Error();

    const { password, ...userWithoutPassword } = user;
    return { ...userWithoutPassword, jwtToken: token };
}

export const authService = {
    createAutoEntrepreneur,
    loginAutoEntrepreneur,
}