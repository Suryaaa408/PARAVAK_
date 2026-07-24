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
        
        <nav className="hidden md:flex items-center gap-6 font-sans text-sm uppercase tracking-wider text-mist-3">
          <Link href="/" className="hover:text-ochre transition-colors duration-300">Home</Link>
          <Link href="/essays" className="hover:text-ochre transition-colors duration-300">Essays</Link>
          <Link href="/reflections" className="hover:text-ochre transition-colors duration-300">Reflections</Link>
          <div className="relative group">
            <span className="cursor-pointer hover:text-ochre transition-colors duration-300">Categories</span>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-bone border border-mist-1 p-4 flex flex-col gap-2 w-48 shadow-lg">
                <Link href="/category/philosophy" className="hover:text-ochre">Philosophy</Link>
                <Link href="/category/religion" className="hover:text-ochre">Religion</Link>
                <Link href="/category/culture" className="hover:text-ochre">Culture</Link>
                <Link href="/category/language" className="hover:text-ochre">Language</Link>
                <Link href="/category/history" className="hover:text-ochre">History</Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <span className="cursor-pointer hover:text-ochre transition-colors duration-300">Watch/Listen</span>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-bone border border-mist-1 p-4 flex flex-col gap-2 w-32 shadow-lg">
                <Link href="/watch" className="hover:text-ochre">Watch</Link>
                <Link href="/listen" className="hover:text-ochre">Listen</Link>
              </div>
            </div>
          </div>
          <Link href="/people" className="hover:text-ochre transition-colors duration-300">People</Link>
          <Link href="/about" className="hover:text-ochre transition-colors duration-300">About</Link>
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
