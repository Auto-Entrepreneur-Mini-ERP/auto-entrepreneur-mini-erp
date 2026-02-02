import { prisma } from '../../../../lib/prisma';
import { AppError } from '../../../../utils/errorHandler';

export async function productExists(
  productId: string,
  autoEntrepreneurId: string
): Promise<boolean> {
  const product = await prisma.product.findFirst({
    where: {
      id: productId,
      AutoEntrepreneurId: autoEntrepreneurId,
    },
  });

  return !!product;
}

export async function validateProductExists(
  productId: string,
  autoEntrepreneurId: string
): Promise<void> {
  const exists = await productExists(productId, autoEntrepreneurId);
  
  if (!exists) {
    throw new AppError('Product not found', 404);
  }
}

export async function validateProductReference(
  reference: string,
  autoEntrepreneurId: string,
  excludeProductId?: string
): Promise<void> {
  const product = await prisma.product.findFirst({
    where: {
      reference,
      AutoEntrepreneurId: autoEntrepreneurId,
      ...(excludeProductId && { id: { not: excludeProductId } }),
    },
  });

  if (product) {
    throw new AppError('Product with this reference already exists', 400);
  }
}
