import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/errorHandler.js";
import { JWT } from "../../utils/jwt.js";
import { passwordHash, passwordMatch } from "../../utils/passwordHash.js";
import type { loginSchemaInput, registerSchemaInput, resetPasswordInput } from "./auth.types.js";
import otpGenerator from "otp-generator"

import { env } from "../../config/env.js"
import type { AutoEntrepreneur } from "../auto-entrepreneur/auto-entrepreneur.types.js";
import type { AutoEntrepreneurUncheckedUpdateInput } from "../../../generated/prisma/models.js";

const createAutoEntrepreneur = async (data: registerSchemaInput) => {

    const emailExist = await prisma.autoEntrepreneur.findFirst({
        where:{
            email: data.email
        }
    });

    if(emailExist) throw new AppError('Email already exist!', 400);

    if(data.password !== data.passwordConfirmation) throw new AppError("Passwords does't match", 400);

    const hashPass = await passwordHash(data.password);

    const AutoE = await prisma.autoEntrepreneur.create({
        data: {
            nom: data.nom,
            prenom: data.prenom,
            email: data.email,
            password: hashPass,
        }
    }) as AutoEntrepreneur;

    if(!AutoE) throw new Error();
    delete AutoE.password;
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

const forgotPassword = async (email: string) => {

    const user = await prisma.autoEntrepreneur.findFirst({
        where: {
            email,
        }
    }) as AutoEntrepreneur;
    if(!user) throw new AppError("User not found!", 400);

    // Generate OTP
    const otp = otpGenerator.generate(6, {digits: true, lowerCaseAlphabets : false, upperCaseAlphabets: false, specialChars: false });
    const otpExpiration = Date.now() + 5 * 60 * 1000;
    
    await prisma.autoEntrepreneur.update({
        where: {
            id: user.id
        },
        data: {
            passwordResetToken: otp,
            passwordResetTokenExpiration: otpExpiration
        }
    });

    return otp;
}

const resetPassword = async (id: string, data: resetPasswordInput) => {
    const user = await prisma.autoEntrepreneur.findFirst({
        where: {
            id,
        }
    }) as AutoEntrepreneur;
    if(!user) throw new AppError("User not found!", 400);

    if(data.password !== data.passwordConfirmation) throw new AppError("Passwords does't match", 400);
    const hashPass = await passwordHash(data.password);

    const AutoE = await prisma.autoEntrepreneur.update({
        where: {
            id
        },
        data: {
            password: hashPass,
        }
    }) as AutoEntrepreneur;

    if(!AutoE) throw new Error();
    return true;
}

const logout = async (id: string ) => {
    
    const user = await prisma.autoEntrepreneur.findUnique({
        where: {
            id: id,
        }
    }) as AutoEntrepreneur;
    if(!user) throw new AppError("User not found!", 400);

    return true;
}

export const authService = {
    createAutoEntrepreneur,
    loginAutoEntrepreneur,
    forgotPassword,
    resetPassword,
    logout
}