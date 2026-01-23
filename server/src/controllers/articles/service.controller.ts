import type { Request, Response } from 'express';
import { ServiceService } from '../../services/articles/service.service.js';
import { validate } from '../../middlewares/validation.middleware.js';
import asyncHandler from 'express-async-handler';
import { 
  createServiceSchema, 
  updateServiceSchema,
  serviceFiltersSchema 
} from '../../schemas/articles/service.schema.js';

declare global {
  namespace Express {
    interface Request {
      user: { id: string };
    }
  }
}

const serviceService = new ServiceService();

export const createService = [
  validate(createServiceSchema),
  asyncHandler(async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.user.id;
    const serviceData = req.body;

    const result = await serviceService.createService({
      ...serviceData,
      autoEntrepreneurId
    });

    res.status(201).json({
      success: true,
      data: result
    });
  })
];

export const getServices = [
  validate(serviceFiltersSchema),
  asyncHandler(async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.user.id;
    const filters: any = {};

    if (req.query.categorie) {
      filters.categorie = req.query.categorie as string;
    }
    if (req.query.nom) {
      filters.nom = req.query.nom as string;
    }

    const services = await serviceService.getServices(autoEntrepreneurId, filters);
    
    res.json({
      success: true,
      count: services.length,
      data: services
    });
  })
];

export const getService = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const autoEntrepreneurId = req.user.id;

  if (!id) {
    res.status(400).json({
      success: false,
      error: 'ID du service requis'
    });
    return;
  }

  const service = await serviceService.getServiceById(id as string, autoEntrepreneurId);

  if (!service) {
    res.status(404).json({
      success: false,
      error: 'Service non trouvé'
    });
    return;
  }

  res.json({
    success: true,
    data: service
  });
});

export const updateService = [
  validate(updateServiceSchema),
  asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const autoEntrepreneurId = req.user.id;
    const updateData = req.body;

    if (!id) {
      res.status(400).json({
        success: false,
        error: 'ID du service requis'
      });
      return;
    }

    const service = await serviceService.updateService(id as string, autoEntrepreneurId, updateData);

    if (!service) {
      res.status(404).json({
        success: false,
        error: 'Service non trouvé'
      });
      return;
    }

    res.json({
      success: true,
      data: service
    });
  })
];

export const deleteService = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const autoEntrepreneurId = req.user.id;

  if (!id) {
    res.status(400).json({
      success: false,
      error: 'ID du service requis'
    });
    return;
  }

  await serviceService.deleteService(id as string, autoEntrepreneurId);

  res.json({
    success: true,
    message: 'Service désactivé avec succès'
  });
});

export const serviceController = {
  createService,
  getServices,
  getService,
  updateService,
  deleteService
};