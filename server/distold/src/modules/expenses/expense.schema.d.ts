import { z } from 'zod';
export declare const createExpenseSchema: {
    body: z.ZodObject<{
        category: z.ZodEnum<{
            FOURNITURES: "FOURNITURES";
            TRANSPORT: "TRANSPORT";
            COMMUNICATION: "COMMUNICATION";
            FORMATION: "FORMATION";
            LOGICIEL: "LOGICIEL";
            REPAS: "REPAS";
            LOYER: "LOYER";
            MATERIEL: "MATERIEL";
            PUBLICITE: "PUBLICITE";
            ASSURANCE: "ASSURANCE";
            AUTRE: "AUTRE";
            ABONNEMENT: "ABONNEMENT";
            EQUIPEMENT: "EQUIPEMENT";
            HÉBERGEMENT: "HÉBERGEMENT";
            MAINTENANCE: "MAINTENANCE";
        }>;
        description: z.ZodOptional<z.ZodString>;
        amount: z.ZodPipe<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodTransform<number, string | number>>, z.ZodNumber>;
        date: z.ZodString;
        supplier: z.ZodOptional<z.ZodString>;
        paymentMethod: z.ZodEnum<{
            CASH: "CASH";
            CHECK: "CHECK";
            BANK_TRANSFER: "BANK_TRANSFER";
            CREDIT_CARD: "CREDIT_CARD";
            MOBILE_PAYMENT: "MOBILE_PAYMENT";
            OTHER: "OTHER";
        }>;
        isDeductible: z.ZodDefault<z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>, z.ZodTransform<boolean, string | boolean>>>>;
    }, z.core.$strip>;
};
export declare const updateExpenseSchema: {
    body: z.ZodObject<{
        category: z.ZodOptional<z.ZodEnum<{
            FOURNITURES: "FOURNITURES";
            TRANSPORT: "TRANSPORT";
            COMMUNICATION: "COMMUNICATION";
            FORMATION: "FORMATION";
            LOGICIEL: "LOGICIEL";
            REPAS: "REPAS";
            LOYER: "LOYER";
            MATERIEL: "MATERIEL";
            PUBLICITE: "PUBLICITE";
            ASSURANCE: "ASSURANCE";
            AUTRE: "AUTRE";
            ABONNEMENT: "ABONNEMENT";
            EQUIPEMENT: "EQUIPEMENT";
            HÉBERGEMENT: "HÉBERGEMENT";
            MAINTENANCE: "MAINTENANCE";
        }>>;
        description: z.ZodOptional<z.ZodString>;
        amount: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodTransform<number, string | number>>, z.ZodNumber>>;
        date: z.ZodOptional<z.ZodString>;
        supplier: z.ZodOptional<z.ZodString>;
        paymentMethod: z.ZodOptional<z.ZodEnum<{
            CASH: "CASH";
            CHECK: "CHECK";
            BANK_TRANSFER: "BANK_TRANSFER";
            CREDIT_CARD: "CREDIT_CARD";
            MOBILE_PAYMENT: "MOBILE_PAYMENT";
            OTHER: "OTHER";
        }>>;
        isDeductible: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>, z.ZodTransform<boolean, string | boolean>>>;
    }, z.core.$strip>;
};
export declare const expenseFiltersSchema: {
    query: z.ZodObject<{
        category: z.ZodOptional<z.ZodEnum<{
            FOURNITURES: "FOURNITURES";
            TRANSPORT: "TRANSPORT";
            COMMUNICATION: "COMMUNICATION";
            FORMATION: "FORMATION";
            LOGICIEL: "LOGICIEL";
            REPAS: "REPAS";
            LOYER: "LOYER";
            MATERIEL: "MATERIEL";
            PUBLICITE: "PUBLICITE";
            ASSURANCE: "ASSURANCE";
            AUTRE: "AUTRE";
            ABONNEMENT: "ABONNEMENT";
            EQUIPEMENT: "EQUIPEMENT";
            HÉBERGEMENT: "HÉBERGEMENT";
            MAINTENANCE: "MAINTENANCE";
        }>>;
        startDate: z.ZodOptional<z.ZodString>;
        endDate: z.ZodOptional<z.ZodString>;
        isDeductible: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<boolean, string>>>;
        minAmount: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        maxAmount: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        page: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        limit: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
    }, z.core.$strip>;
};
export declare const expenseParamsSchema: {
    params: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
};
//# sourceMappingURL=expense.schema.d.ts.map