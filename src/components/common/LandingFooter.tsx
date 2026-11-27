import React from 'react';
import { Link } from 'react-router-dom';
import { CareReadyLogo } from './CareReadyLogo';

export const LandingFooter: React.FC = () => {
  return (
    <footer className="relative z-10 w-full border-t border-border-color bg-footer-bg backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <CareReadyLogo className="h-7 w-7 text-accent transition-transform duration-200 group-hover:scale-105" />
              <span className="font-bold text-lg sm:text-xl tracking-tight text-text-primary">
                CareReady AI
              </span>
            </Link>
            <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
              Empowering patients with conversational clinical preparation, clear visit guidance, and intelligent healthcare insights.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-4 flex flex-col space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">
              Navigation
            </h4>
            <a
              href="#features"
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              How It Works
            </a>
          </div>

          {/* Account Links */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">
              Account
            </h4>
            <Link
              to="/login"
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Bottom border & copyright */}
        <div className="mt-12 pt-8 border-t border-border-color flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <p>© {new Date().getFullYear()} CareReady AI. All rights reserved.</p>
          <p>Designed for smarter, more confident patient care.</p>
        </div>
      </div>
    </footer>
  );
};
