import React from 'react';
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface NotificationBellProps {
  unreadCount?: number;
  to?: string;
}

export const NotificationBell: React.FC<NotificationBellProps> = ({
  unreadCount = 0,
  to = '/patient/notifications',
}) => {
  return (
    <Link
      to={to}
      className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
      aria-label="View notifications"
    >
      <Bell className="h-5 w-5" />
      {unreadCount > 0 && (
        <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white ring-2 ring-white">
          {unreadCount > 9 ? '9+' : unreadCount}
        </span>
      )}
    </Link>
  );
};
