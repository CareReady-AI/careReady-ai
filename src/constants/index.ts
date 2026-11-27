export const APP_NAME = 'CareReady AI';
export const APP_TAGLINE = 'Your hospital visit readiness, before you arrive.';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
export const IS_MOCK_AUTH = import.meta.env.VITE_ENABLE_MOCK_AUTH === 'true';

export const STATUS_COLORS = {
  READY: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  ACTION_REQUIRED: 'bg-amber-50 text-amber-700 border-amber-200',
  PENDING: 'bg-blue-50 text-blue-700 border-blue-200',
  OPERATIONAL: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  MAINTENANCE: 'bg-amber-50 text-amber-700 border-amber-200',
  UNAVAILABLE: 'bg-rose-50 text-rose-700 border-rose-200',
} as const;
