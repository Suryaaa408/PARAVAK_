import { Hero } from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Parāvāk',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bone">
      <Hero 
        variant="inner" 
        title="Terms of Service" 
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-stone max-w-none font-sans text-charcoal/80">
          <p><em>Last updated: October 1, 2023</em></p>
          
          <h2 className="font-serif text-2xl text-charcoal mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Parāvāk (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h2 className="font-serif text-2xl text-charcoal mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p>
            The Website and its original content, features, and functionality are owned by Parāvāk and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. 
          </p>
          <p>
            You may not modify, publish, transmit, participate in the transfer or sale, create derivative works, or in any way exploit, any of the content, in whole or in part, without our express written permission.
          </p>

          <h2 className="font-serif text-2xl text-charcoal mt-8 mb-4">3. User Conduct</h2>
          <p>
            You agree to use the Website only for lawful purposes. You agree not to take any action that might compromise the security of the Website, render the Website inaccessible to others or otherwise cause damage to the Website or the Content. You agree not to add to, subtract from, or otherwise modify the Content, or to attempt to access any Content that is not intended for you.
          </p>

          <h2 className="font-serif text-2xl text-charcoal mt-8 mb-4">4. Links To Other Web Sites</h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by Parāvāk. Parāvāk has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
          </p>

          <h2 className="font-serif text-2xl text-charcoal mt-8 mb-4">5. Disclaimer</h2>
          <p>
            The materials on Parāvāk's website are provided on an 'as is' basis. Parāvāk makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="font-serif text-2xl text-charcoal mt-8 mb-4">6. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. We will notify you of any changes by posting the new Terms on this site.
          </p>
        </div>
      </div>
    </main>
  );
}
