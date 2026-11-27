import React from 'react';
import { cn } from '../../utils/cn';

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className,
  label = 'Loading...',
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-3',
    lg: 'h-12 w-12 border-4',
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-3" role="status">
      <div
        className={cn(
          'border-teal-600 border-t-transparent rounded-full animate-spin',
          sizeClasses[size],
          className
        )}
      />
      {label && <span className="text-sm text-slate-500 font-medium">{label}</span>}
      <span className="sr-only">{label}</span>
    </div>
  );
};
