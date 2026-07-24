import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Parāvāk',
  description: 'Founding story, six pillars, and team directory of Parāvāk.',
};

const members = [
  {
    name: 'Arjun Bhattacharya',
    role: 'Founder & Co-Editor-in-Chief',
    credentials: 'M.A. Philosophy, Delhi University',
    bio: 'Specialises in Advaita Vedānta, phenomenology, and classical epistemology.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Meera Krishnamurthy',
    role: 'Co-Editor-in-Chief',
    credentials: 'Ph.D. Candidate, Sanskrit Studies',
    bio: 'Focuses on Bhakti literature, South Indian temple traditions, and vernacular poetry.',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Raghav Sharma',
    role: 'Senior Editor (Language & Linguistics)',
    credentials: 'Research Scholar, Vyākaraṇa',
    bio: 'Researches Bhartṛhari\'s Vākyapadīya and comparative philosophy of language.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Ananya Iyer',
    role: 'Associate Editor (Aesthetics & Kavya)',
    credentials: 'M.Phil. Comparative Literature',
    bio: 'Works on Kashmiri Śaiva poetics, Dhvanyāloka, and classical Sanskrit drama.',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop',
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-kailash-night text-kailash-snow py-20 px-6 overflow-hidden">
      {/* Night Sky & Crescent Moon Visual Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-12 left-12 pointer-events-none opacity-25 text-ochre-light">
        <svg viewBox="0 0 100 100" className="w-32 h-32" fill="currentColor">
          <path d="M50 10 A40 40 0 1 0 90 50 A32 32 0 1 1 50 10 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        {/* Header & Verse */}
        <div className="text-center space-y-6">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-ochre">About Parāvāk</span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-bone">Knowledge as Purification</h1>

          <div className="bg-kailash-slate/60 border border-mist-1/15 p-6 rounded-lg max-w-2xl mx-auto text-center space-y-2">
            <p className="font-sanskrit text-2xl text-ochre-light">"न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।"</p>
            <p className="font-serif italic text-sm text-mist-2">(Bhagavad Gītā 4.38)</p>
            <p className="font-serif text-bone/90 text-sm">"No greater purifier than knowledge exists in this world."</p>
          </div>
        </div>

        {/* Founding Story */}
        <section className="bg-kailash-slate/40 border border-mist-1/10 p-8 md:p-12 rounded-xl space-y-6">
          <h2 className="font-serif text-3xl font-bold text-bone">Our Story & Vision</h2>
          <p className="font-serif text-lg text-bone/90 leading-relaxed">
            Founded in 2025 as a student-led initiative, Parāvāk emerged out of a shared conviction that classical Indian philosophy and rigorous intellectual discourse (<span className="italic text-ochre">vāda</span>) belong at the center of contemporary cultural conversation.
          </p>
          <p className="font-serif text-lg text-bone/90 leading-relaxed">
            We bridge the gap between ancient text (<span className="italic text-ochre">Śāstra</span>) and lived application (<span className="italic text-ochre">Vyavahāra</span>), cultivating empathetic dialogue (<span className="italic text-ochre">samvāda</span>) across disciplines.
          </p>
        </section>

        {/* Six Pillars List */}
        <section className="space-y-8">
          <h2 className="font-serif text-3xl font-bold text-bone text-center">The Six Pillars of Parāvāk</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Articles & Essays', desc: 'Long-form, peer-evaluated philosophical enquries and commentaries.' },
              { title: 'Book Reviews', desc: 'Critical evaluation of newly published scholarly and trade books.' },
              { title: 'Podcasts & Lectures', desc: 'Audio dialogues and video lectures with leading scholars.' },
              { title: 'Shastra Combinatrix', desc: 'Interactive 3D visualization mapping textual interconnections.' },
              { title: 'Kavya & Poetry', desc: 'Translations, verse commentaries, and literary appreciations.' },
              { title: 'Visual Gallery', desc: 'Weekly photo essays exploring sacred geography and heritage.' },
            ].map((p, i) => (
              <div key={p.title} className="bg-kailash-slate/60 border border-mist-1/15 p-6 rounded-lg space-y-3">
                <span className="font-sans text-xs uppercase tracking-widest text-ochre font-bold">Pillar 0{i + 1}</span>
                <h3 className="font-serif text-xl font-bold text-bone">{p.title}</h3>
                <p className="font-serif text-sm text-mist-2 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Consolidated Members Section */}
        <section className="space-y-8">
          <div className="text-center">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-ochre">Editorial Directorate</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-bone mt-2">Members & Scholars</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {members.map((m) => (
              <div key={m.name} className="bg-kailash-slate/60 border border-mist-1/15 p-6 rounded-lg flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img src={m.photo} alt={m.name} className="w-24 h-24 rounded-full object-cover border-2 border-ochre" />
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="font-serif text-xl font-bold text-bone">{m.name}</h3>
                  <p className="font-sans text-xs text-ochre uppercase tracking-wider">{m.role}</p>
                  <p className="font-sans text-xs text-mist-3">{m.credentials}</p>
                  <p className="font-serif text-sm text-mist-2 pt-2">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
