import Link from 'next/link';
import { NewsletterEmbed } from './NewsletterEmbed';

export function Footer() {
  return (
    <footer className="bg-charcoal text-mist-1 pt-16 pb-8 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-flex items-center gap-2 text-bone hover:text-ochre transition-colors duration-300">
              <span className="font-serif text-2xl tracking-[-0.04em]">PARĀVĀK</span>
            </Link>
            <p className="text-mist-2 max-w-sm">
              Exploring the intersections of philosophy, religion, culture, language, and history.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-ochre transition-colors duration-300" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="hover:text-ochre transition-colors duration-300" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:text-ochre transition-colors duration-300" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-lg text-bone">Explore</h3>
              <nav className="flex flex-col gap-2 text-sm">
                <Link href="/essays" className="hover:text-ochre transition-colors duration-300">Essays</Link>
                <Link href="/reflections" className="hover:text-ochre transition-colors duration-300">Reflections</Link>
                <Link href="/articles" className="hover:text-ochre transition-colors duration-300">Articles</Link>
                <Link href="/archive" className="hover:text-ochre transition-colors duration-300">Archive</Link>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-lg text-bone">About</h3>
              <nav className="flex flex-col gap-2 text-sm">
                <Link href="/about" className="hover:text-ochre transition-colors duration-300">About</Link>
                <Link href="/people" className="hover:text-ochre transition-colors duration-300">People</Link>
                <Link href="/submit" className="hover:text-ochre transition-colors duration-300">Submit</Link>
                <Link href="/contact" className="hover:text-ochre transition-colors duration-300">Contact</Link>
              </nav>
            </div>
          </div>
          
          <div>
            <NewsletterEmbed variant="dark" />
          </div>
        </div>
        
        <div className="border-t border-ink pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-mist-3">
          <p>&copy; {new Date().getFullYear()} Parāvāk. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-ochre transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ochre transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
