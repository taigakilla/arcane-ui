import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', glow = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-lg font-medium',
          'transition-all duration-200 ease-in-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',

          // Variants
          variant === 'primary' && [
            'bg-arcane-gold text-arcane-darker',
            'hover:bg-arcane-gold-light',
            'focus-visible:ring-arcane-gold',
          ],
          variant === 'secondary' && [
            'bg-arcane-blue text-white',
            'hover:bg-arcane-blue-light',
            'focus-visible:ring-arcane-blue',
          ],
          variant === 'ghost' && [
            'bg-transparent text-arcane-gold border border-arcane-gold',
            'hover:bg-arcane-gold hover:text-arcane-darker',
            'focus-visible:ring-arcane-gold',
          ],

          // Sizes
          size === 'sm' && 'h-9 px-3 text-sm',
          size === 'md' && 'h-10 px-4 text-base',
          size === 'lg' && 'h-12 px-6 text-lg',

          // Glow effect (tema arcano)
          glow && 'shadow-arcane-glow hover:shadow-arcane-glow-strong animate-pulse-glow',

          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
