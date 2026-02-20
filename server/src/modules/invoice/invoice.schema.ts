import z from "zod";

export const createInvoiceSchema = {
    body: z.object({
        invoice: z.object({
            customerId: z.string().nonempty(),
            dueDate: z.date().nonoptional(),
            discount: z.number().optional(),
            paidAmount: z.number().optional(),
            payementMethod: z.enum(['CASH', 'CHECK', 'BACK_TRANSFER', 'CREDIT_CARD', 'MOBILE_PAYEMENT', 'OTHER']),
            note: z.string().optional(),
        }).nonoptional(),
        invoiceLine: z.array(
            z.object({
                order: z.number().nonoptional(),
                lineType: z.enum(['PRODUCT', 'SERVICE']).nonoptional(),
                description: z.string().min(1).optional(),
                quantity: z.number().nonnegative().nonoptional(),
                unitPrice: z.number().nonnegative().nonoptional(),
                productId: z.string().optional(),
                serviceId: z.string().optional(),
            })
        ).nonempty(),
    })
};

export const updateInvoiceSchema = {
    body: z.object({
        invoice: z.object({
            dueDate: z.coerce.date().optional(),
            // discount: z.number().optional(),
            notes: z.string().optional(),
        }).optional(),
        invoiceLine: z.array(
            z.object({
                order: z.number().nonoptional(),
                lineType: z.enum(['PRODUCT', 'SERVICE']).nonoptional(),
                description: z.string().min(1).optional(),
                quantity: z.number().nonnegative().nonoptional(),
                unitPrice: z.number().nonnegative().nonoptional(),
                productId: z.string().optional(),
                serviceId: z.string().optional(),
            })
        ).optional(),
    })
};