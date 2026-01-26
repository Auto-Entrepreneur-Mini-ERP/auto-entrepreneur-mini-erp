import { Router } from "express";

import authRoutes from './modules/auth/auth.routes.js'
import autoEntrepreneurRoutes from './modules/auto-entrepreneur/auto-entrepreneur.routes.js'
import encaissementRoutes from './modules/encaissement/encaissement.routes.js'
import factureRoutes from './modules/facture/facture.routes.js'
import customerRoutes from "./modules/customer/customer.routes.js";
import { isAthenticated } from "./middlewares/auth.middelware.js";

const router = Router();

router.use(authRoutes);
router.use(autoEntrepreneurRoutes);

router.use(encaissementRoutes);
router.use( customerRoutes);
router.use(factureRoutes);

export default router;