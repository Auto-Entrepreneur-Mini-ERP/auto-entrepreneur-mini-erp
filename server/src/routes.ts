import { Router } from "express";

import authRoutes from './modules/auth/auth.routes.js'
import autoEntrepreneurRoutes from './modules/auto-entrepreneur/auto-entrepreneur.routes.js'
import encaissementRoutes from './modules/encaissement/encaissement.routes.js'
import factureRoutes from './modules/facture/facture.routes.js'

const router = Router();

router.use(authRoutes);
router.use(autoEntrepreneurRoutes);

router.use(encaissementRoutes);
router.use(factureRoutes);

export default router;