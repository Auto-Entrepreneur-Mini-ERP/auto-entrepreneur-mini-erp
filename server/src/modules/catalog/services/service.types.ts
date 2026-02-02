import { Request } from 'express';

export interface ServiceRequest extends Request {
  body: CreateServiceDTO | UpdateServiceDTO;
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

export interface CreateServiceDTO {
  name: string;
  description?: string;
  unit: string;
  category?: string;
  hourlyRate?: number;
  fixedRate?: number;
  estimatedDuration?: number;
  isActive?: boolean;
}

export interface UpdateServiceDTO {
  name?: string;
  description?: string;
  unit?: string;
  category?: string;
  hourlyRate?: number;
  fixedRate?: number;
  estimatedDuration?: number;
  isActive?: boolean;
}

export interface ServiceResponse {
  id: string;
  name: string;
  description: string | null;
  unit: string;
  category: string | null;
  hourlyRate: number | null;
  fixedRate: number | null;
  estimatedDuration: number | null;
  isActive: boolean;
  creationDate: Date;
  updateDate: Date;
  AutoEntrepreneurId: string;
}

export interface ServiceListResponse {
  services: ServiceResponse[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
