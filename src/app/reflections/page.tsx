import { Hero } from '@/components/Hero';
import { ArticleCard } from '@/components/ArticleCard';
import { articles } from '@/data/mock/articles';

export default function ReflectionsPage() {
  const reflections = articles.filter(a => a.type === 'reflection');

  return (
    <main className="bg-bone min-h-screen">
      <Hero 
        variant="inner" 
        title="Reflections" 
        subtitle="Shorter, timelier pieces." 
      />
      
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col gap-12">
          {reflections.map(article => (
            <ArticleCard key={article.slug} article={article} variant="list" />
          ))}
        </div>
      </section>
    </main>
  );
}
