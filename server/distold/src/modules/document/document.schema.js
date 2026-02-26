import z, { mime } from "zod";
export const documentCreateSchemaInput = {
    body: z.object({
        name: z.string().nonempty(),
        category: z.string().nonempty(),
        description: z.string().optional(),
    })
};
export const documentUpdateSchemaInput = {
    body: z.object({
        name: z.string().optional(),
        category: z.string().optional(),
        description: z.string().optional(),
    }),
};
//# sourceMappingURL=document.schema.js.map