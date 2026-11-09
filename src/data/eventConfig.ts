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
  contactEmail: "info@globalwivessummit.com",
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
    { label: "2026 Highlights", href: "#highlights" },
    { label: "Register", href: "#register" },
  ],
};
