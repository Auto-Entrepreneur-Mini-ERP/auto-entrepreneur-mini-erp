import { Bell, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useNotifications } from '../../hooks/useNotifications';
import { NotificationItem } from '../../components/notifications/NotificationItem';
import { NotificationType } from '../../types/notification.types';
import { Button } from '../../components/ui/button';

export function NotificationsView() {
  const [filterType, setFilterType] = useState<NotificationType | undefined>();
  const [filterRead, setFilterRead] = useState<boolean | undefined>();

  const {
    notifications,
    total,
    page,
    setPage,
    loading,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  } = useNotifications({ type: filterType, isRead: filterRead });

  const unreadCount = notifications.filter(n => !n.isRead).length;
  const totalPages = Math.ceil(total / 20);

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
            <Bell className="w-5 h-5 text-[#2D3194]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#2D3194]">Notifications</h1>
            <p className="text-gray-600">Centre de notifications</p>
          </div>
        </div>
      </div>

      {/* Filters + Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Read filter */}
          <button
            onClick={() => setFilterRead(undefined)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              filterRead === undefined ? 'bg-[#2D3194] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Toutes
          </button>
          <button
            onClick={() => setFilterRead(false)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              filterRead === false ? 'bg-[#2D3194] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Non lues {unreadCount > 0 && `(${unreadCount})`}
          </button>
          <button
            onClick={() => setFilterRead(true)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              filterRead === true ? 'bg-[#2D3194] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Lues
          </button>

          {/* Type filter */}
          <select
            value={filterType ?? ''}
            onChange={e => setFilterType(e.target.value ? e.target.value as NotificationType : undefined)}
            className="px-4 py-2 rounded-xl text-sm border border-gray-200 text-gray-600 bg-white"
          >
            <option value="">Tous les types</option>
            <option value={NotificationType.PAYMENT}>Paiements</option>
            <option value={NotificationType.INVOICE}>Factures</option>
            <option value={NotificationType.TAX}>Déclarations</option>
            <option value={NotificationType.CONTRIBUTION}>CNSS</option>
            <option value={NotificationType.REMINDER}>Rappels</option>
          </select>
        </div>

        {unreadCount > 0 && (
          <Button
            onClick={markAllAsRead}
            className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-10 px-5 rounded-xl text-sm"
          >
            Tout marquer comme lu
          </Button>
        )}
      </div>

      {/* List */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-gray-400">Chargement...</div>
        ) : notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <Bell className="w-10 h-10 mb-3 opacity-30" />
            <p className="text-sm">Aucune notification</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {notifications.map(n => (
              <div key={n.id} className="flex items-center gap-2 pr-3">
                <div className="flex-1">
                  <NotificationItem notification={n} onRead={markAsRead} />
                </div>
                <button
                  onClick={() => deleteNotification(n.id)}
                  className="shrink-0 p-2 hover:bg-red-50 rounded-lg transition-colors"
                  title="Supprimer"
                >
                  <Trash2 className="w-4 h-4 text-red-400" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-xl border border-gray-200 text-sm disabled:opacity-40 hover:bg-gray-50"
          >
            Précédent
          </button>
          <span className="text-sm text-gray-500">
            Page {page} / {totalPages}
          </span>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-xl border border-gray-200 text-sm disabled:opacity-40 hover:bg-gray-50"
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
}