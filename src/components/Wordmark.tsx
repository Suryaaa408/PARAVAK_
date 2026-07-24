import Link from 'next/link';

interface WordmarkProps {
  showLotus?: boolean;
  className?: string;
}

export function Wordmark({ showLotus = false, className = '' }: WordmarkProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 text-charcoal hover:text-ochre transition-colors duration-300 ${className}`}>
      {showLotus && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 22c4-4 8-8 8-12a8 8 0 1 0-16 0c0 4 4 8 8 12z" />
          <path d="M12 22c-2-4-4-8-4-12a4 4 0 1 1 8 0c0 4-2 8-4 12z" />
          <path d="M12 22v-8" />
        </svg>
      )}
      <span className="font-serif text-2xl tracking-[-0.04em]">PARĀVĀK</span>
    </Link>
  );
}
