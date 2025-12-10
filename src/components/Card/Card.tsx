import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered';
  glow?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'rounded-xl p-6 transition-all duration-200',
          'bg-arcane-dark text-slate-100',

          // Variants
          variant === 'default' && 'border border-arcane-slate-700',
          variant === 'elevated' && 'shadow-lg border border-arcane-slate-800',
          variant === 'bordered' && 'border-2 border-arcane-gold',

          // Glow effect
          glow && 'shadow-arcane-glow',

          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';
