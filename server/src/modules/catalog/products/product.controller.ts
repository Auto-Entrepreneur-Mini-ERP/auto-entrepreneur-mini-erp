import type { Request, Response } from 'express';
import { ProductService } from './product.service.js';
import { validate } from '../../../middlewares/validation.middleware.js';
import asyncHandler from 'express-async-handler';
import { 
  createProductSchema, 
  updateProductSchema, 
  updateStockSchema,
  productFiltersSchema,
  productParamsSchema  
} from './product.schema.js';


const productService = new ProductService();
// create product
export class ProductController {
    static createProduct = [
    validate(createProductSchema),
    asyncHandler(async (req: Request, res: Response) => {
      if (!req.user?.id) {
        res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
        return;
      }

      const result = await productService.createProduct({
        ...req.body,
        autoEntrepreneurId: req.user.id
      });

      res.status(201).json({
        success: true,
        data: result
      });
    })
  ];

// get all products
 static getProducts = [
    validate(productFiltersSchema),
    asyncHandler(async (req: Request, res: Response) => {
      if (!req.user?.id) {
        res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
        return;
      }

      const filters = {
        ...req.query,
        lowStock: req.query.lowStock === 'true'
      };

      const products = await productService.getProducts(req.user.id, filters);
      
      res.json({
        success: true,
        count: products.length,
        data: products
      });
    })
  ];

 // Low stock products
  static getLowStockProducts = asyncHandler(async (req: Request, res: Response) => {
    if (!req.user?.id) {
      res.status(401).json({
        success: false,
        error: 'User not authenticated'
      });
      return;
    }

    const products = await productService.getLowStockProducts(req.user.id);

    res.json({
      success: true,
      count: products.length,
      data: products
    });
  });

  // Get specific product
  static getProduct = [
    validate(productParamsSchema),
    asyncHandler(async (req: Request<{id: string}>, res: Response) => {
      if (!req.user?.id) {
        res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
        return;
      }

      const { id } = req.params;
      const product = await productService.getProductById(id, req.user.id);

      if (!product) {
        res.status(404).json({
          success: false,
          error: 'Product not found'
        });
        return;
      }

      res.json({
        success: true,
        data: product
      });
    })
  ];

  // Update product
  static updateProduct = [
    validate(productParamsSchema),
    validate(updateProductSchema),
asyncHandler(async (req: Request<{ id: string }>, res: Response) => {      if (!req.user?.id) {
        res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
        return;
      }

      const { id } = req.params;
      const product = await productService.updateProduct(id, req.user.id, req.body);

      if (!product) {
        res.status(404).json({
          success: false,
          error: 'Product not found'
        });
        return;
      }

      res.json({
        success: true,
        data: product
      });
    })
  ];

  // Update stock
  static updateStock = [
    validate(productParamsSchema),
    validate(updateStockSchema),
    asyncHandler(async (req: Request<{id: string}>, res: Response) => {
      if (!req.user?.id) {
        res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
        return;
      }

      const { id } = req.params;
      const { quantity } = req.body;
      const product = await productService.updateStock(id, req.user.id, quantity);

      if (!product) {
        res.status(404).json({
          success: false,
          error: 'Product not found'
        });
        return;
      }

      res.json({
        success: true,
        data: product
      });
    })
  ];

  // Delete product
  static deleteProduct = [
    validate(productParamsSchema),
asyncHandler(async (req: Request<{ id: string }>, res: Response) => {
  if (!req.user?.id) {
        res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
        return;
      }

      const { id } = req.params;
      
      // Check if product is used
      const isUsed = await productService.checkProductUsage(id);
      if (isUsed) {
        res.status(400).json({
          success: false,
          error: 'Cannot delete this product as it is used in invoices or quotes'
        });
        return;
      }

      await productService.deleteProduct(id, req.user.id);

      res.json({
        success: true,
        message: 'Product deactivated successfully'
      });
    })
  ];
}

export default ProductController;