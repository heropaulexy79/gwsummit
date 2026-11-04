export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
  year: string;
  featured?: boolean;
  aspect?: string;
  location?: string;
  quote?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "gws-2026-main",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85",
    alt: "Global Wives Summit 2026 General Assembly in grand hall",
    title: "The Assembly of Hearts",
    category: "General Assembly",
    description: "Over 1,200 wives from 34 nations convened under one roof, sharing profound tears of breakthrough and joy.",
    year: "2026",
    featured: true,
    aspect: "col-span-12 lg:col-span-8 aspect-16/10",
    location: "Main Sanctuary Hall",
    quote: "“The atmosphere shifted the moment we lifted our voices together in unanimous surrender.”",
  },
  {
    id: "gws-2026-worship",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
    alt: "Spiritual connection and worship session during Global Wives Summit 2026",
    title: "Sacred Intimacy & Worship",
    category: "Worship & Intercession",
    description: "Anointed moments of intercession, spiritual grounding, and surrendered faith as sisters joined hands across aisles.",
    year: "2026",
    aspect: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-4/3",
    location: "Chapel of Intercession",
    quote: "“Here, I remembered my calling before the throne before remembering my obligations in the home.”",
  },
  {
    id: "gws-2026-speakers",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85",
    alt: "Keynote presentation and practical wisdom session at GWS 2026",
    title: "Wisdom from the Stage",
    category: "Keynote & Plenary",
    description: "Unfiltered, real-life marriage counsel delivered by seasoned voices who lead with vulnerability, truth, and grace.",
    year: "2026",
    aspect: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-4/3",
    location: "Auditorium Plenary Stage",
    quote: "“Grace is not passive; it is the strongest architecture a wife can build around her marriage.”",
  },
  {
    id: "gws-2026-fellowship",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=85",
    alt: "Intimate conversations and sisterhood bonds at Global Wives Summit 2026",
    title: "Laughter, Tears & Sisterhood",
    category: "Fellowship & Foyer",
    description: "Deep, unguarded conversations in the courtyards between sessions that dissolved years of isolation.",
    year: "2026",
    aspect: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-4/3",
    location: "The Garden Terrace",
    quote: "“For the first time in ten years of marriage, I felt completely understood without speaking a word.”",
  },
  {
    id: "gws-2026-audience",
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1000&q=85",
    alt: "Interactive breakout circle where wives unpacked communication and inner healing",
    title: "Renewed Minds & Masterclasses",
    category: "Masterclasses & Circles",
    description: "Interactive breakout pods addressing communication, relational trauma, identity, and balancing vision with family.",
    year: "2026",
    aspect: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-4/3",
    location: "Pavilion Studio B",
    quote: "“Practical tools that transformed the way I speak, pray, and listen to my husband.”",
  },
  {
    id: "gws-2026-moments",
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85",
    alt: "Embrace of encouragement and empowerment between attendees",
    title: "The Holy Embrace",
    category: "Breakthrough Moments",
    description: "A living testament that no woman was ever designed to navigate the sacred covenant of wifehood in loneliness.",
    year: "2026",
    aspect: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-4/3",
    location: "Prayer Gallery",
    quote: "“I arrived carrying a heavy, unspoken burden. I departed anchored, radiant, and renewed.”",
  },
];
