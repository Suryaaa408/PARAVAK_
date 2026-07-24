import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vaktavya | Statement of Purpose',
  description: 'Parāvāk statement of vision, vāda, and samvāda for constructive debate and philosophical inquiry.',
};

export default function VaktavyaPage() {
  return (
    <div className="relative min-h-[90vh] bg-kailash-night text-kailash-snow flex flex-col justify-center items-center py-20 px-6 overflow-hidden">
      {/* Background Manasarovar Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(11, 16, 23, 0.7), rgba(11, 16, 23, 0.95)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-block border-b border-ochre/50 pb-2">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-ochre">Statement of Purpose</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-bold text-bone tracking-tight">
          Vaktavya
        </h1>

        <div className="font-sanskrit text-2xl md:text-3xl text-ochre-light py-2">
          "वादे वादे जायते तत्त्वबोधः"
        </div>

        <div className="bg-kailash-slate/70 backdrop-blur-md border border-mist-1/20 p-8 md:p-12 rounded-xl text-left space-y-6 shadow-2xl">
          <p className="font-serif text-xl md:text-2xl text-bone leading-relaxed">
            Parāvāk brings together researchers, academics, and thinkers with a grander vision for our collective tomorrow. In an age of digital chaos, we provide a collaborative space for deep philosophical inquiry.
          </p>
          <p className="font-serif text-xl md:text-2xl text-bone/90 leading-relaxed">
            At our core is <strong className="text-ochre font-semibold">vāda</strong>—the perennial, timeless tradition of constructive debate that has historically illuminated truth and dismantled limiting ideologies.
          </p>
          <p className="font-serif text-xl md:text-2xl text-bone/90 leading-relaxed">
            By transforming static knowledge into expansive, lived experience, we empower an international community to break free from passive consumption, champion rigorous discourse, and co-create a mindful, shared future.
          </p>
        </div>

        <div className="pt-6 flex justify-center gap-4">
          <Link
            href="/articles"
            className="bg-ochre hover:bg-ochre-dark text-bone font-sans text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors duration-300"
          >
            Read Our Publications
          </Link>
          <Link
            href="/about"
            className="border border-mist-1/30 hover:border-ochre text-bone hover:text-ochre font-sans text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors duration-300"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
