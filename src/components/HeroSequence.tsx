'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function HeroSequence() {
  const [phase, setPhase] = useState<'logo' | 'typewriter' | 'mist' | 'complete'>('logo');
  const [typedText, setTypedText] = useState('');
  const [scrollOffsetY, setScrollOffsetY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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

  // Scroll and Mouse Parallax Event Listeners
  useEffect(() => {
    const handleScroll = () => {
      setScrollOffsetY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePos({ x, y });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
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
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden bg-kailash-night text-kailash-snow">
      {/* ─── 4-LAYER PARALLAX STACK (Layer 0 to Layer 3) ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Layer 0 (Furthest Background) */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isRevealed ? 'opacity-90' : 'opacity-20'
          }`}
          style={{
            backgroundImage: `url('/Paralax/Layer 0.png')`,
            transform: `translate3d(${mousePos.x * 5}px, ${scrollOffsetY * 0.1 + mousePos.y * 5}px, 0) scale(1.05)`,
            transition: 'transform 0.1s ease-out, opacity 1s ease',
          }}
        />

        {/* Layer 1 (Mid-Back Mountains / Clouds) */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isRevealed ? 'opacity-90' : 'opacity-15'
          }`}
          style={{
            backgroundImage: `url('/Paralax/Layer 1.png')`,
            transform: `translate3d(${mousePos.x * 12}px, ${scrollOffsetY * 0.25 + mousePos.y * 10}px, 0) scale(1.08)`,
            transition: 'transform 0.1s ease-out, opacity 1s ease',
          }}
        />

        {/* Layer 2 (Mid-Front Ridge / Hills) */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isRevealed ? 'opacity-95' : 'opacity-10'
          }`}
          style={{
            backgroundImage: `url('/Paralax/Layer 2.png')`,
            transform: `translate3d(${mousePos.x * 20}px, ${scrollOffsetY * 0.4 + mousePos.y * 18}px, 0) scale(1.1)`,
            transition: 'transform 0.1s ease-out, opacity 1s ease',
          }}
        />

        {/* Layer 3 (Foreground Elements) */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isRevealed ? 'opacity-100' : 'opacity-5'
          }`}
          style={{
            backgroundImage: `url('/Paralax/Layer 3.png')`,
            transform: `translate3d(${mousePos.x * 32}px, ${scrollOffsetY * 0.55 + mousePos.y * 28}px, 0) scale(1.12)`,
            transition: 'transform 0.1s ease-out, opacity 1s ease',
          }}
        />

        {/* Atmospheric Gradient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-kailash-night via-transparent to-kailash-night/60" />
      </div>

      {/* Skip Button */}
      {phase !== 'complete' && (
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 z-30 font-sans text-xs uppercase tracking-widest text-mist-1 hover:text-ochre border border-mist-1/30 bg-kailash-slate/50 backdrop-blur px-3 py-1.5 rounded transition-all duration-300"
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

        {/* Phase 3 & Complete: Full Hero Overlay */}
        {isRevealed && (
          <div className="animate-fade-in-up flex flex-col items-center gap-8">
            <div className="inline-block border-b border-ochre/50 pb-2">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-ochre">Journal of Philosophy, Culture & Dialogue</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-bone tracking-tight leading-tight drop-shadow-lg">
              Parāvāk
            </h1>

            {/* Sanskrit Verse & Gloss */}
            <div className="bg-kailash-slate/75 backdrop-blur-md border border-mist-1/20 p-6 md:p-8 rounded-xl max-w-3xl my-2 text-left shadow-2xl">
              <p className="font-sanskrit text-2xl md:text-3xl text-ochre-light mb-3 text-center tracking-wide leading-relaxed">
                "सहृदयं सांमनस्यम् अविद्वेषं कृणोमि वः"
              </p>
              <p className="font-sans text-xs uppercase tracking-widest text-mist-2 text-center mb-4">
                (Atharvaveda 3.30.1)
              </p>
              <p className="font-serif italic text-lg md:text-xl text-bone/90 text-center leading-relaxed">
                "I create for you concord of heart, harmony of mind, and freedom from hostility — empowering a shared vision built on rigorous intellect (<span className="text-ochre font-semibold">vāda</span>) and deep empathetic dialogue (<span className="text-ochre font-semibold">samvāda</span>)."
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <Link
                href="/vaktavya"
                className="bg-ochre hover:bg-ochre-dark text-bone font-sans text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded transition-all duration-300 shadow-xl"
              >
                Read Vaktavya (Statement)
              </Link>
              <Link
                href="/articles"
                className="border border-mist-1/40 hover:border-ochre text-bone hover:text-ochre font-sans text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded transition-all duration-300 bg-kailash-slate/40 backdrop-blur"
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
