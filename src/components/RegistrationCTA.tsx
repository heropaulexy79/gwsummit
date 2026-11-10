import React from 'react';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';

export const RegistrationCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-[#3F4B2B] text-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Soft Atmospheric Gradient & Radial Highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C6A96B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-[#FAF8F5]/10 border border-[#FAF8F5]/20 text-xs font-light tracking-[0.25em] text-[#EAE1D7] uppercase mb-8 shadow-sm">
          <Heart className="w-3.5 h-3.5 text-[#C6A96B] fill-[#C6A96B]" />
          <span>JOIN US IN LAGOS • {eventConfig.year}</span>
          <span className="font-script text-base text-[#C6A96B] normal-case tracking-normal">GWS 2.0</span>
        </div>

        {/* Headline with Signature Flourish */}
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#FAF8F5] leading-[1.08] text-balance">
          Your place in this story <br />
          <span className="font-script text-5xl sm:text-7xl lg:text-8xl text-[#C6A96B] block mt-2">is waiting for you.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-lg sm:text-2xl text-[#FAF8F5]/90 max-w-2xl mx-auto font-light leading-relaxed font-serif italic">
          "Come ready to connect, grow, be strengthened, and embrace the beautiful journey ahead."
        </p>

        {/* Primary CTA Button */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#registration-form"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#C6A96B] text-[#1E2514] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#FAF8F5] hover:text-[#3F4B2B] transition-all duration-300 shadow-2xl hover:scale-105"
          >
            <Sparkles className="w-4 h-4" />
            <span>REGISTER FOR GWS 2027</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

    </section>
  );
};