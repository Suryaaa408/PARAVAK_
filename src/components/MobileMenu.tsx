'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-bone z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } flex flex-col`}
    >
      <div className="flex items-center justify-end p-4 h-16">
        <button onClick={onClose} className="text-charcoal hover:text-ochre transition-colors duration-300" aria-label="Close menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto px-8 pb-8">
        <nav className="flex flex-col gap-6 font-serif text-3xl text-charcoal">
          <Link href="/" onClick={onClose} className="hover:text-ochre transition-colors duration-300">Home</Link>
          <Link href="/essays" onClick={onClose} className="hover:text-ochre transition-colors duration-300">Essays</Link>
          <Link href="/reflections" onClick={onClose} className="hover:text-ochre transition-colors duration-300">Reflections</Link>
          
          <div className="flex flex-col gap-4 border-l border-mist-1 pl-4 my-2">
            <span className="font-sans text-sm uppercase tracking-wider text-mist-3">Categories</span>
            <Link href="/category/philosophy" onClick={onClose} className="hover:text-ochre transition-colors duration-300 text-2xl">Philosophy</Link>
            <Link href="/category/religion" onClick={onClose} className="hover:text-ochre transition-colors duration-300 text-2xl">Religion</Link>
            <Link href="/category/culture" onClick={onClose} className="hover:text-ochre transition-colors duration-300 text-2xl">Culture</Link>
            <Link href="/category/language" onClick={onClose} className="hover:text-ochre transition-colors duration-300 text-2xl">Language</Link>
            <Link href="/category/history" onClick={onClose} className="hover:text-ochre transition-colors duration-300 text-2xl">History</Link>
          </div>
          
          <div className="flex flex-col gap-4 border-l border-mist-1 pl-4 my-2">
            <span className="font-sans text-sm uppercase tracking-wider text-mist-3">Watch/Listen</span>
            <Link href="/watch" onClick={onClose} className="hover:text-ochre transition-colors duration-300 text-2xl">Watch</Link>
            <Link href="/listen" onClick={onClose} className="hover:text-ochre transition-colors duration-300 text-2xl">Listen</Link>
          </div>
          
          <Link href="/people" onClick={onClose} className="hover:text-ochre transition-colors duration-300">People</Link>
          <Link href="/about" onClick={onClose} className="hover:text-ochre transition-colors duration-300">About</Link>
        </nav>
      </div>
    </div>
  );
}
