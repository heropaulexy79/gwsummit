import React from 'react';
import { ArrowDown, ArrowRight, Heart } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#242A1D] text-[#FAF8F5] pt-32 pb-20">
      
      {/* Radiant Warm Photography Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2000&q=85"
          alt="Radiant women embracing in joy, faith, and purposeful sisterhood"
          className="w-full h-full object-cover object-[center_35%] filter brightness-50 contrast-105"
          loading="eager"
        />
        {/* Soft Olive & Amber Duotone Warm Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#242A1D]/95 via-[#3F4B2B]/80 to-[#242A1D]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#242A1D] via-transparent to-[#242A1D]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Story Headline */}
          <div className="lg:col-span-8 space-y-7">
            
            {/* Soft Feminine Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF8F5]/10 border border-[#FAF8F5]/20 backdrop-blur-sm text-xs font-light tracking-[0.2em] text-[#EAE1D7] uppercase">
              <Heart className="w-3.5 h-3.5 text-[#C6A96B] fill-[#C6A96B]" />
              <span>A SACRED GATHERING OF WIVES</span>
              <span>•</span>
              <span className="text-[#C6A96B] font-medium">{eventConfig.location.toUpperCase()} {eventConfig.year}</span>
            </div>

            {/* Main Headline with Gentle Italic Grace */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.08] tracking-tight font-normal text-[#FAF8F5] max-w-4xl">
              She was never <br />
              <span className="italic font-light text-[#EAE1D7]">meant to walk</span> <br />
              this journey alone.
            </h1>

            {/* Supporting Text */}
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#FAF8F5]/90 max-w-2xl font-light leading-relaxed">
              A gathering of women united by purpose, strengthened by faith, and inspired to embrace the extraordinary calling and beauty of wifehood.
            </p>

            {/* Soft Rounded Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="#register"
                className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-[#C6A96B] text-[#1E2514] font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase rounded-full hover:bg-[#FAF8F5] hover:text-[#3F4B2B] transition-all duration-300 shadow-xl"
              >
                <span>REGISTER FOR GWS 2027</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#summit"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 border border-[#FAF8F5]/30 text-[#FAF8F5] font-medium text-xs sm:text-sm tracking-[0.18em] uppercase rounded-full hover:bg-[#FAF8F5]/10 hover:border-[#C6A96B] hover:text-[#C6A96B] transition-all duration-300 backdrop-blur-sm"
              >
                <span>DISCOVER THE SUMMIT</span>
              </a>
            </div>

          </div>

          {/* Right Column: Soft Arched Portrait Frame */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              
              {/* Soft Classical Arch Frame */}
              <div className="relative rounded-t-[140px] rounded-b-2xl overflow-hidden shadow-2xl border-2 border-[#FAF8F5]/20 aspect-3/4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
                  alt="A woman radiating inner peace and gentle grace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242A1D]/80 via-transparent to-transparent" />
                
                {/* Floating Soft Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#FAF8F5]/90 backdrop-blur-md text-[#2A2E24] shadow-lg text-center">
                  <span className="font-serif italic text-lg text-[#3F4B2B] block">
                    "Renewed in Love & Faith"
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#5C6B42] font-medium">
                    {eventConfig.location}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Soft Scroll Indicator */}
        <div className="pt-12 flex justify-between items-center border-t border-white/10 mt-16">
          <span className="text-[11px] tracking-[0.2em] text-[#EAE1D7]/70 uppercase font-light">
            SCROLL TO EXPLORE
          </span>
          <a
            href="#story"
            className="w-10 h-10 rounded-full border border-[#FAF8F5]/30 flex items-center justify-center text-[#C6A96B] hover:bg-[#FAF8F5] hover:text-[#3F4B2B] transition-colors"
            aria-label="Scroll down to Story"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>

    </section>
  );
};
