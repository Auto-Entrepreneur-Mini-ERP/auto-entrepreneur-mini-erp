import { Router } from "express";

import authRoutes from './modules/auth/auth.routes.js'
import autoEntrepreneurRoutes from './modules/auto-entrepreneur/auto-entrepreneur.routes.js'
import invoiceRoutes from './modules/invoice/invoice.routes.js'
import encaissementRoutes from './modules/encaissement/encaissement.routes.js'

const router = Router();

router.use(authRoutes);

router.use(autoEntrepreneurRoutes);

router.use(invoiceRoutes);

router.use(encaissementRoutes);

export default router;