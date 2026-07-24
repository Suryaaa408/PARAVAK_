import { notFound } from 'next/navigation';
import { tags } from '@/data/mock/tags';
import { articles } from '@/data/mock/articles';
import { ArticleCard } from '@/components/ArticleCard';
import { Hero } from '@/components/Hero';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return tags.map((tag) => ({
    slug: tag.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tag = tags.find((t) => t.slug === slug);
  
  if (!tag) return {};
  
  return {
    title: `Tag: ${tag.name} | Parāvāk`,
  };
}

export default async function TagPage({ params }: Props) {
  const { slug } = await params;
  const tag = tags.find((t) => t.slug === slug);
  
  if (!tag) {
    notFound();
  }

  const tagArticles = articles.filter(article => 
    article.tags?.some(t => t.slug === tag.slug)
  );

  return (
    <main className="min-h-screen bg-bone">
      <Hero 
        variant="inner" 
        title={`Tag: ${tag.name}`} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {tagArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tagArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-charcoal/70 font-sans text-center text-lg">No articles found for this tag.</p>
        )}
      </div>
    </main>
  );
}
