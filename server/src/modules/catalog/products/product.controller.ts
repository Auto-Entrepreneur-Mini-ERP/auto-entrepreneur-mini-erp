import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ProductService } from "./product.service.js";
import type {
  CreateProductInput,
  UpdateProductInput,
  UpdateStockInput,
  ProductFiltersInput,
} from "./product.types.js";

const productService = new ProductService();

const getParamId = (id: string | string[] | undefined): string => {
  if (!id) throw new Error("ID parameter is required");
  if (Array.isArray(id)) {
    const firstId = id[0];
    if (!firstId) throw new Error("ID array is empty");
    return firstId;
  }
  return id;
};

const parseProductFilters = (query: any): ProductFiltersInput => {
  const result: ProductFiltersInput = {};
  if (query.category !== undefined) result.category = query.category as string;
  if (query.name !== undefined) result.name = query.name as string;
  if (query.minPrice !== undefined) result.minPrice = query.minPrice as string | number;
  if (query.maxPrice !== undefined) result.maxPrice = query.maxPrice as string | number;
  if (query.lowStock !== undefined) result.lowStock = query.lowStock as boolean | string;
  return result;
};

interface ServiceFilters {
  category?: string;
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  lowStock?: boolean;
}

const convertFiltersToService = (filters: ProductFiltersInput): ServiceFilters => {
  const result: ServiceFilters = {};
  if (filters.category !== undefined) result.category = filters.category;
  if (filters.name !== undefined) result.name = filters.name;
  if (filters.minPrice !== undefined) {
    const num = Number(filters.minPrice);
    if (!isNaN(num)) result.minPrice = num;
  }
  if (filters.maxPrice !== undefined) {
    const num = Number(filters.maxPrice);
    if (!isNaN(num)) result.maxPrice = num;
  }
  if (filters.lowStock !== undefined) {
    result.lowStock = filters.lowStock === true || filters.lowStock === 'true';
  }
  return result;
};

// GET /products
const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const filtersInput = parseProductFilters(req.query);
  const serviceFilters = convertFiltersToService(filtersInput);
  const products = await productService.getProducts(req.AutoEntrepreneurID as string, serviceFilters);
  res.status(200).json({ success: true, count: products.length, data: products });
});

// GET /products/alertes
const getAlerts = asyncHandler(async (req: Request, res: Response) => {
  try {
    const products = await productService.getProductAlerts(req.AutoEntrepreneurID as string);
    res.status(200).json({ success: true, count: products.length, data: products });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message || "Failed to get alerts" });
  }
});

// GET /products/search?articleName=...
const getProductByName = asyncHandler(async (req: Request, res: Response) => {
  if (!req.AutoEntrepreneurID) {
    return res.status(401).json({ success: false, error: "User not authenticated" });
  }
  try {
    const articleName = req.query.articleName as string | undefined;
    if (!articleName) {
      return res.status(400).json({ success: false, error: "articleName query param required" });
    }
    const product = await productService.getProductByName(articleName, req.AutoEntrepreneurID as string);
    if (!product) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// GET /products/:id
const getProduct = asyncHandler(async (req: Request, res: Response) => {
  try {
    const id = getParamId(req.params.id);
    const product = await productService.getProductById(id, req.AutoEntrepreneurID as string);
    if (!product) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message || "Invalid ID parameter" });
  }
});

// POST /products
const createProduct = asyncHandler(async (req: Request, res: Response) => {
  try {
    const body = req.body as CreateProductInput;
    let unitPrice: number;
    if (typeof body.unitPrice === 'string') {
      unitPrice = parseFloat(body.unitPrice);
      if (isNaN(unitPrice)) throw new Error("Invalid unitPrice value");
    } else {
      unitPrice = body.unitPrice;
    }
    const product = await productService.createProduct({
      ...body,
      unitPrice,
      autoEntrepreneurId: req.AutoEntrepreneurID as string
    });
    res.status(201).json({ success: true, data: product });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message || "Failed to create product" });
  }
});

// PUT /products/:id
const updateProduct = asyncHandler(async (req: Request, res: Response) => {
  try {
    const id = getParamId(req.params.id);
    const body = req.body as UpdateProductInput;
    const parsedData: UpdateProductInput = { ...body };
    if (body.unitPrice !== undefined && typeof body.unitPrice === 'string') {
      const unitPrice = parseFloat(body.unitPrice);
      if (isNaN(unitPrice)) throw new Error("Invalid unitPrice value");
      parsedData.unitPrice = unitPrice;
    }
    const product = await productService.updateProduct(id, req.AutoEntrepreneurID as string, parsedData);
    if (!product) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message || "Failed to update product" });
  }
});

// PATCH /products/:id/stock
const updateStock = asyncHandler(async (req: Request, res: Response) => {
  try {
    const id = getParamId(req.params.id);
    const { quantity, reason } = req.body as UpdateStockInput & { reason?: string };
    const product = await productService.updateStock(id, req.AutoEntrepreneurID as string, quantity);
    if (!product) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message || "Failed to update stock" });
  }
});

// DELETE /products/:id
const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
  try {
    const id = getParamId(req.params.id);

    const existing = await productService.getProductById(id, req.AutoEntrepreneurID as string);
    if (!existing) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }

    const isUsed = await productService.checkProductUsage(id);
    if (isUsed) {
      return res.status(400).json({ success: false, error: "Cannot delete this product as it is used in invoices or quotes" });
    }

    await productService.deleteProduct(id, req.AutoEntrepreneurID as string);
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message || "Failed to delete product" });
  }
});

export const productController = {
  getProducts,
  getAlerts,
  getProduct,
  getProductByName,
  createProduct,
  updateProduct,
  updateStock,
  deleteProduct
};