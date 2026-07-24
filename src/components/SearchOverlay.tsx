'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { articles } from '@/data/mock/articles';
import { authors } from '@/data/mock/authors';
import { tags } from '@/data/mock/tags';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const filteredArticles = useMemo(() => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return articles.filter(a => 
      a.title.toLowerCase().includes(lowerQuery) || 
      a.excerpt?.toLowerCase().includes(lowerQuery)
    ).slice(0, 5);
  }, [query]);

  const filteredAuthors = useMemo(() => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return authors.filter(a => a.name.toLowerCase().includes(lowerQuery)).slice(0, 3);
  }, [query]);

  const filteredTags = useMemo(() => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return tags.filter(t => t.name.toLowerCase().includes(lowerQuery)).slice(0, 5);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-bone/95 backdrop-blur-md overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-mist-3 hover:text-charcoal transition-colors duration-300"
          aria-label="Close search"
        >
          <svg className="w-8 h-8 stroke-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-12">
          <input
            type="text"
            autoFocus
            placeholder="Search articles, authors, tags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-b border-mist-2 pb-4 font-serif text-2xl md:text-4xl text-charcoal placeholder-mist-2 focus:outline-none focus:border-ochre transition-colors duration-300"
          />
        </div>

        {query && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {filteredArticles.length > 0 && (
              <section>
                <h3 className="font-sans text-sm uppercase tracking-wider text-mist-3 mb-4">Articles</h3>
                <div className="flex flex-col gap-6">
                  {filteredArticles.map(article => (
                    <Link key={article.slug} href={`/articles/${article.slug}`} onClick={onClose} className="group flex flex-col gap-1">
                      <div className="flex gap-2 items-center font-sans text-xs text-ochre">
                        <span>{article.category?.name || 'Article'}</span>
                        <span className="w-1 h-1 rounded-full bg-mist-2" />
                        <span className="text-mist-3">{article.author?.name}</span>
                      </div>
                      <h4 className="font-serif text-xl text-charcoal group-hover:text-ochre transition-colors duration-300">
                        {article.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {filteredAuthors.length > 0 && (
              <section>
                <h3 className="font-sans text-sm uppercase tracking-wider text-mist-3 mb-4">Authors</h3>
                <div className="flex flex-col gap-4">
                  {filteredAuthors.map(author => (
                    <Link key={author.slug} href={`/authors/${author.slug}`} onClick={onClose} className="group flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-mist-1 overflow-hidden relative">
                         {author.photo && (
                             <img src={author.photo} alt={author.name} className="object-cover w-full h-full" />
                         )}
                      </div>
                      <div>
                        <h4 className="font-serif text-lg text-charcoal group-hover:text-ochre transition-colors duration-300">{author.name}</h4>
                        {author.credentials && <p className="font-sans text-xs text-mist-2">{author.credentials}</p>}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {filteredTags.length > 0 && (
              <section>
                <h3 className="font-sans text-sm uppercase tracking-wider text-mist-3 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {filteredTags.map(tag => (
                    <Link key={tag.slug} href={`/tags/${tag.slug}`} onClick={onClose} className="px-4 py-2 rounded-full border border-mist-1 font-sans text-sm text-charcoal hover:border-ochre hover:text-ochre transition-colors duration-300">
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {filteredArticles.length === 0 && filteredAuthors.length === 0 && filteredTags.length === 0 && (
              <p className="font-serif text-mist-3 text-lg">No results found for "{query}"</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
