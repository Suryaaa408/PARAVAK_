'use client';

import { useState } from 'react';

export default function AdminCMSPage() {
  const [activeTab, setActiveTab] = useState<'featured' | 'editor' | 'announcements' | 'members'>('featured');
  const [editorText, setEditorText] = useState('');
  const [devanagariTransliteration, setDevanagariTransliteration] = useState('');

  // Sample Devanagari IAST converter helper for admin editor
  const handleDevanagariInput = (text: string) => {
    setEditorText(text);
    // Simple mock transliteration demonstration
    if (text.includes('saḥ')) setDevanagariTransliteration('सः');
    else if (text.includes('vada')) setDevanagariTransliteration('वादः');
    else setDevanagariTransliteration(text);
  };

  return (
    <div className="min-h-screen bg-kailash-night text-kailash-snow py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-kailash-slate pb-6">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-ochre">Parāvāk Editorial Suite</span>
            <h1 className="font-serif text-4xl font-bold text-bone">CMS & Content Management</h1>
          </div>

          {/* Admin Navigation Tabs */}
          <div className="flex flex-wrap gap-2 bg-kailash-slate/60 p-1.5 rounded-lg border border-mist-1/15">
            {[
              { id: 'featured', label: 'Weekly Featured' },
              { id: 'editor', label: 'Rich Text / Devanagari' },
              { id: 'announcements', label: 'Announcements' },
              { id: 'members', label: 'Members Directory' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`font-sans text-xs uppercase tracking-wider px-4 py-2 rounded transition-colors font-semibold ${
                  activeTab === tab.id ? 'bg-ochre text-bone shadow' : 'text-mist-2 hover:text-bone'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Featured Content Flagging */}
        {activeTab === 'featured' && (
          <div className="bg-kailash-slate/60 border border-mist-1/15 p-8 rounded-xl space-y-6">
            <h2 className="font-serif text-2xl font-bold text-bone">Weekly Homepage Featured Flags</h2>
            <p className="font-serif text-sm text-mist-2">Select which articles, podcasts, and photo essays are pinned to the homepage Masonry Grid.</p>

            <div className="space-y-4 font-sans text-sm">
              {[
                { title: 'The Problem of Consciousness in Advaita Vedānta', category: 'Philosophy', pinned: true },
                { title: 'Bhakti and the Politics of Devotion', category: 'Religion', pinned: true },
                { title: 'Bhartṛhari and the Unity of Word and Meaning', category: 'Language', pinned: true },
                { title: 'Dhvani and the Art of Suggestion', category: 'Culture', pinned: false },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-kailash-night p-4 rounded border border-mist-1/10">
                  <div>
                    <span className="font-semibold text-bone">{item.title}</span>
                    <span className="text-xs text-ochre block">{item.category}</span>
                  </div>
                  <button className={`px-4 py-1.5 rounded text-xs uppercase font-bold tracking-wider ${
                    item.pinned ? 'bg-emerald-800 text-emerald-100' : 'bg-kailash-slate text-mist-3'
                  }`}>
                    {item.pinned ? 'Pinned to Grid' : 'Pin Item'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Rich Text & Devanagari Input Editor */}
        {activeTab === 'editor' && (
          <div className="bg-kailash-slate/60 border border-mist-1/15 p-8 rounded-xl space-y-6">
            <h2 className="font-serif text-2xl font-bold text-bone">Devanagari & Rich Text Editor</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-mist-2 mb-2 font-bold">
                  Article Body (Supports Markdown, Diacritics, and Devanagari)
                </label>
                <textarea
                  rows={8}
                  value={editorText}
                  onChange={(e) => handleDevanagariInput(e.target.value)}
                  placeholder="Type Sanskrit / Hindi diacritics e.g. 'saḥ' or 'vada'..."
                  className="w-full bg-kailash-night border border-mist-1/20 p-4 rounded font-newsreader text-bone focus:outline-none focus:border-ochre"
                />
              </div>

              <div className="bg-kailash-night border border-mist-1/20 p-4 rounded space-y-2">
                <span className="text-xs uppercase tracking-widest text-ochre font-bold block">Devanagari Live Transliteration Preview</span>
                <p className="font-sanskrit text-2xl text-ochre-light">{devanagariTransliteration || 'नमो नमः'}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Announcements Admin */}
        {activeTab === 'announcements' && (
          <div className="bg-kailash-slate/60 border border-mist-1/15 p-8 rounded-xl space-y-6">
            <h2 className="font-serif text-2xl font-bold text-bone">Add New Event / Announcement</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 font-sans text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Announcement Title" className="bg-kailash-night border border-mist-1/20 p-3 rounded text-bone" />
                <input type="text" placeholder="Date (e.g. 15 Sept 2026)" className="bg-kailash-night border border-mist-1/20 p-3 rounded text-bone" />
              </div>
              <textarea rows={3} placeholder="Event Description" className="w-full bg-kailash-night border border-mist-1/20 p-3 rounded text-bone" />
              <button className="bg-ochre hover:bg-ochre-dark text-bone font-sans text-xs uppercase tracking-widest py-3 px-6 rounded font-bold">
                Publish Announcement
              </button>
            </form>
          </div>
        )}

        {/* Tab 4: Members Directory Admin */}
        {activeTab === 'members' && (
          <div className="bg-kailash-slate/60 border border-mist-1/15 p-8 rounded-xl space-y-6">
            <h2 className="font-serif text-2xl font-bold text-bone">Manage Members Directory</h2>
            <p className="font-serif text-sm text-mist-2">Add or update scholar biographies displayed in the About Us members roster.</p>
          </div>
        )}
      </div>
    </div>
  );
}
