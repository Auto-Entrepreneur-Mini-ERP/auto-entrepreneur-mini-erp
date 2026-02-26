import z from "zod";
export declare const modifyAutoEntrepreneurSchema: {
    body: {
        firstName: z.ZodOptional<z.ZodString>;
        lastName: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodNumber>;
        adress: z.ZodOptional<z.ZodString>;
        businessName: z.ZodOptional<z.ZodString>;
        activityType: z.ZodOptional<z.ZodString>;
        ice: z.ZodOptional<z.ZodString>;
        logo: z.ZodOptional<z.ZodString>;
    };
};
//# sourceMappingURL=auto-entrepreneur.schema.d.ts.map