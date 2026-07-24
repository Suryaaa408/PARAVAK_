import { Hero } from '@/components/Hero';
import { NewsletterEmbed } from '@/components/NewsletterEmbed';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsletter | Parāvāk',
  description: 'Subscribe to the Parāvāk newsletter for the latest essays, interviews, and updates.',
};

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-bone">
      <Hero 
        variant="inner" 
        title="Newsletter" 
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-charcoal mb-6">Letters from Parāvāk</h2>
          <p className="text-xl text-charcoal/70 font-sans max-w-2xl mx-auto leading-relaxed">
            Join thousands of readers who receive our curated selection of profound essays, philosophical inquiries, and cultural commentary delivered directly to their inbox every month.
          </p>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-mist-1 transform hover:scale-[1.02] transition-transform duration-500">
          <NewsletterEmbed />
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-sans">
          <div>
            <div className="text-3xl mb-4">📖</div>
            <h3 className="font-bold text-charcoal mb-2">Deep Reads</h3>
            <p className="text-sm text-charcoal/70">Long-form essays that invite slow, contemplative reading.</p>
          </div>
          <div>
            <div className="text-3xl mb-4">🎙️</div>
            <h3 className="font-bold text-charcoal mb-2">New Media</h3>
            <p className="text-sm text-charcoal/70">Be the first to know about new podcast episodes and video essays.</p>
          </div>
          <div>
            <div className="text-3xl mb-4">🏛️</div>
            <h3 className="font-bold text-charcoal mb-2">Community</h3>
            <p className="text-sm text-charcoal/70">Updates on events, reading groups, and collaborative projects.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
