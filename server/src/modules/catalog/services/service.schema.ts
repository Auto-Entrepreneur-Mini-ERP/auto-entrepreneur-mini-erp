import { z } from 'zod';

export const createServiceSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Service name is required').max(255),
    description: z.string().max(1000).optional(),
    unit: z.string().min(1, 'Unit is required').max(50),
    category: z.string().max(100).optional(),
    hourlyRate: z.number().min(0, 'Hourly rate must be positive').optional(),
    fixedRate: z.number().min(0, 'Fixed rate must be positive').optional(),
    estimatedDuration: z.number().int().min(0, 'Estimated duration must be non-negative').optional(),
    isActive: z.boolean().optional().default(true),
  }).refine(
    (data) => data.hourlyRate !== undefined || data.fixedRate !== undefined,
    {
      message: 'Either hourly rate or fixed rate must be provided',
    }
  ),
});

export const updateServiceSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(255).optional(),
    description: z.string().max(1000).optional(),
    unit: z.string().min(1).max(50).optional(),
    category: z.string().max(100).optional(),
    hourlyRate: z.number().min(0, 'Hourly rate must be positive').optional(),
    fixedRate: z.number().min(0, 'Fixed rate must be positive').optional(),
    estimatedDuration: z.number().int().min(0, 'Estimated duration must be non-negative').optional(),
    isActive: z.boolean().optional(),
  }),
  params: z.object({
    id: z.string().uuid('Invalid service ID'),
  }),
});

export const getServiceSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid service ID'),
  }),
});

export const deleteServiceSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid service ID'),
  }),
});

export const listServicesSchema = z.object({
  query: z.object({
    page: z.string().regex(/^\d+$/).optional().default('1'),
    limit: z.string().regex(/^\d+$/).optional().default('10'),
    search: z.string().optional(),
    category: z.string().optional(),
    isActive: z.enum(['true', 'false']).optional(),
  }),
});

export type CreateServiceInput = z.infer<typeof createServiceSchema>;
export type UpdateServiceInput = z.infer<typeof updateServiceSchema>;
export type GetServiceInput = z.infer<typeof getServiceSchema>;
export type DeleteServiceInput = z.infer<typeof deleteServiceSchema>;
export type ListServicesInput = z.infer<typeof listServicesSchema>;
