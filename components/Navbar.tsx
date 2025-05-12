"use client";

import Image from 'next/image';
import { cn } from '../utils/cn';
import { useRouter } from 'next/navigation';
import React, { useState, useRef } from 'react';

export interface NavbarProps {
  logo?: React.ReactNode;
  links?: { label: string; href: string }[];
  className?: string;
  rightContent?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  links = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Login', href: '/login' },
    { label: 'Signup', href: '/signup' },
  ],
  className,
  rightContent,
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (open && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <nav
      className={cn(
        'sticky top-0 z-30 w-full flex items-center justify-between px-8 py-4 bg-gradient-to-br from-gray-900 via-gray-950 to-blue-950 border-b border-gray-800 shadow-lg backdrop-blur-md animate-fade-in',
        className
      )}
      style={{ animation: 'fadeIn 0.7s ease' }}
    >
      {/* Logo on the left */}
      <div className="flex items-center gap-4 min-w-[180px]">
        <div className="mr-4 group flex items-center">
          <Image
            src="/globe.svg"
            alt="Logo"
            width={44}
            height={44}
            className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 drop-shadow"
          />
          <span className="ml-2 text-2xl font-extrabold text-blue-400 tracking-tight transition-opacity duration-500 group-hover:opacity-80">
            BhasaShift
          </span>
        </div>
      </div>
      {/* Links and right content on the right */}
      <div className="flex items-center gap-4 min-w-0 ml-auto">
        <ul className="flex gap-4 items-center py-2 overflow-visible">
          {links
            .filter(link => link.label.toLowerCase() !== 'profile')
            .map((link) => (
              <li key={link.href} className="overflow-visible">
                <a
                  href={link.href}
                  className="relative text-lg font-bold px-4 py-2 rounded-2xl text-gray-200 hover:text-blue-400 hover:bg-blue-900/40 transition-all duration-200 hover:scale-105 hover:shadow-md"
                >
                  {link.label}
                </a>
              </li>
            ))}
        </ul>
        {/* Profile Icon - direct navigation */}
        <button
          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl hover:bg-primary/20 transition border border-primary/20 shadow"
          onClick={() => router.push('/profile')}
          aria-label="Profile"
        >
          <span role="img" aria-label="profile">👤</span>
        </button>
        {rightContent}
      </div>
    </nav>
  );
};

// Add fade-in animation if not present in Tailwind config
// @layer utilities {
//   .animate-fade-in {
//     animation: fadeIn 0.7s ease;
//   }
//   @keyframes fadeIn {
//     from { opacity: 0; transform: translateY(-10px); }
//     to { opacity: 1; transform: none; }
//   }
// }
