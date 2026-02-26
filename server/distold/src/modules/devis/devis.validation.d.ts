import { z } from 'zod';
export declare const quoteLineSchema: z.ZodObject<{
    order: z.ZodNonOptional<z.ZodNumber>;
    lineType: z.ZodNonOptional<z.ZodEnum<{
        readonly PRODUCT: "PRODUCT";
        readonly SERVICE: "SERVICE";
    }>>;
    description: z.ZodOptional<z.ZodString>;
    quantity: z.ZodNumber;
    unitPrice: z.ZodNumber;
    productId: z.ZodOptional<z.ZodString>;
    serviceId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const createQuoteSchema: {
    body: z.ZodObject<{
        validityDate: z.ZodNonOptional<z.ZodCoercedDate<unknown>>;
        customerId: z.ZodString;
        notes: z.ZodOptional<z.ZodString>;
        lines: z.ZodArray<z.ZodObject<{
            order: z.ZodNonOptional<z.ZodNumber>;
            lineType: z.ZodNonOptional<z.ZodEnum<{
                readonly PRODUCT: "PRODUCT";
                readonly SERVICE: "SERVICE";
            }>>;
            description: z.ZodOptional<z.ZodString>;
            quantity: z.ZodNumber;
            unitPrice: z.ZodNumber;
            productId: z.ZodOptional<z.ZodString>;
            serviceId: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
};
export declare const updateQuoteSchema: {
    body: z.ZodObject<{
        validityDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
        notes: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
};
//# sourceMappingURL=devis.validation.d.ts.map