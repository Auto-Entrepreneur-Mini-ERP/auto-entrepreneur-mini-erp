export interface CreateServiceInput {
  name: string;
  description?: string;
  hourlyRate?: number;
  fixedRate?: number;
  estimatedDuration?: number;
  unit: UnitMeasure;
  category: string;
}

export interface UpdateServiceInput {
  name?: string;
  description?: string;
  hourlyRate?: number;
  fixedRate?: number;
  estimatedDuration?: number;
  unit?: UnitMeasure;
  category?: string;
}

export interface ServiceFilters {
  category?: string;
  name?: string;
  rateType?: 'hourly' | 'fixed';
}

export type UnitMeasure = 
  | 'piece'
  | 'kilogram'
  | 'liter'
  | 'meter'
  | 'hour'
  | 'day';

export interface ServiceWithItem {
  id: string;
  name: string;
  description: string | null;
  unit: string;
  category: string | null;
  isActive: boolean;
  creationDate: Date;
  updateDate: Date;
  service: {
    hourlyRate: number | null;
    fixedRate: number | null;
    estimatedDuration: number | null;
    autoEntrepreneurId: string;
  } | null;
}