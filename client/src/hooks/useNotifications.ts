import { useState, useEffect, useCallback } from 'react';
import { notificationApi } from '../api/notification.api';
import type { Notification } from '../types/notification.types';
import { NotificationType } from '../types/notification.types';

const POLL_INTERVAL = 30000;

export const useNotifications = (filters?: { type?: NotificationType; isRead?: boolean }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 20;

  // Extract primitives to avoid infinite loop caused by new object reference on every render
  const filterType = filters?.type;
  const filterIsRead = filters?.isRead;

  const fetchNotifications = useCallback(async () => {
    setLoading(true);
    try {
      const data = await notificationApi.getNotifications(page, limit, {
        type: filterType,
        isRead: filterIsRead,
      });
      setNotifications(data.notifications);
      setTotal(data.total);
    } catch (err) {
      console.error('Failed to fetch notifications', err);
    } finally {
      setLoading(false);
    }
  }, [page, filterType, filterIsRead]);

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchNotifications]);

  const markAsRead = async (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
    try {
      await notificationApi.markAsRead(id);
    } catch {
      fetchNotifications();
    }
  };

  const markAllAsRead = async () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
    try {
      await notificationApi.markAllAsRead();
    } catch {
      fetchNotifications();
    }
  };

  const deleteNotification = async (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    try {
      await notificationApi.deleteNotification(id);
    } catch {
      fetchNotifications();
    }
  };

  return {
    notifications,
    total,
    page,
    setPage,
    loading,
    fetchNotifications,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  };
};

export const useUnreadCount = () => {
  const [count, setCount] = useState(0);

  const refresh = useCallback(async () => {
    try {
      const data = await notificationApi.getUnreadCount();
      setCount(data.count);
    } catch {
      // silently fail
    }
  }, []);

  useEffect(() => {
    const run = () => { refresh(); };
    run();
    const interval = setInterval(run, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, [refresh]);

  return { count, refresh };
};