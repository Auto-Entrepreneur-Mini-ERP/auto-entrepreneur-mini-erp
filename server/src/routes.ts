import { Router } from "express";

import authRoutes from './modules/auth/auth.routes.js'
import autoEntrepreneurRoutes from './modules/auto-entrepreneur/auto-entrepreneur.routes.js'
import customerRoutes from "./modules/customer/customer.routes.js";
import { isAthenticated } from "./middlewares/auth.middelware.js";
import invoiceRoutes from './modules/invoice/invoice.routes.js'
import paymentRoutes from './modules/payment/payment.routes.js'

const router = Router();

router.use(authRoutes);

router.use(autoEntrepreneurRoutes);

router.use(isAthenticated, customerRoutes);

router.use(invoiceRoutes);

router.use(paymentRoutes);

export default router;
