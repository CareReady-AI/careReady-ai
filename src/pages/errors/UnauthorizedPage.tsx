import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import { Button } from '../../components/common/Button';

export const UnauthorizedPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50 text-center">
      <div className="p-3 bg-rose-100 text-rose-600 rounded-full mb-4">
        <ShieldAlert className="h-8 w-8" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Access Unauthorized</h1>
      <p className="text-sm text-slate-500 max-w-sm mb-6">
        You do not have the required role permissions to view this section.
      </p>
      <Link to="/login">
        <Button variant="primary">Return to Sign In</Button>
      </Link>
    </div>
  );
};
