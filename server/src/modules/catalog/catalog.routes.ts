import { Router } from 'express';
import productRoutes from './products/product.routes.js';
import serviceRoutes from './services/service.routes.js';

const router = Router();

// Mount sub-routes
router.use('/products', productRoutes);
router.use('/services', serviceRoutes);

export default router;