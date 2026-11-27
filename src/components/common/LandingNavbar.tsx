import React from 'react';
import { Link } from 'react-router-dom';
import { CareReadyLogo } from './CareReadyLogo';
import { ThemeToggle } from './ThemeToggle';

export const LandingNavbar: React.FC = () => {
  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
      <nav
        aria-label="Main Navigation"
        className="flex items-center justify-between px-4 sm:px-8 py-3.5 rounded-full border border-border-color bg-header-bg backdrop-blur-md shadow-xs transition-colors duration-200"
      >
        {/* Brand: Logo & Name on the left */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg min-w-0">
          <CareReadyLogo className="h-6 w-6 sm:h-8 sm:w-8 shrink-0 text-accent transition-transform duration-200 group-hover:scale-105" />
          <div className="h-4 sm:h-5 w-[1px] bg-border-color hidden xs:block" />
          <span className="font-bold text-sm sm:text-xl tracking-tight text-text-primary truncate">
            CareReady AI
          </span>
        </Link>

        {/* Right side controls: Theme toggle, Login, and Sign Up */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
          <ThemeToggle className="p-1.5 sm:p-2" />
          <div className="h-4 w-[1px] bg-border-color" />
          <Link
            to="/login"
            className="text-xs sm:text-sm font-medium text-text-secondary hover:text-accent transition-colors px-2 py-1.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-accent text-white dark:text-[#060B14] hover:bg-accent-hover transition-all duration-200 shadow-xs active:scale-95 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};
