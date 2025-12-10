import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-full font-medium',
          'transition-all duration-200',

          // Sizes
          size === 'sm' && 'px-2 py-0.5 text-xs',
          size === 'md' && 'px-3 py-1 text-sm',
          size === 'lg' && 'px-4 py-1.5 text-base',

          // Variants
          variant === 'default' &&
            'bg-arcane-slate-800 text-slate-300 border border-arcane-slate-700',
          variant === 'success' && 'bg-green-900/50 text-green-300 border border-green-700',
          variant === 'warning' && 'bg-yellow-900/50 text-yellow-300 border border-yellow-700',
          variant === 'error' && 'bg-red-900/50 text-red-300 border border-red-700',
          variant === 'info' &&
            'bg-arcane-blue-dark text-arcane-blue-light border border-arcane-blue',

          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = 'Badge';
