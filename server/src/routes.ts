import { Router } from "express";

import authRoutes from './modules/auth/auth.routes.js'
import autoEntrepreneurRoutes from './modules/auto-entrepreneur/auto-entrepreneur.routes.js'
import customerRoutes from "./modules/customer/customer.routes.js";
import { isAthenticated } from "./middlewares/auth.middelware.js";
import invoiceRoutes from './modules/invoice/invoice.routes.js'
import paymentRoutes from './modules/payment/payment.routes.js'
import devisRoutes from './modules/devis/devis.routes.js'

const router = Router();

router.use(authRoutes);

router.use(isAthenticated, autoEntrepreneurRoutes);

router.use(isAthenticated, customerRoutes);

router.use(isAthenticated, devisRoutes);

router.use(isAthenticated, invoiceRoutes);

router.use(isAthenticated, paymentRoutes);

export default router;
