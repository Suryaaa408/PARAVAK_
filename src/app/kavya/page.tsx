import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kavya & Poetry | Parāvāk',
  description: 'Translations, verse commentaries, and poetic appreciations of classical Sanskrit and vernacular literature.',
};

export default function KavyaPage() {
  const poems = [
    {
      title: 'Reading Kālidāsa\'s Meghadūta: The Longing of exile',
      author: 'Ananya Iyer',
      verse: 'कश्चित्कान्ताविरहगुरुणा स्वाधिकारप्रमत्तः...',
      translation: 'A certain Yakṣa, negligent in his duty, condemned to one year\'s exile by his master\'s curse...',
      slug: 'reading-kalidasa-today',
    },
    {
      title: 'Bhakti Verses of Mīrābāī: Love Beyond Boundaries',
      author: 'Meera Krishnamurthy',
      verse: 'मेरे तो गिरधर गोपाल दूसरो न कोई...',
      translation: 'Girdhar Gopal alone is mine, none other. Upon whose head sits the peacock-feather crown...',
      slug: 'bhakti-and-the-politics-of-devotion',
    },
  ];

  return (
    <div className="min-h-screen bg-bone py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4 border-b border-mist-1 pb-8">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-ochre">Sanskrit & Vernacular Poetics</span>
          <h1 className="font-serif text-5xl font-bold text-charcoal">Kāvya & Verse</h1>
          <p className="font-serif text-lg text-mist-3 max-w-xl mx-auto">
            Explorations into classical meter, aesthetic suggestion (<span className="italic">dhvani</span>), and devotional poetry.
          </p>
        </div>

        <div className="space-y-8">
          {poems.map((p) => (
            <div key={p.title} className="bg-bone-light border border-mist-1 p-8 rounded-lg space-y-4 shadow-sm hover:border-ochre transition-colors">
              <span className="font-sans text-xs uppercase tracking-widest text-ochre font-bold">By {p.author}</span>
              <h2 className="font-serif text-2xl font-bold text-charcoal">{p.title}</h2>

              <div className="bg-bone p-6 rounded border-l-4 border-ochre space-y-3 font-sanskrit text-xl text-charcoal">
                <p className="font-semibold text-ochre-dark">{p.verse}</p>
                <p className="font-newsreader italic text-base text-mist-3">{p.translation}</p>
              </div>

              <Link href={`/articles/${p.slug}`} className="inline-block font-sans text-xs uppercase tracking-widest text-ochre font-bold hover:underline">
                Read Full Poetic Commentary →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
