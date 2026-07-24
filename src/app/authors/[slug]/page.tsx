import { notFound } from 'next/navigation';
import { authors } from '@/data/mock/authors';
import { articles } from '@/data/mock/articles';
import { ArticleCard } from '@/components/ArticleCard';
import { AuthorBioCard } from '@/components/AuthorBioCard';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  
  if (!author) return {};
  
  return {
    title: `${author.name} | Parāvāk`,
    description: author.bio.substring(0, 160) + '...',
  };
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  
  if (!author) {
    notFound();
  }

  // Find articles either by checking articleSlugs or checking if author matches
  // The mock data structure for articles might have author array, or we use articleSlugs from author.
  const authorArticles = articles.filter(article => 
    author.articleSlugs?.includes(article.slug) || 
    article.author?.slug === author.slug
  );

  return (
    <main className="min-h-screen bg-bone">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mb-16">
          <AuthorBioCard author={author} />
        </div>
        
        <h2 className="text-3xl font-serif text-charcoal mb-8 border-b border-mist-1 pb-4">
          Published Works
        </h2>
        
        {authorArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {authorArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-charcoal/70 font-sans">No published works found.</p>
        )}
      </div>
    </main>
  );
}
