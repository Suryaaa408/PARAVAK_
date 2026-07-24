import Link from 'next/link';
import { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
  variant?: 'grid' | 'list';
}

export function ArticleCard({ article, variant = 'grid' }: ArticleCardProps) {
  const categoryName = typeof article.category === 'string' ? article.category : article.category?.name || 'Article';
  const authorName = typeof article.author === 'string' ? article.author : article.author?.name || 'Author';
  const date = article.publishedAt || article.date;

  if (variant === 'list') {
    return (
      <Link href={`/articles/${article.slug}`} className="group flex flex-col sm:flex-row gap-6 items-start">
        <div className="relative w-full sm:w-48 aspect-[16/10] bg-mist-1 overflow-hidden shrink-0">
          {article.heroImage && (
            <img 
              src={article.heroImage} 
              alt={article.title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-sans text-xs uppercase tracking-wider text-ochre">{categoryName}</span>
          <h3 className="font-serif text-xl text-charcoal group-hover:text-ochre transition-colors duration-300">
            {article.title}
          </h3>
          <p className="font-sans text-sm text-mist-3 line-clamp-2">{article.excerpt}</p>
          <div className="font-sans text-xs text-mist-2 mt-2">
            By {authorName} &middot; {date && new Date(date).toLocaleDateString()} &middot; {article.estimatedReadTime} min read
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/articles/${article.slug}`} className="group flex flex-col gap-4">
      <div className="relative w-full aspect-[16/10] bg-mist-1 overflow-hidden">
        {article.heroImage && (
          <img 
            src={article.heroImage} 
            alt={article.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>
      <div className="flex flex-col items-start gap-2">
        <span className="font-sans text-xs uppercase tracking-wider text-ochre">{categoryName}</span>
        <h3 className="font-serif text-2xl text-charcoal group-hover:text-ochre transition-colors duration-300">
          {article.title}
        </h3>
        <div className="font-sans text-sm text-mist-3">
          By {authorName}
        </div>
        <div className="font-sans text-xs text-mist-2">
          {date && new Date(date).toLocaleDateString()} &middot; {article.estimatedReadTime} min read
        </div>
      </div>
    </Link>
  );
}
