export const NotificationType = {
  INVOICE: 'INVOICE',
  QUOTE: 'QUOTE',
  PAYMENT: 'PAYMENT',
  EXPENSE: 'EXPENSE',
  TAX: 'TAX',
  CONTRIBUTION: 'CONTRIBUTION',
  SYSTEM: 'SYSTEM',
  REMINDER: 'REMINDER',
} as const;

export type NotificationType =
  typeof NotificationType[keyof typeof NotificationType];

export type NotificationPriority = 'low' | 'medium' | 'high';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  associatedEntityType: string;
  associatedEntityId: string;
  isRead: boolean;
  priority: NotificationPriority;
  AutoEntrepreneurId: string;
  creationDate: string;
}

export interface NotificationsResponse {
  notifications: Notification[];
  total: number;
  page: number;
  limit: number;
}

export interface UnreadCountResponse {
  count: number;
}