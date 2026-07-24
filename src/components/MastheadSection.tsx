import React from 'react';
import Image from 'next/image';
import { MastheadSection as MastheadSectionType } from '@/types';

interface MastheadSectionProps {
  section: MastheadSectionType;
}

export function MastheadSection({ section }: MastheadSectionProps) {
  return (
    <section className="mb-16">
      <div className="flex items-baseline gap-4 mb-6">
        <h2 className="font-serif text-2xl text-charcoal">{section.title}</h2>
        {section.sanskritLabel && (
          <>
            <span className="text-mist-2 font-serif">&mdash;</span>
            <span className="font-serif text-lg text-mist-2">{section.sanskritLabel}</span>
          </>
        )}
      </div>
      <div className="h-[1px] bg-mist-1 w-full mb-8" />

      {section.displayMode === 'photo-grid' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {section.members?.map((person, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-[120px] h-[120px] rounded-full bg-mist-1 overflow-hidden relative mb-4">
                {person.photo && (
                  <Image src={person.photo} alt={person.name} fill className="object-cover" />
                )}
              </div>
              <h3 className="font-serif text-lg text-charcoal">{person.name}</h3>
              <p className="font-sans text-sm text-ochre mt-1">{person.role}</p>
              {person.credentials && (
                <p className="font-sans text-xs text-mist-2 mt-1">{person.credentials}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {section.displayMode === 'minimal-list' && (
        <div className="flex flex-col">
          {section.members?.map((person, idx) => (
            <div key={idx} className="py-4 border-b border-mist-1 last:border-b-0 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
              <h3 className="font-serif text-lg text-charcoal">{person.name}</h3>
              <p className="font-sans text-sm text-ochre md:ml-auto">{person.role}</p>
            </div>
          ))}
        </div>
      )}

      {section.displayMode === 'logo-grid' && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {section.organizations?.map((org, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-4">
              <div className="w-[160px] h-[80px] bg-mist-1 flex items-center justify-center relative">
                 {org.logo ? (
                   <Image src={org.logo} alt={org.name} fill className="object-contain p-2" />
                 ) : (
                   <span className="font-sans text-sm text-mist-3">Logo</span>
                 )}
              </div>
              <div>
                <h3 className="font-sans font-medium text-charcoal">{org.name}</h3>
                {org.description && (
                  <p className="font-sans text-xs text-mist-2 mt-1">{org.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
