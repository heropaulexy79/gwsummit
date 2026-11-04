import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { SummitIntroduction } from './components/SummitIntroduction';
import { GallerySection } from './components/GallerySection';
import { ExpectationsSection } from './components/ExpectationsSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import { RegistrationCTA } from './components/RegistrationCTA';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F3EB] text-[#252820] flex flex-col font-sans selection:bg-[#3F4B2B] selection:text-[#F6F3EB]">
      {/* SECTION 1 — NAVIGATION */}
      <Navbar />

      <main className="flex-grow">
        {/* SECTION 2 — HERO EXPERIENCE */}
        <HeroSection />

        {/* SECTION 3 — THE STORY / EMOTIONAL CONNECTION */}
        <StorySection />

        {/* SECTION 4 — INTRODUCING THE SUMMIT */}
        <SummitIntroduction />

        {/* SECTION 5 — GLOBAL WIVES SUMMIT 2026 RECAP */}
        <GallerySection />

        {/* SECTION 6 — WHAT TO EXPECT IN 2027 */}
        <ExpectationsSection />

        {/* SECTION 7 — EVENT DETAILS */}
        <EventDetailsSection />

        {/* SECTION 8 — REGISTRATION CTA */}
        <RegistrationCTA />

        {/* SECTION 9 — REGISTRATION FORM */}
        <RegistrationForm />
      </main>

      {/* SECTION 10 — FOOTER */}
      <Footer />

      {/* Mobile Sticky Registration Pill */}
      <div
        className={`fixed bottom-4 left-4 right-4 z-40 sm:hidden transition-all duration-300 transform ${
          showStickyCta ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        }`}
      >
        <a
          href="#register"
          className="w-full flex items-center justify-between px-6 py-3.5 bg-[#3F4B2B] text-[#F6F3EB] border border-[#C6A96B] shadow-2xl text-xs font-semibold tracking-[0.18em] uppercase"
        >
          <span>REGISTER FOR GWS 2027</span>
          <ArrowUpRight className="w-4 h-4 text-[#C6A96B]" />
        </a>
      </div>
    </div>
  );
};

export default App;
