import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#252820] text-[#F6F3EB] border-t border-[#C6A96B]/20 pt-20 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column (Col 1-5) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.08em] font-medium text-[#F6F3EB]">
                {eventConfig.name.toUpperCase()}
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="h-[1px] w-6 bg-[#C6A96B]" />
                <span className="font-mono text-xs tracking-[0.25em] text-[#C6A96B] font-medium uppercase">
                  {eventConfig.year} • {eventConfig.location}
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-[#EAE5D8]/75 font-light leading-relaxed max-w-sm">
              A gathering of women united by purpose, strengthened by faith, and inspired to embrace the extraordinary calling and journey of wifehood.
            </p>

            <div className="pt-2">
              <a
                href="#register"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C6A96B] hover:text-[#FFFFFF] transition-colors"
              >
                <span>RESERVE YOUR ATTENDANCE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (Col 6-8) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C6A96B]">
              NAVIGATION
            </span>
            <ul className="space-y-3 text-xs tracking-[0.16em] uppercase text-[#EAE5D8]/80 font-medium">
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
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C6A96B]">
              LAGOS CONVENING
            </span>
            <p className="text-xs text-[#EAE5D8]/70 font-light leading-relaxed">
              For attendee inquiries, fellowship groups, or registration assistance in Lagos, Nigeria:
            </p>
            <div className="text-sm font-mono text-[#F6F3EB]">
              <a href={`mailto:${eventConfig.contactEmail}`} className="hover:text-[#C6A96B] underline underline-offset-4">
                {eventConfig.contactEmail}
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={eventConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#C6A96B]/30 flex items-center justify-center text-[#F6F3EB] hover:bg-[#C6A96B] hover:text-[#1A2012] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={eventConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#C6A96B]/30 flex items-center justify-center text-[#F6F3EB] hover:bg-[#C6A96B] hover:text-[#1A2012] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>

              <a
                href={eventConfig.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#C6A96B]/30 flex items-center justify-center text-[#F6F3EB] hover:bg-[#C6A96B] hover:text-[#1A2012] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a
                href={eventConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#C6A96B]/30 flex items-center justify-center text-[#F6F3EB] hover:bg-[#C6A96B] hover:text-[#1A2012] transition-colors"
                aria-label="X"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EAE5D8]/50 gap-4">
          <p>© {new Date().getFullYear()} Global Wives Summit. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-[#A5AE8B]">LAGOS, NIGERIA</span>
            <a href="#" className="hover:text-[#F6F3EB] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#F6F3EB] transition-colors">Terms</a>
          </div>
        </div>

      </div>

    </footer>
  );
};
