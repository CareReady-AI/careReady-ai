import React from 'react';

export const CareReadyLogo: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => {
  return (
    <div className={`relative flex items-center justify-center text-[#45E6B8] ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Rounded heart shape outline */}
        <path
          d="M20 34C20 34 6 25 6 15C6 10 10 6 15 6C18 6 20 8.5 20 8.5C20 8.5 22 6 25 6C30 6 34 10 34 15C34 25 20 34 20 34Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Medical Plus in center */}
        <path
          d="M20 13V21M16 17H24"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Subtle sparkle at top right */}
        <path
          d="M30 4L31 7L34 8L31 9L30 12L29 9L26 8L29 7L30 4Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};
