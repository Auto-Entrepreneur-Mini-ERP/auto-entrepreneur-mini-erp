import { z } from 'zod';

export const createProductSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Product name is required').max(255),
    description: z.string().max(1000).optional(),
    unit: z.string().min(1, 'Unit is required').max(50),
    category: z.string().max(100).optional(),
    unitPrice: z.number().min(0, 'Unit price must be positive'),
    reference: z.string().max(100).optional(),
    stockQuantity: z.number().int().min(0, 'Stock quantity must be non-negative').optional().default(0),
    alertThreshold: z.number().int().min(0, 'Alert threshold must be non-negative').optional().default(10),
    isActive: z.boolean().optional().default(true),
  }),
});

export const updateProductSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(255).optional(),
    description: z.string().max(1000).optional(),
    unit: z.string().min(1).max(50).optional(),
    category: z.string().max(100).optional(),
    unitPrice: z.number().min(0, 'Unit price must be positive').optional(),
    reference: z.string().max(100).optional(),
    stockQuantity: z.number().int().min(0, 'Stock quantity must be non-negative').optional(),
    alertThreshold: z.number().int().min(0, 'Alert threshold must be non-negative').optional(),
    isActive: z.boolean().optional(),
  }),
  params: z.object({
    id: z.string().uuid('Invalid product ID'),
  }),
});

export const getProductSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid product ID'),
  }),
});

export const deleteProductSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid product ID'),
  }),
});

export const listProductsSchema = z.object({
  query: z.object({
    page: z.string().regex(/^\d+$/).optional().default('1'),
    limit: z.string().regex(/^\d+$/).optional().default('10'),
    search: z.string().optional(),
    category: z.string().optional(),
    isActive: z.enum(['true', 'false']).optional(),
  }),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
export type GetProductInput = z.infer<typeof getProductSchema>;
export type DeleteProductInput = z.infer<typeof deleteProductSchema>;
export type ListProductsInput = z.infer<typeof listProductsSchema>;
