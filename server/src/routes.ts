// src/routes.ts
import { Router } from "express";
import { isAthenticated } from "./middlewares/auth.middelware.js";

import authRoutes from './modules/auth/auth.routes.js'
import contributionRouts from './modules/contribution/contribution.routes.js'

import notificationRoutes from './modules/notification/notification.routes.js'
import autoEntrepreneurRoutes from './modules/auto-entrepreneur/auto-entrepreneur.routes.js'
import catalogRoutes from './modules/catalog/catalog.routes.js';
import customerRoutes from "./modules/customer/customer.routes.js";
import invoiceRoutes from './modules/invoice/invoice.routes.js'
import paymentRoutes from './modules/payment/payment.routes.js'
import devisRoutes from './modules/devis/devis.routes.js'
import taxDeclartion from "./modules/taxDeclaration/taxDeclaration.routes.js";
import analyticsRoutes from './modules/analytics/analytics.routes.js'
import documentRoutes from './modules/document/document.routes.js'
import expenseRoutes from './modules/expenses/expense.routes.js'

const router = Router();

router.use(authRoutes);

router.use('/expenses', isAthenticated, expenseRoutes);

router.use(isAthenticated, autoEntrepreneurRoutes);
router.use(isAthenticated, catalogRoutes);
router.use(isAthenticated, contributionRouts);


router.use(isAthenticated, customerRoutes);

router.use(isAthenticated, devisRoutes);

router.use(isAthenticated, invoiceRoutes);

router.use(isAthenticated, paymentRoutes);
router.use(isAthenticated, taxDeclartion);

router.use(isAthenticated, analyticsRoutes);

router.use(isAthenticated, documentRoutes);

router.use(isAthenticated, notificationRoutes);


export default router;
