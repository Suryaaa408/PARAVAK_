import { Hero } from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Parāvāk',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bone">
      <Hero 
        variant="inner" 
        title="Privacy Policy" 
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-stone max-w-none font-sans text-charcoal/80">
          <p><em>Last updated: October 1, 2023</em></p>
          
          <h2 className="font-serif text-2xl text-charcoal mt-8 mb-4">1. Introduction</h2>
          <p>
            Parāvāk ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="font-serif text-2xl text-charcoal mt-8 mb-4">2. Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2 className="font-serif text-2xl text-charcoal mt-8 mb-4">3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="font-serif text-2xl text-charcoal mt-8 mb-4">4. Cookies</h2>
          <p>
            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
          </p>
          
          <h2 className="font-serif text-2xl text-charcoal mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@paravak.com.
          </p>
        </div>
      </div>
    </main>
  );
}
