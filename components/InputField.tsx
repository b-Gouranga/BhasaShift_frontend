import React from 'react';
import { cn } from '../utils/cn';

// Fix: Avoid conflict with HTMLInputElement's 'size' prop by omitting it from the base type
export interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const variantClasses = {
  default: 'bg-white/90 dark:bg-gray-900/80 border border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 shadow-sm',
  outline: 'border-2 border-blue-500 dark:border-blue-400 bg-white/90 dark:bg-gray-900/80 shadow-md',
};

const sizeClasses = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, className, variant = 'default', size = 'md', ...props }, ref) => (
    <div className="mb-4">
      {label && <label className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">{label}</label>}
      <input
        ref={ref}
        className={cn(
          'rounded-xl w-full transition focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 placeholder-gray-400 dark:placeholder-gray-500',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    </div>
  )
);
InputField.displayName = 'InputField';
