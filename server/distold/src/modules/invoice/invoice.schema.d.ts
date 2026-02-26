import z from "zod";
export declare const createInvoiceSchema: {
    body: z.ZodObject<{
        invoice: z.ZodNonOptional<z.ZodObject<{
            customerId: z.ZodString;
            dueDate: z.ZodNonOptional<z.ZodDate>;
            discount: z.ZodOptional<z.ZodNumber>;
            paidAmount: z.ZodOptional<z.ZodNumber>;
            payementMethod: z.ZodOptional<z.ZodEnum<{
                CASH: "CASH";
                CHECK: "CHECK";
                CREDIT_CARD: "CREDIT_CARD";
                OTHER: "OTHER";
                BACK_TRANSFER: "BACK_TRANSFER";
                MOBILE_PAYEMENT: "MOBILE_PAYEMENT";
            }>>;
            note: z.ZodOptional<z.ZodString>;
        }, z.z.core.$strip>>;
        invoiceLine: z.ZodArray<z.ZodObject<{
            order: z.ZodNonOptional<z.ZodNumber>;
            lineType: z.ZodNonOptional<z.ZodEnum<{
                SERVICE: "SERVICE";
                PRODUCT: "PRODUCT";
            }>>;
            description: z.ZodOptional<z.ZodString>;
            quantity: z.ZodNonOptional<z.ZodNumber>;
            unitPrice: z.ZodNonOptional<z.ZodNumber>;
            productId: z.ZodOptional<z.ZodString>;
            serviceId: z.ZodOptional<z.ZodString>;
        }, z.z.core.$strip>>;
    }, z.z.core.$strip>;
};
export declare const updateInvoiceSchema: {
    body: z.ZodObject<{
        invoice: z.ZodOptional<z.ZodObject<{
            dueDate: z.ZodOptional<z.z.ZodCoercedDate<unknown>>;
            notes: z.ZodOptional<z.ZodString>;
        }, z.z.core.$strip>>;
        invoiceLine: z.ZodOptional<z.ZodArray<z.ZodObject<{
            order: z.ZodNonOptional<z.ZodNumber>;
            lineType: z.ZodNonOptional<z.ZodEnum<{
                SERVICE: "SERVICE";
                PRODUCT: "PRODUCT";
            }>>;
            description: z.ZodOptional<z.ZodString>;
            quantity: z.ZodNonOptional<z.ZodNumber>;
            unitPrice: z.ZodNonOptional<z.ZodNumber>;
            productId: z.ZodOptional<z.ZodString>;
            serviceId: z.ZodOptional<z.ZodString>;
        }, z.z.core.$strip>>>;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=invoice.schema.d.ts.map