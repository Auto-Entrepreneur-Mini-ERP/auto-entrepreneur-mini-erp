import z from "zod";
export declare const documentCreateSchemaInput: {
    body: z.ZodObject<{
        name: z.ZodString;
        category: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>;
};
export declare const documentUpdateSchemaInput: {
    body: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=document.schema.d.ts.map