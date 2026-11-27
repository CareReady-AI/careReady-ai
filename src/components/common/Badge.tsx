import React from 'react';
import { cn } from '../../utils/cn';
import { STATUS_COLORS } from '../../constants';
import type { ReadinessStatus, ResourceStatus } from '../../types';

export interface BadgeProps {
  status: ReadinessStatus | ResourceStatus | string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ status, className }) => {
  const statusColor = STATUS_COLORS[status as keyof typeof STATUS_COLORS] || 'bg-slate-100 text-slate-700 border-slate-200';
  const label = status.replace(/_/g, ' ');

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border tracking-wide uppercase',
        statusColor,
        className
      )}
    >
      {label}
    </span>
  );
};
