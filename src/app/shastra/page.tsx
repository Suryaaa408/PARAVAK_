import type { Metadata } from 'next';
import { ShastraCombinatrix } from '@/components/ShastraCombinatrix';

export const metadata: Metadata = {
  title: 'Shastra Combinatrix | Textual Connectivity Matrix',
  description: 'Interactive 3D timeline mapping the interconnections of classical Indian Shastras.',
};

export default function ShastraPage() {
  return (
    <div className="relative min-h-screen bg-kailash-night text-kailash-snow py-20 px-6 overflow-hidden">
      {/* Background Starry Night */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-ochre">Intertextual Matrix</span>
          <h1 className="font-serif text-5xl font-bold text-bone">Shastra Combinatrix</h1>
          <p className="font-serif text-lg text-mist-2 max-w-3xl mx-auto">
            Explore the multi-dimensional genealogy of Indian textual systems — from Pāṇinian linguistics to Vedāntic non-duality and Kashmiri Śaiva poetics.
          </p>
        </div>

        <ShastraCombinatrix />
      </div>
    </div>
  );
}
