
import { z } from "zod";


export const createProductSchema = {
  body: {
    name: z.string().min(1, "Le nom est requis").max(255),
    description: z.string().max(1000).optional(),
    unit: z.string().min(1, "L'unité est requise").max(50),
    category: z.string().max(100).optional(),
    unitPrice: z.number().positive("Le prix doit être positif"),
    reference: z.string().min(1, "La référence est requise").max(100),
    stockQuantity: z.number().int().nonnegative("Le stock doit être >= 0"),
    alertThreshold: z.number().int().nonnegative("Le seuil d'alerte doit être >= 0"),
  }
};


export const updateProductSchema = {
  body: {
    name: z.string().min(1).max(255).optional(),
    description: z.string().max(1000).optional(),
    unit: z.string().min(1).max(50).optional(),
    category: z.string().max(100).optional(),
    unitPrice: z.number().positive().optional(),
    reference: z.string().min(1).max(100).optional(),
    stockQuantity: z.number().int().nonnegative().optional(),
    alertThreshold: z.number().int().nonnegative().optional(),
  }
};


export const updateStockSchema = {
  body: {
    quantity: z.number().int("La quantité doit être un entier"),
  }
};

export const productFiltersSchema = {
  body: {
    category: z.string().optional(),
    name: z.string().optional(),
    minPrice: z.string().transform(val => parseFloat(val)).pipe(z.number().positive()).optional(),
    maxPrice: z.string().transform(val => parseFloat(val)).pipe(z.number().positive()).optional(),
    lowStock: z.string().transform(val => val === 'true').pipe(z.boolean()).optional(),
    page: z.string().transform(val => parseInt(val)).pipe(z.number().int().positive()).optional(),
    limit: z.string().transform(val => parseInt(val)).pipe(z.number().int().positive().max(100)).optional(),
  }
};


export const getProductByIdSchema = {
  params: {
    id: z.string().uuid("ID invalide"),
  }
};


export const deleteProductSchema = {
  params: {
    id: z.string().uuid("ID invalide"),
  }
};