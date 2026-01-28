import z from "zod";

export const modifyAutoEntrepreneurSchema = {
    body:{
        firstName: z.string().min(1).max(255).optional(),
        lastName: z.string().min(1).max(255).optional(),
        phone: z.number().min(10).max(10).optional(),
        adress: z.string().min(5).max(500).optional(),
        businessName: z.string().min(3).max(255).optional(),
        activityType: z.string().min(3).max(255).optional(),
        ice: z.string().min(5).max(20).optional(),
        logo: z.string().url().optional(),
    }
}