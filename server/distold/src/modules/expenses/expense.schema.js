// expenses/expense.schema.ts
import { z } from 'zod';
const expenseCategorySchema = z.enum([
    'FOURNITURES',
    'TRANSPORT',
    'COMMUNICATION',
    'ABONNEMENT',
    'FORMATION',
    'LOGICIEL',
    'EQUIPEMENT',
    'HÉBERGEMENT',
    'REPAS',
    'LOYER',
    'MATERIEL',
    'MAINTENANCE',
    'PUBLICITE',
    'ASSURANCE',
    'AUTRE'
]);
const expensePaymentMethodSchema = z.enum([
    'CASH',
    'CHECK',
    'BANK_TRANSFER',
    'CREDIT_CARD',
    'MOBILE_PAYMENT',
    'OTHER'
]);
export const createExpenseSchema = {
    body: z.object({
        category: expenseCategorySchema,
        description: z.string().max(500).optional(),
        amount: z
            .union([z.string(), z.number()])
            .transform((v) => (typeof v === 'string' ? parseFloat(v) : v))
            .pipe(z.number().positive('Le montant doit être supérieur à 0')),
        date: z.string().min(1, 'La date est requise'),
        supplier: z.string().max(200).optional(),
        paymentMethod: expensePaymentMethodSchema,
        isDeductible: z
            .union([z.boolean(), z.string()])
            .transform((v) => (typeof v === 'string' ? v === 'true' : v))
            .optional()
            .default(true),
    }),
};
export const updateExpenseSchema = {
    body: z.object({
        category: expenseCategorySchema.optional(),
        description: z.string().max(500).optional(),
        amount: z
            .union([z.string(), z.number()])
            .transform((v) => (typeof v === 'string' ? parseFloat(v) : v))
            .pipe(z.number().positive())
            .optional(),
        date: z.string().optional(),
        supplier: z.string().max(200).optional(),
        paymentMethod: expensePaymentMethodSchema.optional(),
        isDeductible: z
            .union([z.boolean(), z.string()])
            .transform((v) => (typeof v === 'string' ? v === 'true' : v))
            .optional(),
    }),
};
export const expenseFiltersSchema = {
    query: z.object({
        category: expenseCategorySchema.optional(),
        startDate: z.string().optional(),
        endDate: z.string().optional(),
        isDeductible: z
            .string()
            .transform((v) => v === 'true')
            .optional(),
        minAmount: z
            .string()
            .transform((v) => parseFloat(v))
            .pipe(z.number().positive())
            .optional(),
        maxAmount: z
            .string()
            .transform((v) => parseFloat(v))
            .pipe(z.number().positive())
            .optional(),
        page: z
            .string()
            .transform((v) => parseInt(v))
            .pipe(z.number().int().positive())
            .optional(),
        limit: z
            .string()
            .transform((v) => parseInt(v))
            .pipe(z.number().int().positive().max(100))
            .optional(),
    }),
};
export const expenseParamsSchema = {
    params: z.object({
        id: z.string().uuid('ID invalide'),
    }),
};
//# sourceMappingURL=expense.schema.js.map