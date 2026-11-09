import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#3F4B2B]/10 py-4 shadow-sm text-[#2A2E24]'
          : 'bg-transparent py-6 sm:py-8 text-[#FAF8F5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark with Soft Feminine Grace */}
          <a
            href="#"
            className="group flex flex-col focus:outline-none"
          >
            <span
              className={`font-serif text-xl sm:text-2xl tracking-[0.08em] font-medium transition-colors ${
                isScrolled ? 'text-[#3F4B2B]' : 'text-[#FAF8F5]'
              }`}
            >
              Global Wives Summit
            </span>
            <span
              className={`font-sans text-[10px] tracking-[0.25em] uppercase font-light transition-colors ${
                isScrolled ? 'text-[#8F9E75]' : 'text-[#C6A96B]'
              }`}
            >
              2027 • Lagos, Nigeria
            </span>
          </a>

          {/* Clean Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-9">
            {eventConfig.navigation.map((item) => {
              const isGrants = item.href === '#grants';
              return isGrants ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={onOpenGrants}
                  className={`text-xs tracking-[0.18em] uppercase font-medium transition-colors py-1 flex items-center gap-1.5 ${
                    isScrolled
                      ? 'text-[#3F4B2B] hover:text-[#5C6B42]'
                      : 'text-[#C6A96B] hover:text-[#FAF8F5]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A96B] animate-pulse" />
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-xs tracking-[0.18em] uppercase font-medium transition-colors py-1 ${
                    isScrolled
                      ? 'text-[#2A2E24]/80 hover:text-[#3F4B2B]'
                      : 'text-[#FAF8F5]/85 hover:text-[#C6A96B]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Soft Rounded CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#register"
              className={`inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-sm ${
                isScrolled
                  ? 'bg-[#3F4B2B] text-[#FAF8F5] hover:bg-[#5C6B42]'
                  : 'bg-[#C6A96B] text-[#1E2514] hover:bg-[#FAF8F5] hover:text-[#3F4B2B]'
              }`}
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="#register"
              className={`px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase rounded-full ${
                isScrolled ? 'bg-[#3F4B2B] text-[#FAF8F5]' : 'bg-[#C6A96B] text-[#1E2514]'
              }`}
            >
              REGISTER
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none ${isScrolled ? 'text-[#3F4B2B]' : 'text-[#FAF8F5]'}`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden transition-all duration-400 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[360px] border-b border-[#3F4B2B]/10 bg-[#FAF8F5] text-[#2A2E24] py-6 shadow-xl' : 'max-h-0'
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
                className="text-left text-xs tracking-[0.2em] uppercase text-[#3F4B2B] font-semibold hover:text-[#8F9E75] py-2 border-b border-[#3F4B2B]/5 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-[10px] text-[#C6A96B] font-mono">Up to ₦500k</span>
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-xs tracking-[0.2em] uppercase text-[#3F4B2B] hover:text-[#8F9E75] py-2 border-b border-[#3F4B2B]/5 transition-colors"
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center inline-flex justify-center items-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase rounded-full bg-[#3F4B2B] text-[#FAF8F5]"
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
