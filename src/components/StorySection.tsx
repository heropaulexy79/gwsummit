import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-36 bg-[#FAF8F5] text-[#2A2E24] relative overflow-hidden editorial-linen">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#5C6B42]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5C6B42] font-medium">
              THE HEART & VISION
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#3F4B2B] leading-[1.12] tracking-tight font-normal">
            Behind every journey, <br />
            <span className="italic text-[#5C6B42]">there is a woman</span> <br />
            worth celebrating.
          </h2>
        </div>

        {/* Narrative & Curved Portrait Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-6 space-y-8">
            <p className="font-serif text-2xl sm:text-3xl text-[#3F4B2B] leading-snug font-normal italic border-l-2 border-[#C6A96B] pl-6">
              "Marriage is a journey of love, growth, sacrifice, discovery, and becoming."
            </p>

            <div className="space-y-6 font-sans text-base sm:text-lg text-[#2A2E24]/85 leading-relaxed font-light">
              <p className="drop-cap">
                Yet behind the roles we carry are women with dreams, questions, convictions, and a profound desire to grow. In the daily rhythm of caring, nurturing, and building homes and legacies, it is so easy for a wife to pour out continually until her own reservoir feels empty.
              </p>
              <p>
                <strong className="font-medium text-[#3F4B2B]">Global Wives Summit</strong> was born from a vision to create a sacred, uplifting space where women can gather without pretense, be renewed in spirit, find meaningful connection, and embrace the fullness of their journey.
              </p>
            </div>

            {/* Soft Warm Linen Pull Box */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#F3EFE8] border border-[#EAE1D7] relative shadow-sm">
              <div className="flex items-center gap-2 text-[#5C6B42] mb-3">
                <Heart className="w-4 h-4 fill-[#5C6B42]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium">Our Heartfelt Conviction</span>
              </div>
              <p className="font-serif text-lg sm:text-xl text-[#3F4B2B] italic leading-snug">
                You do not have to carry it all in silence. When wives gather in faith, perspective changes, burdens lighten, and divine strength is restored.
              </p>
            </div>

          </div>

          {/* Right Column: Soft Arched Double Photo Spread */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 items-end">
              
              {/* Image 1: High Classical Arch */}
              <div className="rounded-t-[120px] rounded-b-2xl overflow-hidden shadow-xl aspect-3/5 border-2 border-white">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=85"
                  alt="Women laughing together in joyful sisterhood"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Image 2: Soft Rounded Frame with offset position */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-4/5 border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=85"
                    alt="Women in prayer and spiritual connection"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 rounded-2xl bg-[#EAE1D7]/60 border border-[#EAE1D7] text-center">
                  <Sparkles className="w-4 h-4 text-[#C6A96B] mx-auto mb-1.5" />
                  <span className="font-serif italic text-base text-[#3F4B2B] block">
                    Sisterhood & Healing
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#5C6B42]">
                    Lagos Convening
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
