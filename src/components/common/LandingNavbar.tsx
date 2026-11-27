import React from 'react';
import { Link } from 'react-router-dom';
import { CareReadyLogo } from './CareReadyLogo';
import { ThemeToggle } from './ThemeToggle';

export const LandingNavbar: React.FC = () => {
  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
      <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-[#0D1525]/85 backdrop-blur-md shadow-xs transition-colors duration-200">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <CareReadyLogo className="h-8 w-8 text-emerald-500 dark:text-[#45E6B8]" />
          <div className="h-5 w-[1px] bg-slate-200 dark:bg-white/20 hidden sm:block" />
          <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">
            CareReady AI
          </span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          <ThemeToggle />
          <div className="h-4 w-[1px] bg-slate-200 dark:bg-white/20" />
          <Link
            to="/login"
            className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-[#45E6B8] transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm font-semibold bg-emerald-500 dark:bg-[#45E6B8] text-white dark:text-[#060B14] hover:bg-emerald-600 dark:hover:bg-[#38cfa4] transition-all duration-200 shadow-xs"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};
