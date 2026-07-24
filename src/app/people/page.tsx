import { Hero } from '@/components/Hero';
import { MastheadSection } from '@/components/MastheadSection';
import { SectionDivider } from '@/components/SectionDivider';
import { mastheadSections } from '@/data/mock/masthead';

export default function PeoplePage() {
  return (
    <main className="bg-bone min-h-screen">
      <Hero variant="inner" title="People" />
      
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {mastheadSections.map((section, index) => (
            <div key={section.title}>
              <MastheadSection section={section} />
              {index < mastheadSections.length - 1 && <SectionDivider />}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
