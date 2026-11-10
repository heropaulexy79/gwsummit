import React from 'react';
import { ArrowUpRight, Heart, Mail } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#242A1D] text-[#FAF8F5] border-t border-[#C6A96B]/20 pt-20 pb-12 relative overflow-hidden">
      
      {/* Decorative Subtle Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C6A96B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column (Col 1-5) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.06em] font-normal text-[#FAF8F5]">
                {eventConfig.name.toUpperCase()}
              </span>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="h-[1px] w-6 bg-[#C6A96B]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#C6A96B] font-medium">
                  {eventConfig.year} • {eventConfig.location}
                </span>
                <span className="font-script text-lg text-[#EAE1D7] ml-1">2.0</span>
              </div>
            </div>

            <p className="font-sans text-sm text-[#EAE1D7]/75 font-light leading-relaxed max-w-sm">
              A sacred gathering of women united by purpose, strengthened by faith, and inspired to embrace the extraordinary journey of wifehood.
            </p>

            <div className="pt-2">
              <a
                href="#registration-form"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C6A96B] hover:text-white transition-colors"
              >
                <span>RESERVE YOUR ATTENDANCE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (Col 6-8) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A96B] font-medium block">
              NAVIGATION
            </span>
            <ul className="space-y-3 text-xs tracking-[0.16em] uppercase text-[#EAE1D7]/80 font-normal">
              {eventConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#C6A96B] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Contact (Col 9-12) */}
          <div className="md:col-span-4 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A96B] font-medium block">
              LAGOS CONVENING & INQUIRIES
            </span>
            <p className="text-xs text-[#EAE1D7]/70 font-light leading-relaxed">
              For registration inquiries, cohort questions, or partnership support:
            </p>
            
            <div className="flex items-center gap-2.5 text-sm text-[#FAF8F5]">
              <Mail className="w-4 h-4 text-[#C6A96B]" />
              <a href="mailto:globalwivessummit@gmail.com" className="hover:text-[#C6A96B] underline underline-offset-4 font-light">
                globalwivessummit@gmail.com
              </a>
            </div>

            {/* Grace Quote */}
            <div className="p-4 rounded-2xl bg-[#2E3524] border border-white/5 text-xs text-[#EAE1D7]/80 font-serif italic">
              "When a wife is renewed in heart and purpose, entire families, communities, and nations are blessed."
            </div>
          </div>

        </div>

        {/* Footer Sub-Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/60 font-light">
          <div className="flex items-center gap-1.5">
            <span>© {eventConfig.year} {eventConfig.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-[#C6A96B]">
            <Heart className="w-3.5 h-3.5 fill-[#C6A96B]" />
            <span className="tracking-widest uppercase text-[10px]">Held with Grace in Lagos, Nigeria</span>
          </div>
        </div>

      </div>

    </footer>
  );
};