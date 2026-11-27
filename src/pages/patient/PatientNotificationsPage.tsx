import React from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { Card } from '../../components/common/Card';

export const PatientNotificationsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Notifications"
        subtitle="Important hospital resource and appointment updates appear here."
      />
      <Card title="Recent Updates">
        <div className="p-8 text-center text-slate-500 text-sm">
          Hospital resource disruptions and readiness alerts will stream here.
        </div>
      </Card>
    </div>
  );
};
