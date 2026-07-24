import { Hero } from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Listen | Parāvāk',
  description: 'Podcasts and audio essays from Parāvāk.',
};

const audioEpisodes = [
  {
    id: '1',
    title: 'Episode 1: The Sounds of Silence',
    date: 'Oct 12, 2023',
    duration: '45 mins',
    description: 'An exploration of silence as a methodological tool in classical Indian philosophy.',
  },
  {
    id: '2',
    title: 'Episode 2: Architecture of the Sacred',
    date: 'Nov 05, 2023',
    duration: '32 mins',
    description: 'Discussing the geometry and metaphysical foundations of temple architecture.',
  },
  {
    id: '3',
    title: 'Episode 3: The Poetics of Time',
    date: 'Dec 01, 2023',
    duration: '50 mins',
    description: 'How different traditions conceptualize the passage of time and its ultimate unreality.',
  }
];

export default function ListenPage() {
  const featuredEpisode = audioEpisodes[0];

  return (
    <main className="min-h-screen bg-bone">
      <Hero 
        variant="inner" 
        title="Listen" 
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Audio Player Shell */}
        <div className="bg-charcoal text-bone rounded-xl p-8 mb-16 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-ochre rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-4xl">🎙️</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <span className="text-ochre font-sans text-sm tracking-widest uppercase mb-2 block">Featured Episode</span>
              <h2 className="text-2xl font-serif mb-2">{featuredEpisode.title}</h2>
              <p className="text-bone/70 font-sans mb-6">{featuredEpisode.description}</p>
              
              <div className="flex items-center gap-4">
                <button className="bg-ochre text-charcoal w-12 h-12 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  ▶
                </button>
                <div className="flex-grow h-2 bg-bone/20 rounded-full overflow-hidden">
                  <div className="h-full bg-ochre w-1/3"></div>
                </div>
                <span className="font-sans text-sm text-bone/70">{featuredEpisode.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Episode Archive */}
        <h3 className="text-2xl font-serif text-charcoal border-b border-mist-1 pb-4 mb-8">
          Episode Archive
        </h3>
        
        <div className="space-y-6">
          {audioEpisodes.map((episode) => (
            <div key={episode.id} className="group p-6 border border-mist-1 rounded-lg hover:border-ochre hover:shadow-md transition-all cursor-pointer bg-white/50">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-sm font-sans text-charcoal/50 mb-1 block">{episode.date} • {episode.duration}</span>
                  <h4 className="text-xl font-serif text-charcoal group-hover:text-ochre transition-colors mb-2">{episode.title}</h4>
                  <p className="text-charcoal/70 font-sans line-clamp-2">{episode.description}</p>
                </div>
                <button className="flex-shrink-0 w-10 h-10 border border-charcoal rounded-full flex items-center justify-center group-hover:bg-ochre group-hover:border-ochre group-hover:text-charcoal transition-colors">
                  ▶
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
