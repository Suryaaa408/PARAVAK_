import { HeroSequence } from '@/components/HeroSequence';
import { ArticleCard } from '@/components/ArticleCard';
import { NewsletterEmbed } from '@/components/NewsletterEmbed';
import { articles, videos, audioEpisodes } from '@/data/mock/articles';
import Link from 'next/link';

export default function Home() {
  const featuredArticles = articles.slice(0, 6);
  const weeklyGallery = {
    title: 'Weekly Photo Essay: Silence of the High Himalayas',
    date: '24 July 2026',
    photographer: 'A. Bhattacharya & Team',
    location: 'Mount Kailash & Manasarovar Basin',
    summary: 'A visual meditation on spatial vastness, sacred geography, and the phenomenology of solitude.',
    coverImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    imageCount: 12,
  };

  return (
    <main className="min-h-screen bg-bone">
      {/* Step 3: Hero / Intro Sequence */}
      <HeroSequence />

      {/* Mission & Vaktavya Strip */}
      <section className="bg-bone-light py-20 border-y border-mist-1">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-ochre">Statement of Intent</span>
          <p className="font-serif text-2xl md:text-4xl leading-relaxed text-charcoal">
            Parāvāk brings together researchers, academics, and thinkers to foster deep philosophical inquiry and constructive dialogue (<span className="italic text-ochre">vāda</span>) in an age of digital chaos.
          </p>
          <div className="pt-4">
            <Link
              href="/vaktavya"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-ochre hover:text-ochre-dark transition-colors font-semibold border-b border-ochre pb-1"
            >
              Read full Vaktavya Statement →
            </Link>
          </div>
        </div>
      </section>

      {/* Step 5: Masonry Grid Section over Fog / Water Texture */}
      <section className="py-24 bg-kailash-snow relative overflow-hidden">
        {/* Subtle Water/Fog Texture Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2B343D_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4 border-b border-mist-1 pb-6">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-mist-3">Curated Multi-Media Grid</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-charcoal">Featured Publications</h2>
            </div>
            <Link
              href="/articles"
              className="font-sans text-xs uppercase tracking-widest text-ochre hover:text-ochre-dark transition-colors border border-ochre/40 px-5 py-2.5 rounded"
            >
              Browse Full Archive →
            </Link>
          </div>

          {/* Masonry Layout */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {featuredArticles.map((article, idx) => (
              <div key={article.slug} className="break-inside-avoid">
                <ArticleCard article={article} variant="grid" />
              </div>
            ))}

            {/* Audio Episode Card */}
            {audioEpisodes.slice(0, 1).map((ep) => (
              <div key={ep.id} className="break-inside-avoid bg-bone border border-mist-1 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-ochre mb-2">
                  <span className="w-2 h-2 rounded-full bg-ochre animate-pulse" />
                  Podcast Episode • {ep.duration}
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-2">{ep.title}</h3>
                <p className="font-body text-sm text-charcoal/80 mb-4 line-clamp-3">{ep.description}</p>
                <div className="flex justify-between items-center text-xs font-sans text-mist-3">
                  <span>{ep.publishedAt.slice(0, 10)}</span>
                  <Link href="/podcasts-and-lectures" className="text-ochre hover:underline">Listen Now →</Link>
                </div>
              </div>
            ))}

            {/* Video Item Card */}
            {videos.slice(0, 1).map((vid) => (
              <div key={vid.id} className="break-inside-avoid bg-kailash-slate text-kailash-snow border border-kailash-mist/20 p-6 rounded-lg shadow-md">
                <div className="text-xs font-sans uppercase tracking-widest text-ochre-light mb-2">Lecture & Media • {vid.duration}</div>
                <h3 className="font-serif text-xl font-bold text-bone mb-2">{vid.title}</h3>
                <p className="font-body text-sm text-bone/80 mb-4 line-clamp-3">{vid.description}</p>
                <div className="flex justify-between items-center text-xs font-sans text-mist-2">
                  <span>{vid.publishedAt.slice(0, 10)}</span>
                  <Link href="/podcasts-and-lectures" className="text-ochre-light hover:underline">Watch Video →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 5: Full-Page Weekly Photo / Gallery Feature */}
      <section className="relative py-28 bg-kailash-night text-kailash-snow overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{ backgroundImage: `url(${weeklyGallery.coverImage})` }}
        />
        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center space-y-8">
          <div className="inline-block border-b border-ochre/40 pb-2">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-ochre">Weekly Visual Feature</span>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl font-bold text-bone">{weeklyGallery.title}</h2>

          <p className="font-serif text-xl text-bone/90 max-w-3xl mx-auto leading-relaxed">
            {weeklyGallery.summary}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 font-sans text-xs uppercase tracking-wider text-mist-2 pt-2">
            <span>By {weeklyGallery.photographer}</span>
            <span>•</span>
            <span>{weeklyGallery.location}</span>
            <span>•</span>
            <span>{weeklyGallery.imageCount} Frames</span>
          </div>

          <div className="pt-6">
            <Link
              href="/gallery"
              className="bg-ochre hover:bg-ochre-dark text-bone font-sans text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors duration-300 shadow-xl"
            >
              Enter Photo Essay Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Section Taxonomy */}
      <section className="py-24 bg-bone">
        <div className="container mx-auto px-6 text-center space-y-12">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-mist-3">Section Taxonomy</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mt-2">Explore the Parāvāk Corpus</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Articles', href: '/articles', count: '14 Entries' },
              { name: 'Book Reviews', href: '/book-review', count: '6 Reviews' },
              { name: 'Podcasts & Lectures', href: '/podcasts-and-lectures', count: '7 Media' },
              { name: 'Shastra Matrix', href: '/shastra', count: '3D Combinatrix' },
              { name: 'Kavya & Verse', href: '/kavya', count: 'Poetics' },
              { name: 'Photo Gallery', href: '/gallery', count: 'Weekly Feature' },
            ].map((tax) => (
              <Link
                key={tax.name}
                href={tax.href}
                className="group p-6 bg-bone-light border border-mist-1 hover:border-ochre transition-all duration-300 text-left rounded shadow-sm hover:shadow"
              >
                <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-ochre transition-colors">{tax.name}</h3>
                <span className="font-sans text-xs text-mist-3 block mt-2">{tax.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Step 6: Newsletter Section */}
      <section className="py-24 bg-kailash-slate text-kailash-snow">
        <div className="container mx-auto px-6 flex justify-center">
          <NewsletterEmbed variant="dark" />
        </div>
      </section>
    </main>
  );
}
