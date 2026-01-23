import z from "zod";

export const createInvoiceSchema = z.object({
    body:{
        customerId: z.uuid().nonempty(),
        dueDate: z.date().nonoptional(),
        status: z.enum(['DRAFT', 'SENT', 'PARTIALLY_PAID', 'PAID', 'OVERDUE', 'CANCELLED']).nonoptional(),
        discount: z.number().optional(),
        paidAmount: z.number().optional(),
        note: z.string().optional(),
        invoiceLine: z.array(
            z.object({
                order: z.number().nonoptional(),
                lineType: z.enum(['PRODUCT', 'SERVICE']).nonoptional(),
                description: z.string().min(1).optional(),
                quantity: z.number().nonnegative().nonoptional(),
                unitPrice: z.number().nonnegative().nonoptional(),
                productId: z.uuid().nonempty(),
                serviceId: z.uuid().nonempty(),
            })
        ).nonempty(),
    }
});

export const updateInvoiceSchema = z.object({
    body:{
        dueDate: z.date().nonoptional(),
        status: z.enum(['DRAFT', 'SENT', 'PARTIALLY_PAID', 'PAID', 'OVERDUE', 'CANCELLED']),
        paidAmount: z.float64(),
        note: z.string().optional(),
        invoiceLine: z.array(
            z.object({
                order: z.number().nonoptional(),
                lineType: z.enum(['PRODUCT', 'SERVICE']).nonoptional(),
                description: z.string().min(1).optional(),
                quantity: z.number().nonnegative().nonoptional(),
                unitPrice: z.number().nonnegative().nonoptional(),
                productId: z.uuid().nonempty(),
                serviceId: z.uuid().nonempty(),
        })
        ).nonempty(),
    }
});