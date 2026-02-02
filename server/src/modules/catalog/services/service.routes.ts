import { Router } from 'express';
import { serviceController } from './service.controller';
import { authenticate } from '../../../middlewares/auth.middelware';
import { validate } from '../../../middlewares/validation.middleware';
import {
  createServiceSchema,
  updateServiceSchema,
  getServiceSchema,
  deleteServiceSchema,
  listServicesSchema,
} from './service.schema';

const router = Router();

// All routes require authentication
router.use(authenticate);

// Create a new service
router.post(
  '/',
  validate(createServiceSchema),
  serviceController.createService.bind(serviceController)
);

// Get all services with pagination and filters
router.get(
  '/',
  validate(listServicesSchema),
  serviceController.listServices.bind(serviceController)
);

// Get services by category
router.get(
  '/category',
  serviceController.getServicesByCategory.bind(serviceController)
);

// Get a specific service by ID
router.get(
  '/:id',
  validate(getServiceSchema),
  serviceController.getService.bind(serviceController)
);

// Update a service
router.put(
  '/:id',
  validate(updateServiceSchema),
  serviceController.updateService.bind(serviceController)
);

// Delete a service
router.delete(
  '/:id',
  validate(deleteServiceSchema),
  serviceController.deleteService.bind(serviceController)
);

export default router;
