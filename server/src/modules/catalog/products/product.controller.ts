import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ProductService } from "./product.service.js";
import type {
  CreateProductInput,
  UpdateProductInput,
  UpdateStockInput,
  ProductFiltersInput,
  ProductResponse
} from "./product.types.js";

const productService = new ProductService();

const getParamId = (id: string | string[] | undefined): string => {
  if (!id) {
    throw new Error("ID parameter is required");
  }
  
  if (Array.isArray(id)) {
    const firstId = id[0];
    if (!firstId) {
      throw new Error("ID array is empty");
    }
    return firstId;
  }
  
  return id;
};

// Helper to parse query params
const parseProductFilters = (query: any): ProductFiltersInput => {
  const result: ProductFiltersInput = {};
  
  if (query.category !== undefined) {
    result.category = query.category as string;
  }
  
  if (query.name !== undefined) {
    result.name = query.name as string;
  }
  
  if (query.minPrice !== undefined) {
    result.minPrice = query.minPrice as string | number;
  }
  
  if (query.maxPrice !== undefined) {
    result.maxPrice = query.maxPrice as string | number;
  }
  
  if (query.lowStock !== undefined) {
    result.lowStock = query.lowStock as boolean | string;
  }
  
  return result;
};
interface ServiceFilters {
  category?: string | undefined;
  name?: string | undefined;
  minPrice?: number | undefined;
  maxPrice?: number | undefined;
  lowStock?: boolean | undefined;
}

// Helper to convert filters input to service filters
const convertFiltersToService = (filters: ProductFiltersInput): ServiceFilters => {
  const result: ServiceFilters = {};
  
  if (filters.category !== undefined) {
    result.category = filters.category;
  }
  
  if (filters.name !== undefined) {
    result.name = filters.name;
  }
  
  if (filters.minPrice !== undefined) {
    const num = Number(filters.minPrice);
    if (!isNaN(num)) {
      result.minPrice = num;
    }
  }
  
  if (filters.maxPrice !== undefined) {
    const num = Number(filters.maxPrice);
    if (!isNaN(num)) {
      result.maxPrice = num;
    }
  }
  
  if (filters.lowStock !== undefined) {
    result.lowStock = filters.lowStock === true || filters.lowStock === 'true';
  }
  
  return result;
};


const getProducts = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user?.id) {
    const response: ProductResponse = {
      success: false,
      error: "User not authenticated"
    };
    return res.status(401).json(response);
  }

  const filtersInput = parseProductFilters(req.query);
  const serviceFilters = convertFiltersToService(filtersInput);

  const products = await productService.getProducts(req.user.id, serviceFilters);

  const response: ProductResponse = {
    success: true,
    count: products.length,
    data: products
  };
  
  res.status(200).json(response);
});


const getProduct = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user?.id) {
    const response: ProductResponse = {
      success: false,
      error: "User not authenticated"
    };
    return res.status(401).json(response);
  }

  try {
    const id = getParamId(req.params.id);

    const product = await productService.getProductById(id, req.user.id);

    if (!product) {
      const response: ProductResponse = {
        success: false,
        error: "Product not found"
      };
      return res.status(404).json(response);
    }

    const response: ProductResponse = {
      success: true,
      data: product
    };
    
    res.status(200).json(response);
  } catch (error: any) {
    const response: ProductResponse = {
      success: false,
      error: error.message || "Invalid ID parameter"
    };
    res.status(400).json(response);
  }
});


const createProduct = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user?.id) {
    const response: ProductResponse = {
      success: false,
      error: "User not authenticated"
    };
    return res.status(401).json(response);
  }

  try {
    const body = req.body as CreateProductInput;
    
    let unitPrice: number;
    if (typeof body.unitPrice === 'string') {
      unitPrice = parseFloat(body.unitPrice);
      if (isNaN(unitPrice)) {
        throw new Error("Invalid unitPrice value");
      }
    } else {
      unitPrice = body.unitPrice;
    }

    const parsedData: CreateProductInput = {
      ...body,
      unitPrice
    };

    const product = await productService.createProduct({
      ...parsedData,
      autoEntrepreneurId: req.user.id
    });

    const response: ProductResponse = {
      success: true,
      data: product
    };
    
    res.status(201).json(response);
  } catch (error: any) {
    const response: ProductResponse = {
      success: false,
      error: error.message || "Failed to create product"
    };
    res.status(400).json(response);
  }
});


const updateProduct = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user?.id) {
    const response: ProductResponse = {
      success: false,
      error: "User not authenticated"
    };
    return res.status(401).json(response);
  }

  try {
    const id = getParamId(req.params.id);
    const body = req.body as UpdateProductInput;
    
    const parsedData: UpdateProductInput = { ...body };
    if (body.unitPrice !== undefined && typeof body.unitPrice === 'string') {
      const unitPrice = parseFloat(body.unitPrice);
      if (isNaN(unitPrice)) {
        throw new Error("Invalid unitPrice value");
      }
      parsedData.unitPrice = unitPrice;
    }

    const product = await productService.updateProduct(id, req.user.id, parsedData);

    if (!product) {
      const response: ProductResponse = {
        success: false,
        error: "Product not found"
      };
      return res.status(404).json(response);
    }

    const response: ProductResponse = {
      success: true,
      data: product
    };
    
    res.status(200).json(response);
  } catch (error: any) {
    const response: ProductResponse = {
      success: false,
      error: error.message || "Failed to update product"
    };
    res.status(400).json(response);
  }
});


const updateStock = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user?.id) {
    const response: ProductResponse = {
      success: false,
      error: "User not authenticated"
    };
    return res.status(401).json(response);
  }

  try {
    const id = getParamId(req.params.id);
    const { quantity } = req.body as UpdateStockInput;

    const product = await productService.updateStock(id, req.user.id, quantity);

    if (!product) {
      const response: ProductResponse = {
        success: false,
        error: "Product not found"
      };
      return res.status(404).json(response);
    }

    const response: ProductResponse = {
      success: true,
      data: product
    };
    
    res.status(200).json(response);
  } catch (error: any) {
    const response: ProductResponse = {
      success: false,
      error: error.message || "Failed to update stock"
    };
    res.status(400).json(response);
  }
});


const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user?.id) {
    const response: ProductResponse = {
      success: false,
      error: "User not authenticated"
    };
    return res.status(401).json(response);
  }

  try {
    const id = getParamId(req.params.id);

    const isUsed = await productService.checkProductUsage(id);

    if (isUsed) {
      const response: ProductResponse = {
        success: false,
        error: "Cannot delete this product as it is used in invoices or quotes"
      };
      return res.status(400).json(response);
    }

    await productService.deleteProduct(id, req.user.id);
    res.status(204).send();
  } catch (error: any) {
    const response: ProductResponse = {
      success: false,
      error: error.message || "Failed to delete product"
    };
    res.status(400).json(response);
  }
});

export const productController = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  updateStock,
  deleteProduct
};