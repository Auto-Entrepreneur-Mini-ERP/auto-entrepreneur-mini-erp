import { useEffect, useRef, useState } from 'react';
import { Bell } from 'lucide-react';
import { useUnreadCount } from '../../hooks/useNotifications';
import { NotificationDropdown } from './NotificationDropdown';

export function NotificationBell() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { count, refresh } = useUnreadCount();

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Refresh count when opening
  const handleToggle = () => {
    if (!open) refresh();
    setOpen(prev => !prev);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={handleToggle}
        className="w-10 h-10 rounded-[12px] bg-gray-50 hover:bg-[#2D3194]/5 flex items-center justify-center transition-all duration-300 hover:border hover:border-[#2D3194] relative"
        aria-label="Notifications"
      >
        <Bell className="w-5 h-5 text-[#7A7A7A]" strokeWidth={2} />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-[#2D3194] rounded-full flex items-center justify-center px-1">
            <span className="text-white text-[10px] font-bold leading-none">
              {count > 99 ? '99+' : count}
            </span>
          </span>
        )}
      </button>

      {open && <NotificationDropdown onClose={() => setOpen(false)} />}
    </div>
  );
}