import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import type { UserRole } from '../../types';

export const LoginPage: React.FC = () => {
  const [role, setRole] = useState<UserRole>('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(role);
    if (role === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/patient/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-100">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-teal-800">CareReady AI</h1>
          <p className="text-sm text-slate-600 mt-1">Hospital visit readiness platform</p>
        </div>
        <Card title="Sign in to your account">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2 p-1 bg-slate-100 rounded-lg">
              <button
                type="button"
                onClick={() => setRole('patient')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  role === 'patient' ? 'bg-white shadow-xs text-teal-800' : 'text-slate-600'
                }`}
              >
                Patient Portal
              </button>
              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  role === 'admin' ? 'bg-white shadow-xs text-teal-800' : 'text-slate-600'
                }`}
              >
                Hospital Admin
              </button>
            </div>
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
            <Button type="submit" className="w-full" isLoading={isLoading}>
              Sign In ({role === 'admin' ? 'Admin' : 'Patient'})
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};
