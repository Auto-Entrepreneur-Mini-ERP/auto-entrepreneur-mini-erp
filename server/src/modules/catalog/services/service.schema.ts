import { z } from 'zod';

const unitMeasureSchema = z.enum(['piece', 'kilogram', 'liter', 'meter', 'hour', 'day']);

export const createServiceSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(100),
    description: z.string().max(500).optional(),
    hourlyRate: z.number().positive().optional(),
    fixedRate: z.number().positive().optional(),
    estimatedDuration: z.number().int().positive().optional(),
    unit: unitMeasureSchema,
    category: z.string().max(50).optional()
  }).refine(data => data.hourlyRate || data.fixedRate, {
    message: "At least one rate (hourly or fixed) is required",
    path: ['hourlyRate']
  })
});

export const updateServiceSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(100).optional(),
    description: z.string().max(500).optional(),
    hourlyRate: z.number().positive().optional(),
    fixedRate: z.number().positive().optional(),
    estimatedDuration: z.number().int().positive().optional(),
    unit: unitMeasureSchema.optional(),
    category: z.string().max(50).optional()
  }).refine(data => {
    // If updating rates, at least one should be present
    if (data.hourlyRate === null || data.fixedRate === null) {
      return data.hourlyRate !== null || data.fixedRate !== null;
    }
    return true;
  }, {
    message: "At least one rate (hourly or fixed) must be provided",
    path: ['hourlyRate']
  })
});

export const serviceFiltersSchema = z.object({
  query: z.object({
    category: z.string().optional(),
    name: z.string().optional(),
    rateType: z.enum(['hourly', 'fixed']).optional()
  })
});

export const serviceParamsSchema = z.object({
  params: z.object({
    id: z.string().uuid()
  })
});
