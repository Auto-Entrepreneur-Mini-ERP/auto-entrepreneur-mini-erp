// src/modules/catalog/products/product.service.ts
import { PrismaClient } from "@prisma/client";
import type { Prisma } from "../../../generated/prisma/browser.js";

import type {
  CreateProductInput,
  UpdateProductInput,
  UpdateStockInput,
  ProductFilters,
  ProductWithItem,
} from "./product.types.js";

const prisma = new PrismaClient();

export class ProductService {
  async createProduct(data: CreateProductInput & { autoEntrepreneurId: string }): Promise<ProductWithItem> {
    return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const item = await tx.item.create({
        data: {
          name: data.name,
          description: data.description ?? null,
          unit: data.unit,
          category: data.category ?? null,
          isActive: true,
        },
      });

      const product = await tx.product.create({
        data: {
          id: item.id,
          itemId: item.id,
          unitPrice: typeof data.unitPrice === "string" ? parseFloat(data.unitPrice) : data.unitPrice,
          reference: data.reference ?? null,
          stockQuantity: data.stockQuantity ?? 0,
          alertThreshold: data.alertThreshold ?? 0,
          autoEntrepreneurId: data.autoEntrepreneurId,
        },
      });

      return { ...item, product };
    });
  }

  // GET PRODUCTS WITH FILTERS
  async getProducts(autoEntrepreneurId: string, filters?: ProductFilters): Promise<ProductWithItem[]> {
    const whereClause: Prisma.ItemWhereInput = {
      isActive: true,
      product: { autoEntrepreneurId },
    };

    if (filters?.category) whereClause.category = filters.category;
    if (filters?.name)
      whereClause.name = { contains: filters.name, mode: "insensitive" };

    if (filters?.minPrice || filters?.maxPrice) {
      whereClause.product = {
        ...whereClause.product,
        unitPrice: {},
      };
      if (filters.minPrice !== undefined) (whereClause.product.unitPrice as Prisma.DecimalFilter).gte = filters.minPrice;
      if (filters.maxPrice !== undefined) (whereClause.product.unitPrice as Prisma.DecimalFilter).lte = filters.maxPrice;
    }

    if (filters?.lowStock) {
      whereClause.product = {
        ...whereClause.product,
        stockQuantity: { lte: 5 }, // default alert threshold, can adjust
      };
    }

    const products = await prisma.item.findMany({
      where: whereClause,
      include: { product: true },
      orderBy: { creationDate: "desc" },
    });

    return products as ProductWithItem[];
  }

  // GET SINGLE PRODUCT
  async getProductById(id: string, autoEntrepreneurId: string): Promise<ProductWithItem | null> {
    const product = await prisma.item.findFirst({
      where: { id, isActive: true, product: { autoEntrepreneurId } },
      include: { product: true },
    });

    return product as ProductWithItem | null;
  }

  // UPDATE PRODUCT
  async updateProduct(id: string, autoEntrepreneurId: string, data: UpdateProductInput): Promise<ProductWithItem | null> {
    return prisma.$transaction(async (tx: { item: { update: (arg0: { where: { id: string; }; data: Prisma.ItemUpdateInput; }) => any; }; product: { update: (arg0: { where: { id: string; autoEntrepreneurId: string; }; data: Prisma.ProductUpdateInput; }) => any; }; }) => {
      const itemUpdate: Prisma.ItemUpdateInput = {};
      if (data.name !== undefined) itemUpdate.name = data.name;
      if (data.description !== undefined) itemUpdate.description = data.description;
      if (data.unit !== undefined) itemUpdate.unit = data.unit;
      if (data.category !== undefined) itemUpdate.category = data.category;
      if (data.isActive !== undefined) itemUpdate.isActive = data.isActive;

      if (Object.keys(itemUpdate).length > 0) {
        await tx.item.update({ where: { id }, data: itemUpdate });
      }

      const productUpdate: Prisma.ProductUpdateInput = {};
      if (data.unitPrice !== undefined)
        productUpdate.unitPrice = typeof data.unitPrice === "string" ? parseFloat(data.unitPrice) : data.unitPrice;
      if (data.reference !== undefined) productUpdate.reference = data.reference;
      if (data.stockQuantity !== undefined) productUpdate.stockQuantity = data.stockQuantity;
      if (data.alertThreshold !== undefined) productUpdate.alertThreshold = data.alertThreshold;

      if (Object.keys(productUpdate).length > 0) {
        await tx.product.update({ where: { id, autoEntrepreneurId }, data: productUpdate });
      }

      return this.getProductById(id, autoEntrepreneurId);
    });
  }

  // UPDATE STOCK
  async updateStock(id: string, autoEntrepreneurId: string, quantity: number): Promise<ProductWithItem | null> {
    const product = await prisma.product.update({
      where: { id, autoEntrepreneurId },
      data: { stockQuantity: { increment: quantity } },
      include: { item: true },
    });

    return { ...product.item, product } as ProductWithItem;
  }

  // DELETE PRODUCT (soft delete)
  async deleteProduct(id: string): Promise<void> {
    await prisma.item.update({
      where: { id },
      data: { isActive: false },
    });
  }

  // CHECK PRODUCT USAGE
  async checkProductUsage(itemId: string): Promise<boolean> {
    const [invoiceLines, quoteLines] = await Promise.all([
      prisma.invoiceLine.count({ where: { productId: itemId } }),
      prisma.quoteLine.count({ where: { productId: itemId } }),
    ]);

    return invoiceLines > 0 || quoteLines > 0;
  }
}

export const productService = new ProductService();
