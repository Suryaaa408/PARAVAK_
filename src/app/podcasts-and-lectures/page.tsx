import type { Metadata } from 'next';
import { audioEpisodes, videos } from '@/data/mock/articles';

export const metadata: Metadata = {
  title: 'Podcasts & Lectures | Parāvāk',
  description: 'Audio episodes, roundtable discussions, and video lectures on philosophy and culture.',
};

export default function PodcastsAndLecturesPage() {
  return (
    <div className="min-h-screen bg-kailash-night text-kailash-snow py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4 border-b border-kailash-slate pb-8">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-ochre">Audio & Video Media</span>
          <h1 className="font-serif text-5xl font-bold text-bone">Podcasts & Lectures</h1>
          <p className="font-serif text-lg text-mist-2 max-w-2xl mx-auto">
            Engage with scholars through recorded dialogues (<span className="italic text-ochre">samvāda</span>), audio podcasts, and keynote lectures.
          </p>
        </div>

        {/* Audio Episodes */}
        <section className="space-y-8">
          <h2 className="font-serif text-3xl font-bold text-bone border-b border-kailash-slate pb-3">Audio Podcast Episodes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audioEpisodes.map((ep) => (
              <div key={ep.id} className="bg-kailash-slate/60 border border-mist-1/15 p-6 rounded-lg space-y-4 flex flex-col justify-between">
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-ochre font-bold block mb-2">Duration: {ep.duration}</span>
                  <h3 className="font-serif text-xl font-bold text-bone mb-2">{ep.title}</h3>
                  <p className="font-newsreader text-sm text-mist-2 leading-relaxed">{ep.description}</p>
                </div>
                <button className="w-full bg-ochre hover:bg-ochre-dark text-bone font-sans text-xs uppercase tracking-widest py-2.5 rounded font-semibold transition-colors mt-4">
                  ▶ Listen Episode
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Video Lectures */}
        <section className="space-y-8">
          <h2 className="font-serif text-3xl font-bold text-bone border-b border-kailash-slate pb-3">Video Lectures & Panels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((vid) => (
              <div key={vid.id} className="bg-kailash-slate/60 border border-mist-1/15 rounded-lg overflow-hidden space-y-4">
                <div className="relative aspect-video bg-kailash-slate flex items-center justify-center">
                  <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover opacity-80" />
                  <div className="absolute w-14 h-14 bg-ochre/90 rounded-full flex items-center justify-center text-bone shadow-lg">
                    ▶
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <span className="font-sans text-xs uppercase tracking-widest text-ochre font-bold">{vid.duration}</span>
                  <h3 className="font-serif text-xl font-bold text-bone">{vid.title}</h3>
                  <p className="font-newsreader text-sm text-mist-2 leading-relaxed">{vid.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
