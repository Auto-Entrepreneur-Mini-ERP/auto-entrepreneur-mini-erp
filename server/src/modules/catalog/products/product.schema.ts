import { z } from 'zod';

const unitMeasureSchema = z.enum(['piece', 'kilogram', 'liter', 'meter', 'hour', 'day']);

export const createProductSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(100),
    description: z.string().max(500).optional(),
    unitPrice: z.number().positive(),
    reference: z.string().max(50).optional(),
    stockQuantity: z.number().int().min(0),
    alertThreshold: z.number().int().min(0),
    unit: unitMeasureSchema,
    category: z.string().max(50).optional()
  })
});

export const updateProductSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(100).optional(),
    description: z.string().max(500).optional(),
    unitPrice: z.number().positive().optional(),
    reference: z.string().max(50).optional(),
    stockQuantity: z.number().int().min(0).optional(),
    alertThreshold: z.number().int().min(0).optional(),
    unit: unitMeasureSchema.optional(),
    category: z.string().max(50).optional()
  })
});

export const updateStockSchema = z.object({
  body: z.object({
    quantity: z.number().int()
  })
});

export const productFiltersSchema = z.object({
  query: z.object({
    category: z.string().optional(),
    name: z.string().optional(),
    minPrice: z.string().transform(Number).optional(),
    maxPrice: z.string().transform(Number).optional(),
    lowStock: z.enum(['true', 'false']).transform(val => val === 'true').optional()
  })
});

export const productParamsSchema = z.object({
  params: z.object({
    id: z.string().uuid()
  })
});
