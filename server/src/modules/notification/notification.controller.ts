import type { Request, Response } from 'express';
import { notificationService } from './notification.service.js';
import { NotificationType } from '../../../generated/prisma/enums.js';

const getNotifications = async (req: Request, res: Response) => {
  const autoEntrepreneurId = req.AutoEntrepreneurID as string;
  const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
  const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 20;
  const type = req.query.type as NotificationType | undefined;
  const isRead = req.query.isRead !== undefined
    ? req.query.isRead === 'true'
    : undefined;

  const result = await notificationService.getAllNotifications(
    autoEntrepreneurId, page, limit, { type, isRead }
  );
  return res.status(200).json(result);
};

const getUnreadCount = async (req: Request, res: Response) => {
  const autoEntrepreneurId = req.AutoEntrepreneurID as string;
  const count = await notificationService.getUnreadCount(autoEntrepreneurId);
  return res.status(200).json({ count });
};

const markAsRead = async (req: Request, res: Response) => {
  const autoEntrepreneurId = req.AutoEntrepreneurID as string;
  const { id } = req.params;
  await notificationService.markAsRead(autoEntrepreneurId, id as string);
  return res.status(200).json({ success: true });
};

const markAllAsRead = async (req: Request, res: Response) => {
  const autoEntrepreneurId = req.AutoEntrepreneurID as string;
  await notificationService.markAllAsRead(autoEntrepreneurId);
  return res.status(200).json({ success: true });
};

const deleteNotification = async (req: Request, res: Response) => {
  const autoEntrepreneurId = req.AutoEntrepreneurID as string;
  const { id } = req.params;
  await notificationService.deleteNotification(autoEntrepreneurId, id as string);
  return res.status(200).json({ success: true });
};

export const notificationController = {
  getNotifications,
  getUnreadCount,
  markAsRead,
  markAllAsRead,
  deleteNotification,
};