import { Router } from 'express';
import { DevisController } from './devis.controller.js';
import { validate } from '../../middlewares/validation.middleware.js';
import {
  createQuoteSchema,
  updateQuoteSchema,
} from './devis.validation.js';
import  {isAthenticated}  from '../../middlewares/auth.middelware.js'; // middleware au singulier

const router = Router();
const controller = new DevisController();

router.use(isAthenticated);

router.post('/', validate(createQuoteSchema), controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.patch('/:id', validate(updateQuoteSchema), controller.update);
router.delete('/:id', controller.delete);

router.post('/:id/envoyer', controller.envoyer);
router.post('/:id/accepter', controller.accepter);
router.post('/:id/refuser', controller.refuser);

export default router;
