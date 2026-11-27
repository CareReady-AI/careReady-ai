import React from 'react';
import { Menu, LogOut, User as UserIcon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { NotificationBell } from './NotificationBell';
import { ThemeToggle } from '../common/ThemeToggle';

interface TopbarProps {
  onToggleSidebar: () => void;
  showNotifications?: boolean;
}

export const Topbar: React.FC<TopbarProps> = ({ onToggleSidebar, showNotifications = true }) => {
  const { user, logout, isMockMode } = useAuth();

  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-20 transition-colors duration-200">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>
        {isMockMode && (
          <span className="hidden sm:inline-block text-xs bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-medium px-2 py-0.5 rounded border border-amber-300 dark:border-amber-800">
            Dev Mock Mode
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {showNotifications && <NotificationBell unreadCount={2} />}
        
        {/* Theme Toggle Button */}
        <ThemeToggle />

        <div className="flex items-center gap-3 pl-2 sm:pl-3 border-l border-slate-200 dark:border-slate-800">
          <div className="h-8 w-8 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200 flex items-center justify-center font-medium text-xs">
            <UserIcon className="h-4 w-4" />
          </div>
          <div className="hidden md:block text-left">
            <div className="text-sm font-medium text-slate-800 dark:text-slate-100">{user?.fullName || 'User'}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 capitalize">{user?.role || 'Guest'}</div>
          </div>
          <button
            onClick={logout}
            className="p-2 text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
            title="Log out"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
