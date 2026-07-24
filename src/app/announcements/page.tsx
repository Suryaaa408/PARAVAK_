import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Activity & Announcements | Parāvāk',
  description: 'Upcoming meetings, seminars, classes, and public lectures hosted by Parāvāk.',
};

export interface AnnouncementItem {
  id: string;
  title: string;
  date: string;
  type: 'workshop' | 'lecture' | 'course' | 'meeting';
  location: string;
  description: string;
  registrationUrl?: string;
}

const announcements: AnnouncementItem[] = [
  {
    id: 'ann-1',
    title: 'Autumn Seminar: Reading Bhartṛhari\'s Brahmakāṇḍa',
    date: '12 August 2026',
    type: 'course',
    location: 'Virtual Workshop (Zoom) & Delhi Office',
    description: 'A 4-week intensive reading course examining the Vākyapadīya\'s philosophy of śabda-brahman.',
    registrationUrl: '/contact',
  },
  {
    id: 'ann-2',
    title: 'Public Symposium: Vāda Tradition in Contemporary Academe',
    date: '28 August 2026',
    type: 'lecture',
    location: 'India International Centre, New Delhi',
    description: 'Keynote address by Prof. Raghav Sharma followed by panel discussion on constructive debate protocols.',
    registrationUrl: '/contact',
  },
  {
    id: 'ann-3',
    title: 'Monthly Editorial Circle: Call for Submissions on Tantra & Aesthetics',
    date: '5 September 2026',
    type: 'meeting',
    location: 'Parāvāk Submission Portal',
    description: 'Special issue focus on South Indian ritual acoustic architecture and Kashmiri Śaiva aesthetics.',
    registrationUrl: '/submit',
  },
];

export default function AnnouncementsPage() {
  return (
    <div className="relative min-h-screen bg-kailash-night text-kailash-snow py-20 px-6 overflow-hidden">
      {/* Background Starry Night */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-ochre">Events & Updates</span>
          <h1 className="font-serif text-5xl font-bold text-bone">Activity & Announcements</h1>
          <p className="font-serif text-lg text-mist-2 max-w-xl mx-auto">
            Stay updated with upcoming seminars, reading circles, courses, and calls for papers.
          </p>
        </div>

        <div className="space-y-6">
          {announcements.map((item) => (
            <div key={item.id} className="bg-kailash-slate/60 border border-mist-1/15 p-8 rounded-xl space-y-4 shadow-lg hover:border-ochre/40 transition-colors">
              <div className="flex flex-wrap justify-between items-center gap-2">
                <span className="font-sans text-xs uppercase tracking-widest text-ochre font-bold px-3 py-1 bg-ochre/10 rounded">
                  {item.type}
                </span>
                <span className="font-sans text-xs text-mist-3">{item.date}</span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-bone">{item.title}</h2>

              <p className="font-serif text-base text-bone/90 leading-relaxed">{item.description}</p>

              <div className="flex flex-wrap justify-between items-center pt-4 border-t border-mist-1/10 text-xs font-sans text-mist-2">
                <span>📍 {item.location}</span>
                {item.registrationUrl && (
                  <a href={item.registrationUrl} className="text-ochre hover:underline font-semibold">
                    Register / Learn More →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
