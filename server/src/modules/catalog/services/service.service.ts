import { prisma } from '../../../lib/prisma';
import { CreateServiceDTO, UpdateServiceDTO, ServiceResponse, ServiceListResponse } from './service.types';
import { AppError } from '../../../utils/errorHandler';
import { Prisma } from '../../../generated/prisma';

export class ServiceService {
  async createService(
    autoEntrepreneurId: string,
    data: CreateServiceDTO
  ): Promise<ServiceResponse> {
    try {
      // Validate that at least one rate is provided
      if (!data.hourlyRate && !data.fixedRate) {
        throw new AppError('Either hourly rate or fixed rate must be provided', 400);
      }

      // Create item first, then service
      const service = await prisma.service.create({
        data: {
          hourlyRate: data.hourlyRate ?? null,
          fixedRate: data.fixedRate ?? null,
          estimatedDuration: data.estimatedDuration ?? null,
          AutoEntrepreneurId: autoEntrepreneurId,
          item: {
            create: {
              name: data.name,
              description: data.description,
              unit: data.unit,
              category: data.category,
              isActive: data.isActive ?? true,
            },
          },
        },
        include: {
          item: true,
        },
      });

      return this.formatServiceResponse(service);
    } catch (error) {
      if (error instanceof AppError) throw error;
      console.error('Error creating service:', error);
      throw new AppError('Failed to create service', 500);
    }
  }

  async getServiceById(
    autoEntrepreneurId: string,
    serviceId: string
  ): Promise<ServiceResponse> {
    const service = await prisma.service.findFirst({
      where: {
        id: serviceId,
        AutoEntrepreneurId: autoEntrepreneurId,
      },
      include: {
        item: true,
      },
    });

    if (!service) {
      throw new AppError('Service not found', 404);
    }

    return this.formatServiceResponse(service);
  }

  async listServices(
    autoEntrepreneurId: string,
    page: number = 1,
    limit: number = 10,
    search?: string,
    category?: string,
    isActive?: boolean
  ): Promise<ServiceListResponse> {
    const skip = (page - 1) * limit;

    const where: Prisma.ServiceWhereInput = {
      AutoEntrepreneurId: autoEntrepreneurId,
      item: {
        ...(search && {
          OR: [
            { name: { contains: search } },
            { description: { contains: search } },
          ],
        }),
        ...(category && { category }),
        ...(isActive !== undefined && { isActive }),
      },
    };

    const [services, total] = await Promise.all([
      prisma.service.findMany({
        where,
        include: {
          item: true,
        },
        skip,
        take: limit,
        orderBy: {
          item: {
            creationDate: 'desc',
          },
        },
      }),
      prisma.service.count({ where }),
    ]);

    return {
      services: services.map((s) => this.formatServiceResponse(s)),
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async updateService(
    autoEntrepreneurId: string,
    serviceId: string,
    data: UpdateServiceDTO
  ): Promise<ServiceResponse> {
    try {
      // Check if service exists and belongs to auto-entrepreneur
      const existingService = await prisma.service.findFirst({
        where: {
          id: serviceId,
          AutoEntrepreneurId: autoEntrepreneurId,
        },
        include: {
          item: true,
        },
      });

      if (!existingService) {
        throw new AppError('Service not found', 404);
      }

      // Update item and service
      const service = await prisma.service.update({
        where: { id: serviceId },
        data: {
          ...(data.hourlyRate !== undefined && { hourlyRate: data.hourlyRate }),
          ...(data.fixedRate !== undefined && { fixedRate: data.fixedRate }),
          ...(data.estimatedDuration !== undefined && { estimatedDuration: data.estimatedDuration }),
          item: {
            update: {
              ...(data.name && { name: data.name }),
              ...(data.description !== undefined && { description: data.description }),
              ...(data.unit && { unit: data.unit }),
              ...(data.category !== undefined && { category: data.category }),
              ...(data.isActive !== undefined && { isActive: data.isActive }),
            },
          },
        },
        include: {
          item: true,
        },
      });

      return this.formatServiceResponse(service);
    } catch (error) {
      if (error instanceof AppError) throw error;
      console.error('Error updating service:', error);
      throw new AppError('Failed to update service', 500);
    }
  }

  async deleteService(autoEntrepreneurId: string, serviceId: string): Promise<void> {
    try {
      // Check if service exists and belongs to auto-entrepreneur
      const service = await prisma.service.findFirst({
        where: {
          id: serviceId,
          AutoEntrepreneurId: autoEntrepreneurId,
        },
        include: {
          item: true,
          invoiceLines: true,
          quoteLines: true,
        },
      });

      if (!service) {
        throw new AppError('Service not found', 404);
      }

      // Check if service is used in any invoices or quotes
      if (service.invoiceLines.length > 0 || service.quoteLines.length > 0) {
        throw new AppError(
          'Cannot delete service that is used in invoices or quotes. Consider deactivating it instead.',
          400
        );
      }

      // Delete service and its associated item
      await prisma.service.delete({
        where: { id: serviceId },
      });

      await prisma.item.delete({
        where: { id: service.itemId },
      });
    } catch (error) {
      if (error instanceof AppError) throw error;
      console.error('Error deleting service:', error);
      throw new AppError('Failed to delete service', 500);
    }
  }

  async getServicesByCategory(
    autoEntrepreneurId: string,
    category: string
  ): Promise<ServiceResponse[]> {
    const services = await prisma.service.findMany({
      where: {
        AutoEntrepreneurId: autoEntrepreneurId,
        item: {
          category,
          isActive: true,
        },
      },
      include: {
        item: true,
      },
      orderBy: {
        item: {
          name: 'asc',
        },
      },
    });

    return services.map((s) => this.formatServiceResponse(s));
  }

  private formatServiceResponse(service: any): ServiceResponse {
    return {
      id: service.id,
      name: service.item.name,
      description: service.item.description,
      unit: service.item.unit,
      category: service.item.category,
      hourlyRate: service.hourlyRate ? Number(service.hourlyRate) : null,
      fixedRate: service.fixedRate ? Number(service.fixedRate) : null,
      estimatedDuration: service.estimatedDuration,
      isActive: service.item.isActive,
      creationDate: service.item.creationDate,
      updateDate: service.item.updateDate,
      AutoEntrepreneurId: service.AutoEntrepreneurId,
    };
  }
}

export const serviceService = new ServiceService();
