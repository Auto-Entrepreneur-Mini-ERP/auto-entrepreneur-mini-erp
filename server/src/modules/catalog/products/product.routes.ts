import { Router } from 'express';
import ProductController from './product.controller.js';
import { requireAuth } from '../../../middlewares/auth.middleware.js';

const router = Router();

router.use(requireAuth);

router.post('/', ProductController.createProduct);

router.get('/', ProductController.getProducts);

router.get('/low-stock', ProductController.getLowStockProducts);

router.patch('/:id/stock', ProductController.updateStock);

router.get('/:id', ProductController.getProduct);
router.patch('/:id', ProductController.updateProduct); // [BE-ARTICLE-006]
router.delete('/:id', ProductController.deleteProduct); // [BE-ARTICLE-008]

export default router;