import type { Request, Response } from 'express';
import { ProduitService } from '../../services/articles/produit.service.js';
import { validate } from '../../middlewares/validation.middleware.js';
import asyncHandler from 'express-async-handler';
import { 
  createProduitSchema, 
  updateProduitSchema, 
  updateStockSchema,
  produitFiltersSchema 
} from '../../schemas/articles/produit.schema.js';


declare global {
  namespace Express {
    interface Request {
      user: { id: string };
    }
  }
}

const produitService = new ProduitService();

// create product
export const createProduit = [
  validate(createProduitSchema),
  asyncHandler(async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.user.id;
    const produitData = req.body;

    const result = await produitService.createProduit({
      ...produitData,
      autoEntrepreneurId
    });

    res.status(201).json({
      success: true,
      data: result
    });
  })
];

// get all products
export const getProduits = [
  validate(produitFiltersSchema),
  asyncHandler(async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.user.id;
    const filters: any = {};

    if (req.query.categorie) {
      filters.categorie = req.query.categorie as string;
    }
    if (req.query.nom) {
      filters.nom = req.query.nom as string;
    }

    const produits = await produitService.getProduits(autoEntrepreneurId, filters);

    res.json({
      success: true,
      count: produits.length,
      data: produits
    });
  })
];

// get single product
export const getProduit = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const autoEntrepreneurId = req.user.id;

  if (!id) {
    res.status(400).json({
      success: false,
      error: 'ID du produit requis'
    });
    return;
  }

  const produit = await produitService.getProduitById(id as string, autoEntrepreneurId);

  if (!produit) {
    res.status(404).json({
      success: false,
      error: 'Produit non trouvé'
    });
    return;
  }

  res.json({
    success: true,
    data: produit
  });
});

// update product
export const updateProduit = [
  validate(updateProduitSchema),
  asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const autoEntrepreneurId = req.user.id;
    const updateData = req.body;

    if (!id) {
      res.status(400).json({
        success: false,
        error: 'ID du produit requis'
      });
      return;
    }

    const produit = await produitService.updateProduit(id as string, autoEntrepreneurId, updateData);

    if (!produit) {
      res.status(404).json({
        success: false,
        error: 'Produit non trouvé'
      });
      return;
    }

    res.json({
      success: true,
      data: produit
    });
  })
];

// update stock
export const updateProduitStock = [
  validate(updateStockSchema),
  asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const autoEntrepreneurId = req.user.id;
    const { quantite } = req.body;

    if (!id) {
      res.status(400).json({
        success: false,
        error: 'ID du produit requis'
      });
      return;
    }

    const produit = await produitService.updateStock(id as string, autoEntrepreneurId, quantite);

    if (!produit) {
      res.status(404).json({
        success: false,
        error: 'Produit non trouvé'
      });
      return;
    }

    res.json({
      success: true,
      data: produit
    });
  })
];

// products low in stock(alerte)
export const getProduitsAlerte = asyncHandler(async (req: Request, res: Response) => {
  const autoEntrepreneurId = req.user.id;

  const produits = await produitService.getProduitsAlerte(autoEntrepreneurId);

  res.json({
    success: true,
    count: produits.length,
    data: produits
  });
});

// delet product (soft delete)
export const deleteProduit = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const autoEntrepreneurId = req.user.id;

  if (!id) {
    res.status(400).json({
      success: false,
      error: 'ID du produit requis'
    });
    return;
  }

  await produitService.deleteProduit(id as string, autoEntrepreneurId);

  res.json({
    success: true,
    message: 'Produit désactivé avec succès'
  });
});

export const produitController = {
  createProduit,
  getProduits,
  getProduit,
  updateProduit,
  updateProduitStock,
  getProduitsAlerte,
  deleteProduit
};

