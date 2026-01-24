import type { Request, Response } from 'express';
import { ServiceService } from './service.service.js';
import { validate } from '../../../middlewares/validation.middleware.js';
import asyncHandler from 'express-async-handler';
import { 
  createServiceSchema, 
  updateServiceSchema,
  serviceFiltersSchema,
  serviceParamsSchema 
} from './service.schema.js';

const serviceService = new ServiceService();

export class ServiceController {
  
  // Create a service
  static createService = [
    validate(createServiceSchema),
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

  // List services
  static getServices = [
    validate(serviceFiltersSchema),
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
    validate(serviceParamsSchema),
    asyncHandler(async (req: Request<{id: string}>, res: Response) => {
      if (!req.user?.id) {
        res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
        return;
      }

      const { id } = req.params;
      const service = await serviceService.getServiceById(id, req.user.id);

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

  // Update service
  static updateService = [
    validate(serviceParamsSchema),
    validate(updateServiceSchema),
    asyncHandler(async (req: Request<{id: string}>, res: Response) => {
      if (!req.user?.id) {
        res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
        return;
      }

      const { id } = req.params;
      const service = await serviceService.updateService(id, req.user.id, req.body);

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

  // Delete service
  static deleteService = [
    validate(serviceParamsSchema),
    asyncHandler(async (req: Request<{id: string}>, res: Response) => {
      if (!req.user?.id) {
        res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
        return;
      }

      const { id } = req.params;
      
      // Check if service is used
      const isUsed = await serviceService.checkServiceUsage(id);
      if (isUsed) {
        res.status(400).json({
          success: false,
          error: 'Cannot delete this service as it is used in invoices or quotes'
        });
        return;
      }

      await serviceService.deleteService(id, req.user.id);

      res.json({
        success: true,
        message: 'Service deactivated successfully'
      });
    })
  ];
}

export default ServiceController;
