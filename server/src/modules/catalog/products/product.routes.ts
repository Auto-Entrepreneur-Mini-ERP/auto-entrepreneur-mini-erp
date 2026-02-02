import { Router } from 'express';
import { productController } from './product.controller';
import { authenticate } from '../../../middlewares/auth.middelware';
import { validate } from '../../../middlewares/validation.middleware';
import {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  deleteProductSchema,
  listProductsSchema,
} from './product.schema';

const router = Router();

// All routes require authentication
router.use(authenticate);

// Create a new product
router.post(
  '/',
  validate(createProductSchema),
  productController.createProduct.bind(productController)
);

// Get all products with pagination and filters
router.get(
  '/',
  validate(listProductsSchema),
  productController.listProducts.bind(productController)
);

// Get low stock products
router.get(
  '/low-stock',
  productController.getLowStockProducts.bind(productController)
);

// Get a specific product by ID
router.get(
  '/:id',
  validate(getProductSchema),
  productController.getProduct.bind(productController)
);

// Update a product
router.put(
  '/:id',
  validate(updateProductSchema),
  productController.updateProduct.bind(productController)
);

// Update product stock
router.patch(
  '/:id/stock',
  validate(getProductSchema),
  productController.updateStock.bind(productController)
);

// Delete a product
router.delete(
  '/:id',
  validate(deleteProductSchema),
  productController.deleteProduct.bind(productController)
);

export default router;
