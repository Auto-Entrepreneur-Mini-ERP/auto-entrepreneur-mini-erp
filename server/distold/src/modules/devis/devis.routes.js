import { Router } from 'express';
import { DevisController } from './devis.controller.js';
import { validateBody } from '../../middlewares/validation.middleware.js';
import { createQuoteSchema, updateQuoteSchema, } from './devis.validation.js';
import { isAthenticated } from '../../middlewares/auth.middelware.js'; // middleware au singulier
const router = Router();
const controller = new DevisController();
router.use(isAthenticated);
router.post('/quote', validateBody(createQuoteSchema), controller.create);
router.get('/quote', controller.getAll);
router.get('/quote/:id', controller.getById);
router.put('/quote/:id', validateBody(updateQuoteSchema), controller.update);
router.delete('/quote/:id', controller.delete);
router.post('/quote/:id/download', controller.downloadQuote);
router.get('/quote/:id/accepter', controller.accepter);
router.get('/quote/:id/refuser', controller.refuser);
export default router;
//# sourceMappingURL=devis.routes.js.map