'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Wordmark } from './Wordmark';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bone border-b border-mist-1">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Wordmark />
        
        <nav className="hidden lg:flex items-center gap-4 font-sans text-xs uppercase tracking-wider text-charcoal/80 overflow-x-auto">
          <Link href="/" className="hover:text-ochre transition-colors duration-200">Home</Link>
          <Link href="/vaktavya" className="hover:text-ochre transition-colors duration-200">Vaktavya</Link>
          <Link href="/about" className="hover:text-ochre transition-colors duration-200 whitespace-nowrap">About Us</Link>
          <Link href="/contact" className="hover:text-ochre transition-colors duration-200">Contact</Link>
          <Link href="/newsletter" className="hover:text-ochre transition-colors duration-200">Newsletter</Link>
          <Link href="/articles" className="hover:text-ochre transition-colors duration-200">Articles</Link>
          <Link href="/book-review" className="hover:text-ochre transition-colors duration-200 whitespace-nowrap">Book Review</Link>
          <Link href="/podcasts-and-lectures" className="hover:text-ochre transition-colors duration-200 whitespace-nowrap">Podcasts & Lectures</Link>
          <Link href="/shastra" className="hover:text-ochre transition-colors duration-200">Shastra</Link>
          <Link href="/kavya" className="hover:text-ochre transition-colors duration-200">Kavya</Link>
          <Link href="/gallery" className="hover:text-ochre transition-colors duration-200">Gallery</Link>
          <Link href="/announcements" className="hover:text-ochre transition-colors duration-200">Activity</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsSearchOpen(true)} className="text-charcoal hover:text-ochre transition-colors duration-300" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </button>
          <button className="md:hidden text-charcoal" onClick={() => setIsMobileMenuOpen(true)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      {/* SearchOverlay component to be implemented or imported */}
    </header>
  );
}
