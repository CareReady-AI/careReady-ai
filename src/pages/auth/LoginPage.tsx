import React, { useState } from 'react';
import { Eye, EyeOff, HeartPulse } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { CareReadyLogo } from '../../components/common/CareReadyLogo';
import type { UserRole } from '../../types';

export const LoginPage: React.FC = () => {
  const [role, setRole] = useState<UserRole>('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await login(role);
    navigate(role === 'admin' ? '/admin/dashboard' : '/patient/dashboard');
  };

  return (
    <main className="min-h-dvh w-full overflow-x-hidden bg-page-bg text-text-primary md:grid md:grid-cols-[40%_60%] lg:grid-cols-[45%_55%]">
      <section
        aria-label="CareReady AI healthcare message"
        className="relative isolate flex min-h-[320px] min-w-0 flex-col justify-between overflow-hidden px-6 py-6 text-white sm:min-h-[360px] sm:px-9 sm:py-8 md:min-h-dvh md:px-6 md:py-8 lg:px-10 lg:py-10 xl:px-14"
      >
        <img
          src="/assets/auth-consultation.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_38%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#03272c]/45 via-[#03272c]/20 to-[#031b20]/85" />
        <Link to="/" className="relative z-10 inline-flex w-fit items-center gap-2.5">
          <CareReadyLogo className="h-9 w-9 shrink-0" />
          <span className="text-lg font-bold tracking-tight">CareReady <span className="text-[#35DDB5]">AI</span></span>
        </Link>
        <div className="relative z-10 mt-12 max-w-lg pb-1 sm:mt-16 md:mt-10 lg:pb-2">
          <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-[#67E8C5] backdrop-blur-sm">
            <HeartPulse className="h-5 w-5" aria-hidden="true" />
          </div>
          <h1 className="max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl xl:text-[2.75rem]">
            We are ready to help you meet your doctor today!
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/80 sm:text-base">
            Your healthcare journey starts with smarter preparation.
          </p>
        </div>
      </section>

      <section className="flex min-h-[560px] min-w-0 items-center justify-center bg-[#F1F7F6] px-4 py-8 dark:bg-[#062D31] sm:px-8 sm:py-10 md:min-h-dvh md:px-5 lg:px-8 xl:px-12">
        <div className="w-full min-w-0 max-w-[440px] rounded-3xl border border-border-color bg-card-bg p-5 shadow-[0_24px_70px_-35px_rgba(2,30,36,0.35)] sm:p-7 lg:p-8">
          <div className="mb-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">CareReady AI</p>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">Welcome Back</h2>
            <p className="mt-2 text-sm leading-6 text-text-secondary">Enter your details to continue to your healthcare portal.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="mb-2 block text-sm font-medium text-text-primary">Continue as</span>
              <div className="grid grid-cols-2 gap-1 rounded-xl bg-section-bg p-1">
                {(['patient', 'admin'] as UserRole[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setRole(option)}
                    aria-pressed={role === option}
                    className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${role === option ? 'bg-card-bg text-text-primary shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
                  >
                    {option === 'patient' ? 'Patient' : 'Hospital Admin'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="login-email" className="mb-2 block text-sm font-medium text-text-primary">Email address</label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-border-color bg-page-bg px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-secondary/70 focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div>
              <label htmlFor="login-password" className="mb-2 block text-sm font-medium text-text-primary">Password</label>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-xl border border-border-color bg-page-bg px-4 py-3 pr-12 text-sm text-text-primary outline-none transition placeholder:text-text-secondary/70 focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-text-secondary transition hover:text-text-primary"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <label className="inline-flex cursor-pointer items-center gap-2 text-text-secondary">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="h-4 w-4 rounded border-border-color accent-[#35DDB5] focus:ring-accent"
                />
                Remember me
              </label>
              <a href="#forgot-password" className="font-semibold text-accent transition hover:text-accent-hover">Forgot Password?</a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center rounded-xl bg-[#35DDB5] px-4 py-3.5 text-sm font-bold text-[#052a2b] shadow-sm transition hover:bg-[#25cda5] focus:outline-none focus:ring-2 focus:ring-[#35DDB5] focus:ring-offset-2 focus:ring-offset-card-bg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? 'Signing in…' : 'Login'}
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-text-secondary">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="font-bold text-accent transition hover:text-accent-hover">Sign Up</Link>
          </p>
        </div>
      </section>
    </main>
  );
};
