import { notFound } from 'next/navigation';
import { articles } from '@/data/mock/articles';
import { PullQuote } from '@/components/PullQuote';
import { AuthorBioCard } from '@/components/AuthorBioCard';
import { ShareButtons } from '@/components/ShareButtons';
import { RelatedArticles } from '@/components/RelatedArticles';
import { ArticleFootnotesAndBibliography } from '@/components/ArticleFootnotesAndBibliography';
import Link from 'next/link';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const authorName = typeof article.author === 'string' ? article.author : article.author?.name || 'Parāvāk Scholar';
  const authorObj = typeof article.author === 'object' ? article.author : ({ name: authorName, slug: authorName, bio: 'Researcher & Scholar at Parāvāk' } as any);
  const categoryName = typeof article.category === 'string' ? article.category : article.category?.name || 'Philosophy';
  const date = article.publishedAt || article.date;

  const paragraphs = article.body ? article.body.split('\n\n') : [];

  // Default sample footnotes & bibliography per article
  const mockFootnotes = [
    { id: 1, text: 'See Śaṅkara, Brahmasūtrabhāṣya 1.1.1: "athāto brahmajijñāsā" for the primary epistemological framing.' },
    { id: 2, text: 'David Chalmers, "Facing Up to the Problem of Consciousness," Journal of Consciousness Studies 2 (1995): 200–219.' },
    { id: 3, text: 'Bhartṛhari, Vākyapadīya 1.1: "anādinidhanaṁ brahma śabdatattvaṁ yadakṣaram".' },
  ];

  const mockBibliography = [
    { author: 'Śaṅkarācārya', year: 'c. 800 CE', title: 'Brahmasūtrabhāṣya', publisher: 'Motilal Banarsidass Press' },
    { author: 'Chalmers, David J.', year: '1996', title: 'The Conscious Mind: In Search of a Fundamental Theory', publisher: 'Oxford University Press' },
    { author: 'Matilal, Bimal Krishna', year: '1990', title: 'The Word and the World: India\'s Contribution to the Study of Language', publisher: 'Oxford University Press' },
  ];

  return (
    <main className="bg-bone min-h-screen pb-24">
      {/* Header Cover Photo */}
      <div className="relative w-full h-[45vh] md:h-[55vh] bg-kailash-slate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url(${article.heroImage || 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop'})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bone via-bone/30 to-transparent" />
      </div>

      {/* Article Header Details */}
      <header className="-mt-32 relative z-10 container mx-auto px-4 max-w-3xl text-center flex flex-col items-center">
        <div className="bg-bone border border-mist-1 p-8 md:p-12 rounded-lg shadow-xl w-full">
          {categoryName && (
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ochre block mb-4">
              {categoryName}
            </span>
          )}
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 text-mist-3 font-sans text-xs uppercase tracking-wider border-t border-mist-1/40 pt-6">
            <span className="font-semibold text-charcoal">{authorName}</span>
            <span>•</span>
            <span>{date && new Date(date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{article.estimatedReadTime} min read</span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-[720px]">
          <div className="prose prose-lg text-body text-charcoal leading-relaxed font-newsreader space-y-6">
            {paragraphs.map((p, i) => {
              if (i === 1 && article.excerpt) {
                return (
                  <div key={i} className="space-y-6">
                    <p>{p}</p>
                    <PullQuote quote={article.excerpt} />
                  </div>
                );
              }
              return <p key={i}>{p}</p>;
            })}
          </div>

          {/* Footnotes & Bibliography */}
          <ArticleFootnotesAndBibliography footnotes={mockFootnotes} bibliography={mockBibliography} />

          {/* Share */}
          <div className="mt-16 pt-8 border-t border-mist-1 flex justify-between items-center">
            <span className="font-serif text-charcoal text-base font-bold">Share this research</span>
            <ShareButtons title={article.title} />
          </div>
        </div>
      </article>

      {/* Author Bio & Contact + Related Articles */}
      <section className="bg-bone-light py-20 border-t border-mist-1">
        <div className="container mx-auto px-4 max-w-3xl mb-16 space-y-6">
          <AuthorBioCard author={authorObj} />
          <div className="text-right">
            <Link href="/contact" className="font-sans text-xs uppercase tracking-widest text-ochre hover:underline">
              Contact Author / Parāvāk Editorial Team →
            </Link>
          </div>
        </div>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-serif text-2xl font-bold text-charcoal mb-8 text-center">Related Philosophical Enquiries</h2>
          <RelatedArticles articles={articles.filter((a) => a.slug !== article.slug).slice(0, 3)} />
        </div>
      </section>
    </main>
  );
}
