export interface CreateProductInput {
  name: string;
  description?: string;
  unitPrice: number;
  reference?: string;
  stockQuantity: number;
  alertThreshold: number;
  unit: UnitMeasure;
  category: string;
}

export interface UpdateProductInput {
  name?: string;
  description?: string;
  unitPrice?: number;
  reference?: string;
  stockQuantity?: number;
  alertThreshold?: number;
  unit?: UnitMeasure;
  category?: string;
}

export interface ProductFilters {
  category?: string;
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  lowStock?: boolean;
}

export type UnitMeasure = 
  | 'piece'
  | 'kilogram'
  | 'liter'
  | 'meter'
  | 'hour'
  | 'day';

export interface ProductWithItem {
  id: string;
  name: string;
  description: string | null;
  unit: string;
  category: string | null;
  isActive: boolean;
  creationDate: Date;
  updateDate: Date;
  product: {
    unitPrice: number;
    reference: string | null;
    stockQuantity: number;
    alertThreshold: number;
    autoEntrepreneurId: string;
  } | null;
}