import React from 'react';
import { Briefcase, HeartHandshake, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';

interface GrantsBannerProps {
  onOpenGrants: () => void;
}

export const GrantsBanner: React.FC<GrantsBannerProps> = ({ onOpenGrants }) => {
  return (
    <section className="py-20 sm:py-24 bg-[#F3EFE8] text-[#2A2E24] border-y border-[#EAE1D7] relative overflow-hidden editorial-linen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Soft Luxury Editorial Card */}
        <div className="rounded-3xl bg-[#3F4B2B] text-[#FAF8F5] p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          
          {/* Subtle Golden Glow Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A96B]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text Block */}
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5]/15 text-xs font-mono uppercase tracking-[0.25em] text-[#C6A96B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE GWS 2027 EMPOWERMENT INITIATIVE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.12]">
              Fueling Vision, Elevating Calling: <br />
              <span className="italic text-[#EAE1D7]">Grants & Support Up to ₦500,000.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#FAF8F5]/85 font-light leading-relaxed">
              We believe in the power of women who build, heal, and lead. Through our benevolence fund, we are investing seed grants into female entrepreneurs, non-profits, and educational refuel packages in Lagos.
            </p>

            {/* Clean Category Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#EAE1D7]">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5]/10">
                <Briefcase className="w-3.5 h-3.5 text-[#C6A96B]" /> Business Grants
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5]/10">
                <HeartHandshake className="w-3.5 h-3.5 text-[#C6A96B]" /> NGO Interventions
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5]/10">
                <GraduationCap className="w-3.5 h-3.5 text-[#C6A96B]" /> Student Refuel Kits
              </span>
            </div>
          </div>

          {/* Right Action Button (Clean Trigger to Dedicated Page) */}
          <div className="shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenGrants}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#C6A96B] text-[#1E2514] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#FAF8F5] hover:text-[#3F4B2B] transition-all duration-300 shadow-xl group"
            >
              <span>APPLY FOR GRANTS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
