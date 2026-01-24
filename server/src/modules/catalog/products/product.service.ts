import { PrismaClient, Prisma } from '@prisma/client';
import type { 
  CreateProductInput, 
  UpdateProductInput, 
  ProductFilters,
  ProductWithItem 
} from './product.types.js';

const prisma = new PrismaClient();

export class ProductService {
  
  async createProduct(data: CreateProductInput & { autoEntrepreneurId: string }): Promise<any> {
    return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Create item
      const item = await tx.item.create({
        data: {
          name: data.name,
          description: data.description,
          unit: data.unit,
          category: data.category,
          isActive: true
        }
      });

      // Create product
      const product = await tx.product.create({
        data: {
          id: item.id,
          itemId: item.id,
          unitPrice: data.unitPrice,
          reference: data.reference,
          stockQuantity: data.stockQuantity,
          alertThreshold: data.alertThreshold,
          autoEntrepreneurId: data.autoEntrepreneurId
        }
      });

      return {
        ...item,
        product
      };
    });
  }

  async getProducts(autoEntrepreneurId: string, filters?: ProductFilters): Promise<ProductWithItem[]> {
    const whereClause: Prisma.ItemWhereInput = {
      isActive: true,
      product: {
        autoEntrepreneurId
      }
    };

    // Apply filters
    if (filters?.category) {
      whereClause.category = filters.category;
    }
    
    if (filters?.name) {
      whereClause.name = {
        contains: filters.name,
        mode: 'insensitive' as Prisma.QueryMode
      };
    }

    // Price filter
    if (filters?.minPrice || filters?.maxPrice) {
      whereClause.product = {
        unitPrice: {}
      };
      if (filters.minPrice) {
        (whereClause.product!.unitPrice as Prisma.DecimalFilter).gte = filters.minPrice;
      }
      if (filters.maxPrice) {
        (whereClause.product!.unitPrice as Prisma.DecimalFilter).lte = filters.maxPrice;
      }
    }

    // Low stock filter
    if (filters?.lowStock) {
      whereClause.product = {
        ...whereClause.product,
        stockQuantity: {
          lte: prisma.product.fields.alertThreshold
        }
      };
    }

    const products = await prisma.item.findMany({
      where: whereClause,
      include: {
        product: true
      },
      orderBy: {
        creationDate: 'desc'
      }
    });

    return products as ProductWithItem[];
  }

  async getProductById(id: string, autoEntrepreneurId: string): Promise<ProductWithItem | null> {
    const product = await prisma.item.findFirst({
      where: {
        id,
        isActive: true,
        product: {
          autoEntrepreneurId
        }
      },
      include: {
        product: true
      }
    });

    return product as ProductWithItem | null;
  }

  async updateProduct(
    id: string, 
    autoEntrepreneurId: string, 
    data: UpdateProductInput
  ): Promise<ProductWithItem | null> {
    return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Update item
      const itemUpdateData: Prisma.ItemUpdateInput = {};
      if (data.name !== undefined) itemUpdateData.name = data.name;
      if (data.description !== undefined) itemUpdateData.description = data.description;
      if (data.unit !== undefined) itemUpdateData.unit = data.unit;
      if (data.category !== undefined) itemUpdateData.category = data.category;

      if (Object.keys(itemUpdateData).length > 0) {
        await tx.item.update({
          where: { id },
          data: itemUpdateData
        });
      }

      // Update product
      const productUpdateData: Prisma.ProductUpdateInput = {};
      if (data.unitPrice !== undefined) productUpdateData.unitPrice = data.unitPrice;
      if (data.reference !== undefined) productUpdateData.reference = data.reference;
      if (data.stockQuantity !== undefined) productUpdateData.stockQuantity = data.stockQuantity;
      if (data.alertThreshold !== undefined) productUpdateData.alertThreshold = data.alertThreshold;

      if (Object.keys(productUpdateData).length > 0) {
        await tx.product.update({
          where: { 
            id,
            autoEntrepreneurId
          },
          data: productUpdateData
        });
      }

      return this.getProductById(id, autoEntrepreneurId);
    });
  }

  async updateStock(id: string, autoEntrepreneurId: string, quantity: number): Promise<ProductWithItem | null> {
    const product = await prisma.product.update({
      where: {
        id,
        autoEntrepreneurId
      },
      data: {
        stockQuantity: {
          increment: quantity
        }
      },
      include: {
        item: true
      }
    });

    return {
      ...product.item,
      product
    } as ProductWithItem;
  }

  async getLowStockProducts(autoEntrepreneurId: string): Promise<ProductWithItem[]> {
    const products = await prisma.item.findMany({
      where: {
        isActive: true,
        product: {
          autoEntrepreneurId,
          stockQuantity: {
            lte: prisma.product.fields.alertThreshold
          }
        }
      },
      include: {
        product: true
      }
    });

    return products as ProductWithItem[];
  }

  async deleteProduct(id: string, autoEntrepreneurId: string): Promise<void> {
    await prisma.item.update({
      where: { id },
      data: {
        isActive: false
      }
    });
  }

  async checkProductUsage(itemId: string): Promise<boolean> {
    const [invoiceLines, quoteLines] = await Promise.all([
      prisma.invoiceLine.count({
        where: { productId: itemId }
      }),
      prisma.quoteLine.count({
        where: { productId: itemId }
      })
    ]);

    return invoiceLines > 0 || quoteLines > 0;
  }
}