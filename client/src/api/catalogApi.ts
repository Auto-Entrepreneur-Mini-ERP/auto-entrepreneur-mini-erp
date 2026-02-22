import { api } from './axios';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  name: string;
  description?: string | null;
  unit: string;
  category?: string | null;
  isActive: boolean;
  creationDate: string;
  updateDate: string;
  product: {
    itemId: string;
    unitPrice: number;
    reference?: string | null;
    stockQuantity: number;
    alertThreshold: number;
    autoEntrepreneurId: string;
  };
}

export interface Service {
  id: string;
  name: string;
  description?: string | null;
  unit: string;
  category?: string | null;
  isActive: boolean;
  creationDate: string;
  updateDate: string;
  service: {
    hourlyRate?: number | null;
    fixedRate?: number | null;
    estimatedDuration?: number | null;
    autoEntrepreneurId: string;
  } | null;
}

export interface CreateProductPayload {
  name: string;
  description?: string;
  unit: string;
  category?: string;
  unitPrice: number;
  reference?: string;
  stockQuantity: number;
  alertThreshold: number;
}

export interface UpdateProductPayload extends Partial<CreateProductPayload> {
  isActive?: boolean;
}

export interface CreateServicePayload {
  name: string;
  description?: string;
  unit: string;
  category?: string;
  hourlyRate?: number;
  fixedRate?: number;
  estimatedDuration?: number;
}

export type UpdateServicePayload = Partial<CreateServicePayload>

export interface ProductFilters {
  name?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  lowStock?: boolean;
}

export interface ServiceFilters {
  name?: string;
  category?: string;
  rateType?: 'hourly' | 'fixed';
}

// ─── Product API ──────────────────────────────────────────────────────────────

export const productApi = {
  getAll: async (filters?: ProductFilters): Promise<Product[]> => {
    const params = new URLSearchParams();
    if (filters?.name) params.set('name', filters.name);
    if (filters?.category) params.set('category', filters.category);
    if (filters?.minPrice !== undefined) params.set('minPrice', String(filters.minPrice));
    if (filters?.maxPrice !== undefined) params.set('maxPrice', String(filters.maxPrice));
    if (filters?.lowStock) params.set('lowStock', 'true');
    const res = await api.get(`/products?${params.toString()}`);
    return res.data.data ?? [];
  },

  getById: async (id: string): Promise<Product> => {
    const res = await api.get(`/products/${id}`);
    return res.data.data;
  },

  create: async (payload: CreateProductPayload): Promise<Product> => {
    const res = await api.post('/products', payload);
    return res.data.data;
  },

  update: async (id: string, payload: UpdateProductPayload): Promise<Product> => {
    const res = await api.put(`/products/${id}`, payload);
    return res.data.data;
  },

  updateStock: async (id: string, quantity: number): Promise<Product> => {
    const res = await api.patch(`/products/${id}/stock`, { quantity });
    return res.data.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/products/${id}`);
  },
};

// ─── Service API ──────────────────────────────────────────────────────────────

export const serviceApi = {
  getAll: async (filters?: ServiceFilters): Promise<Service[]> => {
    const params = new URLSearchParams();
    if (filters?.name) params.set('name', filters.name);
    if (filters?.category) params.set('category', filters.category);
    if (filters?.rateType) params.set('rateType', filters.rateType);
    const res = await api.get(`/services?${params.toString()}`);
    return res.data.data ?? [];
  },

  getById: async (id: string): Promise<Service> => {
    const res = await api.get(`/services/${id}`);
    return res.data.data;
  },

  create: async (payload: CreateServicePayload): Promise<Service> => {
    const res = await api.post('/services', payload);
    return res.data.data;
  },

  update: async (id: string, payload: UpdateServicePayload): Promise<Service> => {
    const res = await api.put(`/services/${id}`, payload);
    return res.data.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/services/${id}`);
  },
};