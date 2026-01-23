import { z } from 'zod';

const uniteMesureSchema = z.enum(['UNITE', 'KILOGRAMME', 'LITRE', 'METRE', 'HEURE', 'JOUR']);

export const createProduitSchema = z.object({
  body: z.object({
    nom: z.string().min(1).max(100),
    description: z.string().max(500).optional(),
    prixUnitaire: z.number().positive(),
    reference: z.string().max(50).optional(),
    quantiteStock: z.number().int().min(0),
    seuilAlerte: z.number().int().min(0),
    unite: uniteMesureSchema,
    categorie: z.string().min(1).max(50)
  })
});

export const updateProduitSchema = z.object({
  body: z.object({
    nom: z.string().min(1).max(100).optional(),
    description: z.string().max(500).optional(),
    prixUnitaire: z.number().positive().optional(),
    reference: z.string().max(50).optional(),
    quantiteStock: z.number().int().min(0).optional(),
    seuilAlerte: z.number().int().min(0).optional(),
    unite: uniteMesureSchema.optional(),
    categorie: z.string().min(1).max(50).optional()
  })
});

export const updateStockSchema = z.object({
  body: z.object({
    quantite: z.number().int()
  })
});

export const produitFiltersSchema = z.object({
  query: z.object({
    categorie: z.string().optional(),
    nom: z.string().optional(),
    minPrix: z.number().positive().optional(),
    maxPrix: z.number().positive().optional(),
    stockFaible: z.enum(['true', 'false']).optional()
  })
});