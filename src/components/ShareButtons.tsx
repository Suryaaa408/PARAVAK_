'use client';

import React, { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <div className="flex items-center gap-4">
      <button 
        onClick={shareTwitter}
        className="w-10 h-10 rounded-full border border-mist-1 flex items-center justify-center text-mist-3 hover:text-ochre hover:border-ochre transition-colors duration-300"
        aria-label="Share on X"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </button>
      <button 
        onClick={shareFacebook}
        className="w-10 h-10 rounded-full border border-mist-1 flex items-center justify-center text-mist-3 hover:text-ochre hover:border-ochre transition-colors duration-300"
        aria-label="Share on Facebook"
      >
        <svg className="w-4 h-4 fill-none stroke-current stroke-[1.5px]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </button>
      <div className="relative flex items-center justify-center">
        <button 
          onClick={handleCopy}
          className="w-10 h-10 rounded-full border border-mist-1 flex items-center justify-center text-mist-3 hover:text-ochre hover:border-ochre transition-colors duration-300"
          aria-label="Copy link"
        >
          <svg className="w-4 h-4 fill-none stroke-current stroke-[1.5px]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
          </svg>
        </button>
        {copied && (
          <div className="absolute -top-10 bg-charcoal text-bone text-xs py-1 px-2 rounded font-sans whitespace-nowrap animate-in fade-in duration-200">
            Copied!
          </div>
        )}
      </div>
    </div>
  );
}
