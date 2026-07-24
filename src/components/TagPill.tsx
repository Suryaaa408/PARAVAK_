import Link from 'next/link';

interface TagPillProps {
  slug: string;
  name: string;
}

export function TagPill({ slug, name }: TagPillProps) {
  return (
    <Link 
      href={`/tag/${slug}`}
      className="inline-flex items-center justify-center px-4 py-1 rounded-full border border-mist-1 font-sans text-sm text-ochre hover:bg-ochre/10 transition-colors duration-300"
    >
      {name}
    </Link>
  );
}
