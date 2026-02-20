import { Router } from 'express';
import ServiceController from './service.controller.js';
import { isAthenticated } from "../../../middlewares/auth.middelware.js";
const router = Router();

router.use(isAthenticated);

router.post('/', ServiceController.createService);

router.get('/', ServiceController.getServices);

router.get('/:id', ServiceController.getService);
router.put('/:id', ServiceController.updateService); 
router.delete('/:id', ServiceController.deleteService); 

export default router;
