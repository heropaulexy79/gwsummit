import React, { useState } from 'react';
import { Eye, Heart } from 'lucide-react';
import { galleryImages } from '../data/galleryData';
import type { GalleryImage } from '../data/galleryData';
import { GalleryLightbox } from './GalleryLightbox';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const handleOpenLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIdx);
    setSelectedImage(galleryImages[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIdx);
    setSelectedImage(galleryImages[prevIdx]);
  };

  return (
    <section id="highlights" className="py-24 sm:py-36 bg-[#F3EFE8] text-[#2A2E24] relative overflow-hidden editorial-linen">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#5C6B42]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5C6B42] font-medium">
              GLOBAL WIVES SUMMIT 2026 RECAP
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#3F4B2B] leading-[1.1] tracking-tight font-normal">
            The moments that <br />
            <span className="italic text-[#5C6B42]">moved us.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#2A2E24]/80 font-light leading-relaxed">
            "Before we look ahead to 2027, let us revisit the moments, connections, and memories that made Global Wives Summit 2026 unforgettable."
          </p>
        </div>

        {/* Soft Rounded Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {galleryImages.map((img, index) => {
            const isFeatured = img.featured;

            return (
              <div
                key={img.id}
                onClick={() => handleOpenLightbox(img, index)}
                className={`group cursor-pointer relative overflow-hidden bg-[#FAF8F5] rounded-3xl shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-8 aspect-16/10' : 'sm:col-span-1 lg:col-span-4 aspect-4/3'
                }`}
              >
                {/* Image */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gentle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#242A1D]/85 via-[#242A1D]/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Soft Pill */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="px-3.5 py-1 text-[10px] tracking-wider uppercase bg-[#FAF8F5]/90 backdrop-blur-sm text-[#3F4B2B] rounded-full font-medium shadow-sm">
                    {img.category}
                  </span>
                </div>

                {/* Magnifier Icon */}
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAF8F5]/80 text-[#3F4B2B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Caption Information */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 text-[#FAF8F5] transform transition-transform duration-300">
                  <div className="flex items-center gap-1.5 text-xs text-[#EAE1D7] mb-1 font-light">
                    <Heart className="w-3 h-3 fill-[#C6A96B] text-[#C6A96B]" />
                    <span>2026 Summit Memory</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FAF8F5] leading-tight">
                    {img.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#FAF8F5]/80 line-clamp-2 font-light">
                    {img.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center text-xs text-[#5C6B42] font-light tracking-wider">
          Click any photograph to view full caption and memories • Curated summit archive
        </div>

      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={isLightboxOpen}
        image={selectedImage}
        currentIndex={currentIndex}
        totalImages={galleryImages.length}
        onClose={() => setIsLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
