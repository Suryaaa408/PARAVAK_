import React from 'react';

interface PullQuoteProps {
  quote: string;
  attribution?: string;
  className?: string;
}

export function PullQuote({ quote, attribution, className = '' }: PullQuoteProps) {
  return (
    <figure className={`my-8 md:my-12 pl-6 md:pl-8 border-l-[3px] border-ochre ${className}`}>
      <blockquote className="font-serif italic text-xl md:text-2xl text-mist-3">
        "{quote}"
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 font-sans text-sm text-mist-2">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}
