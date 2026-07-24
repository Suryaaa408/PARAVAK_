import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Author } from '@/types';

interface AuthorBioCardProps {
  author: Author;
}

export function AuthorBioCard({ author }: AuthorBioCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="w-20 h-20 rounded-full bg-mist-1 overflow-hidden shrink-0 relative">
        {author.photo ? (
          <Image src={author.photo} alt={author.name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-mist-3 font-serif text-2xl bg-bone">
            {author.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="font-serif text-xl text-charcoal">{author.name}</h3>
          {author.credentials && (
            <p className="font-sans text-sm text-mist-2">{author.credentials}</p>
          )}
        </div>
        <p className="font-sans text-mist-3 line-clamp-2 md:line-clamp-3">
          {author.bio}
        </p>
        <Link href={`/authors/${author.slug}`} className="font-sans text-sm text-ochre hover:text-ochre-dark transition-colors duration-300 mt-2">
          View profile &rarr;
        </Link>
      </div>
    </div>
  );
}
