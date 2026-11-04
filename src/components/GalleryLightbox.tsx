import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Tag, MapPin, Quote } from 'lucide-react';
import type { GalleryImage } from '../data/galleryData';

interface GalleryLightboxProps {
  image: GalleryImage | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalImages: number;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  image,
  isOpen,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalImages,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Image Viewer"
      className="fixed inset-0 z-50 bg-[#14180E]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in"
    >
      {/* Top Header Bar */}
      <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between text-[#F6F3EB] z-20 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg tracking-wider text-[#DFCA98]">GLOBAL WIVES SUMMIT ARCHIVE</span>
          <span className="text-xs font-mono text-[#A5AE8B] px-2.5 py-0.5 bg-[#252820] border border-[#C6A96B]/30">
            RECORD {currentIndex + 1} OF {totalImages}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-[#252820]/90 hover:bg-[#C6A96B] hover:text-[#14180E] text-[#F6F3EB] transition-colors border border-[#C6A96B]/30"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-[#1E2514]/90 hover:bg-[#C6A96B] hover:text-[#14180E] text-[#F6F3EB] border border-[#C6A96B]/35 transition-all z-20 shadow-xl"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-[#1E2514]/90 hover:bg-[#C6A96B] hover:text-[#14180E] text-[#F6F3EB] border border-[#C6A96B]/35 transition-all z-20 shadow-xl"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image & Exhibition Catalog Caption */}
      <div
        className="max-w-5xl w-full max-h-[88vh] flex flex-col items-center justify-center relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[60vh] sm:max-h-[64vh] flex items-center justify-center overflow-hidden border border-[#C6A96B]/40 shadow-2xl bg-[#1E2514]">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto max-h-[60vh] sm:max-h-[64vh] object-contain filter contrast-105"
          />
        </div>

        {/* Exhibition Catalog Caption Card */}
        <div className="w-full mt-4 p-5 sm:p-7 bg-[#1E2514]/95 border border-[#C6A96B]/35 text-[#F6F3EB] flex flex-col sm:flex-row sm:items-start justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#DFCA98]">
                <Tag className="w-3 h-3" />
                {image.category}
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#A5AE8B]">
                <Calendar className="w-3 h-3" />
                Summit {image.year}
              </span>
              {image.location && (
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#EAE5D8]/70">
                  <MapPin className="w-3 h-3 text-[#C6A96B]" />
                  {image.location}
                </span>
              )}
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl text-[#F6F3EB] font-medium">
              {image.title}
            </h4>

            <p className="font-sans text-xs sm:text-sm text-[#EAE5D8]/85 font-light leading-relaxed">
              {image.description}
            </p>

            {image.quote && (
              <div className="pt-2 flex items-start gap-2 text-xs italic font-serif text-[#DFCA98]">
                <Quote className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#C6A96B]" />
                <span>{image.quote}</span>
              </div>
            )}
          </div>

          <div className="shrink-0 flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3">
            <span className="text-[10px] font-mono text-[#A5AE8B] uppercase tracking-widest border border-white/10 px-3 py-1 bg-black/40">
              OFFICIAL 2026 ARCHIVE
            </span>
            <a
              href="#register"
              onClick={onClose}
              className="text-xs font-semibold tracking-wider uppercase text-[#DFCA98] hover:underline"
            >
              JOIN 2027 COHORT &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
