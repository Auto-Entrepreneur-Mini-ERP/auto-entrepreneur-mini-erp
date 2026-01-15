import z from "zod";

export const modifyAutoEntrepreneurSchema = {
    body:{
        prenom: z.string().min(1).max(255).optional(),
        nom: z.string().min(1).max(255).optional(),
        telephone: z.number().min(10).max(10).optional(),
        address: z.string().min(5).max(500).optional(),
        typeActivite: z.string().min(3).max(255).optional(),
        tauxImposition: z.number().min(0).max(100).optional(),
        ice: z.string().min(5).max(20).optional(),
        logo: z.string().url().optional(),
    }
}