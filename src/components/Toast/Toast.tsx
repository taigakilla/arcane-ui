import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react';
import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  description?: string;
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant = 'info', title, description, children, ...props }, ref) => {
    const iconConfig = {
      success: { Icon: CheckCircle2, className: 'text-green-400' },
      error: { Icon: XCircle, className: 'text-red-400' },
      warning: { Icon: AlertTriangle, className: 'text-yellow-400' },
      info: { Icon: Info, className: 'text-arcane-blue-light' },
    };

    const { Icon, className: iconClassName } = iconConfig[variant];

    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'pointer-events-auto w-full max-w-sm rounded-xl p-4',
          'border shadow-lg backdrop-blur-sm',
          'transition-all duration-200',
          'flex items-start gap-3',

          // Variants
          variant === 'success' && [
            'bg-green-900/90 border-green-700 text-green-100',
            'shadow-green-900/50',
          ],
          variant === 'error' && ['bg-red-900/90 border-red-700 text-red-100', 'shadow-red-900/50'],
          variant === 'warning' && [
            'bg-yellow-900/90 border-yellow-700 text-yellow-100',
            'shadow-yellow-900/50',
          ],
          variant === 'info' && [
            'bg-arcane-blue-dark/90 border-arcane-blue text-arcane-blue-light',
            'shadow-arcane-blue/50',
          ],

          className,
        )}
        {...props}
      >
        {/* Icon */}
        <div className="flex-shrink-0">
          <Icon className={cn('h-5 w-5', iconClassName)} />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-1">
          {title && <p className="font-semibold text-sm">{title}</p>}
          {description && <p className="text-sm opacity-90">{description}</p>}
          {children}
        </div>
      </div>
    );
  },
);

Toast.displayName = 'Toast';
