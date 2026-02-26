import type { CreateServiceInput, UpdateServiceInput, ServiceFilters, ServiceWithItem } from './service.types.js';
export declare class ServiceService {
    createService(data: CreateServiceInput & {
        autoEntrepreneurId: string;
    }): Promise<any>;
    getServices(autoEntrepreneurId: string, filters?: ServiceFilters): Promise<ServiceWithItem[]>;
    getServiceById(id: string, autoEntrepreneurId: string): Promise<ServiceWithItem | null>;
    updateService(id: string, autoEntrepreneurId: string, data: UpdateServiceInput): Promise<ServiceWithItem | null>;
    deleteService(id: string, autoEntrepreneurId: string): Promise<void>;
    checkServiceUsage(itemId: string): Promise<boolean>;
}
//# sourceMappingURL=service.service.d.ts.map