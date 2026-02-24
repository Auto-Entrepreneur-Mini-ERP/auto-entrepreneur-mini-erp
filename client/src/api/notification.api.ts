import { api } from './axios';
import type { NotificationsResponse, UnreadCountResponse } from '../types/notification.types';
import type { NotificationType } from '../types/notification.types';

const getNotifications = async (
  page = 1,
  limit = 20,
  filters?: { type?: NotificationType; isRead?: boolean }
) => {
  const params: Record<string, unknown> = { page, limit };
  if (filters?.type) params['type'] = filters.type;
  if (filters?.isRead !== undefined) params['isRead'] = filters.isRead;
  const res = await api.get<NotificationsResponse>('/notifications', { params });
  return res.data;
};

const getUnreadCount = async () => {
  const res = await api.get<UnreadCountResponse>('/notifications/count-non-lues');
  return res.data;
};

const markAsRead = async (id: string) => {
  const res = await api.patch(`/notifications/${id}/lire`);
  return res.data;
};

const markAllAsRead = async () => {
  const res = await api.post('/notifications/marquer-toutes-lues');
  return res.data;
};

const deleteNotification = async (id: string) => {
  const res = await api.delete(`/notifications/${id}`);
  return res.data;
};

export const notificationApi = {
  getNotifications,
  getUnreadCount,
  markAsRead,
  markAllAsRead,
  deleteNotification,
};