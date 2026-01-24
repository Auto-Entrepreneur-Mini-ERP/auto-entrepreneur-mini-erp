import { Router } from 'express';
import ServiceController from './service.controller.js';
import { requireAuth } from '../../../middlewares/auth.middleware.js';

const router = Router();

router.use(requireAuth);

router.post('/', ServiceController.createService);

router.get('/', ServiceController.getServices);

router.get('/:id', ServiceController.getService);
router.patch('/:id', ServiceController.updateService); 
router.delete('/:id', ServiceController.deleteService); 

export default router;
