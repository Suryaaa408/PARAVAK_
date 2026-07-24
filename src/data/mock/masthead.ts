import { MastheadSection } from '@/types';

export const mastheadSections: MastheadSection[] = [
  {
    title: 'Editorial Board',
    sanskritLabel: 'सम्पादक-मण्डल',
    displayMode: 'photo-grid',
    members: [
      {
        name: 'Rāghav Śarmā',
        role: 'Editor-in-Chief',
        photo: '/images/masthead/raghav.jpg',
        bio: 'Philosopher of language, Sanskritist, and founding member of the Parāvāk editorial collective.',
        credentials: 'Visiting Fellow, Oxford Centre for Hindu Studies',
      },
      {
        name: 'Ananyā Aiyar',
        role: 'Senior Editor — Culture & Aesthetics',
        photo: '/images/masthead/ananya.jpg',
        bio: 'Literary scholar specialising in Sanskrit kāvya and classical Indian aesthetics.',
        credentials: 'Lecturer in South Asian Studies, SOAS',
      },
      {
        name: 'Arjun Bhaṭṭācārya',
        role: 'Senior Editor — Philosophy',
        photo: '/images/masthead/arjun.jpg',
        bio: 'Scholar of Advaita Vedānta and comparative metaphysics.',
        credentials: 'Professor of Philosophy, BHU',
      },
      {
        name: 'Mīrā Kṛṣṇamūrti',
        role: 'Senior Editor — Religion',
        photo: '/images/masthead/meera.jpg',
        bio: 'Historian of religion specialising in bhakti movements across South Asia.',
        credentials: 'Associate Professor, University of Chicago',
      },
    ],
  },
  {
    title: 'Advisory Board',
    sanskritLabel: 'उपदेशक-परिषद्',
    displayMode: 'photo-grid',
    members: [
      {
        name: 'Prof. Kapil Kapoor',
        role: 'Patron',
        photo: '/images/masthead/kapoor.jpg',
        credentials: 'Former Pro Vice-Chancellor, JNU; Professor Emeritus of English & Sanskrit Studies',
      },
      {
        name: 'Prof. Shashi Prabha Kumar',
        role: 'Advisor',
        photo: '/images/masthead/kumar.jpg',
        credentials: 'Former Dean, Faculty of Arts, University of Delhi; Professor of Sanskrit',
      },
      {
        name: 'Dr. T.S. Rukmani',
        role: 'Advisor',
        photo: '/images/masthead/rukmani.jpg',
        credentials: 'Distinguished Professor Emerita, Concordia University; Specialist in Yoga philosophy',
      },
    ],
  },
  {
    title: 'Faculty Mentors',
    sanskritLabel: 'गुरु-मण्डल',
    displayMode: 'minimal-list',
    members: [
      {
        name: 'Prof. Rājendra Prasād',
        role: 'Mentor — Indian Ethics',
        credentials: 'Professor of Philosophy, IIT Kanpur',
      },
      {
        name: 'Prof. Nirmala Kulaśreṣṭha',
        role: 'Mentor — Sanskrit Studies',
        credentials: 'Professor of Sanskrit, Sampurnanand Sanskrit University',
      },
      {
        name: 'Dr. Mahesh Deokar',
        role: 'Mentor — Pali & Buddhist Studies',
        credentials: 'Associate Professor, University of Pune',
      },
      {
        name: 'Dr. Shankaranarayanan Panchapagesan',
        role: 'Mentor — Mīmāṃsā & Vedic Studies',
        credentials: 'Assistant Professor, IIT Bombay',
      },
    ],
  },
  {
    title: 'Partners',
    sanskritLabel: 'सहयोगी',
    displayMode: 'logo-grid',
    members: [],
    organizations: [
      {
        name: 'Oxford Centre for Hindu Studies',
        logo: '/images/partners/ochs.png',
        url: 'https://www.ochs.org.uk',
        description: 'Academic centre for the study of Hindu culture, languages, and thought.',
      },
      {
        name: 'Indian Council of Philosophical Research',
        logo: '/images/partners/icpr.png',
        url: '#',
        description: 'Autonomous body for promoting research in philosophy in India.',
      },
      {
        name: 'Chinmaya International Foundation',
        logo: '/images/partners/cif.png',
        url: '#',
        description: 'Research centre for the study of Sanskrit and Indian knowledge systems.',
      },
      {
        name: 'Indic Academy',
        logo: '/images/partners/indic.png',
        url: '#',
        description: 'Platform supporting scholarship in Indic studies and civilisational research.',
      },
    ],
  },
  {
    title: 'Core Team',
    sanskritLabel: 'मूल-दल',
    displayMode: 'minimal-list',
    members: [
      {
        name: 'Aditya Miśra',
        role: 'Managing Editor & Design Lead',
      },
      {
        name: 'Sneha Rāmachandran',
        role: 'Copy Editor',
      },
      {
        name: 'Devesh Tiwārī',
        role: 'Web Development & Technology',
      },
      {
        name: 'Rukmini Śrīnivāsan',
        role: 'Community & Outreach',
      },
      {
        name: 'Karthik Subrahmanyam',
        role: 'Social Media & Communications',
      },
    ],
  },
];
