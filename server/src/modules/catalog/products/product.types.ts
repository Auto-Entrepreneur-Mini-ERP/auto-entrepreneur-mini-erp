
export interface CreateProductInput {
  name: string;
  description?: string | undefined;
  unit: string;
  category?: string | undefined;
  unitPrice: number | string;
  reference?: string | undefined;
  stockQuantity?: number | undefined;
  alertThreshold?: number | undefined;
}

export interface UpdateProductInput extends Partial<CreateProductInput> {
  isActive?: boolean | undefined;
}

export interface UpdateStockInput {
  quantity: number;
}

export interface ProductFilters {
  category?: string | undefined;
  name?: string | undefined;
  minPrice?: number | undefined;
  maxPrice?: number | undefined;
  lowStock?: boolean | undefined;
}

export interface ProductFiltersInput {
  category?: string | undefined;
  name?: string | undefined;
  minPrice?: string | number | undefined;
  maxPrice?: string | number | undefined;
  lowStock?: boolean | string | undefined;
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
  type?: string,
  description?: string | null;
  unit: string;
  category?: string | null;
  isActive: boolean;
  creationDate: Date;
  updateDate: Date;
  product: {
    itemId: string;
    unitPrice: number;
    reference?: string | null;
    stockQuantity: number;
    alertThreshold: number;
    autoEntrepreneurId: string;
  };
}

export interface ProductResponse {
  success: boolean;
  data?: ProductWithItem | ProductWithItem[] | undefined;
  count?: number | undefined;
  error?: string | undefined;
}