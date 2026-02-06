import z from "zod";

export const documentCreateSchemaInput = {
    body: z.object({
        name: z.string().nonempty(),
        category: z.string().nonempty(),
        fileUrl: z.string().nonempty(),
        description: z.string().optional(),
    })
};

export const documentUpdateSchemaInput = {
    body: z.object({
        name: z.string().nonempty(),
        category: z.string().nonempty(),
        fileUrl: z.string().nonempty(),
        description: z.string().optional(),
    })
};