'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    // Mock API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-bone">
      <Hero 
        variant="inner" 
        title="Contact" 
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-serif text-charcoal mb-6">Get in Touch</h2>
            <p className="text-charcoal/70 font-sans mb-8 text-lg">
              We welcome inquiries, feedback, and collaboration proposals. Please use the form or reach out directly via email.
            </p>
            
            <div className="space-y-6 font-sans text-charcoal">
              <div>
                <h3 className="font-bold text-sm tracking-wider uppercase text-charcoal/50 mb-1">Email</h3>
                <a href="mailto:editors@paravak.com" className="text-ochre hover:underline text-lg">editors@paravak.com</a>
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wider uppercase text-charcoal/50 mb-1">Social</h3>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-ochre transition-colors">Twitter</a>
                  <a href="#" className="hover:text-ochre transition-colors">Instagram</a>
                  <a href="#" className="hover:text-ochre transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-mist-1">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
                <h3 className="text-2xl font-serif text-charcoal mb-2">Message Sent</h3>
                <p className="text-charcoal/70 font-sans">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-ochre font-sans hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full border border-mist-1 rounded-md px-4 py-3 bg-bone/30 focus:outline-none focus:ring-2 focus:ring-ochre focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full border border-mist-1 rounded-md px-4 py-3 bg-bone/30 focus:outline-none focus:ring-2 focus:ring-ochre focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    required 
                    className="w-full border border-mist-1 rounded-md px-4 py-3 bg-bone/30 focus:outline-none focus:ring-2 focus:ring-ochre focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-charcoal text-bone px-6 py-4 rounded-md font-sans text-sm tracking-widest uppercase hover:bg-ochre transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </main>
  );
}
