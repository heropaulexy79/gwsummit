import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';

export const RegistrationCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-[#3F4B2B] text-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Soft Atmospheric Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6A96B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FAF8F5]/10 border border-[#FAF8F5]/20 text-xs font-light tracking-[0.25em] text-[#EAE1D7] uppercase mb-8">
          <Heart className="w-3.5 h-3.5 text-[#C6A96B] fill-[#C6A96B]" />
          <span>JOIN US IN LAGOS • {eventConfig.year}</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#FAF8F5] leading-[1.08] text-balance">
          Your place in this story <br />
          <span className="italic font-light text-[#EAE1D7]">is waiting.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-lg sm:text-2xl text-[#FAF8F5]/90 max-w-2xl mx-auto font-light leading-relaxed font-serif italic">
          "Come ready to connect, grow, be strengthened, and embrace the beautiful journey ahead."
        </p>

        {/* Primary CTA Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="#registration-form"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#C6A96B] text-[#1E2514] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#FAF8F5] hover:text-[#3F4B2B] transition-all duration-300 shadow-2xl"
          >
            <span>REGISTER FOR GWS 2027</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

    </section>
  );
};
