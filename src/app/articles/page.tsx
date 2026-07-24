'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { ArticleCard } from '@/components/ArticleCard';
import { CategoryFilterBar } from '@/components/CategoryFilterBar';
import { articles } from '@/data/mock/articles';
import { categories } from '@/data/mock/categories';

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredArticles = activeCategory
    ? articles.filter(a => {
        const catSlug = typeof a.category === 'string' ? a.category : a.category?.slug;
        return catSlug === activeCategory;
      })
    : articles;

  return (
    <main className="bg-bone min-h-screen">
      <Hero variant="inner" title="Articles" />
      
      <section className="pt-12 pb-4 border-b border-mist-1">
        <div className="container mx-auto px-4">
          <CategoryFilterBar 
            categories={categories}
            activeSlug={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredArticles.map(article => (
              <ArticleCard key={article.slug} article={article} variant="grid" />
            ))}
          </div>
          {filteredArticles.length === 0 && (
            <div className="text-center py-20 font-sans text-mist-3">
              No articles found in this category.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
