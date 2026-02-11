import type { Request, Response } from 'express';
import { ServiceService } from './service.service.js';
import { validateBody } from '../../../middlewares/validation.middleware.js';

declare global {
  namespace Express {
    interface Request {
      user?: { id: string };
    }
  }
}
import { 
  createServiceSchema, 
  updateServiceSchema,
  serviceFiltersSchema,
  serviceParamsSchema 
} from './service.schema.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const serviceService = new ServiceService();

export class ServiceController {
  
  static createService = [
    validateBody(createServiceSchema),
    asyncHandler(async (req: Request, res: Response) => {
      if (!req.user?.id) {
        res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
        return;
      }

      const result = await serviceService.createService({
        ...req.body,
        autoEntrepreneurId: req.user.id
      });

      res.status(201).json({
        success: true,
        data: result
      });
    })
  ];

  static getServices = [
    validateBody(serviceFiltersSchema),
    asyncHandler(async (req: Request, res: Response) => {
      if (!req.user?.id) {
        res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
        return;
      }

      const services = await serviceService.getServices(req.user.id, req.query);
      
      res.json({
        success: true,
        count: services.length,
        data: services
      });
    })
  ];

  // Get specific service
  static getService = [
    validateBody(serviceParamsSchema),
    asyncHandler(async (req: Request, res: Response) => {
      if (!req.user?.id) {
        res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
        return;
      }

      const { id } = req.params;
      const service = await serviceService.getServiceById(id as string, req.user.id);

      if (!service) {
        res.status(404).json({
          success: false,
          error: 'Service not found'
        });
        return;
      }

      res.json({
        success: true,
        data: service
      });
    })
  ];

  static updateService = [
    validateBody(serviceParamsSchema),
    validateBody(updateServiceSchema),
    asyncHandler(async (req: Request, res: Response) => {
      if (!req.user?.id) {
        res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
        return;
      }

      const { id } = req.params;
      const service = await serviceService.updateService(id as string, req.user.id, req.body);

      if (!service) {
        res.status(404).json({
          success: false,
          error: 'Service not found'
        });
        return;
      }

      res.json({
        success: true,
        data: service
      });
    })
  ];

  static deleteService = [
    validateBody(serviceParamsSchema),
    asyncHandler(async (req: Request, res: Response) => {
      if (!req.user?.id) {
        res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
        return;
      }

      const { id } = req.params;
      
      const isUsed = await serviceService.checkServiceUsage(id as string);
      if (isUsed) {
        res.status(400).json({
          success: false,
          error: 'Cannot delete this service as it is used in invoices or quotes'
        });
        return;
      }

      await serviceService.deleteService(id as string, req.user.id);

      res.json({
        success: true,
        message: 'Service deactivated successfully'
      });
    })
  ];
}

export default ServiceController;
