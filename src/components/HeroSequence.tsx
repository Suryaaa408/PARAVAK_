'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function HeroSequence() {
  const [phase, setPhase] = useState<'logo' | 'typewriter' | 'mist' | 'complete'>('logo');
  const [typedText, setTypedText] = useState('');
  const fullText = 'Parāvāk';

  useEffect(() => {
    // Check session storage
    if (typeof window !== 'undefined') {
      const hasSeenIntro = sessionStorage.getItem('paravak_hero_intro_seen');
      if (hasSeenIntro) {
        setPhase('complete');
        return;
      }
    }

    // Phase 1: Logo (0 - 1.2s)
    const logoTimer = setTimeout(() => {
      setPhase('typewriter');
    }, 1200);

    return () => clearTimeout(logoTimer);
  }, []);

  useEffect(() => {
    if (phase === 'typewriter') {
      let currentIdx = 0;
      const typeInterval = setInterval(() => {
        if (currentIdx <= fullText.length) {
          setTypedText(fullText.slice(0, currentIdx));
          currentIdx++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setPhase('mist');
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('paravak_hero_intro_seen', 'true');
            }
          }, 800);
        }
      }, 150);

      return () => clearInterval(typeInterval);
    }
  }, [phase]);

  const handleSkip = () => {
    setPhase('complete');
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('paravak_hero_intro_seen', 'true');
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-kailash-night text-kailash-snow">
      {/* Background Parallax Kailash Mist Visual */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105 ${
          phase === 'mist' || phase === 'complete' ? 'opacity-80 scale-100' : 'opacity-20 scale-110'
        }`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(11, 16, 23, 0.6), rgba(11, 16, 23, 0.9)), url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />

      {/* Subtle Fog Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-kailash-night via-transparent to-kailash-night/50 pointer-events-none" />

      {/* Skip Button */}
      {phase !== 'complete' && (
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 z-20 font-sans text-xs uppercase tracking-widest text-mist-1 hover:text-ochre border border-mist-1/30 px-3 py-1.5 rounded transition-all duration-300"
        >
          Skip Intro →
        </button>
      )}

      {/* Animation Sequence Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl py-12 flex flex-col items-center">
        {/* Phase 1: Logo */}
        {phase === 'logo' && (
          <div className="animate-fade-in-up flex flex-col items-center gap-4">
            <svg className="w-16 h-16 text-ochre" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="50" cy="50" r="45" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="30" />
              <path d="M50 20v60M20 50h60" />
            </svg>
            <span className="font-sans text-xs uppercase tracking-widest text-mist-2">Entering Space of Vāda & Samvāda</span>
          </div>
        )}

        {/* Phase 2: Typewriter */}
        {phase === 'typewriter' && (
          <div className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-bone">
            <span>{typedText}</span>
            <span className="animate-pulse text-ochre">|</span>
          </div>
        )}

        {/* Phase 3 & Complete: Full Hero Content */}
        {(phase === 'mist' || phase === 'complete') && (
          <div className="animate-fade-in-up flex flex-col items-center gap-8">
            <div className="inline-block border-b border-ochre/40 pb-2">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-ochre">Journal of Philosophy, Culture & Dialogue</span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl font-bold text-bone tracking-tight leading-tight">
              Parāvāk
            </h1>

            {/* Sanskrit Verse & Gloss */}
            <div className="bg-kailash-slate/60 backdrop-blur-md border border-mist-1/15 p-6 md:p-8 rounded-lg max-w-3xl my-4 text-left shadow-2xl">
              <p className="font-sanskrit text-2xl md:text-3xl text-ochre-light mb-3 text-center tracking-wide leading-relaxed">
                "सहृदयं सांमनस्यम् अविद्वेषं कृणोमि वः"
              </p>
              <p className="font-sans text-xs uppercase tracking-widest text-mist-2 text-center mb-4">
                (Atharvaveda 3.30.1)
              </p>
              <p className="font-serif italic text-lg md:text-xl text-bone/90 text-center leading-relaxed">
                "I create for you concord of heart, harmony of mind, and freedom from hostility — empowering a shared vision built on rigorous intellect (<span className="text-ochre">vāda</span>) and deep empathetic dialogue (<span className="text-ochre">samvāda</span>)."
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <Link
                href="/vaktavya"
                className="bg-ochre hover:bg-ochre-dark text-bone font-sans text-sm font-medium tracking-wider uppercase px-6 py-3 rounded transition-all duration-300 shadow-md"
              >
                Read Vaktavya (Statement)
              </Link>
              <Link
                href="/articles"
                className="border border-mist-1/40 hover:border-ochre text-bone hover:text-ochre font-sans text-sm font-medium tracking-wider uppercase px-6 py-3 rounded transition-all duration-300"
              >
                Explore Articles
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
