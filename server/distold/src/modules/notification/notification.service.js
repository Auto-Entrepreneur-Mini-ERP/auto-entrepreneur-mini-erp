// notification.service.ts
import { prisma } from '../../lib/prisma.js';
import { NotificationType } from '../../../generated/prisma/enums.js';
const createNotification = async (input) => {
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
const createEcheanceNotification = async (autoEntrepreneurId, entityType, entityId, entityLabel, daysLeft) => {
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
const createPaiementRecuNotification = async (autoEntrepreneurId, paymentId, invoiceNumber, amount) => {
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
const createRetardNotification = async (autoEntrepreneurId, entityType, entityId, entityLabel) => {
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
const getAllNotifications = async (autoEntrepreneurId, page, limit, filters) => {
    const skip = (page - 1) * limit;
    const where = { AutoEntrepreneurId: autoEntrepreneurId };
    if (filters?.type)
        where['type'] = filters.type;
    if (filters?.isRead !== undefined)
        where['isRead'] = filters.isRead;
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
const getUnreadCount = async (autoEntrepreneurId) => {
    return prisma.notification.count({
        where: { AutoEntrepreneurId: autoEntrepreneurId, isRead: false },
    });
};
const markAsRead = async (autoEntrepreneurId, notificationId) => {
    return prisma.notification.updateMany({
        where: { id: notificationId, AutoEntrepreneurId: autoEntrepreneurId },
        data: { isRead: true },
    });
};
const markAllAsRead = async (autoEntrepreneurId) => {
    return prisma.notification.updateMany({
        where: { AutoEntrepreneurId: autoEntrepreneurId, isRead: false },
        data: { isRead: true },
    });
};
const deleteNotification = async (autoEntrepreneurId, notificationId) => {
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
//# sourceMappingURL=notification.service.js.map