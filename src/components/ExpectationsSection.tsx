import React from 'react';
import { MessageSquareHeart, BookOpenCheck, Network, Sparkles, Heart } from 'lucide-react';

export const ExpectationsSection: React.FC = () => {
  const expectations = [
    {
      icon: MessageSquareHeart,
      title: "Meaningful Conversations",
      pillar: "AUTHENTIC EXCHANGE",
      description: "Unguarded, compassionate spaces to talk through the unspoken challenges, milestones, and realities of marriage. Discover practical dialogue models with wives in similar seasons of life.",
      highlight: "Facilitated cohort roundtables & honest, confidential Q&A sessions",
    },
    {
      icon: BookOpenCheck,
      title: "Inspiring Teachings & Insights",
      pillar: "FOUNDATIONAL WISDOM",
      description: "Sound spiritual depth combined with practical life application. Dynamic plenary keynote sessions and specialized workshops tailored to nurture your personal wholeness and spiritual authority.",
      highlight: "Theology of marriage, emotional wellness, & purposeful leadership",
    },
    {
      icon: Network,
      title: "Lifelong Sisterhood & Circles",
      pillar: "WARM COMMUNITY",
      description: "An intentional network that extends far beyond the closing ceremony. Establish accountability groups, prayer partnerships, and regional sister circles with wives from across Nigeria and beyond.",
      highlight: "Lifelong sister circles spanning communities across Nigeria and online",
    },
  ];

  return (
    <section id="expectations" className="py-24 sm:py-36 bg-[#F3EFE8] text-[#2A2E24] relative overflow-hidden editorial-linen">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C6A96B]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#5C6B42]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5C6B42] font-medium">
              WHAT TO EXPECT IN 2027
            </span>
            <span className="font-script text-xl text-[#C6A96B] ml-2">A Deeper Encounter</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#3F4B2B] leading-[1.1] tracking-tight font-normal">
            A new chapter. <br />
            <span className="italic text-[#5C6B42]">A deeper, renewing</span> experience.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#2A2E24]/80 font-light leading-relaxed">
            As we prepare for Global Wives Summit 2027 in Lagos, our commitment is to elevate every dimension of your experience—nurturing your spiritual depth, emotional vitality, and relationships.
          </p>
        </div>

        {/* Split Grid: Editorial Cards & Featured Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Expectations Feature Cards (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            {expectations.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#EAE1D7] hover:border-[#C6A96B] transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden"
                >
                  <div className="flex items-start gap-5 sm:gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#3F4B2B] text-[#C6A96B] flex items-center justify-center shadow-md group-hover:bg-[#C6A96B] group-hover:text-[#1E2514] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-2 flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.22em] text-[#5C6B42] font-medium">
                          0{idx + 1} • {item.pillar}
                        </span>
                        <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-[#C6A96B] tracking-wider uppercase font-medium">
                          <Sparkles className="w-3 h-3" /> CURATED MOMENT
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl text-[#3F4B2B] font-normal">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#2A2E24]/75 font-light leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-3 border-t border-[#EAE1D7]/80 flex items-center gap-2 text-xs text-[#5C6B42]">
                        <span className="font-medium">Highlight:</span>
                        <span className="font-light italic text-[#3F4B2B]">{item.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Note banner on proposed pillars */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5]/70 border border-[#EAE1D7] flex items-center gap-3 text-xs text-[#5C6B42]">
              <Heart className="w-4 h-4 text-[#C6A96B] shrink-0" />
              <span>
                These content pillars shape the 2027 Lagos itinerary. Full session announcements will be communicated to registered attendees.
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Arch Image Card (Col 8-12) */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Arched Photo */}
              <div className="rounded-t-[140px] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/5 relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85"
                  alt="An engaged, uplifted attendee smiling during summit sessions"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E381F]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <span className="font-script text-3xl text-[#EAE1D7] block mb-1">Empowered & Anchored</span>
                  <p className="text-xs tracking-wider uppercase text-white/80 font-light">
                    Every session is thoughtfully curated for your wholeness
                  </p>
                </div>
              </div>

              {/* Floating Pill Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 px-6 py-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE1D7] shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3F4B2B] text-[#C6A96B] flex items-center justify-center font-serif font-light text-lg">
                  2.0
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#5C6B42] font-semibold block">
                    GLOBAL WIVES SUMMIT
                  </span>
                  <span className="font-serif italic text-sm text-[#3F4B2B]">
                    Lagos, Nigeria Convening
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