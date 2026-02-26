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
export declare const notificationService: {
    createNotification: (input: CreateNotificationInput) => Promise<{
        id: string;
        creationDate: Date;
        priority: string;
        type: NotificationType;
        message: string;
        AutoEntrepreneurId: string;
        title: string;
        associatedEntityType: string;
        associatedEntityId: string;
        isRead: boolean;
    }>;
    createEcheanceNotification: (autoEntrepreneurId: string, entityType: "tax" | "contribution", entityId: string, entityLabel: string, daysLeft: number) => Promise<{
        id: string;
        creationDate: Date;
        priority: string;
        type: NotificationType;
        message: string;
        AutoEntrepreneurId: string;
        title: string;
        associatedEntityType: string;
        associatedEntityId: string;
        isRead: boolean;
    }>;
    createPaiementRecuNotification: (autoEntrepreneurId: string, paymentId: string, invoiceNumber: string, amount: number) => Promise<{
        id: string;
        creationDate: Date;
        priority: string;
        type: NotificationType;
        message: string;
        AutoEntrepreneurId: string;
        title: string;
        associatedEntityType: string;
        associatedEntityId: string;
        isRead: boolean;
    }>;
    createRetardNotification: (autoEntrepreneurId: string, entityType: "invoice" | "contribution", entityId: string, entityLabel: string) => Promise<{
        id: string;
        creationDate: Date;
        priority: string;
        type: NotificationType;
        message: string;
        AutoEntrepreneurId: string;
        title: string;
        associatedEntityType: string;
        associatedEntityId: string;
        isRead: boolean;
    }>;
    getAllNotifications: (autoEntrepreneurId: string, page: number, limit: number, filters?: {
        type?: NotificationType;
        isRead?: boolean;
    }) => Promise<{
        notifications: {
            id: string;
            creationDate: Date;
            priority: string;
            type: NotificationType;
            message: string;
            AutoEntrepreneurId: string;
            title: string;
            associatedEntityType: string;
            associatedEntityId: string;
            isRead: boolean;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    getUnreadCount: (autoEntrepreneurId: string) => Promise<number>;
    markAsRead: (autoEntrepreneurId: string, notificationId: string) => Promise<import("../../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
    markAllAsRead: (autoEntrepreneurId: string) => Promise<import("../../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
    deleteNotification: (autoEntrepreneurId: string, notificationId: string) => Promise<import("../../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
};
//# sourceMappingURL=notification.service.d.ts.map