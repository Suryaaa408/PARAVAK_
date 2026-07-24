'use client';

import { useState } from 'react';
import Link from 'next/link';

export interface ShastraNode {
  id: string;
  name: string;
  sanskritName: string;
  category: 'vedanga' | 'darshana' | 'kavya-shastra' | 'tantra' | 'smriti';
  era: string;
  x: number; // percentage
  y: number; // percentage
  z: number; // depth scale (0.5 to 1.5)
  connections: string[]; // connected node IDs
  description: string;
  taggedArticleCount: number;
}

const shastras: ShastraNode[] = [
  {
    id: 'vyakarana',
    name: 'Vyākaraṇa (Linguistics)',
    sanskritName: 'व्याकरणम्',
    category: 'vedanga',
    era: 'c. 500 BCE',
    x: 20,
    y: 35,
    z: 1.2,
    connections: ['mimamsa', 'nyaya'],
    description: 'The science of linguistic analysis and grammar, exemplified by Pāṇini\'s Aṣṭādhyāyī and Bhartṛhari\'s Vākyapadīya.',
    taggedArticleCount: 4,
  },
  {
    id: 'nyaya',
    name: 'Nyāya (Logic & Epistemology)',
    sanskritName: 'न्यायशास्त्रम्',
    category: 'darshana',
    era: 'c. 200 BCE',
    x: 45,
    y: 25,
    z: 1.4,
    connections: ['vyakarana', 'vedanta', 'buddhism'],
    description: 'Systematic logic, formal debate theory (vāda), and valid means of knowledge (pramāṇa).',
    taggedArticleCount: 6,
  },
  {
    id: 'vedanta',
    name: 'Uttara Mīmāṁsā (Vedānta)',
    sanskritName: 'वेदान्त दर्शनम्',
    category: 'darshana',
    era: 'c. 800 CE',
    x: 70,
    y: 40,
    z: 1.5,
    connections: ['nyaya', 'mimamsa', 'tantra'],
    description: 'Inquiry into non-dual awareness (Advaita), liberation (mokṣa), and the nature of Brahman.',
    taggedArticleCount: 8,
  },
  {
    id: 'mimamsa',
    name: 'Pūrva Mīmāṁsā (Hermeneutics)',
    sanskritName: 'मीमांसा',
    category: 'darshana',
    era: 'c. 300 BCE',
    x: 35,
    y: 65,
    z: 1.0,
    connections: ['vyakarana', 'vedanta'],
    description: 'Textual interpretation, Vedic injunctions, and the philosophy of ritual action.',
    taggedArticleCount: 3,
  },
  {
    id: 'kavya-shastra',
    name: 'Kāvya-Śāstra & Alañkāra',
    sanskritName: 'काव्यशास्त्रम्',
    category: 'kavya-shastra',
    era: 'c. 850 CE',
    x: 80,
    y: 70,
    z: 1.1,
    connections: ['vyakarana', 'tantra'],
    description: 'Poetics, suggestions of meaning (dhvani), and aesthetic experience (rasa) formulated by Ānandavardhana.',
    taggedArticleCount: 5,
  },
  {
    id: 'tantra',
    name: 'Āgama & Tantra-Śāstra',
    sanskritName: 'तन्त्रशास्त्रम्',
    category: 'tantra',
    era: 'c. 900 CE',
    x: 60,
    y: 80,
    z: 1.3,
    connections: ['vedanta', 'kavya-shastra'],
    description: 'Somatic theology, acoustic mantras, temple architecture, and Kashmir Śaivism.',
    taggedArticleCount: 5,
  },
];

export function ShastraCombinatrix() {
  const [selectedNode, setSelectedNode] = useState<ShastraNode>(shastras[2]); // Default Vedanta

  return (
    <div className="space-y-12">
      {/* 3D / Spatial Timeline Canvas */}
      <div className="relative w-full h-[550px] bg-kailash-night rounded-2xl border border-mist-1/15 overflow-hidden shadow-2xl">
        {/* Spatial Grid background */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C6791E_1px,transparent_1px)] [background-size:32px_32px]" />

        {/* Dynamic Timeline Indicator */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-xs font-sans uppercase tracking-widest text-mist-3 border-t border-mist-1/10 pt-4">
          <span>Early Vedic Period (c. 1500 BCE)</span>
          <span className="text-ochre">Classical Śāstra Timeline</span>
          <span>Medieval Synthesis (c. 1200 CE)</span>
        </div>

        {/* SVG Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {shastras.map((source) =>
            source.connections.map((targetId) => {
              const target = shastras.find((s) => s.id === targetId);
              if (!target) return null;
              const isHighlighted = selectedNode.id === source.id || selectedNode.id === target.id;
              return (
                <line
                  key={`${source.id}-${target.id}`}
                  x1={`${source.x}%`}
                  y1={`${source.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke={isHighlighted ? '#C6791E' : '#3E5466'}
                  strokeWidth={isHighlighted ? 2 : 1}
                  strokeDasharray={isHighlighted ? 'none' : '4 4'}
                  className="transition-all duration-500"
                />
              );
            })
          )}
        </svg>

        {/* Render Shastra Nodes */}
        {shastras.map((node) => {
          const isSelected = selectedNode.id === node.id;
          return (
            <div
              key={node.id}
              onClick={() => setSelectedNode(node)}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: `translate(-50%, -50%) scale(${node.z})`,
              }}
              className={`absolute cursor-pointer group transition-all duration-300 ${
                isSelected ? 'z-30' : 'z-10 hover:z-20'
              }`}
            >
              <div
                className={`flex flex-col items-center p-3 rounded-xl border transition-all duration-300 backdrop-blur-md ${
                  isSelected
                    ? 'bg-ochre/20 border-ochre text-bone shadow-[0_0_25px_rgba(198,121,30,0.5)]'
                    : 'bg-kailash-slate/80 border-mist-1/20 text-mist-2 hover:border-ochre/50'
                }`}
              >
                <span className="font-sanskrit text-sm font-bold text-ochre-light">{node.sanskritName}</span>
                <span className="font-sans text-xs font-semibold whitespace-nowrap mt-1">{node.name}</span>
                <span className="text-[10px] font-sans opacity-60 mt-0.5">{node.era}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Node Details Card */}
      <div className="bg-kailash-slate/70 border border-mist-1/20 p-8 rounded-xl space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-mist-1/15 pb-4">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-ochre">{selectedNode.category} • {selectedNode.era}</span>
            <h3 className="font-serif text-3xl font-bold text-bone mt-1">{selectedNode.name}</h3>
          </div>
          <Link
            href={`/articles?tag=${selectedNode.id}`}
            className="bg-ochre hover:bg-ochre-dark text-bone font-sans text-xs uppercase tracking-widest px-6 py-3 rounded font-semibold transition-colors"
          >
            View Tagged Articles ({selectedNode.taggedArticleCount}) →
          </Link>
        </div>

        <p className="font-serif text-lg text-bone/90 leading-relaxed">{selectedNode.description}</p>
      </div>
    </div>
  );
}
