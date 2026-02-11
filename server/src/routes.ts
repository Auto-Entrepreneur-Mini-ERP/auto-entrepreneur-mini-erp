import { Router } from "express";
import { isAthenticated } from "./middlewares/auth.middelware.js";

import authRoutes from './modules/auth/auth.routes.js'
import autoEntrepreneurRoutes from './modules/auto-entrepreneur/auto-entrepreneur.routes.js';
import catalogRoutes from './modules/catalog/catalog.routes.js';
import customerRoutes from "./modules/customer/customer.routes.js";
import invoiceRoutes from './modules/invoice/invoice.routes.js'
import paymentRoutes from './modules/payment/payment.routes.js'
import analyticsRoutes from './modules/analytics/analytics.routes.js'

const router = Router();

router.use(authRoutes);

router.use(isAthenticated, autoEntrepreneurRoutes);

router.use(catalogRoutes);

router.use(isAthenticated, customerRoutes);

router.use(isAthenticated, invoiceRoutes);

router.use(isAthenticated, paymentRoutes);

router.use(isAthenticated, analyticsRoutes);


export default router;
