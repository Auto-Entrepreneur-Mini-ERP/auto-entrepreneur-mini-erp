import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { FileText, CreditCard, Receipt, AlertCircle, Bell, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router';
import type { Notification } from '../../types/notification.types';
import { NotificationType } from '../../types/notification.types';
import { getNotificationPath } from '../../utils/notificationNavigation';

const TYPE_ICON: Record<NotificationType, React.ReactNode> = {
  [NotificationType.INVOICE]: <FileText className="w-4 h-4 text-blue-600" />,
  [NotificationType.QUOTE]: <FileText className="w-4 h-4 text-purple-600" />,
  [NotificationType.PAYMENT]: <CreditCard className="w-4 h-4 text-green-600" />,
  [NotificationType.EXPENSE]: <Receipt className="w-4 h-4 text-orange-600" />,
  [NotificationType.TAX]: <AlertCircle className="w-4 h-4 text-red-600" />,
  [NotificationType.CONTRIBUTION]: <AlertCircle className="w-4 h-4 text-amber-600" />,
  [NotificationType.SYSTEM]: <Bell className="w-4 h-4 text-gray-600" />,
  [NotificationType.REMINDER]: <CheckCircle className="w-4 h-4 text-teal-600" />,
};

interface Props {
  notification: Notification;
  onRead: (id: string) => void;
}

export function NotificationItem({ notification, onRead }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
  if (!notification.isRead) onRead(notification.id);
  const path = getNotificationPath(
    notification.associatedEntityType,
    notification.associatedEntityId
  );
  navigate(path);
};

  return (
    <div
      onClick={handleClick}
      className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors hover:bg-gray-50 ${
        !notification.isRead ? 'bg-blue-50/50' : ''
      }`}
    >
      <div className="shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center mt-0.5">
        {TYPE_ICON[notification.type]}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-[#1A1A1A] truncate">{notification.title}</p>
        <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{notification.message}</p>
        <p className="text-xs text-gray-400 mt-1">
          {formatDistanceToNow(new Date(notification.creationDate), { addSuffix: true, locale: fr })}
        </p>
      </div>
      {!notification.isRead && (
        <div className="shrink-0 w-2 h-2 bg-[#2D3194] rounded-full mt-2" />
      )}
    </div>
  );
}