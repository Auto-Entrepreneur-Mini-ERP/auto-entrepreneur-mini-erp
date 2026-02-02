import { prisma } from '../../../../lib/prisma';
import { AppError } from '../../../../utils/errorHandler';

export async function serviceExists(
  serviceId: string,
  autoEntrepreneurId: string
): Promise<boolean> {
  const service = await prisma.service.findFirst({
    where: {
      id: serviceId,
      AutoEntrepreneurId: autoEntrepreneurId,
    },
  });

  return !!service;
}

export async function validateServiceExists(
  serviceId: string,
  autoEntrepreneurId: string
): Promise<void> {
  const exists = await serviceExists(serviceId, autoEntrepreneurId);
  
  if (!exists) {
    throw new AppError('Service not found', 404);
  }
}
