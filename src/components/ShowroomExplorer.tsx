import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  CheckCircle2,
  X,
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
    <section id="showroom" className="py-20 lg:py-28 relative overflow-hidden bg-surface-dark/50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-metallic-brass/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-metallic-copper/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-surface-border mb-4">
            <Layers className="w-3.5 h-3.5 text-metallic-brass" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Interactive Visual Walkthrough
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-100 tracking-tight">
            Explore Our Showroom
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-metallic-brass to-metallic-copper mx-auto rounded-full mt-3 mb-4" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Navigate through genuine photographs of our spacious Rewari showroom, from traditional brassware and hammered copper to heavy stainless steel bartan and modern kitchen appliances.
          </p>
        </div>

        {/* Zone Category Filter / Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {showroomZones.map((zone, idx) => {
            const isActive = idx === activeZoneIndex;
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => setActiveZoneIndex(idx)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-metallic-brass to-metallic-copper text-surface-darker font-bold shadow-glow-brass scale-105'
                    : 'bg-surface-card/80 hover:bg-surface-card text-slate-300 border border-surface-border/80 hover:border-metallic-brass/40'
                }`}
              >
                <span>{idx + 1}.</span>
                <span>{zone.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Photo Display Card */}
          <div className="lg:col-span-8 relative">
            <div className="relative rounded-2xl overflow-hidden border border-surface-border bg-surface-card shadow-card-dark aspect-[16/10] sm:aspect-[16/9] group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentZone.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="w-full h-full relative"
                >
                  <img
                    src={currentZone.image}
                    alt={currentZone.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/90 via-transparent to-black/20" />
                </motion.div>
              </AnimatePresence>

              {/* Overlay Top Bar: Zone Tag & Fullscreen Trigger */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-surface-darker/80 backdrop-blur-md border border-white/10 text-xs font-semibold uppercase tracking-wider text-metallic-brass">
                  {currentZone.categoryTag}
                </span>

                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="pointer-events-auto p-2 rounded-xl bg-surface-darker/80 hover:bg-surface-darker text-slate-200 hover:text-white border border-white/10 backdrop-blur-md transition-transform active:scale-95 shadow-md flex items-center gap-1.5 text-xs"
                  title="Expand to Fullscreen"
                  aria-label="View Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Inspect</span>
                </button>
              </div>

              {/* Bottom Bar: Zone Title & Counter */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                <div className="max-w-lg">
                  <span className="text-[11px] uppercase tracking-widest text-metallic-copper font-bold block mb-1">
                    Zone {activeZoneIndex + 1} of {showroomZones.length}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white drop-shadow-md">
                    {currentZone.title}
                  </h3>
                </div>

                {/* Left/Right Quick Controls */}
                <div className="pointer-events-auto flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="p-2.5 rounded-full bg-surface-darker/80 hover:bg-surface-darker text-white border border-white/10 backdrop-blur-md transition-transform active:scale-90 shadow-md"
                    aria-label="Previous Zone"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-2.5 rounded-full bg-surface-darker/80 hover:bg-surface-darker text-white border border-white/10 backdrop-blur-md transition-transform active:scale-90 shadow-md"
                    aria-label="Next Zone"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-7 sm:grid-cols-13 gap-2 mt-4 overflow-x-auto pb-2">
              {showroomZones.map((zone, idx) => (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setActiveZoneIndex(idx)}
                  className={`relative rounded-lg overflow-hidden aspect-square border-2 transition-all duration-200 ${
                    idx === activeZoneIndex
                      ? 'border-metallic-brass shadow-glow-brass scale-105'
                      : 'border-surface-border/60 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Jump to zone ${idx + 1}: ${zone.title}`}
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

          {/* Right Column: Zone Description & Highlights */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl glass-panel border border-surface-border space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-metallic-brass">
                  <Sparkles className="w-4 h-4 text-metallic-copper" />
                  <span>Department Overview</span>
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-100">
                  {currentZone.title}
                </h4>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {currentZone.detailedDescription}
              </p>

              {/* Verified Visible Features Checklist */}
              <div className="pt-4 border-t border-surface-border/60 space-y-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  Visible Showroom Highlights
                </span>
                {currentZone.visibleFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-metallic-brass shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Next/Previous Action Buttons */}
              <div className="pt-4 border-t border-surface-border/60 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-surface-card hover:bg-surface-border text-slate-300 border border-surface-border transition-colors flex items-center justify-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-metallic-brass to-metallic-copper text-surface-darker font-bold transition-all hover:shadow-glow-brass flex items-center justify-center gap-1.5"
                >
                  <span>Next Zone</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between max-w-7xl mx-auto w-full pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-metallic-brass">
                  {currentZone.categoryTag} • Zone {activeZoneIndex + 1} of {showroomZones.length}
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                  {currentZone.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Main Image */}
            <div className="flex-1 flex items-center justify-center max-w-7xl mx-auto w-full py-4 relative">
              <img
                src={currentZone.image}
                alt={currentZone.title}
                className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
              />

              <button
                type="button"
                onClick={handlePrevious}
                className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-transform active:scale-95"
                aria-label="Previous Zone"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-transform active:scale-95"
                aria-label="Next Zone"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Footer Description */}
            <div className="max-w-4xl mx-auto text-center pt-2">
              <p className="text-xs sm:text-sm text-slate-300">
                {currentZone.detailedDescription}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
