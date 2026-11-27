import React from 'react';
import { AlertCircle, AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '../common/Button';

export interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  severity?: 'error' | 'warning';
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title = 'Something went wrong',
  message,
  onRetry,
  severity = 'error',
}) => {
  const isError = severity === 'error';
  return (
    <div
      className={`rounded-xl border p-4 my-2 flex items-start gap-3.5 ${
        isError ? 'bg-rose-50 border-rose-200 text-rose-900' : 'bg-amber-50 border-amber-200 text-amber-900'
      }`}
      role="alert"
    >
      {isError ? (
        <AlertCircle className="h-5 w-5 text-rose-600 mt-0.5 shrink-0" />
      ) : (
        <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
      )}
      <div className="flex-1">
        <h4 className="text-sm font-semibold">{title}</h4>
        <p className="text-sm mt-0.5 opacity-90">{message}</p>
        {onRetry && (
          <div className="mt-3">
            <Button
              variant="outline"
              onClick={onRetry}
              className="text-xs py-1.5 px-3 h-auto border-current text-inherit hover:bg-black/5"
            >
              <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
              Try again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
