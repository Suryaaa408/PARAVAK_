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
        <nav className="flex flex-col gap-4 font-serif text-2xl text-charcoal">
          <Link href="/" onClick={onClose} className="hover:text-ochre transition-colors duration-300">Home</Link>
          <Link href="/vaktavya" onClick={onClose} className="hover:text-ochre transition-colors duration-300">Vaktavya</Link>
          <Link href="/about" onClick={onClose} className="hover:text-ochre transition-colors duration-300">About Us</Link>
          <Link href="/contact" onClick={onClose} className="hover:text-ochre transition-colors duration-300">Contact</Link>
          <Link href="/newsletter" onClick={onClose} className="hover:text-ochre transition-colors duration-300">Newsletter</Link>
          <Link href="/articles" onClick={onClose} className="hover:text-ochre transition-colors duration-300">Articles</Link>
          <Link href="/book-review" onClick={onClose} className="hover:text-ochre transition-colors duration-300">Book Review</Link>
          <Link href="/podcasts-and-lectures" onClick={onClose} className="hover:text-ochre transition-colors duration-300">Podcasts & Lectures</Link>
          <Link href="/shastra" onClick={onClose} className="hover:text-ochre transition-colors duration-300">Shastra</Link>
          <Link href="/kavya" onClick={onClose} className="hover:text-ochre transition-colors duration-300">Kavya</Link>
          <Link href="/gallery" onClick={onClose} className="hover:text-ochre transition-colors duration-300">Gallery</Link>
          <Link href="/announcements" onClick={onClose} className="hover:text-ochre transition-colors duration-300">Activity & Announcements</Link>
        </nav>
      </div>
    </div>
  );
}
