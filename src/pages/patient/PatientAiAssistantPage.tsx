import React from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { Card } from '../../components/common/Card';

export const PatientAiAssistantPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="CareReady AI Assistant"
        subtitle="The assistant helps patients understand visit requirements and hospital policies."
      />
      <Card title="Policy & Readiness Q&A">
        <div className="p-8 text-center text-slate-500 text-sm">
          AI assistant interface connects to backend FastAPI AI orchestrator.
        </div>
      </Card>
    </div>
  );
};
