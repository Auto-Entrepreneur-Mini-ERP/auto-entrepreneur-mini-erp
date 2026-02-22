import z from "zod";

export const paymentCreateSchemaInput = {
    body: z.object({
        // reference: z.string().nonempty(),
        amount: z.number().nonnegative().nonoptional(),
        paymentDate: z.coerce.date().nonoptional(),
        paymentMethod: z.enum(['CASH', 'CHECK', 'BANK_TRANSFER', 'CREDIT_CARD', 'MOBILE_PAYMENT', 'OTHER']).nonoptional(),
        notes: z.string().min(1).optional(),
        transactionNumber: z.string().optional(),
        invoiceId: z.uuid().nonempty(),
    }),
};

export const paymentUpdateSchemaInput = {
    body: z.object({
        amount: z.number().nonnegative().nonoptional(),
        paymentDate: z.date().nonoptional(),
        payementMethod: z.enum(['CASH', 'CHECK', 'BANK_TRANSFER', 'CREDIT_CARD', 'MOBILE_PAYMENT', 'OTHER']).nonoptional(),
        notes: z.string().min(5).optional(),
        transactionNumber: z.string().optional(),
    }),
};

export const paymentStatsSchemaQuery = {
    body: z.object({
        periodFrom: z.iso.date().optional(),
        periodTo: z.iso.date().optional(),
        payementMethod: z.enum(['CASH', 'CHECK', 'BANK_TRANSFER', 'CREDIT_CARD', 'MOBILE_PAYMENT', 'OTHER']).optional(),
        isReconcieled: z.boolean().optional(),
    }),
};