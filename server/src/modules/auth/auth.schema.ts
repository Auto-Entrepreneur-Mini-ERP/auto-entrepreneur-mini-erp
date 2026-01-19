import { z } from 'zod';

export const registerAutoEntrepreneurSchema = {
    body: z.object({
        nom: z.string().min(5).nonempty(),
        prenom: z.string().min(5).nonempty(),
        email: z.email().nonempty(),
        password: z.string().min(6).max(16).nonempty(),
        passwordConfirmation: z.string().min(6).max(16).nonempty(),
    })
}

export const loginEntrepreneurSchema = {
    body: z.object({
        email: z.email('string').nonempty(),
        password: z.string('string').min(6).max(16).nonempty(),
    })
}