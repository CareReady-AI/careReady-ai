import React from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export const PatientDashboardPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Your hospital visit readiness, before you arrive."
        subtitle="Track upcoming appointments, check readiness status, and resolve blockers proactively."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Upcoming Visit Status" description="Next appointment readiness">
          <div className="flex items-center gap-3 mt-2">
            <Badge status="READY" />
            <span className="text-sm font-medium text-slate-700">General Consultation</span>
          </div>
        </Card>
        <Card title="Pending Blockers" description="Required actions">
          <p className="text-2xl font-bold text-slate-800">0</p>
          <p className="text-xs text-slate-500 mt-1">All pre-visit criteria met</p>
        </Card>
        <Card title="AI Assistance" description="Policy & readiness assistant">
          <p className="text-sm text-slate-600">CareReady AI is ready to explain requirements.</p>
        </Card>
      </div>
    </div>
  );
};
