'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-kailash-night text-kailash-snow pt-20 pb-10 overflow-hidden font-sans border-t border-kailash-slate">
      {/* Starry Night Sky & Crescent Moon Visual background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Curved Crescent Moon Vector Graphic in Left Corner */}
      <div className="absolute top-6 left-6 md:top-12 md:left-12 pointer-events-none opacity-30 text-ochre-light">
        <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-36 md:h-36" fill="currentColor">
          <path d="M50 10 A40 40 0 1 0 90 50 A32 32 0 1 1 50 10 Z" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <Link href="/" className="inline-flex flex-col text-bone hover:text-ochre transition-colors duration-300">
              <span className="font-serif text-3xl font-bold tracking-tight">PARĀVĀK</span>
              <span className="font-sanskrit text-sm text-ochre mt-1">"वादे वादे जायते तत्त्वबोधः"</span>
            </Link>
            <p className="text-mist-2 text-sm leading-relaxed">
              A collaborative space for deep philosophical inquiry, bridging ancient wisdom (<span className="italic">vāda & samvāda</span>) and contemporary thought.
            </p>
            <div className="flex gap-4 text-mist-2 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-ochre transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-ochre transition-colors" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="mailto:contact@paravak.org" className="hover:text-ochre transition-colors" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold text-bone border-b border-kailash-slate pb-2">Sections</h3>
            <nav className="flex flex-col gap-2.5 text-sm text-mist-2">
              <Link href="/articles" className="hover:text-ochre transition-colors">Articles & Essays</Link>
              <Link href="/book-review" className="hover:text-ochre transition-colors">Book Reviews</Link>
              <Link href="/podcasts-and-lectures" className="hover:text-ochre transition-colors">Podcasts & Lectures</Link>
              <Link href="/shastra" className="hover:text-ochre transition-colors">Shastra Combinatrix</Link>
              <Link href="/kavya" className="hover:text-ochre transition-colors">Kavya & Poetry</Link>
              <Link href="/gallery" className="hover:text-ochre transition-colors">Visual Gallery</Link>
            </nav>
          </div>

          {/* Nav Col 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold text-bone border-b border-kailash-slate pb-2">Organisation</h3>
            <nav className="flex flex-col gap-2.5 text-sm text-mist-2">
              <Link href="/vaktavya" className="hover:text-ochre transition-colors">Vaktavya (Statement)</Link>
              <Link href="/about" className="hover:text-ochre transition-colors">About Us</Link>
              <Link href="/announcements" className="hover:text-ochre transition-colors">Activity & Announcements</Link>
              <Link href="/submit" className="hover:text-ochre transition-colors">Submissions</Link>
              <Link href="/contact" className="hover:text-ochre transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Newsletter Box */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold text-bone border-b border-kailash-slate pb-2">Stay Connected</h3>
            <p className="text-xs text-mist-2 leading-relaxed">
              Subscribe to the Parāvāk quarterly dispatch for curated essays, announcements, and philosophical dialogues.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2 mt-2">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="bg-kailash-slate/60 border border-mist-1/20 px-4 py-2.5 rounded text-sm text-bone placeholder:text-mist-3 focus:outline-none focus:border-ochre"
              />
              <button
                type="submit"
                className="bg-ochre hover:bg-ochre-dark text-bone font-sans text-xs uppercase tracking-wider py-2.5 px-4 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Dynamic Copyright line */}
        <div className="border-t border-kailash-slate/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-mist-3">
          <p>© {currentYear} Parāvāk Digital Publication. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ochre transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ochre transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

