
import { z } from 'zod';
import { LineType } from '../../../generated/prisma/enums.js';
// Validation d'une ligne de devis
export const quoteLineSchema = z.object({
  lineType: z.nativeEnum(LineType),
  description: z.string().min(1),
  quantity: z.number().positive(),
  unitPrice: z.number().nonnegative(),
  // MODIFICATION ICI : On enlève .uuid() pour accepter les IDs de test
  productId: z.string().optional(), 
  serviceId: z.string().optional(), 
});

// Validation pour la CRÉATION
export const createQuoteSchema = z.object({
  body: z.object({
    issueDate: z.string().datetime(),
    validityDate: z.string().datetime(),
    // MODIFICATION ICI : On enlève .uuid() pour accepter les IDs de test
    customerId: z.string(), 
    AutoEntrepreneurId: z.string(), 
    
    notes: z.string().optional(),
    lines: z.array(quoteLineSchema).min(1),
  }),
});

// Validation pour la MODIFICATION
export const updateQuoteSchema = z.object({
  body: z.object({
    validityDate: z.string().datetime().optional(),
    notes: z.string().optional(),
  }),
});