import { PrismaClient } from '../../../../generated/prisma/client.js';// import { Prisma } from "@prisma/client";
// import { PrismaClient } from "@prisma/client";
import { prisma } from "../../../lib/prisma.js";
import type { Prisma } from "../../../../generated/prisma/browser.js";

import type { 
  CreateServiceInput, 
  UpdateServiceInput, 
  ServiceFilters,
  ServiceWithItem 
} from './service.types.js';


export class ServiceService {
  
  async createService(data: CreateServiceInput & { autoEntrepreneurId: string }): Promise<any> {
    if (!data.hourlyRate && !data.fixedRate) {
      throw new Error('At least one rate (hourly or fixed) is required');
    }

    return prisma.$transaction(async (tx: PrismaClient) => {
      const item = await tx.item.create({
        data: {
          name: data.name,
          description: data.description,
          unit: data.unit,
          category: data.category,
          isActive: true
        }
      });

      const service = await tx.service.create({
        data: {
          id: item.id,
          itemId: item.id,
          hourlyRate: data.hourlyRate,
          fixedRate: data.fixedRate,
          estimatedDuration: data.estimatedDuration,
          AutoEntrepreneurId: data.autoEntrepreneurId
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
          AutoEntrepreneurId: autoEntrepreneurId

      }
    };

    if (filters?.category) {
      whereClause.category = filters.category;
    }
    
    if (filters?.name) {
      whereClause.name = {
        contains: filters.name,
      };
    }

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
          AutoEntrepreneurId: autoEntrepreneurId
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
    if (data.hourlyRate === null && data.fixedRate === null) {
      throw new Error('At least one rate (hourly or fixed) must be provided');
    }

    return prisma.$transaction(async (tx: PrismaClient) => {
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

      const serviceUpdateData: Prisma.ServiceUpdateInput = {};
      if (data.hourlyRate !== undefined) serviceUpdateData.hourlyRate = data.hourlyRate;
      if (data.fixedRate !== undefined) serviceUpdateData.fixedRate = data.fixedRate;
      if (data.estimatedDuration !== undefined) serviceUpdateData.estimatedDuration = data.estimatedDuration;

      if (Object.keys(serviceUpdateData).length > 0) {
        await tx.service.update({
          where: { 
            id,
            AutoEntrepreneurId: autoEntrepreneurId
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { prisma } from "../../../lib/prisma.js";
// import type { Prisma } from "../../../../generated/prisma/browser.js";

// import type { 
//   CreateServiceInput, 
//   UpdateServiceInput, 
//   ServiceFilters,
//   ServiceWithItem 
// } from './service.types.js';

// export class ServiceService {
  
//   async createService(data: CreateServiceInput & { autoEntrepreneurId: string }): Promise<any> {
//     if (!data.hourlyRate && !data.fixedRate) {
//       throw new Error('At least one rate (hourly or fixed) is required');
//     }

//     return prisma.$transaction(async (tx: any) => {
//       const item = await tx.item.create({
//         data: {
//           name: data.name,
//           description: data.description,
//           unit: data.unit,
//           category: data.category,
//           isActive: true
//         }
//       });

//       const service = await tx.service.create({
//         data: {
//           id: item.id,
//           itemId: item.id,
//           hourlyRate: data.hourlyRate,
//           fixedRate: data.fixedRate,
//           estimatedDuration: data.estimatedDuration,
//           autoEntrepreneurId: data.autoEntrepreneurId
//         }
//       });

//       return {
//         ...item,
//         service
//       };
//     });
//   }

//   async getServices(autoEntrepreneurId: string, filters?: ServiceFilters): Promise<ServiceWithItem[]> {
//     const whereClause: Prisma.ItemWhereInput = {
//       isActive: true,
//       service: {
//         AutoEntrepreneurId: autoEntrepreneurId
//       }
//     };

//     if (filters?.category) {
//       whereClause.category = filters.category;
//     }
    
//     if (filters?.name) {
//       whereClause.name = {
//         contains: filters.name,
//         // mode: 'insensitive' as Prisma.QueryMode
//       };
//     }

//     if (filters?.rateType) {
//       if (filters.rateType === 'hourly') {
//         whereClause.service = {
//           hourlyRate: { not: null }
//         };
//       } else if (filters.rateType === 'fixed') {
//         whereClause.service = {
//           fixedRate: { not: null }
//         };
//       }
//     }

//     const services = await prisma.item.findMany({
//       where: whereClause,
//       include: {
//         service: true
//       },
//       orderBy: {
//         creationDate: 'desc'
//       }
//     });

//     return services as ServiceWithItem[];
//   }

//   async getServiceById(id: string, autoEntrepreneurId: string): Promise<ServiceWithItem | null> {
//     const service = await prisma.item.findFirst({
//       where: {
//         id,
//         isActive: true,
//         service: {
//           AutoEntrepreneurId: autoEntrepreneurId
//         }
//       },
//       include: {
//         service: true
//       }
//     });

//     return service as ServiceWithItem | null;
//   }

//   async getServiceByName(articleName: string, autoEntrepreneurId: string): Promise<ServiceWithItem | null> {
//     const service = await prisma.item.findMany({
//       where: {
//         OR: [
//           { name: articleName }
//         ],
//         isActive: true,
//         service: {
//           AutoEntrepreneurId: autoEntrepreneurId
//         }
//       },
//       include: {
//         service: true
//       }
//     });

//     return service as unknown as ServiceWithItem | null;
//   }

//   async updateService(
//     id: string, 
//     autoEntrepreneurId: string, 
//     data: UpdateServiceInput
//   ): Promise<ServiceWithItem | null> {
//     if (data.hourlyRate === null && data.fixedRate === null) {
//       throw new Error('At least one rate (hourly or fixed) must be provided');
//     }

//     return prisma.$transaction(async (tx) => {
//       const itemUpdateData: Prisma.ItemUpdateInput = {};
//       if (data.name !== undefined) itemUpdateData.name = data.name;
//       if (data.description !== undefined) itemUpdateData.description = data.description;
//       if (data.unit !== undefined) itemUpdateData.unit = data.unit;
//       if (data.category !== undefined) itemUpdateData.category = data.category;

//       if (Object.keys(itemUpdateData).length > 0) {
//         await tx.item.update({
//           where: { id },
//           data: itemUpdateData
//         });
//       }

//       const serviceUpdateData: Prisma.ServiceUpdateInput = {};
//       if (data.hourlyRate !== undefined) serviceUpdateData.hourlyRate = data.hourlyRate;
//       if (data.fixedRate !== undefined) serviceUpdateData.fixedRate = data.fixedRate;
//       if (data.estimatedDuration !== undefined) serviceUpdateData.estimatedDuration = data.estimatedDuration;

//       if (Object.keys(serviceUpdateData).length > 0) {
//         await tx.service.update({
//           where: { 
//             id,
//             AutoEntrepreneurId: autoEntrepreneurId
//           },
//           data: serviceUpdateData
//         });
//       }

//       return this.getServiceById(id, autoEntrepreneurId);
//     });
//   }

//   async deleteService(id: string, autoEntrepreneurId: string): Promise<void> {
//     await prisma.item.update({
//       where: { id },
//       data: {
//         isActive: false
//       }
//     });
//   }

//   async checkServiceUsage(itemId: string): Promise<boolean> {
//     const [invoiceLines, quoteLines] = await Promise.all([
//       prisma.invoiceLine.count({
//         where: { serviceId: itemId }
//       }),
//       prisma.quoteLine.count({
//         where: { serviceId: itemId }
//       })
//     ]);

//     return invoiceLines > 0 || quoteLines > 0;
//   }
// }
