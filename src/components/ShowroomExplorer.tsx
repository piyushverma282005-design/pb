import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  CheckCircle2,
  X,
  MapPin,
} from 'lucide-react';
import { showroomZones } from '../data/shopData';
import { ShowroomZone } from '../types/shop';

export const ShowroomExplorer: React.FC = () => {
  const [activeZoneIndex, setActiveZoneIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentZone: ShowroomZone = showroomZones[activeZoneIndex];

  const handlePrevious = () => {
    setActiveZoneIndex((prev) => (prev === 0 ? showroomZones.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveZoneIndex((prev) => (prev === showroomZones.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="showroom" className="py-16 lg:py-24 bg-stone-900/60 border-b border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 block mb-2">
            Showroom Floor Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100 tracking-tight">
            Explore Our Showroom Departments
          </h2>
          <div className="h-1 w-16 bg-amber-600 rounded-full mt-3 mb-4" />
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Browse through 13 authentic photographs of our retail floor in Rewari. Each department is stocked with physical inventory across traditional metalware, cookware, appliances, and dining essentials.
          </p>
        </div>

        {/* Zone Filter Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {showroomZones.map((zone, idx) => {
            const isActive = idx === activeZoneIndex;
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => setActiveZoneIndex(idx)}
                className={`whitespace-nowrap px-4 py-2 rounded-md text-xs font-medium transition-colors shrink-0 border ${
                  isActive
                    ? 'bg-amber-600 text-stone-950 font-semibold border-amber-600'
                    : 'bg-stone-900 text-stone-300 border-stone-800 hover:bg-stone-800 hover:text-white'
                }`}
              >
                <span>{idx + 1}.</span> {zone.title}
              </button>
            );
          })}
        </div>

        {/* Main Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Photo Card */}
          <div className="lg:col-span-8 space-y-3">
            <div className="relative rounded-lg overflow-hidden border border-stone-800 bg-stone-950 aspect-[16/10] sm:aspect-[16/9]">
              <img
                src={currentZone.image}
                alt={currentZone.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Top Bar */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded bg-stone-950/90 border border-stone-800 text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                  {currentZone.categoryTag}
                </span>

                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="pointer-events-auto px-3 py-1.5 rounded bg-stone-950/90 hover:bg-stone-900 text-stone-300 hover:text-white border border-stone-800 transition-colors flex items-center gap-1.5 text-xs shadow-sm"
                  aria-label="View Fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Fullscreen</span>
                </button>
              </div>

              {/* Bottom Caption & Stepper Controls */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-none">
                <div className="bg-stone-950/90 p-3 rounded border border-stone-800 backdrop-blur-sm max-w-md">
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold block mb-0.5">
                    Zone {activeZoneIndex + 1} of {showroomZones.length}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100">
                    {currentZone.title}
                  </h3>
                </div>

                <div className="pointer-events-auto flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="p-2.5 rounded bg-stone-950/90 hover:bg-stone-900 text-stone-200 hover:text-white border border-stone-800 shadow-md transition-colors"
                    aria-label="Previous Zone"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-2.5 rounded bg-stone-950/90 hover:bg-stone-900 text-stone-200 hover:text-white border border-stone-800 shadow-md transition-colors"
                    aria-label="Next Zone"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-7 sm:grid-cols-13 gap-2 overflow-x-auto pb-1">
              {showroomZones.map((zone, idx) => (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setActiveZoneIndex(idx)}
                  className={`relative rounded overflow-hidden aspect-square border transition-all ${
                    idx === activeZoneIndex
                      ? 'border-amber-500 ring-2 ring-amber-500/40'
                      : 'border-stone-800 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Select ${zone.title}`}
                >
                  <img
                    src={zone.image}
                    alt={zone.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Factual Department Overview */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-lg bg-stone-900 border border-stone-800 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider block">
                  Department Information
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-100">
                  {currentZone.title}
                </h3>
              </div>

              <p className="text-stone-300 text-sm leading-relaxed">
                {currentZone.detailedDescription}
              </p>

              {/* Observed Inventory Features */}
              <div className="pt-4 border-t border-stone-800 space-y-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                  Visible Inventory & Display Features
                </span>
                {currentZone.visibleFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* On-Floor Consultation Notice */}
              <div className="p-3.5 rounded bg-stone-950/60 border border-stone-800 text-xs text-stone-400 flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Physical display open for customer inspection on Jhajjar Road, Rewari.
                </span>
              </div>

              {/* Step Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="flex-1 py-2.5 px-4 rounded text-xs font-semibold uppercase tracking-wider bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 py-2.5 px-4 rounded text-xs font-semibold uppercase tracking-wider bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Next Zone</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto w-full pb-4 border-b border-stone-800">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                {currentZone.categoryTag} • Zone {activeZoneIndex + 1} of {showroomZones.length}
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-100">
                {currentZone.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center max-w-7xl mx-auto w-full py-4 relative">
            <img
              src={currentZone.image}
              alt={currentZone.title}
              className="max-h-[75vh] max-w-full object-contain rounded border border-stone-800 shadow-2xl"
            />

            <button
              type="button"
              onClick={handlePrevious}
              className="absolute left-2 sm:left-4 p-3 rounded bg-stone-950/80 hover:bg-stone-900 text-stone-200 border border-stone-800 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 p-3 rounded bg-stone-950/80 hover:bg-stone-900 text-stone-200 border border-stone-800 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="max-w-3xl mx-auto text-center pt-2">
            <p className="text-xs sm:text-sm text-stone-400">
              {currentZone.detailedDescription}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
