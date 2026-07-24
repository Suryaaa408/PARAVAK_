import React from 'react';
import { Article } from '@/types';
import { ArticleCard } from './ArticleCard';

interface RelatedArticlesProps {
  articles: Article[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-12 border-t border-mist-1">
      <h2 className="font-serif text-2xl text-charcoal mb-8">Continue Reading</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} variant="grid" />
        ))}
      </div>
    </section>
  );
}
