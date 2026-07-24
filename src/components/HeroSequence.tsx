'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function HeroSequence() {
  const [phase, setPhase] = useState<'logo' | 'typewriter' | 'mist' | 'complete'>('logo');
  const [typedText, setTypedText] = useState('');
  const [scrollOffsetY, setScrollOffsetY] = useState(0);
  const fullText = 'Parāvāk';

  useEffect(() => {
    // Check session storage
    if (typeof window !== 'undefined') {
      const hasSeenIntro = sessionStorage.getItem('paravak_hero_intro_seen');
      if (hasSeenIntro) {
        setPhase('complete');
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

  // Scroll Parallax Event Listener (Purely Scroll Driven)
  useEffect(() => {
    const handleScroll = () => {
      setScrollOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSkip = () => {
    setPhase('complete');
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('paravak_hero_intro_seen', 'true');
    }
  };

  const isRevealed = phase === 'mist' || phase === 'complete';

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden bg-white text-charcoal">
      {/* ─── 4-LAYER PARALLAX STACK (100% Opacity, Purely Scroll-Triggered) ─── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Layer 0 (Furthest Background) */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isRevealed ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('/Paralax/Layer 0.png')`,
            transform: `translate3d(0, ${scrollOffsetY * 0.1}px, 0)`,
            willChange: 'transform',
          }}
        />

        {/* Layer 1 (Mid-Back Mountains / Clouds) */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isRevealed ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('/Paralax/Layer 1.png')`,
            transform: `translate3d(0, ${scrollOffsetY * 0.25}px, 0)`,
            willChange: 'transform',
          }}
        />

        {/* Layer 2 (Mid-Front Ridge / Hills) */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isRevealed ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('/Paralax/Layer 2.png')`,
            transform: `translate3d(0, ${scrollOffsetY * 0.4}px, 0)`,
            willChange: 'transform',
          }}
        />

        {/* Layer 3 (Foreground Elements) */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isRevealed ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('/Paralax/Layer 3.png')`,
            transform: `translate3d(0, ${scrollOffsetY * 0.6}px, 0)`,
            willChange: 'transform',
          }}
        />

        {/* Light Overlay Gradient for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/40" />
      </div>

      {/* Skip Button */}
      {phase !== 'complete' && (
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 z-30 font-sans text-xs uppercase tracking-widest text-charcoal hover:text-ochre border border-mist-2/40 bg-white/80 backdrop-blur px-3.5 py-1.5 rounded transition-all duration-300 shadow-sm"
        >
          Skip Intro →
        </button>
      )}

      {/* Hero Content Overlay */}
      <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl py-16 flex flex-col items-center">
        {/* Phase 1: Logo */}
        {phase === 'logo' && (
          <div className="animate-fade-in-up flex flex-col items-center gap-4">
            <svg className="w-16 h-16 text-ochre" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="50" cy="50" r="45" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="30" />
              <path d="M50 20v60M20 50h60" />
            </svg>
            <span className="font-sans text-xs uppercase tracking-widest text-mist-3 font-semibold">Entering Space of Vāda & Samvāda</span>
          </div>
        )}

        {/* Phase 2: Typewriter */}
        {phase === 'typewriter' && (
          <div className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-charcoal">
            <span>{typedText}</span>
            <span className="animate-pulse text-ochre">|</span>
          </div>
        )}

        {/* Phase 3 & Complete: Full Hero Overlay */}
        {isRevealed && (
          <div className="animate-fade-in-up flex flex-col items-center gap-8">
            <div className="inline-block border-b border-ochre/50 pb-2">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-ochre font-bold">Journal of Philosophy, Culture & Dialogue</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-charcoal tracking-tight leading-tight">
              Parāvāk
            </h1>

            {/* Sanskrit Verse & Gloss */}
            <div className="bg-white/85 backdrop-blur-md border border-mist-1/60 p-6 md:p-8 rounded-xl max-w-3xl my-2 text-left shadow-xl">
              <p className="font-sanskrit text-2xl md:text-3xl text-ochre-dark mb-3 text-center tracking-wide leading-relaxed font-semibold">
                "सहृदयं सांमनस्यम् अविद्वेषं कृणोमि वः"
              </p>
              <p className="font-sans text-xs uppercase tracking-widest text-mist-3 text-center mb-4 font-medium">
                (Atharvaveda 3.30.1)
              </p>
              <p className="font-serif italic text-lg md:text-xl text-charcoal/90 text-center leading-relaxed">
                "I create for you concord of heart, harmony of mind, and freedom from hostility — empowering a shared vision built on rigorous intellect (<span className="text-ochre font-semibold">vāda</span>) and deep empathetic dialogue (<span className="text-ochre font-semibold">samvāda</span>)."
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <Link
                href="/vaktavya"
                className="bg-ochre hover:bg-ochre-dark text-white font-sans text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded transition-all duration-300 shadow-md"
              >
                Read Vaktavya (Statement)
              </Link>
              <Link
                href="/articles"
                className="border border-charcoal/30 hover:border-ochre text-charcoal hover:text-ochre font-sans text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded transition-all duration-300 bg-white/80 backdrop-blur shadow-sm"
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
