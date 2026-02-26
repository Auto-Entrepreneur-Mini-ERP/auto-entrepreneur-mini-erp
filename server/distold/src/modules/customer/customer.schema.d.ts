import { z } from "zod";
export declare const createCustomerSchema: {
    body: z.ZodObject<{
        user: z.ZodObject<{
            firstName: z.ZodString;
            lastName: z.ZodString;
            email: z.ZodString;
            phone: z.ZodString;
            address: z.ZodString;
        }, z.core.$strip>;
        ice: z.ZodString;
        city: z.ZodOptional<z.ZodString>;
        country: z.ZodDefault<z.ZodString>;
        isActive: z.ZodDefault<z.ZodBoolean>;
        AutoEntrepreneurId: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
};
export declare const patchCustomerSchema: {
    body: z.ZodObject<{
        user: z.ZodOptional<z.ZodObject<{
            firstName: z.ZodString;
            lastName: z.ZodString;
            email: z.ZodString;
            phone: z.ZodString;
            address: z.ZodString;
        }, z.core.$strip>>;
        ice: z.ZodOptional<z.ZodString>;
        city: z.ZodOptional<z.ZodString>;
        country: z.ZodOptional<z.ZodString>;
        isActive: z.ZodOptional<z.ZodBoolean>;
        AutoEntrepreneurId: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
};
export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;
export type PatchCustomerInput = z.infer<typeof patchCustomerSchema>;
//# sourceMappingURL=customer.schema.d.ts.map