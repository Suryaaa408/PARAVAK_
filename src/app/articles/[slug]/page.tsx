import { notFound } from 'next/navigation';
import { articles } from '@/data/mock/articles';
import { PullQuote } from '@/components/PullQuote';
import { AuthorBioCard } from '@/components/AuthorBioCard';
import { ShareButtons } from '@/components/ShareButtons';
import { RelatedArticles } from '@/components/RelatedArticles';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  const authorName = typeof article.author === 'string' ? article.author : article.author?.name || 'Unknown';
  const authorObj = typeof article.author === 'object' ? article.author : { name: authorName, slug: authorName, bio: '' } as any;
  const categoryName = typeof article.category === 'string' ? article.category : article.category?.name || '';
  const date = article.publishedAt || article.date;
  
  // Split body by double newlines for paragraphs
  const paragraphs = article.body ? article.body.split('\n\n') : [];

  return (
    <main className="bg-bone min-h-screen pb-24">
      {/* Hero / Header */}
      <header className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-mist-1">
        <div className="container mx-auto px-4 max-w-3xl text-center flex flex-col items-center">
          {categoryName && (
            <span className="font-sans text-sm uppercase tracking-widest text-ochre mb-6">
              {categoryName}
            </span>
          )}
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal mb-8 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-mist-3 font-sans text-sm">
            <span>By {authorName}</span>
            <span>&middot;</span>
            <span>{date && new Date(date).toLocaleDateString()}</span>
            <span>&middot;</span>
            <span>{article.estimatedReadTime} min read</span>
          </div>
        </div>
      </header>
      
      {/* Article Body */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[768px]">
          <div className="prose prose-lg prose-headings:font-serif prose-headings:text-charcoal prose-p:font-sans prose-p:text-mist-3 prose-p:leading-relaxed max-w-none">
            {paragraphs.map((p, i) => {
              if (i === Math.floor(paragraphs.length / 2) && article.excerpt) {
                return (
                  <div key={i}>
                    <p>{p}</p>
                    <PullQuote quote={article.excerpt} />
                  </div>
                );
              }
              return <p key={i}>{p}</p>;
            })}
          </div>
          
          <div className="mt-16 pt-8 border-t border-mist-1 flex justify-between items-center">
            <span className="font-serif text-charcoal text-lg">Share this piece</span>
            <ShareButtons title={article.title} />
          </div>
        </div>
      </article>

      {/* Author & Related */}
      <section className="bg-bone-light py-24 border-t border-mist-1">
        <div className="container mx-auto px-4 max-w-3xl mb-24">
          <AuthorBioCard author={authorObj} />
        </div>
        <div className="container mx-auto px-4 max-w-5xl">
          <RelatedArticles articles={articles.filter(a => a.slug !== article.slug).slice(0, 3)} />
        </div>
      </section>
    </main>
  );
}
