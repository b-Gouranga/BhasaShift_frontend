import React from 'react';
// @ts-ignore: TypeScript may not resolve the path, but it exists
import { cn } from '../utils/cn';

export interface LoaderProps {
  size?: number;
  color?: string;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ size = 32, color = '#2563eb', className }) => (
  <span
    className={cn('inline-block animate-spin', className)}
    style={{ width: size, height: size }}
    role="status"
    aria-label="Loading"
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke={color}
        strokeWidth="5"
        strokeDasharray="31.4 31.4"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M45 25a20 20 0 1 1-20-20"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  </span>
);
