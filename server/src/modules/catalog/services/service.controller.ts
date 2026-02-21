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

      const result = await serviceService.createService({
        ...req.body,
        autoEntrepreneurId: req.AutoEntrepreneurID as string
      });

      res.status(201).json({
        success: true,
        data: result
      });
    })
  ];

  static getServices = [
    asyncHandler(async (req: Request, res: Response) => {      

      const services = await serviceService.getServices(req.AutoEntrepreneurID as string, req.query);

      res.json({
        success: true,
        count: services.length,
        data: services
      });
    })
  ];

  // Get specific service
  static getService = [
    asyncHandler(async (req: Request, res: Response) => {

      const { id } = req.params;
      const service = await serviceService.getServiceById(id as string, req.AutoEntrepreneurID as string);

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
    // validateBody(serviceParamsSchema),
    validateBody(updateServiceSchema),
    asyncHandler(async (req: Request, res: Response) => {

      const { id } = req.params;
      const service = await serviceService.updateService(id as string, req.AutoEntrepreneurID as string, req.body);

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

  // ── DELETE: no validateBody — params are in req.params, not req.body ──
  static deleteService = [
    asyncHandler(async (req: Request, res: Response) => {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ success: false, error: 'ID is required' });
      }

      // Check service exists and belongs to this user before deleting
      const existing = await serviceService.getServiceById(id as string, req.AutoEntrepreneurID as string);
      if (!existing) {
        return res.status(404).json({ success: false, error: 'Service not found' });
      }

      const isUsed = await serviceService.checkServiceUsage(id as string);
      if (isUsed) {
        return res.status(400).json({
          success: false,
          error: 'Cannot delete this service as it is used in invoices or quotes'
        });
      }

      await serviceService.deleteService(id as string, req.AutoEntrepreneurID as string);
      res.status(204).send();
    })
  ];
}


export default ServiceController;
