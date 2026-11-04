import React from 'react';
import { Users, TrendingUp, Compass, ArrowRight } from 'lucide-react';

export const SummitIntroduction: React.FC = () => {
  const pillars = [
    {
      number: "01",
      title: "Connection",
      subtitle: "The Beauty of Authentic Sisterhood",
      description: "A meaningful gathering of women who understand the beauty and realities of the journey. Break free from comparison and discover authentic, lifelong companionship with wives across communities.",
      icon: Users,
    },
    {
      number: "02",
      title: "Growth",
      subtitle: "Wisdom for Every Season",
      description: "An opportunity to gain wisdom, perspective, and renewed strength. Engage with honest teachings on communication, emotional resilience, personal wholeness, and spiritual intimacy.",
      icon: TrendingUp,
    },
    {
      number: "03",
      title: "Purpose",
      subtitle: "A Sacred Calling Renewed",
      description: "An invitation to embrace wifehood with intentionality, faith, and vision. Rediscover the divine assignment behind your home and stand anchored in grace for the generations to follow.",
      icon: Compass,
    },
  ];

  return (
    <section id="summit" className="py-24 sm:py-36 bg-[#3F4B2B] text-[#FAF8F5] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#C6A96B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A96B] font-medium">
              INTRODUCING THE SUMMIT
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-[1.1] tracking-tight font-normal">
            More than a summit. <br />
            <span className="italic font-light text-[#EAE1D7]">A moment that</span> matters.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#FAF8F5]/85 font-light max-w-2xl leading-relaxed">
            Global Wives Summit is an intentional sanctuary engineered for the renewal of a wife's heart, mind, and spirit. It is not an ordinary conference—it is a life-shifting appointment.
          </p>
        </div>

        {/* Soft Rounded Cards with Curvature */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#4A5734] border border-[#FAF8F5]/10 hover:border-[#C6A96B]/50 transition-all duration-300 hover:shadow-xl"
              >
                <div>
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#FAF8F5]/10">
                    <span className="font-serif text-3xl sm:text-4xl font-light text-[#C6A96B]">
                      {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#3F4B2B] text-[#C6A96B] flex items-center justify-center group-hover:bg-[#C6A96B] group-hover:text-[#1E2514] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Body */}
                  <h3 className="font-serif text-2xl font-normal text-[#FAF8F5] mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-[#EAE1D7]/75 font-light mb-4">
                    {pillar.subtitle}
                  </div>
                  <p className="text-sm text-[#FAF8F5]/80 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-[#FAF8F5]/10 flex items-center gap-2 text-xs uppercase tracking-wider text-[#C6A96B]">
                  <span>DISCOVER MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Graceful Affirmation Banner */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-[#323D22] border border-[#FAF8F5]/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A96B] font-medium block">
              LAGOS CONVENING • 2027
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#FAF8F5] italic font-normal">
              "When a wife is refreshed, her home is revived and generational grace flourishes."
            </p>
          </div>
          <a
            href="#register"
            className="shrink-0 px-8 py-3.5 rounded-full bg-[#C6A96B] text-[#1E2514] text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#FAF8F5] transition-colors shadow-lg"
          >
            CLAIM YOUR SEAT
          </a>
        </div>

      </div>

    </section>
  );
};
