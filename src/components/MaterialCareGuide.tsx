import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Sparkles,
  Info,
  Flame,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';
import { materialCareGuides } from '../data/shopData';
import { MaterialCareInfo } from '../types/shop';

const materialImages: Record<string, string> = {
  'brass-pital': '/images/shop/brass-pooja-gallery.webp',
  'copper-tamba': '/images/shop/sacred-copper-brassware.webp',
  'stainless-steel': '/images/shop/stainless-steel-cookware.webp',
};

export const MaterialCareGuide: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(materialCareGuides[0].id);

  const currentGuide: MaterialCareInfo =
    materialCareGuides.find((g) => g.id === activeTabId) || materialCareGuides[0];

  return (
    <section id="care-guide" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-metallic-brass/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-surface-border mb-4">
            <BookOpen className="w-3.5 h-3.5 text-metallic-brass" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Traditional Knowledge & Practical Upkeep
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-100 tracking-tight">
            Material & Care Guide
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-metallic-brass to-metallic-copper mx-auto rounded-full mt-3 mb-4" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Understanding the physical properties of traditional metals and food-grade stainless steel ensures your kitchenware remains functional and retains its natural finish across decades.
          </p>
        </div>

        {/* Material Selection Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {materialCareGuides.map((guide) => {
            const isActive = guide.id === activeTabId;
            return (
              <button
                key={guide.id}
                type="button"
                onClick={() => setActiveTabId(guide.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-metallic-brass to-metallic-copper text-surface-darker shadow-glow-brass font-bold scale-105'
                    : 'bg-surface-card hover:bg-surface-border text-slate-300 border border-surface-border'
                }`}
              >
                <Sparkles className={`w-4 h-4 ${isActive ? 'text-surface-darker' : 'text-metallic-brass'}`} />
                <span>{guide.materialName}</span>
              </button>
            );
          })}
        </div>

        {/* Active Material Detail Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGuide.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-surface-card border border-surface-border overflow-hidden shadow-card-dark"
          >
            {/* Stage Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-surface-border">
              <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-center space-y-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-metallic-copper">
                  {currentGuide.subtitle}
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-bold text-slate-100">
                  {currentGuide.materialName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Essential physical properties, authentic culinary context, and recommended maintenance techniques for this metal.
                </p>
              </div>

              <div className="lg:col-span-4 relative aspect-[16/9] lg:aspect-auto overflow-hidden bg-surface-darker">
                <img
                  src={materialImages[currentGuide.id]}
                  alt={currentGuide.materialName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-surface-card via-transparent to-transparent opacity-80" />
              </div>
            </div>

            {/* 3 Informational Content Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-border">
              {/* Column 1: Material Characteristics */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-metallic-brass">
                  <Info className="w-5 h-5 text-metallic-copper" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                    Physical Properties
                  </h4>
                </div>
                <div className="space-y-3">
                  {currentGuide.characteristics.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-metallic-brass shrink-0 mt-2" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Traditional Usage */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-metallic-brass">
                  <Flame className="w-5 h-5 text-amber-400" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                    Traditional Culinary Use
                  </h4>
                </div>
                <div className="space-y-3">
                  {currentGuide.traditionalUsage.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-metallic-copper shrink-0 mt-2" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Care & Maintenance */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-metallic-brass">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                    Care & Cleaning Procedure
                  </h4>
                </div>
                <div className="space-y-3">
                  {currentGuide.careAndMaintenance.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Factual Disclaimer Footer */}
            <div className="p-4 sm:p-6 bg-surface-darker/60 border-t border-surface-border text-xs text-slate-400 flex items-center gap-3">
              <HelpCircle className="w-4 h-4 text-metallic-brass shrink-0" />
              <span>
                Note: Traditional culinary utensils perform best when cleaned according to metal-specific procedures. Inquire with our showroom staff in Rewari for specific care guidance for tin-lined (kalai) brass or hammered copper vessels.
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
