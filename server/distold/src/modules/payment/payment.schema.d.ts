import z from "zod";
export declare const paymentCreateSchemaInput: {
    body: z.ZodObject<{
        amount: z.ZodNonOptional<z.ZodNumber>;
        paymentDate: z.ZodNonOptional<z.z.ZodCoercedDate<unknown>>;
        paymentMethod: z.ZodNonOptional<z.ZodEnum<{
            CASH: "CASH";
            CHECK: "CHECK";
            BANK_TRANSFER: "BANK_TRANSFER";
            CREDIT_CARD: "CREDIT_CARD";
            MOBILE_PAYMENT: "MOBILE_PAYMENT";
            OTHER: "OTHER";
        }>>;
        notes: z.ZodOptional<z.ZodString>;
        transactionNumber: z.ZodOptional<z.ZodString>;
        invoiceId: z.ZodUUID;
    }, z.z.core.$strip>;
};
export declare const paymentUpdateSchemaInput: {
    body: z.ZodObject<{
        amount: z.ZodNonOptional<z.ZodNumber>;
        paymentDate: z.ZodNonOptional<z.ZodDate>;
        payementMethod: z.ZodNonOptional<z.ZodEnum<{
            CASH: "CASH";
            CHECK: "CHECK";
            BANK_TRANSFER: "BANK_TRANSFER";
            CREDIT_CARD: "CREDIT_CARD";
            MOBILE_PAYMENT: "MOBILE_PAYMENT";
            OTHER: "OTHER";
        }>>;
        notes: z.ZodOptional<z.ZodString>;
        transactionNumber: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>;
};
export declare const paymentStatsSchemaQuery: {
    body: z.ZodObject<{
        periodFrom: z.ZodOptional<z.z.ZodISODate>;
        periodTo: z.ZodOptional<z.z.ZodISODate>;
        payementMethod: z.ZodOptional<z.ZodEnum<{
            CASH: "CASH";
            CHECK: "CHECK";
            BANK_TRANSFER: "BANK_TRANSFER";
            CREDIT_CARD: "CREDIT_CARD";
            MOBILE_PAYMENT: "MOBILE_PAYMENT";
            OTHER: "OTHER";
        }>>;
        isReconcieled: z.ZodOptional<z.ZodBoolean>;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=payment.schema.d.ts.map