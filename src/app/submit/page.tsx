import { Hero } from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Submission Guidelines | Parāvāk',
  description: 'How to submit your work to Parāvāk.',
};

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-bone">
      <Hero 
        variant="inner" 
        title="Submission Guidelines" 
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-stone max-w-none">
          <p className="lead text-xl text-charcoal/80 font-serif mb-12">
            Parāvāk welcomes submissions from scholars, writers, and practitioners whose work aligns with our focus on classical Indian thought, comparative philosophy, and the arts. 
          </p>
          
          <h2 className="font-serif text-3xl text-charcoal border-b border-mist-1 pb-4 mb-6">What We Publish</h2>
          <ul className="font-sans text-charcoal/80 space-y-4 mb-12">
            <li><strong>Essays & Articles:</strong> Original explorations of philosophical themes (2,000 – 4,000 words).</li>
            <li><strong>Reviews:</strong> Critical assessments of recent books in our areas of interest (800 – 1,500 words).</li>
            <li><strong>Translations:</strong> High-quality English translations of primary source texts, accompanied by an introduction.</li>
            <li><strong>Poetry & Fiction:</strong> Select pieces that reflect deeply on metaphysical or spiritual themes.</li>
          </ul>
          
          <h2 className="font-serif text-3xl text-charcoal border-b border-mist-1 pb-4 mb-6">The Process</h2>
          <div className="space-y-8 font-sans mb-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-charcoal text-bone rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Initial Pitch</h3>
                <p className="text-charcoal/70">Send a 300-word summary of your proposed piece, along with a brief author bio, to <strong>submissions@paravak.com</strong>.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-charcoal text-bone rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Editorial Review</h3>
                <p className="text-charcoal/70">Our editorial board reviews pitches monthly. We aim to respond within 4-6 weeks.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-charcoal text-bone rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Drafting & Revisions</h3>
                <p className="text-charcoal/70">If accepted, you will work closely with an assigned editor to refine the piece. We use the Chicago Manual of Style (Notes and Bibliography).</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-charcoal text-bone rounded-full flex items-center justify-center font-bold text-xl">4</div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Publication</h3>
                <p className="text-charcoal/70">Once finalized, your piece will be scheduled for publication across our digital channels.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-mist-1/30 p-8 rounded-lg border border-mist-1">
            <h3 className="font-serif text-2xl text-charcoal mb-4">Ready to pitch?</h3>
            <p className="font-sans text-charcoal/70 mb-6">Ensure your submission follows our guidelines before reaching out.</p>
            <a href="mailto:submissions@paravak.com" className="inline-block bg-ochre text-charcoal font-sans px-8 py-3 rounded-md font-medium hover:bg-charcoal hover:text-bone transition-colors">
              Email Submissions
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}
