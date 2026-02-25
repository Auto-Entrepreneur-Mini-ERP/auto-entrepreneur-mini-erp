import { useNavigate } from 'react-router';
import { Bell } from 'lucide-react';
import { NotificationItem } from './NotificationItem';
import { useNotifications } from '../../hooks/useNotifications';

interface Props {
  onClose: () => void;
}

export function NotificationDropdown({ onClose }: Props) {
  const navigate = useNavigate();
  const { notifications, loading, markAsRead, markAllAsRead } = useNotifications();

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleViewAll = () => {
    navigate('/app/notifications');
    onClose();
  };

  return (
    <div className="absolute right-0 mt-2 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden z-50">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-gray-50">
        <h3 className="text-[#1A1A1A] font-semibold text-sm">Notifications</h3>
        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <span className="px-2 py-0.5 bg-[#2D3194]/10 text-[#2D3194] text-xs font-semibold rounded-full">
              {unreadCount} non lue{unreadCount > 1 ? 's' : ''}
            </span>
          )}
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-xs text-[#2D3194] hover:underline"
            >
              Tout lire
            </button>
          )}
        </div>
      </div>

      {/* List */}
      <div className="max-h-72 overflow-y-auto">
        {loading ? (
          <div className="py-10 text-center text-gray-400 text-sm">Chargement...</div>
        ) : notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 px-4 text-gray-400">
            <Bell className="w-8 h-8 mb-2 opacity-30" />
            <p className="text-sm text-center">Aucune notification</p>
          </div>
        ) : (
          <div className="p-2 space-y-1">
            {notifications.slice(0, 5).map(n => (
              <NotificationItem
                key={n.id}
                notification={n}
                onRead={(id) => { markAsRead(id); onClose(); }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-2 border-t border-gray-50">
        <button
          onClick={handleViewAll}
          className="block w-full text-center text-xs text-[#2D3194] font-medium py-2 hover:bg-[#2D3194]/5 rounded-xl transition-colors"
        >
          Voir toutes les notifications →
        </button>
      </div>
    </div>
  );
}