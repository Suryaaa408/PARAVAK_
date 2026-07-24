'use client';

import { useState, useMemo } from 'react';
import { Hero } from '@/components/Hero';
import { ArticleCard } from '@/components/ArticleCard';
import { articles } from '@/data/mock/articles';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const filteredArticles = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    
    return articles.filter(article => 
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.author.name.toLowerCase().includes(lowerQuery) ||
      article.tags?.some(t => t.name.toLowerCase().includes(lowerQuery)) ||
      article.category.name.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-bone">
      <Hero 
        variant="inner" 
        title="Search" 
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <input
            type="search"
            placeholder="Search articles, authors, topics..."
            className="w-full bg-mist-1/30 border border-mist-1 text-charcoal placeholder-charcoal/50 px-6 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-ochre font-sans text-lg transition-all"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>
        
        {query.trim() && (
          <div className="mb-8">
            <h2 className="text-xl font-serif text-charcoal mb-2">
              Results for &quot;{query}&quot;
            </h2>
            <p className="text-charcoal/70 font-sans">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'result' : 'results'} found
            </p>
          </div>
        )}
        
        {query.trim() && filteredArticles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}

        {query.trim() && filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-charcoal/70 font-sans text-lg">No results found. Try a different search term.</p>
          </div>
        )}
      </div>
    </main>
  );
}
