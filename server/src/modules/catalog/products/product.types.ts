import { Request } from 'express';

export interface ProductRequest extends Request {
  body: CreateProductDTO | UpdateProductDTO;
  params: {
    id?: string;
  };
  query: {
    page?: string;
    limit?: string;
    search?: string;
    category?: string;
    isActive?: string;
  };
}

export interface CreateProductDTO {
  name: string;
  description?: string;
  unit: string;
  category?: string;
  unitPrice: number;
  reference?: string;
  stockQuantity?: number;
  alertThreshold?: number;
  isActive?: boolean;
}

export interface UpdateProductDTO {
  name?: string;
  description?: string;
  unit?: string;
  category?: string;
  unitPrice?: number;
  reference?: string;
  stockQuantity?: number;
  alertThreshold?: number;
  isActive?: boolean;
}

export interface ProductResponse {
  id: string;
  name: string;
  description: string | null;
  unit: string;
  category: string | null;
  unitPrice: number;
  reference: string | null;
  stockQuantity: number;
  alertThreshold: number;
  isActive: boolean;
  creationDate: Date;
  updateDate: Date;
  AutoEntrepreneurId: string;
}

export interface ProductListResponse {
  products: ProductResponse[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
