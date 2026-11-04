import React from 'react';
import { Sparkles } from 'lucide-react';

export const GlobalTicker: React.FC = () => {
  const cities = [
    "PARIS",
    "LONDON",
    "NEW YORK",
    "ATLANTA",
    "ACCRA",
    "LAGOS",
    "NAIROBI",
    "JOHANNESBURG",
    "TORONTO",
    "SYDNEY",
    "DUBAI",
    "DALLAS",
    "SINGAPORE",
    "CHICAGO",
    "HOUSTON",
  ];

  return (
    <div className="bg-[#1E2514] border-y border-[#C6A96B]/25 py-3.5 overflow-hidden text-[#F6F3EB]">
      <div className="flex animate-marquee items-center gap-8 whitespace-nowrap">
        {/* Loop twice for seamless infinite scroll */}
        {[...cities, ...cities].map((city, idx) => (
          <div key={`${city}-${idx}`} className="flex items-center gap-8">
            <span className="font-mono text-xs tracking-[0.28em] text-[#EAE5D8] uppercase">
              {city}
            </span>
            <span className="flex items-center gap-2 text-[#C6A96B]">
              <Sparkles className="w-2.5 h-2.5" />
              <span className="text-[10px] tracking-widest font-mono text-[#A5AE8B]">GWS 2027</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

