import React from 'react';
import { MessageSquareHeart, BookOpenCheck, Network, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ExpectationsSection: React.FC = () => {
  const expectations = [
    {
      icon: MessageSquareHeart,
      title: "Meaningful Conversations",
      pillar: "AUTHENTIC EXCHANGE",
      description: "Unguarded, compassionate spaces to talk through the unspoken challenges, milestones, and realities of marriage. Discover practical dialogue models with wives in similar seasons of life.",
      highlight: "Facilitated cohort roundtables & honest Q&A sessions",
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
      title: "Powerful Connections & Shared Experiences",
      pillar: "GLOBAL COHORT",
      description: "An intentional network that extends far beyond the closing ceremony. Establish accountability groups, prayer partnerships, and regional sister circles with wives from around the globe.",
      highlight: "Lifelong international sister circles spanning 30+ nations",
    },
  ];

  return (
    <section id="expectations" className="py-24 sm:py-36 bg-[#F6F3EB] text-[#252820] relative overflow-hidden editorial-grain">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1.5px] bg-[#3F4B2B]" />
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#69764A] font-semibold">
              WHAT TO EXPECT IN 2027
            </span>
            <span className="text-xs text-[#C6A96B] font-mono">/ / HORIZONS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#3F4B2B] leading-[1.08] tracking-tight">
            A NEW CHAPTER. <br />
            <span className="italic font-normal text-[#69764A]">A DEEPER EXPERIENCE.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#252820]/80 font-light leading-relaxed">
            As we prepare for Global Wives Summit 2027, our commitment is to elevate every dimension of your experience. Below are the foundational pillars guiding our program design.
          </p>
        </div>

        {/* Split Grid: Prominent Visual & Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Expectations Feature Cards (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {expectations.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group p-6 sm:p-8 bg-[#EAE5D8]/70 border border-[#69764A]/25 hover:border-[#3F4B2B] hover:bg-[#FFFFFF] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-5 sm:gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-none bg-[#3F4B2B] text-[#DFCA98] flex items-center justify-center shadow-md group-hover:bg-[#DFCA98] group-hover:text-[#14180E] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-2 flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#69764A]">
                          0{idx + 1} // {item.pillar}
                        </span>
                        <span className="hidden sm:inline-block text-[10px] font-mono text-[#C6A96B] uppercase">
                          CURATED MODULE
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#3F4B2B] font-semibold group-hover:text-[#69764A] transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="font-sans text-sm sm:text-base text-[#252820]/80 font-light leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#3F4B2B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A96B]" />
                        <span>{item.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Note banner on proposed pillars */}
            <div className="p-4 bg-[#F6F3EB] border-l-2 border-[#C6A96B] text-xs text-[#69764A] font-mono">
              * Note: These are proposed content pillars shaping the 2027 itinerary. Complete speaker lineup and plenary schedules will be officially unveiled soon.
            </div>
          </div>

          {/* Right Column: Editorial Atmosphere Showcase (Col 8-12) */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden shadow-2xl border border-[#C6A96B]/35 bg-[#1E2514]">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85"
                alt="Anticipating the 2027 Atmosphere in grand conference setting"
                className="w-full h-full object-cover aspect-4/5 filter brightness-90 contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14180E]/95 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 sm:p-7 bg-[#1E2514]/90 backdrop-blur-md border border-[#C6A96B]/35 text-[#F6F3EB] space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#DFCA98]">
                  CONVENING ESSENCE
                </span>
                <p className="font-serif text-xl sm:text-2xl italic text-[#EAE5D8] leading-snug">
                  "A sacred sanctuary to receive clarity, rekindle passion, and return home empowered."
                </p>
                <div className="pt-3 flex items-center justify-between text-xs text-[#A5AE8B] border-t border-white/10 font-mono">
                  <span>SUMMIT 2027</span>
                  <a href="#register" className="text-[#DFCA98] hover:underline inline-flex items-center gap-1 font-semibold uppercase tracking-wider">
                    REGISTER NOW <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
