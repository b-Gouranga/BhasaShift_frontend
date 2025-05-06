import React from 'react';
// @ts-ignore: TypeScript may not resolve the path, but it exists
import { cn } from '../utils/cn';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const variantClasses = {
  default: 'bg-white border border-gray-300 focus:border-blue-500',
  outline: 'border-2 border-blue-500 bg-white',
};

const sizeClasses = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'rounded w-full transition focus:outline-none',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';
