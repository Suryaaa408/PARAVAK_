'use client';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-kailash-night text-kailash-snow py-20 px-6 overflow-hidden">
      {/* Night Sky & Crescent Moon Visual Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-12 left-12 pointer-events-none opacity-25 text-ochre-light">
        <svg viewBox="0 0 100 100" className="w-32 h-32" fill="currentColor">
          <path d="M50 10 A40 40 0 1 0 90 50 A32 32 0 1 1 50 10 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-ochre">Get in Touch</span>
          <h1 className="font-serif text-5xl font-bold text-bone">Contact Parāvāk</h1>
          <p className="font-serif text-lg text-mist-2 max-w-2xl mx-auto">
            We welcome inquiries from scholars, contributors, institution partners, and readers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Official Details Card */}
          <div className="bg-kailash-slate/60 border border-mist-1/15 p-8 rounded-xl space-y-6">
            <h2 className="font-serif text-2xl font-bold text-bone">Official Channels</h2>
            
            <div className="space-y-4 font-sans text-sm text-mist-2">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-ochre font-bold">General Enquiries (Official Email)</span>
                <a href="mailto:contact@paravak.org" className="text-bone font-medium hover:text-ochre transition-colors text-base mt-1">
                  contact@paravak.org
                </a>
              </div>

              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-ochre font-bold">Editorial Inbox (Zoho Mail)</span>
                <a href="mailto:editor@paravak.org" className="text-bone font-medium hover:text-ochre transition-colors text-base mt-1">
                  editor@paravak.org
                </a>
              </div>

              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-ochre font-bold">Phone Number</span>
                <span className="text-bone font-medium mt-1">+91 (0) 11 2345 6789</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-ochre font-bold">Instagram</span>
                <a href="https://instagram.com/paravak_journal" target="_blank" rel="noopener noreferrer" className="text-bone font-medium hover:text-ochre transition-colors mt-1">
                  @paravak_journal
                </a>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-kailash-slate/60 border border-mist-1/15 p-8 rounded-xl space-y-6">
            <h2 className="font-serif text-2xl font-bold text-bone">Send a Message</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 font-sans text-sm">
              <div>
                <label className="block text-xs uppercase tracking-widest text-mist-2 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-kailash-night border border-mist-1/20 px-4 py-2.5 rounded text-bone focus:outline-none focus:border-ochre"
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-mist-2 mb-1">Your Email</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-kailash-night border border-mist-1/20 px-4 py-2.5 rounded text-bone focus:outline-none focus:border-ochre"
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-mist-2 mb-1">Subject / Enquiry Line</label>
                <input
                  type="text"
                  placeholder="Enquiry topic..."
                  className="w-full bg-kailash-night border border-mist-1/20 px-4 py-2.5 rounded text-bone focus:outline-none focus:border-ochre"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-mist-2 mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full bg-kailash-night border border-mist-1/20 px-4 py-2.5 rounded text-bone focus:outline-none focus:border-ochre"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ochre hover:bg-ochre-dark text-bone font-sans text-xs uppercase tracking-widest py-3 rounded font-semibold transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
