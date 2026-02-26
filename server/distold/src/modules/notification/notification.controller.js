import { notificationService } from './notification.service.js';
import { NotificationType } from '../../../generated/prisma/enums.js';
const getNotifications = async (req, res) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const page = req.query.page ? parseInt(req.query.page, 10) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : 20;
    const type = req.query.type;
    const isRead = req.query.isRead !== undefined
        ? req.query.isRead === 'true'
        : undefined;
    const filters = {};
    if (type !== undefined) {
        filters.type = type;
    }
    if (isRead !== undefined) {
        filters.isRead = isRead;
    }
    const result = await notificationService.getAllNotifications(autoEntrepreneurId, page, limit, filters);
    return res.status(200).json(result);
};
const getUnreadCount = async (req, res) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const count = await notificationService.getUnreadCount(autoEntrepreneurId);
    return res.status(200).json({ count });
};
const markAsRead = async (req, res) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const { id } = req.params;
    await notificationService.markAsRead(autoEntrepreneurId, id);
    return res.status(200).json({ success: true });
};
const markAllAsRead = async (req, res) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    await notificationService.markAllAsRead(autoEntrepreneurId);
    return res.status(200).json({ success: true });
};
const deleteNotification = async (req, res) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const { id } = req.params;
    await notificationService.deleteNotification(autoEntrepreneurId, id);
    return res.status(200).json({ success: true });
};
export const notificationController = {
    getNotifications,
    getUnreadCount,
    markAsRead,
    markAllAsRead,
    deleteNotification,
};
//# sourceMappingURL=notification.controller.js.map