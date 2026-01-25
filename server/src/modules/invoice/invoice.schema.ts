import z from "zod";

export const createInvoiceSchema = z.object({
    body:{
        invoice: z.object({
            customerId: z.uuid().nonempty(),
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
                productId: z.uuid().optional(),
                serviceId: z.uuid().optional(),
            })
        ).nonempty(),
    }
});

export const updateInvoiceSchema = z.object({
    body:{
        invoice: z.object({
            dueDate: z.date().nonoptional(),
            discount: z.number(),
            paidAmount: z.number(),
            note: z.string().optional(),
        }).nonoptional(),
        invoiceLine: z.array(
            z.object({
                order: z.number().nonoptional(),
                lineType: z.enum(['PRODUCT', 'SERVICE']).nonoptional(),
                description: z.string().min(1).optional(),
                quantity: z.number().nonnegative().nonoptional(),
                unitPrice: z.number().nonnegative().nonoptional(),
                productId: z.uuid().optional(),
                serviceId: z.uuid().optional(),
            })
        ).nonempty(),
    }
});