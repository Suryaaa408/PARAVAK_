'use client';

import { useState } from 'react';

export interface FootnoteItem {
  id: number;
  text: string;
}

export interface BibliographyItem {
  author: string;
  year: string;
  title: string;
  publisher: string;
}

interface Props {
  footnotes: FootnoteItem[];
  bibliography: BibliographyItem[];
}

export function ArticleFootnotesAndBibliography({ footnotes, bibliography }: Props) {
  const [activeFootnote, setActiveFootnote] = useState<FootnoteItem | null>(null);

  return (
    <div className="mt-16 space-y-12">
      {/* Footnotes Section */}
      {footnotes.length > 0 && (
        <section className="border-t border-mist-1 pt-8">
          <h3 className="font-sans text-xs uppercase tracking-widest text-ochre mb-6">Notes & References</h3>
          <ol className="space-y-4 font-newsreader text-footnote text-charcoal/80 pl-4 list-decimal">
            {footnotes.map((fn) => (
              <li key={fn.id} id={`footnote-${fn.id}`} className="group">
                <span className="leading-relaxed">{fn.text}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Bibliography Section */}
      {bibliography.length > 0 && (
        <section className="border-t border-mist-1 pt-8">
          <h3 className="font-sans text-xs uppercase tracking-widest text-ochre mb-6">Selected Bibliography</h3>
          <ul className="space-y-3 font-ibm-plex text-bibliography text-charcoal/90">
            {bibliography.map((item, idx) => (
              <li key={idx} className="pl-4 border-l-2 border-ochre/30">
                <span className="font-semibold">{item.author}</span> ({item.year}).{' '}
                <span className="italic">{item.title}</span>. {item.publisher}.
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Mobile Footnote Modal Popup */}
      {activeFootnote && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 md:hidden">
          <div className="bg-bone p-6 rounded-lg max-w-sm w-full space-y-4 border border-ochre">
            <div className="flex justify-between items-center border-b border-mist-1 pb-2">
              <span className="font-sans text-xs uppercase tracking-wider text-ochre font-bold">
                Footnote [{activeFootnote.id}]
              </span>
              <button onClick={() => setActiveFootnote(null)} className="text-charcoal hover:text-ochre">✕</button>
            </div>
            <p className="font-newsreader text-sm text-charcoal">{activeFootnote.text}</p>
          </div>
        </div>
      )}
    </div>
  );
}
