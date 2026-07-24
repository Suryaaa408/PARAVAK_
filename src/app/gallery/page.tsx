import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visual Gallery | Parāvāk',
  description: 'Weekly photo essays exploring sacred geography, heritage sites, and temple architecture.',
};

export default function GalleryPage() {
  const photoEssays = [
    {
      id: 'geography-kailash',
      title: 'Sacred Solitude: Mount Kailash & Manasarovar',
      photographer: 'A. Bhattacharya',
      date: '24 July 2026',
      cover: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      count: 12,
    },
    {
      id: 'temple-kerala',
      title: 'Stone & Sound: Temple Architecture of Kerala',
      photographer: 'Priya Nair',
      date: '10 July 2026',
      cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      count: 16,
    },
  ];

  return (
    <div className="min-h-screen bg-kailash-night text-kailash-snow py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 border-b border-kailash-slate pb-8">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-ochre">Weekly Visual Feature</span>
          <h1 className="font-serif text-5xl font-bold text-bone">Visual Gallery & Photo Essays</h1>
          <p className="font-serif text-lg text-mist-2 max-w-xl mx-auto">
            High-resolution visual meditations on spatial vastness, temple acoustics, and heritage geography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photoEssays.map((pe) => (
            <div key={pe.id} className="bg-kailash-slate/60 border border-mist-1/15 rounded-xl overflow-hidden shadow-xl space-y-4">
              <div className="relative h-64 overflow-hidden">
                <img src={pe.cover} alt={pe.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <span className="absolute bottom-4 right-4 bg-kailash-night/80 border border-ochre/40 px-3 py-1 rounded text-xs font-sans text-ochre">
                  {pe.count} Frames
                </span>
              </div>
              <div className="p-6 space-y-3">
                <span className="font-sans text-xs uppercase tracking-widest text-mist-3">{pe.date} • By {pe.photographer}</span>
                <h2 className="font-serif text-2xl font-bold text-bone">{pe.title}</h2>
                <button className="w-full bg-ochre hover:bg-ochre-dark text-bone font-sans text-xs uppercase tracking-widest py-3 rounded font-semibold transition-colors mt-2">
                  View Photo Essay →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
