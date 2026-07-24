import Link from 'next/link';

interface HeroProps {
  variant?: 'home' | 'inner';
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function Hero({ variant = 'home', title, subtitle, ctaText, ctaLink }: HeroProps) {
  if (variant === 'inner') {
    return (
      <section className="relative bg-bone-light py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-ochre rounded-full blur-3xl opacity-8 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">{title}</h1>
          {subtitle && <p className="font-sans text-xl text-mist-3 max-w-2xl">{subtitle}</p>}
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[80vh] bg-bone flex items-center overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="w-full md:w-[60%] flex flex-col items-start pt-12 md:pt-0">
          <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="font-sans text-xl md:text-2xl text-mist-3 max-w-xl mb-10">
              {subtitle}
            </p>
          )}
          {ctaText && ctaLink && (
            <Link 
              href={ctaLink}
              className="inline-flex items-center justify-center bg-ochre text-bone px-8 py-3 font-sans text-sm uppercase tracking-wider hover:bg-ochre-dark transition-colors duration-300"
            >
              {ctaText}
            </Link>
          )}
        </div>
        <div className="w-full md:w-[40%] flex justify-center mt-12 md:mt-0 opacity-20 pointer-events-none">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-ochre flex items-center justify-center">
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-full border border-ochre/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
