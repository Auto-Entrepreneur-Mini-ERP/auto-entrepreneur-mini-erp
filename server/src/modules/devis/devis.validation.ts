

import { z } from 'zod';
import { LineType } from '../../../generated/prisma/enums.js';

export const quoteLineSchema = z.object({
  lineType: z.nativeEnum(LineType),
  description: z.string().min(1),
  quantity: z.number().positive(),
  unitPrice: z.number().nonnegative(),
  productId: z.string().uuid().optional(),
  serviceId: z.string().uuid().optional(),
});

export const createQuoteSchema = z.object({
  issueDate: z.string().datetime(),
  validityDate: z.string().datetime(),
  customerId: z.string().uuid(),
  notes: z.string().optional(),
  lines: z.array(quoteLineSchema).min(1),
});

export const updateQuoteSchema = z.object({
  validityDate: z.string().datetime().optional(),
  notes: z.string().optional(),
});
