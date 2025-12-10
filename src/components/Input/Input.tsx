import { forwardRef, type InputHTMLAttributes, useId } from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  glow?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, glow = false, type = 'text', id, ...props }, ref) => {
    const generateId = useId();
    const inputId = id ?? `input-${generateId}`;

    return (
      <div className="w-full space-y-2">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-arcane-gold">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          type={type}
          className={cn(
            // Base styles
            'w-full rounded-lg px-4 py-2.5 text-slate-100',
            'bg-arcane-darker border border-arcane-slate-700',
            'transition-all duration-200',
            'placeholder:text-slate-500',

            // Focus state
            'focus:outline-none focus:ring-2 focus:ring-arcane-gold focus:border-transparent',

            // Disabled state
            'disabled:opacity-50 disabled:cursor-not-allowed',

            // Error state
            error && 'border-red-500 focus:ring-red-500',

            // Glow effect
            glow && 'shadow-arcane-glow',

            className,
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';
