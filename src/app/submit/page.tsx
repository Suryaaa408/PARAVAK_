'use client';

import { useState } from 'react';

export default function SubmitPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [section, setSection] = useState('articles');
  const [pastedText, setPastedText] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMsg(null);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('title', title);
    formData.append('section', section);
    formData.append('pastedText', pastedText);
    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setResponseMsg({ type: 'success', text: data.message });
        setName('');
        setEmail('');
        setTitle('');
        setPastedText('');
        setSelectedFile(null);
      } else {
        setResponseMsg({ type: 'error', text: data.error || 'Failed to submit.' });
      }
    } catch (err) {
      setResponseMsg({ type: 'error', text: 'Network connection error during submission.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-kailash-night text-kailash-snow py-20 px-6 overflow-hidden font-sans">
      {/* Night Sky & Crescent Moon Visual Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-12 left-12 pointer-events-none opacity-25 text-ochre-light">
        <svg viewBox="0 0 100 100" className="w-32 h-32" fill="currentColor">
          <path d="M50 10 A40 40 0 1 0 90 50 A32 32 0 1 1 50 10 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-ochre">Manuscript Guidelines & Submissions</span>
          <h1 className="font-serif text-5xl font-bold text-bone">Submit Your Work</h1>
          <p className="font-serif text-base text-mist-2 max-w-xl mx-auto">
            Parāvāk accepts original essays, book reviews, verse translations, and research papers focused on philosophy, religion, culture, and language.
          </p>
        </div>

        {responseMsg && (
          <div
            className={`p-6 rounded-lg border text-sm font-sans ${
              responseMsg.type === 'success'
                ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-200'
                : 'bg-rose-950/70 border-rose-500/50 text-rose-200'
            }`}
          >
            {responseMsg.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-kailash-slate/60 border border-mist-1/15 p-8 rounded-xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-mist-2 mb-2 font-semibold">Author Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dr. / Prof. / Full Name"
                required
                className="w-full bg-kailash-night border border-mist-1/20 px-4 py-3 rounded text-bone focus:outline-none focus:border-ochre"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-mist-2 mb-2 font-semibold">Email Address *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="author@institution.edu"
                required
                className="w-full bg-kailash-night border border-mist-1/20 px-4 py-3 rounded text-bone focus:outline-none focus:border-ochre"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-mist-2 mb-2 font-semibold">Manuscript Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title of your paper or essay"
                required
                className="w-full bg-kailash-night border border-mist-1/20 px-4 py-3 rounded text-bone focus:outline-none focus:border-ochre"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-mist-2 mb-2 font-semibold">Target Section</label>
              <select
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="w-full bg-kailash-night border border-mist-1/20 px-4 py-3 rounded text-bone focus:outline-none focus:border-ochre"
              >
                <option value="articles">Articles & Essays</option>
                <option value="book-review">Book Review</option>
                <option value="shastra">Shastra Analysis</option>
                <option value="kavya">Kavya & Poetry</option>
                <option value="reflection">Short Reflection</option>
              </select>
            </div>
          </div>

          {/* File Upload Field */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-mist-2 mb-2 font-semibold">
              Upload Manuscript (PDF, DOCX, TXT - Max 10MB)
            </label>
            <input
              type="file"
              accept=".pdf,.docx,.doc,.txt,.epub"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
              className="w-full bg-kailash-night border border-mist-1/20 px-4 py-3 rounded text-sm text-mist-2 file:mr-4 file:py-1.5 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-ochre file:text-bone hover:file:bg-ochre-dark"
            />
            {selectedFile && (
              <p className="text-xs text-ochre-light mt-2">Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)</p>
            )}
          </div>

          {/* Paste-Text Area */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-mist-2 mb-2 font-semibold">
              Or Paste Text Abstract / Draft Copy
            </label>
            <textarea
              rows={6}
              value={pastedText}
              onChange={(e) => setPastedText(e.target.value)}
              placeholder="Paste your full text or abstract here..."
              className="w-full bg-kailash-night border border-mist-1/20 px-4 py-3 rounded text-bone font-newsreader focus:outline-none focus:border-ochre"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-ochre hover:bg-ochre-dark disabled:opacity-50 text-bone font-sans text-xs uppercase tracking-widest py-4 rounded font-bold transition-colors shadow-lg"
          >
            {isSubmitting ? 'Transmitting Submission...' : 'Transmit Submission to Parāvāk Editorial Board →'}
          </button>
        </form>
      </div>
    </div>
  );
}
