import { z } from 'zod';
export declare const createServiceSchema: {
    body: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        hourlyRate: z.ZodOptional<z.ZodNumber>;
        fixedRate: z.ZodOptional<z.ZodNumber>;
        estimatedDuration: z.ZodOptional<z.ZodNumber>;
        unit: z.ZodEnum<{
            day: "day";
            hour: "hour";
            piece: "piece";
            kilogram: "kilogram";
            liter: "liter";
            meter: "meter";
        }>;
        category: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
};
export declare const updateServiceSchema: {
    body: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        hourlyRate: z.ZodOptional<z.ZodNumber>;
        fixedRate: z.ZodOptional<z.ZodNumber>;
        estimatedDuration: z.ZodOptional<z.ZodNumber>;
        unit: z.ZodOptional<z.ZodEnum<{
            day: "day";
            hour: "hour";
            piece: "piece";
            kilogram: "kilogram";
            liter: "liter";
            meter: "meter";
        }>>;
        category: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
};
export declare const serviceFiltersSchema: {
    query: z.ZodObject<{
        category: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        rateType: z.ZodOptional<z.ZodEnum<{
            fixed: "fixed";
            hourly: "hourly";
        }>>;
    }, z.core.$strip>;
};
export declare const serviceParamsSchema: {
    params: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
};
//# sourceMappingURL=service.schema.d.ts.map