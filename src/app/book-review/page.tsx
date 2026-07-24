import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Book Reviews | Parāvāk',
  description: 'Critical scholarly reviews of contemporary and historical monographs on philosophy, religion, and culture.',
};

export default function BookReviewPage() {
  const reviews = [
    {
      title: 'Review: The Self\'s Awareness — Śaṅkara and the Phenomenology of Mind',
      author: 'Reviewed by Dr. Arjun Bhattacharya',
      bookAuthor: 'Prof. Marcus Williams',
      publisher: 'Oxford University Press, 2026',
      excerpt: 'A groundbreaking work that places Advaita Vedānta into direct dialogue with Husserlian phenomenological reductions.',
      slug: 'the-problem-of-consciousness-in-advaita-vedanta',
    },
    {
      title: 'Review: Sacred Sound — Acoustic Architecture in Temple Tantra',
      author: 'Reviewed by Priya Nair',
      bookAuthor: 'Dr. K. R. Ramachandran',
      publisher: 'Motilal Banarsidass, 2025',
      excerpt: 'An indispensable study on the physics and theology of sonic resonance in South Indian sacred spaces.',
      slug: 'the-body-as-temple',
    },
  ];

  return (
    <div className="min-h-screen bg-bone py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4 border-b border-mist-1 pb-8">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-ochre">Critical Literature</span>
          <h1 className="font-serif text-5xl font-bold text-charcoal">Book Reviews</h1>
          <p className="font-serif text-lg text-mist-3 max-w-xl mx-auto">
            Rigorous appraisals of new monographs and seminal publications in philosophy, Indology, and aesthetics.
          </p>
        </div>

        <div className="space-y-8">
          {reviews.map((r) => (
            <div key={r.title} className="bg-bone-light border border-mist-1 p-8 rounded-lg space-y-4 shadow-sm hover:border-ochre transition-colors">
              <span className="font-sans text-xs uppercase tracking-widest text-ochre font-bold">{r.publisher}</span>
              <h2 className="font-serif text-2xl font-bold text-charcoal">{r.title}</h2>
              <div className="font-sans text-xs text-mist-3 space-x-2">
                <span>Book Author: {r.bookAuthor}</span>
                <span>•</span>
                <span className="font-semibold text-charcoal">{r.author}</span>
              </div>
              <p className="font-newsreader text-lg text-charcoal/90 leading-relaxed">{r.excerpt}</p>
              <Link href={`/articles/${r.slug}`} className="inline-block font-sans text-xs uppercase tracking-widest text-ochre font-bold hover:underline">
                Read Full Book Review →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
