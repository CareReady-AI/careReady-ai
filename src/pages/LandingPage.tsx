import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { LandingNavbar } from '../components/common/LandingNavbar';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen relative flex flex-col justify-between overflow-x-hidden bg-slate-50 dark:bg-[#060B14] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/10 dark:bg-[#45E6B8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation */}
      <LandingNavbar />

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 sm:py-16 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-black leading-[1.08] tracking-tight">
              <span className="text-slate-900 dark:text-white block">Smarter Care</span>
              <span className="relative inline-block text-emerald-600 dark:text-[#45E6B8] mt-1 sm:mt-2">
                Starts Here.
                {/* Curved decorative underline */}
                <svg
                  className="absolute left-0 -bottom-3 sm:-bottom-4 w-full h-3 sm:h-4 text-emerald-500 dark:text-[#45E6B8]"
                  viewBox="0 0 250 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 10.5C65 3.5 185 3 247 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-8 sm:mt-10 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              Make healthcare guidance easier to understand and help you prepare for better conversations with healthcare professionals.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-5 sm:gap-8">
              <Link
                to="/register"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base bg-emerald-500 dark:bg-[#45E6B8] text-white dark:text-[#060B14] hover:bg-emerald-600 dark:hover:bg-[#38cfa4] transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </Link>
              <a
                href="#learn-more"
                className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-[#45E6B8] underline underline-offset-4 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Illustration Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10 mt-6 lg:mt-0">
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
              <img
                src="/assets/doctor-patient-illustration.png"
                alt="Doctor consulting patient about hospital readiness"
                className="w-full h-full object-contain drop-shadow-md rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Subtle bottom decorative wave overlay */}
      <div className="w-full h-16 sm:h-24 bg-gradient-to-t from-emerald-500/10 dark:from-[#45E6B8]/10 to-transparent pointer-events-none" />
    </div>
  );
};
