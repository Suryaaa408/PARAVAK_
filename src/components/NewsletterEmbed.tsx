'use client';

import { useState } from 'react';

interface NewsletterEmbedProps {
  variant?: 'default' | 'compact' | 'dark';
}

export function NewsletterEmbed({ variant = 'default' }: NewsletterEmbedProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Subscribe:', email);
    setEmail('');
  };

  const isDark = variant === 'dark';
  const isCompact = variant === 'compact';

  return (
    <div className={`flex flex-col ${isCompact ? 'gap-2' : 'gap-4'} w-full max-w-md`}>
      <h3 className={`font-serif ${isCompact ? 'text-lg' : 'text-xl'} ${isDark ? 'text-bone' : 'text-charcoal'}`}>
        Stay in the conversation
      </h3>
      {!isCompact && (
        <p className={`font-sans text-sm ${isDark ? 'text-mist-2' : 'text-mist-3'}`}>
          Join our newsletter for the latest essays and reflections.
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className={`flex-1 px-4 py-2 font-sans text-sm border focus:outline-none focus:ring-1 focus:ring-ochre transition-all duration-300 ${
            isDark 
              ? 'bg-ink border-mist-3 text-bone placeholder-mist-2' 
              : 'bg-bone-light border-mist-1 text-charcoal placeholder-mist-3'
          }`}
        />
        <button
          type="submit"
          className="px-6 py-2 bg-ochre text-bone font-sans text-sm uppercase tracking-wider hover:bg-ochre-dark transition-colors duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
