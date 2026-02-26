import { z } from "zod";
export declare const createTaxDeclarationSchema: z.ZodObject<{
    period: z.ZodString;
    year: z.ZodNumber;
    month: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export declare const patchTaxDeclarationSchema: z.ZodObject<{
    period: z.ZodOptional<z.ZodString>;
    year: z.ZodOptional<z.ZodNumber>;
    month: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
}, z.core.$strip>;
export declare const createTaxDeclarationRoute: {
    body: z.ZodObject<{
        period: z.ZodString;
        year: z.ZodNumber;
        month: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, z.core.$strip>;
};
export declare const updateTaxDeclarationRoute: {
    body: z.ZodObject<{
        period: z.ZodOptional<z.ZodString>;
        year: z.ZodOptional<z.ZodNumber>;
        month: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
    }, z.core.$strip>;
};
export type CreateTaxDeclarationDTO = z.infer<typeof createTaxDeclarationSchema>;
export type PatchTaxDeclarationDTO = z.infer<typeof patchTaxDeclarationSchema>;
//# sourceMappingURL=taxDeclaration.schema.d.ts.map