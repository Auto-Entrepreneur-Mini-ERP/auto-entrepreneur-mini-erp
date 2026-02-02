import { Response, NextFunction } from 'express';
import { serviceService } from './service.service';
import { ServiceRequest } from './service.types';
import { AppError } from '../../../utils/errorHandler';

export class ServiceController {
  async createService(req: ServiceRequest, res: Response, next: NextFunction) {
    try {
      const autoEntrepreneurId = req.user?.autoEntrepreneurId;

      if (!autoEntrepreneurId) {
        throw new AppError('Auto-entrepreneur ID not found', 401);
      }

      const service = await serviceService.createService(autoEntrepreneurId, req.body);

      res.status(201).json({
        success: true,
        message: 'Service created successfully',
        data: service,
      });
    } catch (error) {
      next(error);
    }
  }

  async getService(req: ServiceRequest, res: Response, next: NextFunction) {
    try {
      const autoEntrepreneurId = req.user?.autoEntrepreneurId;
      const { id } = req.params;

      if (!autoEntrepreneurId) {
        throw new AppError('Auto-entrepreneur ID not found', 401);
      }

      if (!id) {
        throw new AppError('Service ID is required', 400);
      }

      const service = await serviceService.getServiceById(autoEntrepreneurId, id);

      res.status(200).json({
        success: true,
        data: service,
      });
    } catch (error) {
      next(error);
    }
  }

  async listServices(req: ServiceRequest, res: Response, next: NextFunction) {
    try {
      const autoEntrepreneurId = req.user?.autoEntrepreneurId;

      if (!autoEntrepreneurId) {
        throw new AppError('Auto-entrepreneur ID not found', 401);
      }

      const page = parseInt(req.query.page || '1');
      const limit = parseInt(req.query.limit || '10');
      const search = req.query.search;
      const category = req.query.category;
      const isActive = req.query.isActive === 'true' ? true : req.query.isActive === 'false' ? false : undefined;

      const result = await serviceService.listServices(
        autoEntrepreneurId,
        page,
        limit,
        search,
        category,
        isActive
      );

      res.status(200).json({
        success: true,
        data: result.services,
        pagination: result.pagination,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateService(req: ServiceRequest, res: Response, next: NextFunction) {
    try {
      const autoEntrepreneurId = req.user?.autoEntrepreneurId;
      const { id } = req.params;

      if (!autoEntrepreneurId) {
        throw new AppError('Auto-entrepreneur ID not found', 401);
      }

      if (!id) {
        throw new AppError('Service ID is required', 400);
      }

      const service = await serviceService.updateService(autoEntrepreneurId, id, req.body);

      res.status(200).json({
        success: true,
        message: 'Service updated successfully',
        data: service,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteService(req: ServiceRequest, res: Response, next: NextFunction) {
    try {
      const autoEntrepreneurId = req.user?.autoEntrepreneurId;
      const { id } = req.params;

      if (!autoEntrepreneurId) {
        throw new AppError('Auto-entrepreneur ID not found', 401);
      }

      if (!id) {
        throw new AppError('Service ID is required', 400);
      }

      await serviceService.deleteService(autoEntrepreneurId, id);

      res.status(200).json({
        success: true,
        message: 'Service deleted successfully',
      });
    } catch (error) {
      next(error);
    }
  }

  async getServicesByCategory(req: ServiceRequest, res: Response, next: NextFunction) {
    try {
      const autoEntrepreneurId = req.user?.autoEntrepreneurId;
      const { category } = req.query;

      if (!autoEntrepreneurId) {
        throw new AppError('Auto-entrepreneur ID not found', 401);
      }

      if (!category) {
        throw new AppError('Category is required', 400);
      }

      const services = await serviceService.getServicesByCategory(autoEntrepreneurId, category);

      res.status(200).json({
        success: true,
        data: services,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const serviceController = new ServiceController();
