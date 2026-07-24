import { Hero } from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Watch | Parāvāk',
  description: 'Video essays, interviews, and lectures from Parāvāk.',
};

const mockVideos = [
  {
    id: '1',
    youtubeId: 'dQw4w9WgXcQ',
    title: 'The Nature of Reality in Advaita Vedanta',
    duration: '45:20',
  },
  {
    id: '2',
    youtubeId: 'jNQXAC9IVRw',
    title: 'A Conversation on Modern Aesthetics',
    duration: '22:15',
  },
  {
    id: '3',
    youtubeId: 'eVTXPUF4Oz4',
    title: 'Introduction to Phenomenology',
    duration: '1:15:00',
  }
];

export default function WatchPage() {
  const featuredVideo = mockVideos[0];
  const otherVideos = mockVideos.slice(1);

  return (
    <main className="min-h-screen bg-bone">
      <Hero 
        variant="inner" 
        title="Watch" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl bg-charcoal/10 mb-6">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}`}
              title={featuredVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-3xl font-serif text-charcoal">{featuredVideo.title}</h2>
        </div>

        {otherVideos.length > 0 && (
          <div>
            <h3 className="text-2xl font-serif text-charcoal border-b border-mist-1 pb-4 mb-8">
              More Videos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherVideos.map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="aspect-video w-full rounded-md overflow-hidden bg-charcoal/10 mb-4 relative">
                    <img 
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`} 
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-2 bg-charcoal/80 text-bone text-xs px-2 py-1 rounded font-sans">
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                  <h4 className="font-serif text-lg text-charcoal group-hover:text-ochre transition-colors">{video.title}</h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
