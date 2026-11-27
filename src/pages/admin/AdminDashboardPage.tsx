import React from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { Card } from '../../components/common/Card';

export const AdminDashboardPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Hospital Operations Overview"
        subtitle="Monitor hospital resources and support patient visit readiness."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Diagnostic Resources" description="Equipment health">
          <p className="text-2xl font-bold text-slate-800">12 Active</p>
        </Card>
        <Card title="Maintenance Alerts" description="Impacted workflows">
          <p className="text-2xl font-bold text-amber-600">1 Machine</p>
        </Card>
        <Card title="Readiness Impact" description="Patients notified">
          <p className="text-2xl font-bold text-teal-700">3 Affected</p>
        </Card>
      </div>
    </div>
  );
};
