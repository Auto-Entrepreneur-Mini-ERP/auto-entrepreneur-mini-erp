import { z } from 'zod';
import { LineType } from '../../../generated/prisma/enums.js';
export const quoteLineSchema = z.object({
    order: z.number().nonnegative().nonoptional(),
    lineType: z.enum(LineType).nonoptional(),
    description: z.string().min(1).optional(),
    quantity: z.number().positive(),
    unitPrice: z.number().nonnegative(),
    productId: z.string().uuid().optional(),
    serviceId: z.string().uuid().optional(),
});
export const createQuoteSchema = {
    body: z.object({
        validityDate: z.coerce.date().nonoptional(),
        customerId: z.string().nonempty(),
        notes: z.string().optional(),
        lines: z.array(quoteLineSchema).min(1),
    })
};
export const updateQuoteSchema = {
    body: z.object({
        validityDate: z.coerce.date().optional(),
        notes: z.string().optional(),
    })
};
//# sourceMappingURL=devis.validation.js.map