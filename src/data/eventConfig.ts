export interface EventConfig {
  name: string;
  year: string;
  edition: string;
  theme: string;
  date: string;
  venue: string;
  location: string;
  isDateConfirmed: boolean;
  isVenueConfirmed: boolean;
  isThemeConfirmed: boolean;
  contactEmail: string;
  whatsappGroupLink?: string;
  contacts?: {
    name: string;
    phone: string;
    type: string;
    link?: string;
  }[];
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
    twitter: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
}

export const eventConfig: EventConfig = {
  name: "Global Wives Summit",
  year: "2027",
  edition: "2027 Edition",
  theme: "To Be Announced",
  date: "To Be Announced",
  venue: "To Be Announced",
  location: "Lagos, Nigeria",
  isDateConfirmed: false,
  isVenueConfirmed: false,
  isThemeConfirmed: false,
  contactEmail: "globalwivessummit@gmail.com",
  whatsappGroupLink: "https://chat.whatsapp.com/Gxl9V3GkCfxLsLaMNaFUjP?mode=gi_t",
  contacts: [
    { name: "Aderonke", phone: "+234 916 584 0610", type: "call" },
    { name: "Precious", phone: "08072484722", type: "whatsapp", link: "https://wa.me/2348072484722" },
  ],
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    twitter: "https://x.com",
  },
  navigation: [
    { label: "The Summit", href: "#summit" },
    { label: "Our Story", href: "#story" },
    { label: "Grants & Support", href: "#grants" },
    { label: "2026 Recap", href: "#highlights" },
  ],
};
