import React from 'react';
// @ts-ignore: TypeScript may not resolve the path, but it exists
import { cn } from '../utils/cn';

export interface FooterProps {
  className?: string;
  children?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ className, children, leftContent, rightContent }) => (
  <footer className={cn('w-full flex items-center justify-between px-6 py-4 bg-gray-50 border-t', className)}>
    <div>{leftContent}</div>
    <div>{children}</div>
    <div>{rightContent}</div>
  </footer>
);
