import { Response, NextFunction } from 'express';
import { productService } from './product.service';
import { ProductRequest } from './product.types';
import { AppError } from '../../../utils/errorHandler';

export class ProductController {
  async createProduct(req: ProductRequest, res: Response, next: NextFunction) {
    try {
      const autoEntrepreneurId = req.user?.autoEntrepreneurId;

      if (!autoEntrepreneurId) {
        throw new AppError('Auto-entrepreneur ID not found', 401);
      }

      const product = await productService.createProduct(autoEntrepreneurId, req.body);

      res.status(201).json({
        success: true,
        message: 'Product created successfully',
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  async getProduct(req: ProductRequest, res: Response, next: NextFunction) {
    try {
      const autoEntrepreneurId = req.user?.autoEntrepreneurId;
      const { id } = req.params;

      if (!autoEntrepreneurId) {
        throw new AppError('Auto-entrepreneur ID not found', 401);
      }

      if (!id) {
        throw new AppError('Product ID is required', 400);
      }

      const product = await productService.getProductById(autoEntrepreneurId, id);

      res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  async listProducts(req: ProductRequest, res: Response, next: NextFunction) {
    try {
      const autoEntrepreneurId = req.user?.autoEntrepreneurId;

      if (!autoEntrepreneurId) {
        throw new AppError('Auto-entrepreneur ID not found', 401);
      }

      const page = parseInt(req.query.page || '1');
      const limit = parseInt(req.query.limit || '10');
      const search = req.query.search;
      const category = req.query.category;
      const isActive = req.query.isActive === 'true' ? true : req.query.isActive === 'false' ? false : undefined;

      const result = await productService.listProducts(
        autoEntrepreneurId,
        page,
        limit,
        search,
        category,
        isActive
      );

      res.status(200).json({
        success: true,
        data: result.products,
        pagination: result.pagination,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req: ProductRequest, res: Response, next: NextFunction) {
    try {
      const autoEntrepreneurId = req.user?.autoEntrepreneurId;
      const { id } = req.params;

      if (!autoEntrepreneurId) {
        throw new AppError('Auto-entrepreneur ID not found', 401);
      }

      if (!id) {
        throw new AppError('Product ID is required', 400);
      }

      const product = await productService.updateProduct(autoEntrepreneurId, id, req.body);

      res.status(200).json({
        success: true,
        message: 'Product updated successfully',
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req: ProductRequest, res: Response, next: NextFunction) {
    try {
      const autoEntrepreneurId = req.user?.autoEntrepreneurId;
      const { id } = req.params;

      if (!autoEntrepreneurId) {
        throw new AppError('Auto-entrepreneur ID not found', 401);
      }

      if (!id) {
        throw new AppError('Product ID is required', 400);
      }

      await productService.deleteProduct(autoEntrepreneurId, id);

      res.status(200).json({
        success: true,
        message: 'Product deleted successfully',
      });
    } catch (error) {
      next(error);
    }
  }

  async updateStock(req: ProductRequest, res: Response, next: NextFunction) {
    try {
      const autoEntrepreneurId = req.user?.autoEntrepreneurId;
      const { id } = req.params;
      const { quantity } = req.body;

      if (!autoEntrepreneurId) {
        throw new AppError('Auto-entrepreneur ID not found', 401);
      }

      if (!id) {
        throw new AppError('Product ID is required', 400);
      }

      if (typeof quantity !== 'number') {
        throw new AppError('Quantity must be a number', 400);
      }

      const product = await productService.updateStock(autoEntrepreneurId, id, quantity);

      res.status(200).json({
        success: true,
        message: 'Stock updated successfully',
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  async getLowStockProducts(req: ProductRequest, res: Response, next: NextFunction) {
    try {
      const autoEntrepreneurId = req.user?.autoEntrepreneurId;

      if (!autoEntrepreneurId) {
        throw new AppError('Auto-entrepreneur ID not found', 401);
      }

      const products = await productService.getLowStockProducts(autoEntrepreneurId);

      res.status(200).json({
        success: true,
        data: products,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const productController = new ProductController();
