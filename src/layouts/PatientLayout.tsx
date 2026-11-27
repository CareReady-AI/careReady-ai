import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutDashboard, Calendar, Bell, Bot } from 'lucide-react';
import { Sidebar, NavItem } from '../components/layout/Sidebar';
import { Topbar } from '../components/layout/Topbar';

const patientNavItems: NavItem[] = [
  { label: 'Dashboard', path: '/patient/dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
  { label: 'My Visits', path: '/patient/visits', icon: <Calendar className="h-5 w-5" /> },
  { label: 'Notifications', path: '/patient/notifications', icon: <Bell className="h-5 w-5" /> },
  { label: 'AI Assistant', path: '/patient/ai-assistant', icon: <Bot className="h-5 w-5" /> },
];

export const PatientLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        items={patientNavItems}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        title="CareReady AI"
        badge="Patient"
      />
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <Topbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} showNotifications={true} />
        <main className="flex-1 p-4 sm:p-6 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
