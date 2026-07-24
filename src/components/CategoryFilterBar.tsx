'use client';

import React from 'react';
import { Category } from '@/types';

interface CategoryFilterBarProps {
  categories: Category[];
  activeSlug: string | null;
  onSelect: (slug: string | null) => void;
}

export function CategoryFilterBar({ categories, activeSlug, onSelect }: CategoryFilterBarProps) {
  return (
    <div className="flex overflow-x-auto gap-6 border-b border-mist-1 no-scrollbar pb-2">
      <button
        onClick={() => onSelect(null)}
        className={`font-sans whitespace-nowrap pb-2 px-1 transition-colors duration-300 ${
          activeSlug === null
            ? 'text-ochre border-b-2 border-ochre font-medium'
            : 'text-mist-3 hover:text-charcoal'
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onSelect(cat.slug)}
          className={`font-sans whitespace-nowrap pb-2 px-1 transition-colors duration-300 ${
            activeSlug === cat.slug
              ? 'text-ochre border-b-2 border-ochre font-medium'
              : 'text-mist-3 hover:text-charcoal'
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
