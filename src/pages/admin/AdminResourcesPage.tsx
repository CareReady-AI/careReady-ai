import React from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export const AdminResourcesPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Resource Management"
        subtitle="Administrators can monitor and update diagnostic and medicine availability."
      />
      <Card title="Hospital Diagnostic & Facility Resources">
        <div className="flex items-center justify-between py-2 border-b border-slate-100">
          <div>
            <span className="font-medium text-slate-800">X-Ray Machine (Room 102)</span>
            <p className="text-xs text-slate-500">Radiology Wing</p>
          </div>
          <Badge status="OPERATIONAL" />
        </div>
      </Card>
    </div>
  );
};
