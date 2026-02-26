import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/errorHandler.js";
import { JWT } from "../../utils/jwt.js";
import { passwordHash, passwordMatch } from "../../utils/passwordHash.js";
import { env } from "../../config/env.js";
import { ActivityType } from "../../../generated/prisma/enums.js";
import otpGenerator from "otp-generator";
import { tr } from "zod/locales";
import { otpEmailTemplate } from "./utils/otpEmailTemplate.js";
import { emailSender } from "../../utils/emailSender.js";
const createAutoEntrepreneur = async (data) => {
    const emailExist = await prisma.user.findFirst({
        where: {
            email: data.email
        }
    });
    if (emailExist)
        throw new AppError('Email already exist!', 400);
    const iceExist = await prisma.autoEntrepreneur.findFirst({
        where: {
            ice: data.ice
        }
    });
    if (iceExist)
        throw new AppError('ICE already exist!', 400);
    if (data.password !== data.passwordConfirmation)
        throw new AppError("Passwords does't match", 400);
    const hashPass = await passwordHash(data.password);
    let activity;
    if (data.activityType === 'COMMERCE')
        activity = ActivityType.COMMERCE;
    else if (data.activityType === 'SERVICE')
        activity = ActivityType.SERVICE;
    else if (data.activityType === 'MIXTE')
        activity = ActivityType.MIXTE;
    else
        activity = data.activityType;
    const AutoE = await prisma.user.create({
        data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            AutoEntrepreneur: {
                create: {
                    password: hashPass,
                    businessName: data.businessName,
                    activityType: activity,
                    ice: data.ice,
                }
            },
        },
        include: {
            AutoEntrepreneur: true,
        }
    });
    if (!AutoE)
        throw new AppError("", 500);
    delete AutoE.password;
    return AutoE;
};
const loginAutoEntrepreneur = async (data) => {
    const user = await prisma.user.findFirst({
        where: {
            email: data.email
        },
    });
    console.log(user);
    if (!user)
        throw new AppError("Invalid Credentials", 400);
    const autoEntrepreneur = await prisma.autoEntrepreneur.findFirst({
        where: {
            userId: user.id
        },
    });
    if (!user)
        throw new AppError("Invalid Credentials", 400);
    const matchedPass = await passwordMatch(data.password, autoEntrepreneur.password);
    if (!matchedPass)
        throw new AppError("Invalid Credentials", 400);
    const tokenData = { id: autoEntrepreneur.id };
    const token = JWT.createToken(tokenData, env.JWT_SECRET);
    if (!token)
        throw new Error();
    autoEntrepreneur.jwtToken = token;
    delete autoEntrepreneur.password;
    return autoEntrepreneur;
};
const forgotPassword = async (email) => {
    const user = await prisma.user.findFirst({
        where: {
            email,
        },
        include: {
            AutoEntrepreneur: true
        }
    });
    if (!user)
        throw new AppError("This email does not exist!", 400);
    // Generate OTP
    const otp = otpGenerator.generate(6, { digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
    const otpExpiration = Date.now() + 5 * 60 * 1000;
    await prisma.autoEntrepreneur.update({
        where: {
            id: user.AutoEntrepreneur?.id
        },
        data: {
            passwordResetToken: otp,
            passwordResetTokenExpiration: otpExpiration
        }
    });
    // send OTP in email
    emailSender("System", "no-reply@auto-entrepreneur-erp.com", email, "Forgot Password OTP", otpEmailTemplate(otp));
    return true;
};
const otpVerification = async (email, otp) => {
    // check if otp is valid and is not expired
    const user = await prisma.user.findUnique({
        where: {
            email
        },
        include: {
            AutoEntrepreneur: true
        }
    });
    if (!user)
        throw new AppError("This email does not exist!", 400);
    if (user.AutoEntrepreneur?.passwordResetToken !== otp)
        throw new AppError("Invalid OTP!", 400);
    if (user.AutoEntrepreneur?.passwordResetTokenExpiration) {
        if (user.AutoEntrepreneur.passwordResetTokenExpiration < Date.now()) {
            throw new AppError("OTP expired!", 400);
        }
    }
};
const resetPassword = async (id, data) => {
    const user = await prisma.autoEntrepreneur.findFirst({
        where: {
            id,
        }
    });
    if (!user)
        throw new AppError("User not found!", 400);
    if (data.password !== data.passwordConfirmation)
        throw new AppError("Passwords does't match", 400);
    const hashPass = await passwordHash(data.password);
    const AutoE = await prisma.autoEntrepreneur.update({
        where: {
            id
        },
        data: {
            password: hashPass,
            passwordResetToken: null,
            passwordResetTokenExpiration: null,
        },
        include: {
            user: true
        }
    });
    delete AutoE.password;
    delete AutoE.passwordResetToken;
    delete AutoE.passwordResetTokenExpiration;
    if (!AutoE)
        throw new Error();
    return true;
};
const logout = async (id) => {
    const user = await prisma.autoEntrepreneur.findUnique({
        where: {
            id: id,
        }
    });
    if (!user)
        throw new AppError("User not found!", 400);
    return true;
};
export const authService = {
    createAutoEntrepreneur,
    loginAutoEntrepreneur,
    forgotPassword,
    otpVerification,
    resetPassword,
    logout
};
//# sourceMappingURL=auth.service.js.map