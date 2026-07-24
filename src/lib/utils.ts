export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function estimateReadTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[āàáâã]/g, 'a')
    .replace(/[īìíî]/g, 'i')
    .replace(/[ūùúû]/g, 'u')
    .replace(/[ṛ]/g, 'r')
    .replace(/[ṇ]/g, 'n')
    .replace(/[ś]/g, 's')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, '') + '…';
}

export function groupByYear<T extends { publishedAt: string }>(
  articles: T[]
): Record<string, T[]> {
  return articles.reduce(
    (groups, article) => {
      const year = new Date(article.publishedAt).getFullYear().toString();
      if (!groups[year]) groups[year] = [];
      groups[year].push(article);
      return groups;
    },
    {} as Record<string, T[]>
  );
}

export function groupByMonth<T extends { publishedAt: string }>(
  articles: T[]
): Record<string, T[]> {
  return articles.reduce(
    (groups, article) => {
      const date = new Date(article.publishedAt);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(article);
      return groups;
    },
    {} as Record<string, T[]>
  );
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
