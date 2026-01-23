import { z } from 'zod';

const uniteMesureSchema = z.enum(['UNITE', 'KILOGRAMME', 'LITRE', 'METRE', 'HEURE', 'JOUR']);

export const createServiceSchema = z.object({
  body: z.object({
    nom: z.string().min(1).max(100),
    description: z.string().max(500).optional(),
    tarifHoraire: z.number().positive().optional(),
    tarifFixe: z.number().positive().optional(),
    dureeEstimee: z.number().int().positive().optional(),
    unite: uniteMesureSchema,
    categorie: z.string().min(1).max(50)
  }).refine(data => data.tarifHoraire || data.tarifFixe, {
    message: "Au moins un tarif (horaire ou fixe) est requis"
  })
});

export const updateServiceSchema = z.object({
  body: z.object({
    nom: z.string().min(1).max(100).optional(),
    description: z.string().max(500).optional(),
    tarifHoraire: z.number().positive().optional(),
    tarifFixe: z.number().positive().optional(),
    dureeEstimee: z.number().int().positive().optional(),
    unite: uniteMesureSchema.optional(),
    categorie: z.string().min(1).max(50).optional()
  }).refine(data => !(data.tarifHoraire === undefined && data.tarifFixe === undefined) || 
    (data.tarifHoraire !== undefined || data.tarifFixe !== undefined), {
    message: "Au moins un tarif (horaire ou fixe) doit être fourni lors de la mise à jour si aucun tarif n'existe"
  }).optional()
});

export const serviceFiltersSchema = z.object({
  query: z.object({
    categorie: z.string().optional(),
    nom: z.string().optional(),
    typeTarif: z.enum(['horaire', 'fixe']).optional()
  })
});