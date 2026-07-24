import { Hero } from '@/components/Hero';
import { PullQuote } from '@/components/PullQuote';

export default function About() {
  return (
    <main className="bg-bone min-h-screen">
      <Hero variant="inner" title="About Parāvāk" />
      
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-[768px]">
          <div className="prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-headings:text-charcoal prose-p:font-sans prose-p:text-mist-3 prose-p:leading-relaxed prose-a:text-ochre max-w-none">
            <p>
              Parāvāk is a digital publication dedicated to the deep, contemplative exploration of philosophy, religion, and culture. We believe in the power of samvāda—the ancient Indian tradition of constructive dialogue and intellectual exchange.
            </p>
            
            <PullQuote 
              quote="True understanding emerges not from isolated reflection, but from the spaces between voices."
              attribution="The Parāvāk Editorial Board"
            />
            
            <h2>Our Origin Story</h2>
            <p>
              Founded in 2026, Parāvāk emerged from a collective desire to bridge the gap between rigorous scholarship and accessible public discourse. We recognised a need for a space that honours the depth of classical thought while engaging with the complexities of the contemporary world.
            </p>
            
            <h2>The Samvāda Mission</h2>
            <p>
              At the heart of Parāvāk is the principle of samvāda. This is not mere debate, where the goal is to win an argument, but a collaborative journey towards truth. We invite diverse perspectives, fostering a culture of respectful and profound inquiry.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
