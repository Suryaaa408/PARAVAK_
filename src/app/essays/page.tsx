import { Hero } from '@/components/Hero';
import { ArticleCard } from '@/components/ArticleCard';
import { articles } from '@/data/mock/articles';

export default function EssaysPage() {
  const essays = articles.filter(a => a.type === 'essay'); 

  return (
    <main className="bg-bone min-h-screen">
      <Hero 
        variant="inner" 
        title="Essays" 
        subtitle="Long-form scholarly writing." 
      />
      
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-[1024px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {essays.map(article => (
              <ArticleCard key={article.slug} article={article} variant="grid" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
