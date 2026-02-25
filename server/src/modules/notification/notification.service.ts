// notification.service.ts
import { prisma } from '../../lib/prisma.js';
import { NotificationType } from '../../../generated/prisma/enums.js';

export interface CreateNotificationInput {
  autoEntrepreneurId: string;
  type: NotificationType;
  title: string;
  message: string;
  associatedEntityType: string;
  associatedEntityId: string;
  priority?: 'low' | 'medium' | 'high';
}

const createNotification = async (input: CreateNotificationInput) => {
  return prisma.notification.create({
    data: {
      AutoEntrepreneurId: input.autoEntrepreneurId,
      type: input.type,
      title: input.title,
      message: input.message,
      associatedEntityType: input.associatedEntityType,
      associatedEntityId: input.associatedEntityId,
      priority: input.priority ?? 'medium',
    },
  });
};

const createEcheanceNotification = async (
  autoEntrepreneurId: string,
  entityType: 'tax' | 'contribution',
  entityId: string,
  entityLabel: string,
  daysLeft: number,
) => {
  const type = entityType === 'tax' ? NotificationType.TAX : NotificationType.CONTRIBUTION;
  return createNotification({
    autoEntrepreneurId,
    type,
    title: `Échéance dans ${daysLeft} jour(s)`,
    message: `${entityLabel} arrive à échéance dans ${daysLeft} jour(s).`,
    associatedEntityType: entityType,
    associatedEntityId: entityId,
    priority: daysLeft <= 3 ? 'high' : 'medium',
  });
};

const createPaiementRecuNotification = async (
  autoEntrepreneurId: string,
  paymentId: string,
  invoiceNumber: string,
  amount: number,
) => {
  return createNotification({
    autoEntrepreneurId,
    type: NotificationType.PAYMENT,
    title: 'Paiement reçu',
    message: `Un paiement de ${amount} MAD a été enregistré pour la facture ${invoiceNumber}.`,
    associatedEntityType: 'payment',
    associatedEntityId: paymentId,
    priority: 'low',
  });
};

const createRetardNotification = async (
  autoEntrepreneurId: string,
  entityType: 'invoice' | 'contribution',
  entityId: string,
  entityLabel: string,
) => {
  const type = entityType === 'invoice' ? NotificationType.INVOICE : NotificationType.CONTRIBUTION;
  return createNotification({
    autoEntrepreneurId,
    type,
    title: 'Paiement en retard',
    message: `${entityLabel} est en retard de paiement.`,
    associatedEntityType: entityType,
    associatedEntityId: entityId,
    priority: 'high',
  });
};

const getAllNotifications = async (
  autoEntrepreneurId: string,
  page: number,
  limit: number,
  filters?: { type?: NotificationType; isRead?: boolean },
) => {
  const skip = (page - 1) * limit;
  const where: Record<string, unknown> = { AutoEntrepreneurId: autoEntrepreneurId };
  if (filters?.type) where['type'] = filters.type;
  if (filters?.isRead !== undefined) where['isRead'] = filters.isRead;

  const [notifications, total] = await Promise.all([
    prisma.notification.findMany({
      where,
      orderBy: { creationDate: 'desc' },
      skip,
      take: limit,
    }),
    prisma.notification.count({ where }),
  ]);

  return { notifications, total, page, limit };
};

const getUnreadCount = async (autoEntrepreneurId: string) => {
  return prisma.notification.count({
    where: { AutoEntrepreneurId: autoEntrepreneurId, isRead: false },
  });
};

const markAsRead = async (autoEntrepreneurId: string, notificationId: string) => {
  return prisma.notification.updateMany({
    where: { id: notificationId, AutoEntrepreneurId: autoEntrepreneurId },
    data: { isRead: true },
  });
};

const markAllAsRead = async (autoEntrepreneurId: string) => {
  return prisma.notification.updateMany({
    where: { AutoEntrepreneurId: autoEntrepreneurId, isRead: false },
    data: { isRead: true },
  });
};

const deleteNotification = async (autoEntrepreneurId: string, notificationId: string) => {
  return prisma.notification.deleteMany({
    where: { id: notificationId, AutoEntrepreneurId: autoEntrepreneurId },
  });
};

export const notificationService = {
  createNotification,
  createEcheanceNotification,
  createPaiementRecuNotification,
  createRetardNotification,
  getAllNotifications,
  getUnreadCount,
  markAsRead,
  markAllAsRead,
  deleteNotification,
};