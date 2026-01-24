import { prisma } from "../lib/prisma.js";
import { PrismaClient } from '../../generated/prisma/client.js';
import type { 
  CreateServiceInput, 
  UpdateServiceInput, 
  ServiceFilters,
  ServiceWithItem 
} from './service.types.js';

const prisma = new PrismaClient();

export class ServiceService {
  
  async createService(data: CreateServiceInput & { autoEntrepreneurId: string }): Promise<any> {
    // Validation: at least one rate
    if (!data.hourlyRate && !data.fixedRate) {
      throw new Error('At least one rate (hourly or fixed) is required');
    }

    return prisma.$transaction(async (tx: PrismaClient) => {
      // Create item
      const item = await tx.item.create({
        data: {
          name: data.name,
          description: data.description,
          unit: data.unit,
          category: data.category,
          isActive: true
        }
      });

      // Create service
      const service = await tx.service.create({
        data: {
          id: item.id,
          itemId: item.id,
          hourlyRate: data.hourlyRate,
          fixedRate: data.fixedRate,
          estimatedDuration: data.estimatedDuration,
          autoEntrepreneurId: data.autoEntrepreneurId
        }
      });

      return {
        ...item,
        service
      };
    });
  }

  async getServices(autoEntrepreneurId: string, filters?: ServiceFilters): Promise<ServiceWithItem[]> {
    const whereClause: Prisma.ItemWhereInput = {
      isActive: true,
      service: {
        autoEntrepreneurId
      }
    };

    // Apply filters
    if (filters?.category) {
      whereClause.category = filters.category;
    }
    
    if (filters?.name) {
      whereClause.name = {
        contains: filters.name,
        mode: 'insensitive' as Prisma.QueryMode
      };
    }

    // Filter by rate type
    if (filters?.rateType) {
      if (filters.rateType === 'hourly') {
        whereClause.service = {
          hourlyRate: { not: null }
        };
      } else if (filters.rateType === 'fixed') {
        whereClause.service = {
          fixedRate: { not: null }
        };
      }
    }

    const services = await prisma.item.findMany({
      where: whereClause,
      include: {
        service: true
      },
      orderBy: {
        creationDate: 'desc'
      }
    });

    return services as ServiceWithItem[];
  }

  async getServiceById(id: string, autoEntrepreneurId: string): Promise<ServiceWithItem | null> {
    const service = await prisma.item.findFirst({
      where: {
        id,
        isActive: true,
        service: {
          autoEntrepreneurId
        }
      },
      include: {
        service: true
      }
    });

    return service as ServiceWithItem | null;
  }

  async updateService(
    id: string, 
    autoEntrepreneurId: string, 
    data: UpdateServiceInput
  ): Promise<ServiceWithItem | null> {
    // Validation: at least one rate should remain
    if (data.hourlyRate === null && data.fixedRate === null) {
      throw new Error('At least one rate (hourly or fixed) must be provided');
    }

    return prisma.$transaction(async (tx: PrismaClient) => {
      // Update item
      const itemUpdateData: Prisma.ItemUpdateInput = {};
      if (data.name !== undefined) itemUpdateData.name = data.name;
      if (data.description !== undefined) itemUpdateData.description = data.description;
      if (data.unit !== undefined) itemUpdateData.unit = data.unit;
      if (data.category !== undefined) itemUpdateData.category = data.category;

      if (Object.keys(itemUpdateData).length > 0) {
        await tx.item.update({
          where: { id },
          data: itemUpdateData
        });
      }

      // Update service
      const serviceUpdateData: Prisma.ServiceUpdateInput = {};
      if (data.hourlyRate !== undefined) serviceUpdateData.hourlyRate = data.hourlyRate;
      if (data.fixedRate !== undefined) serviceUpdateData.fixedRate = data.fixedRate;
      if (data.estimatedDuration !== undefined) serviceUpdateData.estimatedDuration = data.estimatedDuration;

      if (Object.keys(serviceUpdateData).length > 0) {
        await tx.service.update({
          where: { 
            id,
            autoEntrepreneurId
          },
          data: serviceUpdateData
        });
      }

      return this.getServiceById(id, autoEntrepreneurId);
    });
  }

  async deleteService(id: string, autoEntrepreneurId: string): Promise<void> {
    await prisma.item.update({
      where: { id },
      data: {
        isActive: false
      }
    });
  }

  async checkServiceUsage(itemId: string): Promise<boolean> {
    const [invoiceLines, quoteLines] = await Promise.all([
      prisma.invoiceLine.count({
        where: { serviceId: itemId }
      }),
      prisma.quoteLine.count({
        where: { serviceId: itemId }
      })
    ]);

    return invoiceLines > 0 || quoteLines > 0;
  }
}
