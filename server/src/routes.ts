import { Router } from 'express';
import authRoutes from './modules/auth/auth.routes.js';
import autoEntrepreneurRoutes from './modules/auto-entrepreneur/auto-entrepreneur.routes.js';
import catalogRoutes from './modules/catalog/catalog.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/auto-entrepreneur', autoEntrepreneurRoutes);
router.use('/catalog', catalogRoutes);

export default router;