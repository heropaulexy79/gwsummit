import React from 'react';
import { ArrowDown, ArrowRight, Heart, Sparkles, MapPin, Calendar } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[96vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#1B1E17] text-[#FAF8F5] pt-32 sm:pt-36 pb-20">
      
      {/* High-Resolution Golden-Hour Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2200&q=88"
          alt="Radiant women embracing in joy, faith, and purposeful sisterhood"
          className="w-full h-full object-cover object-[center_32%] filter brightness-[0.48] contrast-[1.08] scale-105"
          loading="eager"
        />
        {/* Multilayered warm olive duotone & golden spotlight radiance */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B1E17]/95 via-[#2E381F]/80 to-[#1B1E17]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1E17] via-transparent to-[#1B1E17]/50" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#C6A96B]/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Subtle Hairline Architecture */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-7xl mx-auto h-full border-x border-[#C6A96B]/15 relative">
          <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C6A96B]/15 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Main Story Headline */}
          <div className="lg:col-span-8 space-y-7 sm:space-y-8">
            
            {/* Elegant Pill Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel-dark text-xs tracking-[0.22em] text-[#E8DDD2] uppercase">
              <Heart className="w-3.5 h-3.5 text-[#C6A96B] fill-[#C6A96B]" />
              <span className="font-light">GLOBAL WIVES SUMMIT 2.0</span>
              <span className="text-[#C6A96B]">•</span>
              <span className="text-[#C6A96B] font-medium">{eventConfig.location.toUpperCase()}</span>
            </div>

            {/* Display Headline with Cursive / Script Flourish */}
            <div className="space-y-1">
              <span className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#C6A96B] block leading-none font-normal">
                Beloved & strengthened,
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] leading-[1.02] tracking-tight font-normal text-[#FAF8F5] max-w-4xl text-balance">
                She was never <br />
                <span className="italic font-light text-[#E8DDD2] pr-2">meant to walk</span> <br />
                this journey alone.
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[#FAF8F5]/85 max-w-2xl font-light leading-relaxed">
              A sacred gathering of women united by purpose, strengthened by faith, and empowered to embrace the extraordinary calling and beauty of wifehood.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3 sm:pt-4">
              <a
                href="#register"
                className="group relative inline-flex justify-center items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#DFCA98] via-[#C6A96B] to-[#B08D46] text-[#1B1E17] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase hover:from-[#FAF8F5] hover:to-[#EDE7DC] hover:text-[#2E381F] transition-all duration-300 shadow-xl"
              >
                <span>REGISTER FOR GWS 2027</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#summit"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full border border-[#FAF8F5]/30 text-[#FAF8F5] font-medium text-xs sm:text-sm tracking-[0.18em] uppercase hover:bg-white/10 hover:border-[#C6A96B] hover:text-[#C6A96B] transition-all duration-300 backdrop-blur-sm"
              >
                <span>DISCOVER THE SUMMIT</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-End Magazine Arch Collage */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              
              {/* Backing Gold Glow Ring */}
              <div className="absolute -inset-2 rounded-t-[150px] rounded-b-3xl border border-[#C6A96B]/30 opacity-70 pointer-events-none" />

              {/* Classical Arch Frame with High-Fashion Portrait */}
              <div className="relative rounded-t-[140px] rounded-b-3xl overflow-hidden shadow-2xl border border-white/20 aspect-3/4 bg-[#2E381F]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
                  alt="A woman radiating quiet strength, poise, and grace"
                  className="w-full h-full object-cover filter contrast-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1E17]/90 via-transparent to-transparent" />
                
                {/* Floating Glass Metadata Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-panel-light text-[#242820] shadow-xl text-center space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-[#3D4A2A]">
                    <Sparkles className="w-3.5 h-3.5 text-[#C6A96B]" />
                    <span className="font-serif italic text-base sm:text-lg text-[#2E381F]">
                      "Renewed in Love & Faith"
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-[#56653D] font-medium pt-1 border-t border-[#3D4A2A]/10">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C6A96B]" /> Lagos, Nigeria
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C6A96B]" /> Edition 2.0
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Bar & Footer Meta */}
        <div className="pt-12 sm:pt-16 flex justify-between items-center border-t border-white/10 mt-14 sm:mt-16">
          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] tracking-[0.24em] text-[#E8DDD2]/75 uppercase font-light">
            <span className="w-6 h-[1px] bg-[#C6A96B]" />
            <span>SCROLL TO EXPLORE THE CONVENING</span>
          </div>
          <a
            href="#story"
            className="w-10 h-10 rounded-full border border-[#FAF8F5]/30 flex items-center justify-center text-[#C6A96B] hover:bg-[#FAF8F5] hover:text-[#2E381F] transition-all"
            aria-label="Scroll down to Story"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>

    </section>
  );
};
