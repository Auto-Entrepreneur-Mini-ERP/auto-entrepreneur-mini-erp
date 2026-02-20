import { prisma } from "../../../lib/prisma.js";
import type { Prisma } from "../../../../generated/prisma/browser.js";
// import type { Prisma } from "@prisma/client";


import type {
  CreateProductInput,
  UpdateProductInput,
  ProductFilters,
  ProductWithItem,
} from "./product.types.js";

export class ProductService {

  async createProduct(
    data: CreateProductInput & { autoEntrepreneurId: string }
  ): Promise<ProductWithItem> {

    return prisma.$transaction(async (tx) => {
      const item = await prisma.item.create({
        data: {
          name: data.name,
          description: data.description ?? null,
          unit: data.unit,
          category: data.category ?? null,
          isActive: true
        }
      });

      const product = await prisma.product.create({
        data: {
          id: item.id,
          itemId: item.id,
          unitPrice: typeof data.unitPrice === "string"
            ? parseFloat(data.unitPrice)
            : data.unitPrice,
          reference: data.reference ?? null,
          stockQuantity: data.stockQuantity ?? 0,
          alertThreshold: data.alertThreshold ?? 0,
          AutoEntrepreneurId: data.autoEntrepreneurId
        }
      });

      return {
        ...item,
        product
      };
    });
  }


  async getProducts(
    autoEntrepreneurId: string,
    filters?: ProductFilters
  ): Promise<ProductWithItem[]> {

    const whereClause: Prisma.ItemWhereInput = {
      isActive: true,
      product: {
        AutoEntrepreneurId: autoEntrepreneurId
      }
    };

    if (filters?.category) {
      whereClause.category = filters.category;
    }

    if (filters?.name) {
      whereClause.name = {
        contains: filters.name
      };
    }

    if (filters?.minPrice !== undefined || filters?.maxPrice !== undefined) {
      const priceFilter: Prisma.DecimalFilter = {};
      if (filters?.minPrice !== undefined) priceFilter.gte = filters.minPrice;
      if (filters?.maxPrice !== undefined) priceFilter.lte = filters.maxPrice;
      
      whereClause.product = {
        ...whereClause.product,
        unitPrice: priceFilter
      } as Prisma.ProductWhereInput;
    }

    const products = await prisma.item.findMany({
      where: whereClause,
      include: {
        product: true
      },
      orderBy: {
        creationDate: "desc"
      }
    });

    // Filter for lowStock if requested - compares stockQuantity to alertThreshold
    // This requires post-query filtering since Prisma doesn't support field-to-field comparisons
    let filteredProducts = products;
    if (filters?.lowStock) {
      filteredProducts = products.filter((item: { product: { stockQuantity: number; alertThreshold: number; }; }) => 
        item.product && item.product.stockQuantity <= item.product.alertThreshold
      );
    }

    return filteredProducts.map((item: { product: { AutoEntrepreneurId: any; unitPrice: any; }; }) => ({
      ...item,
      product: item.product ? {
        ...item.product,
        autoEntrepreneurId: item.product.AutoEntrepreneurId,
        unitPrice: Number(item.product.unitPrice)
      } : null
    })) as ProductWithItem[];
  }


  async getProductById(
    id: string,
    autoEntrepreneurId: string
  ): Promise<ProductWithItem | null> {

    const product = await prisma.item.findFirst({
      where: {
        id,
        isActive: true,
        product: {
          AutoEntrepreneurId: autoEntrepreneurId
        }
      },
      include: {
        product: true
      }
    });

    if (!product) return null;

    return {
      ...product,
      product: product.product ? {
        ...product.product,
        autoEntrepreneurId: product.product.AutoEntrepreneurId,
        unitPrice: Number(product.product.unitPrice)
      } : null
    } as ProductWithItem;
  }


  async updateProduct(
    id: string,
    autoEntrepreneurId: string,
    data: UpdateProductInput
  ): Promise<ProductWithItem | null> {

    return prisma.$transaction(async (tx) => {

      const itemUpdateData: Prisma.ItemUpdateInput = {};

      if (data.name !== undefined) itemUpdateData.name = data.name;
      if (data.description !== undefined) itemUpdateData.description = data.description;
      if (data.unit !== undefined) itemUpdateData.unit = data.unit;
      if (data.category !== undefined) itemUpdateData.category = data.category;
      if (data.isActive !== undefined) itemUpdateData.isActive = data.isActive;

      if (Object.keys(itemUpdateData).length > 0) {
        await prisma.item.update({
          where: { id },
          data: itemUpdateData
        });
      }

      const productUpdateData: Prisma.ProductUpdateInput = {};

      if (data.unitPrice !== undefined) {
        productUpdateData.unitPrice =
          typeof data.unitPrice === "string"
            ? parseFloat(data.unitPrice)
            : data.unitPrice;
      }

      if (data.reference !== undefined)
        productUpdateData.reference = data.reference;

      if (data.stockQuantity !== undefined)
        productUpdateData.stockQuantity = data.stockQuantity;

      if (data.alertThreshold !== undefined)
        productUpdateData.alertThreshold = data.alertThreshold;

      if (Object.keys(productUpdateData).length > 0) {
        await prisma.product.update({
          where: {
            id,
            AutoEntrepreneurId: autoEntrepreneurId
          },
          data: productUpdateData
        });
      }

      const result = await this.getProductById(id, autoEntrepreneurId);
      return result;
    });
  }


  async updateStock(
    id: string,
    autoEntrepreneurId: string,
    quantity: number
  ): Promise<ProductWithItem | null> {

    const product = await prisma.product.update({
      where: {
        id,
        AutoEntrepreneurId: autoEntrepreneurId
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
      product: {
        ...product,
        autoEntrepreneurId: product.AutoEntrepreneurId,
        unitPrice: Number(product.unitPrice)
      }
    } as ProductWithItem;
  }


  async deleteProduct(
    id: string,
    autoEntrepreneurId: string
  ): Promise<void> {

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

export const productService = new ProductService();

////////////////////////////////////////////////////////////////////////////////////////

// import { prisma } from "../../../lib/prisma.js";
// import type { Prisma } from "../../../../generated/prisma/browser.js";

// import type {
//   CreateProductInput,
//   UpdateProductInput,
//   ProductFilters,
//   ProductWithItem,
// } from "./product.types.js";

// export class ProductService {

//   async createProduct(
//     data: CreateProductInput & { autoEntrepreneurId: string }
//   ): Promise<ProductWithItem> {

//     return prisma.$transaction(async (tx) => {
//       const item = await tx.item.create({
//         data: {
//           name: data.name,
//           description: data.description ?? null,
//           unit: data.unit,
//           category: data.category ?? null,
//           isActive: true
//         }
//       });

//       const product = await tx.product.create({
//         data: {
//           id: item.id,
//           itemId: item.id,
//           unitPrice: typeof data.unitPrice === "string"
//             ? parseFloat(data.unitPrice)
//             : data.unitPrice,
//           reference: data.reference ?? null,
//           stockQuantity: data.stockQuantity ?? 0,
//           alertThreshold: data.alertThreshold ?? 0,
//           AutoEntrepreneurId: data.autoEntrepreneurId
//         }
//       });

//       return {
//         ...item,
//         product: {
//           id: product.id,
//           itemId: product.itemId,
//           unitPrice: Number(product.unitPrice),
//           reference: product.reference ?? null,
//           stockQuantity: product.stockQuantity,
//           alertThreshold: product.alertThreshold,
//           autoEntrepreneurId: product.AutoEntrepreneurId
//         }
//       } as ProductWithItem;
//     });
//   }


//   async getProducts(
//     autoEntrepreneurId: string,
//     filters?: ProductFilters
//   ): Promise<ProductWithItem[]> {

//     const whereClause: Prisma.ItemWhereInput = {
//       isActive: true,
//       product: {
//         AutoEntrepreneurId: autoEntrepreneurId
//       }
//     };

//     if (filters?.category) {
//       whereClause.category = filters.category;
//     }

//     if (filters?.name) {
//       whereClause.name = {
//         contains: filters.name
//       };
//     }

//     if (filters?.minPrice !== undefined || filters?.maxPrice !== undefined) {
//       const priceFilter: Prisma.DecimalFilter = {};
//       if (filters?.minPrice !== undefined) priceFilter.gte = filters.minPrice;
//       if (filters?.maxPrice !== undefined) priceFilter.lte = filters.maxPrice;
      
//       whereClause.product = {
//         ...whereClause.product,
//         unitPrice: priceFilter
//       } as Prisma.ProductWhereInput;
//     }

//     const products = await prisma.item.findMany({
//       where: whereClause,
//       include: {
//         product: true
//       },
//       orderBy: {
//         creationDate: "desc"
//       }
//     });

//     return products.map(item => ({
//       ...item,
//       product: item.product ? {
//         ...item.product,
//         autoEntrepreneurId: item.product.AutoEntrepreneurId,
//         unitPrice: Number(item.product.unitPrice)
//       } : null
//     })) as ProductWithItem[];
//   }


//   async getProductById(
//     id: string,
//     autoEntrepreneurId: string
//   ): Promise<ProductWithItem | null> {

//     const product = await prisma.item.findFirst({
//       where: {
//         id,
//         isActive: true,
//         product: {
//           AutoEntrepreneurId: autoEntrepreneurId
//         }
//       },
//       include: {
//         product: true
//       }
//     });

//     if (!product) return null;

//     return {
//       ...product,
//       product: product.product ? {
//         ...product.product,
//         autoEntrepreneurId: product.product.AutoEntrepreneurId,
//         unitPrice: Number(product.product.unitPrice)
//       } : null
//     } as ProductWithItem;
//   }

//   async getProductByName(
//     articleName: string,
//     autoEntrepreneurId: string
//   ): Promise<ProductWithItem | null> {

//     const product = await prisma.item.findFirst({
//       where: {
//         OR: [
//           { name: articleName },
//         ],
//         isActive: true,
//         product: {
//           AutoEntrepreneurId: autoEntrepreneurId
//         }
//       },
//       include: {
//         product: true
//       }
//     });

//     if (!product) return null;

//     return {
//       ...product,
//       product: product.product ? {
//         ...product.product,
//         autoEntrepreneurId: product.product.AutoEntrepreneurId,
//         unitPrice: Number(product.product.unitPrice)
//       } : null
//     } as ProductWithItem;
//   }


//   async updateProduct(
//     id: string,
//     autoEntrepreneurId: string,
//     data: UpdateProductInput
//   ): Promise<ProductWithItem | null> {

//     return prisma.$transaction(async (tx) => {

//       const itemUpdateData: Prisma.ItemUpdateInput = {};

//       if (data.name !== undefined) itemUpdateData.name = data.name;
//       if (data.description !== undefined) itemUpdateData.description = data.description;
//       if (data.unit !== undefined) itemUpdateData.unit = data.unit;
//       if (data.category !== undefined) itemUpdateData.category = data.category;
//       if (data.isActive !== undefined) itemUpdateData.isActive = data.isActive;

//       if (Object.keys(itemUpdateData).length > 0) {
//         await tx.item.update({
//           where: { id },
//           data: itemUpdateData
//         });
//       }

//       const productUpdateData: Prisma.ProductUpdateInput = {};

//       if (data.unitPrice !== undefined) {
//         productUpdateData.unitPrice =
//           typeof data.unitPrice === "string"
//             ? parseFloat(data.unitPrice)
//             : data.unitPrice;
//       }

//       if (data.reference !== undefined)
//         productUpdateData.reference = data.reference;

//       if (data.stockQuantity !== undefined)
//         productUpdateData.stockQuantity = data.stockQuantity;

//       if (data.alertThreshold !== undefined)
//         productUpdateData.alertThreshold = data.alertThreshold;

//       if (Object.keys(productUpdateData).length > 0) {
//         await tx.product.update({
//           where: {
//             id,
//             AutoEntrepreneurId: autoEntrepreneurId
//           },
//           data: productUpdateData
//         });
//       }

//       const result = await this.getProductById(id, autoEntrepreneurId);
//       return result;
//     });
//   }


//   async updateStock(
//     id: string,
//     autoEntrepreneurId: string,
//     quantity: number
//   ): Promise<ProductWithItem | null> {

//     const product = await prisma.product.update({
//       where: {
//         id,
//         AutoEntrepreneurId: autoEntrepreneurId
//       },
//       data: {
//         stockQuantity: {
//           increment: quantity
//         }
//       },
//       include: {
//         item: true
//       }
//     });

//     return {
//       ...product.item,
//       product: {
//         id: product.id,
//         itemId: product.itemId,
//         unitPrice: Number(product.unitPrice),
//         reference: product.reference ?? null,
//         stockQuantity: product.stockQuantity,
//         alertThreshold: product.alertThreshold,
//         autoEntrepreneurId: product.AutoEntrepreneurId
//       }
//     } as ProductWithItem;
//   }


//   async deleteProduct(
//     id: string,
//     autoEntrepreneurId: string
//   ): Promise<void> {

//     await prisma.item.update({
//       where: { id },
//       data: {
//         isActive: false
//       }
//     });
//   }


//   async checkProductUsage(itemId: string): Promise<boolean> {

//     const [invoiceLines, quoteLines] = await Promise.all([
//       prisma.invoiceLine.count({
//         where: { productId: itemId }
//       }),
//       prisma.quoteLine.count({
//         where: { productId: itemId }
//       })
//     ]);

//     return invoiceLines > 0 || quoteLines > 0;
//   }
// }

// export const productService = new ProductService();
