import { notFound } from 'next/navigation';
import { categories } from '@/data/mock/categories';
import { articles } from '@/data/mock/articles';
import { ArticleCard } from '@/components/ArticleCard';
import { Hero } from '@/components/Hero';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  
  if (!category) return {};
  
  return {
    title: `${category.name} | Parāvāk`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  
  if (!category) {
    notFound();
  }

  const categoryArticles = articles.filter(article => 
    article.category.slug === category.slug
  );

  return (
    <main className="min-h-screen bg-bone">
      <Hero 
        variant="inner" 
        title={category.name} 
        subtitle={category.description} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-charcoal/70 font-sans text-center text-lg">No articles found in this category.</p>
        )}
      </div>
    </main>
  );
}
