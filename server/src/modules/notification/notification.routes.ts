import { Router } from 'express';
import { notificationController } from './notification.controller.js';

const router = Router();

router.get('/notifications', notificationController.getNotifications);
router.get('/notifications/count-non-lues', notificationController.getUnreadCount);
router.patch('/notifications/:id/lire', notificationController.markAsRead);
router.post('/notifications/marquer-toutes-lues', notificationController.markAllAsRead);
router.delete('/notifications/:id', notificationController.deleteNotification);

export default router;