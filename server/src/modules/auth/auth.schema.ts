import { z } from 'zod';

export const registerAutoEntrepreneurSchema = {
    body: z.object({
        firstName: z.string().min(5).nonempty(),
        lastName: z.string().min(5).nonempty(),
        email: z.email().nonempty(),
        businessName: z.string().min(3).nonempty(),
        activityType: z.enum(['COMMERCE', 'SERVICE', 'MIXTE']),
        ice: z.string().min(5).nonempty(),
        password: z.string().min(6).max(16).nonempty(),
        passwordConfirmation: z.string().min(6).max(16).nonempty(),
    })
}

export const loginEntrepreneurSchema = {
    body: z.object({
        email: z.email().nonempty(),
        password: z.string().min(6).max(16).nonempty(),
    })
}

export const forgotPasswordSchema = {
    body: z.object({
        email: z.email().nonempty()
    })
};

export const resetPasswordSchema = {
    body: z.object({
        password: z.string().nonempty(),
        passwordConfirmation: z.string().nonempty(),
    })
}