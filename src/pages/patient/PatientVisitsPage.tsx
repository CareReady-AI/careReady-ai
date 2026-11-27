import React from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { Card } from '../../components/common/Card';

export const PatientVisitsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="My Hospital Visits"
        subtitle="Plan and track your upcoming hospital visits and review readiness evaluations."
      />
      <Card title="Visit Plans" description="No authoritative visit calculation in frontend - awaiting backend sync.">
        <div className="p-8 text-center text-slate-500 text-sm">
          Visit list will display real-time backend readiness evaluations.
        </div>
      </Card>
    </div>
  );
};
