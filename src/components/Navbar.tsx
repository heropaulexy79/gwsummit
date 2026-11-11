import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';

interface NavbarProps {
  onOpenGrants: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGrants }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#grants') {
      onOpenGrants();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#C6A96B]/25 py-3.5 shadow-sm text-[#242820]'
          : 'bg-gradient-to-b from-[#1B1E17]/80 via-[#1B1E17]/30 to-transparent py-5 sm:py-7 text-[#FAF8F5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Refined Brand Wordmark with Script Accent */}
          <a
            href="#"
            className="group flex flex-col focus:outline-none shrink-0"
          >
            <div className="flex items-baseline gap-2">
              <span
                className={`font-serif text-xl sm:text-2xl tracking-[0.06em] font-medium transition-colors ${
                  isScrolled ? 'text-[#2E381F]' : 'text-[#FAF8F5]'
                }`}
              >
                Global Wives Summit
              </span>
              <span className="font-script text-2xl text-[#C6A96B] font-normal leading-none select-none">
                2.0
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className={`h-[1px] w-4 transition-all group-hover:w-7 ${
                isScrolled ? 'bg-[#3D4A2A]' : 'bg-[#C6A96B]'
              }`} />
              <span
                className={`text-[9.5px] tracking-[0.25em] uppercase font-light transition-colors ${
                  isScrolled ? 'text-[#5C6B42]' : 'text-[#C6A96B]'
                }`}
              >
                2027 • Lagos, Nigeria
              </span>
            </div>
          </a>

          {/* Clean Desktop Navigation with refined spacing & typography */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {eventConfig.navigation.map((item) => {
              const isGrants = item.href === '#grants';
              return isGrants ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={onOpenGrants}
                  className={`text-xs tracking-[0.14em] uppercase font-medium transition-all flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-sm ${
                    isScrolled
                      ? 'border-[#C6A96B]/50 text-[#2E381F] bg-[#C6A96B]/15 hover:bg-[#C6A96B]/30'
                      : 'border-[#C6A96B]/60 text-[#FAF8F5] bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C6A96B]" />
                  <span>{item.label}</span>
                  <span className="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded-full bg-[#C6A96B]/20 text-[#DFCA98] font-semibold">
                    ₦500k
                  </span>
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors py-1 relative whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C6A96B] hover:after:w-full after:transition-all after:duration-300 ${
                    isScrolled
                      ? 'text-[#242820]/80 hover:text-[#2E381F]'
                      : 'text-[#FAF8F5]/85 hover:text-[#C6A96B]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Luxury Rounded CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="#registration-form"
              className={`inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 ${
                isScrolled
                  ? 'bg-[#2E381F] text-[#FAF8F5] hover:bg-[#3D4A2A]'
                  : 'bg-gradient-to-r from-[#DFCA98] via-[#C6A96B] to-[#B08D46] text-[#1B1E17] hover:brightness-110'
              }`}
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="#registration-form"
              className={`px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase rounded-full ${
                isScrolled ? 'bg-[#2E381F] text-[#FAF8F5]' : 'bg-[#C6A96B] text-[#1B1E17]'
              }`}
            >
              REGISTER
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none ${isScrolled ? 'text-[#2E381F]' : 'text-[#FAF8F5]'}`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden transition-all duration-400 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[380px] border-b border-[#C6A96B]/25 bg-[#FAF8F5] text-[#242820] py-6 shadow-xl' : 'max-h-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col space-y-4">
          {eventConfig.navigation.map((item) => {
            const isGrants = item.href === '#grants';
            return isGrants ? (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="text-left text-xs tracking-[0.2em] uppercase text-[#2E381F] font-semibold hover:text-[#8A9772] py-2 border-b border-[#2E381F]/5 transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#C6A96B]" />
                  <span>{item.label}</span>
                </span>
                <span className="text-[10px] text-[#C6A96B] font-mono font-semibold">Up to ₦500k</span>
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-xs tracking-[0.2em] uppercase text-[#2E381F] hover:text-[#8A9772] py-2 border-b border-[#2E381F]/5 transition-colors"
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center inline-flex justify-center items-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase rounded-full bg-[#2E381F] text-[#FAF8F5]"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
