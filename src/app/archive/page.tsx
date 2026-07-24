import { Hero } from '@/components/Hero';
import { articles } from '@/data/mock/articles';
import { groupByYear } from '@/lib/utils';
import Link from 'next/link';

export default function ArchivePage() {
  const articlesByYear = groupByYear(articles);
  const years = Object.keys(articlesByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <main className="bg-bone min-h-screen">
      <Hero variant="inner" title="Archive" />
      
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          {years.map(year => (
            <div key={year} className="mb-20">
              <h2 className="font-serif text-4xl text-charcoal mb-8 border-b border-mist-1 pb-4">{year}</h2>
              <div className="flex flex-col">
                {articlesByYear[year].map(article => {
                  const authorName = typeof article.author === 'string' ? article.author : article.author?.name;
                  const date = article.publishedAt || article.date;
                  
                  return (
                    <Link key={article.slug} href={`/articles/${article.slug}`} className="py-6 border-b border-mist-1 last:border-b-0 group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 hover:bg-bone-light transition-colors px-2 -mx-2">
                      <div className="font-sans text-sm text-mist-3 w-32 shrink-0">
                        {date && new Date(date).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}
                      </div>
                      <h3 className="font-serif text-xl text-charcoal group-hover:text-ochre transition-colors flex-1">
                        {article.title}
                      </h3>
                      <div className="font-sans text-sm text-ochre sm:w-48 sm:text-right shrink-0">
                        {authorName}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
