import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutDashboard, Activity, CalendarCheck } from 'lucide-react';
import { Sidebar, NavItem } from '../components/layout/Sidebar';
import { Topbar } from '../components/layout/Topbar';

const adminNavItems: NavItem[] = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
  { label: 'Resource Management', path: '/admin/resources', icon: <Activity className="h-5 w-5" /> },
  { label: 'Appointments', path: '/admin/appointments', icon: <CalendarCheck className="h-5 w-5" /> },
];

export const AdminLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        items={adminNavItems}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        title="CareReady AI"
        badge="Admin"
      />
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <Topbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} showNotifications={false} />
        <main className="flex-1 p-4 sm:p-6 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
