import { prisma } from '../../../lib/prisma';
import { CreateProductDTO, UpdateProductDTO, ProductResponse, ProductListResponse } from './product.types';
import { AppError } from '../../../utils/errorHandler';
import { Prisma } from '../../../generated/prisma';

export class ProductService {
  async createProduct(
    autoEntrepreneurId: string,
    data: CreateProductDTO
  ): Promise<ProductResponse> {
    try {
      // Check if reference already exists for this auto-entrepreneur
      if (data.reference) {
        const existingProduct = await prisma.product.findFirst({
          where: {
            reference: data.reference,
            AutoEntrepreneurId: autoEntrepreneurId,
          },
        });

        if (existingProduct) {
          throw new AppError('Product with this reference already exists', 400);
        }
      }

      // Create item first, then product
      const product = await prisma.product.create({
        data: {
          unitPrice: data.unitPrice,
          reference: data.reference,
          stockQuantity: data.stockQuantity ?? 0,
          alertThreshold: data.alertThreshold ?? 10,
          AutoEntrepreneurId: autoEntrepreneurId,
          item: {
            create: {
              name: data.name,
              description: data.description,
              unit: data.unit,
              category: data.category,
              isActive: data.isActive ?? true,
            },
          },
        },
        include: {
          item: true,
        },
      });

      return this.formatProductResponse(product);
    } catch (error) {
      if (error instanceof AppError) throw error;
      console.error('Error creating product:', error);
      throw new AppError('Failed to create product', 500);
    }
  }

  async getProductById(
    autoEntrepreneurId: string,
    productId: string
  ): Promise<ProductResponse> {
    const product = await prisma.product.findFirst({
      where: {
        id: productId,
        AutoEntrepreneurId: autoEntrepreneurId,
      },
      include: {
        item: true,
      },
    });

    if (!product) {
      throw new AppError('Product not found', 404);
    }

    return this.formatProductResponse(product);
  }

  async listProducts(
    autoEntrepreneurId: string,
    page: number = 1,
    limit: number = 10,
    search?: string,
    category?: string,
    isActive?: boolean
  ): Promise<ProductListResponse> {
    const skip = (page - 1) * limit;

    const where: Prisma.ProductWhereInput = {
      AutoEntrepreneurId: autoEntrepreneurId,
      item: {
        ...(search && {
          OR: [
            { name: { contains: search } },
            { description: { contains: search } },
          ],
        }),
        ...(category && { category }),
        ...(isActive !== undefined && { isActive }),
      },
    };

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        include: {
          item: true,
        },
        skip,
        take: limit,
        orderBy: {
          item: {
            creationDate: 'desc',
          },
        },
      }),
      prisma.product.count({ where }),
    ]);

    return {
      products: products.map((p) => this.formatProductResponse(p)),
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async updateProduct(
    autoEntrepreneurId: string,
    productId: string,
    data: UpdateProductDTO
  ): Promise<ProductResponse> {
    try {
      // Check if product exists and belongs to auto-entrepreneur
      const existingProduct = await prisma.product.findFirst({
        where: {
          id: productId,
          AutoEntrepreneurId: autoEntrepreneurId,
        },
        include: {
          item: true,
        },
      });

      if (!existingProduct) {
        throw new AppError('Product not found', 404);
      }

      // Check if reference is being updated and if it already exists
      if (data.reference && data.reference !== existingProduct.reference) {
        const duplicateReference = await prisma.product.findFirst({
          where: {
            reference: data.reference,
            AutoEntrepreneurId: autoEntrepreneurId,
            id: { not: productId },
          },
        });

        if (duplicateReference) {
          throw new AppError('Product with this reference already exists', 400);
        }
      }

      // Update item and product
      const product = await prisma.product.update({
        where: { id: productId },
        data: {
          ...(data.unitPrice !== undefined && { unitPrice: data.unitPrice }),
          ...(data.reference !== undefined && { reference: data.reference }),
          ...(data.stockQuantity !== undefined && { stockQuantity: data.stockQuantity }),
          ...(data.alertThreshold !== undefined && { alertThreshold: data.alertThreshold }),
          item: {
            update: {
              ...(data.name && { name: data.name }),
              ...(data.description !== undefined && { description: data.description }),
              ...(data.unit && { unit: data.unit }),
              ...(data.category !== undefined && { category: data.category }),
              ...(data.isActive !== undefined && { isActive: data.isActive }),
            },
          },
        },
        include: {
          item: true,
        },
      });

      return this.formatProductResponse(product);
    } catch (error) {
      if (error instanceof AppError) throw error;
      console.error('Error updating product:', error);
      throw new AppError('Failed to update product', 500);
    }
  }

  async deleteProduct(autoEntrepreneurId: string, productId: string): Promise<void> {
    try {
      // Check if product exists and belongs to auto-entrepreneur
      const product = await prisma.product.findFirst({
        where: {
          id: productId,
          AutoEntrepreneurId: autoEntrepreneurId,
        },
        include: {
          item: true,
          invoiceLines: true,
          quoteLines: true,
        },
      });

      if (!product) {
        throw new AppError('Product not found', 404);
      }

      // Check if product is used in any invoices or quotes
      if (product.invoiceLines.length > 0 || product.quoteLines.length > 0) {
        throw new AppError(
          'Cannot delete product that is used in invoices or quotes. Consider deactivating it instead.',
          400
        );
      }

      // Delete product and its associated item
      await prisma.product.delete({
        where: { id: productId },
      });

      await prisma.item.delete({
        where: { id: product.itemId },
      });
    } catch (error) {
      if (error instanceof AppError) throw error;
      console.error('Error deleting product:', error);
      throw new AppError('Failed to delete product', 500);
    }
  }

  async updateStock(
    autoEntrepreneurId: string,
    productId: string,
    quantity: number
  ): Promise<ProductResponse> {
    const product = await prisma.product.findFirst({
      where: {
        id: productId,
        AutoEntrepreneurId: autoEntrepreneurId,
      },
    });

    if (!product) {
      throw new AppError('Product not found', 404);
    }

    const newStock = Number(product.stockQuantity) + quantity;

    if (newStock < 0) {
      throw new AppError('Insufficient stock', 400);
    }

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: { stockQuantity: newStock },
      include: {
        item: true,
      },
    });

    return this.formatProductResponse(updatedProduct);
  }

  async getLowStockProducts(autoEntrepreneurId: string): Promise<ProductResponse[]> {
    const products = await prisma.product.findMany({
      where: {
        AutoEntrepreneurId: autoEntrepreneurId,
        item: {
          isActive: true,
        },
      },
      include: {
        item: true,
      },
    });

    const lowStockProducts = products.filter(
      (p) => Number(p.stockQuantity) <= Number(p.alertThreshold)
    );

    return lowStockProducts.map((p) => this.formatProductResponse(p));
  }

  private formatProductResponse(product: any): ProductResponse {
    return {
      id: product.id,
      name: product.item.name,
      description: product.item.description,
      unit: product.item.unit,
      category: product.item.category,
      unitPrice: Number(product.unitPrice),
      reference: product.reference,
      stockQuantity: Number(product.stockQuantity),
      alertThreshold: Number(product.alertThreshold),
      isActive: product.item.isActive,
      creationDate: product.item.creationDate,
      updateDate: product.item.updateDate,
      AutoEntrepreneurId: product.AutoEntrepreneurId,
    };
  }
}

export const productService = new ProductService();
