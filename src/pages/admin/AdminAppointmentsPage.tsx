import React from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { Card } from '../../components/common/Card';

export const AdminAppointmentsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Appointment Management"
        subtitle="Administrators can monitor appointment operations and department schedules."
      />
      <Card title="Operational Appointment Feeds">
        <div className="p-8 text-center text-slate-500 text-sm">
          Real-time appointment schedule feed from backend service.
        </div>
      </Card>
    </div>
  );
};
