import React from 'react';
import { Link } from 'react-router-dom';
import { LoginPage } from './LoginPage';

export const RegisterPage: React.FC = () => {
  return (
    <div className="relative">
      <LoginPage />
      <div className="fixed bottom-4 left-0 right-0 text-center">
        <span className="text-xs text-slate-500">
          Registration is currently handled via hospital invitation.{' '}
          <Link to="/login" className="text-teal-700 underline font-medium">Return to sign in</Link>
        </span>
      </div>
    </div>
  );
};
