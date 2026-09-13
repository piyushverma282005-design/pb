import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, ArrowRight, ShieldCheck, Flame, UtensilsCrossed, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/shopData';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16 lg:py-28">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[500px] bg-gradient-to-br from-metallic-brass/15 via-metallic-copper/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-metallic-copper/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Brand Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8"
          >
            {/* Verified Location & Showroom Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card/80 border border-metallic-brass/30 backdrop-blur-md shadow-glow-brass text-xs"
            >
              <MapPin className="w-3.5 h-3.5 text-metallic-copper animate-pulse" />
              <span className="text-slate-300 font-medium">
                Jhajjar Rd, Rewari
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-metallic-brass" />
              <span className="text-metallic-brass-light font-semibold uppercase tracking-wider text-[11px]">
                Physical Destination Showroom
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-bold tracking-tight text-slate-100 leading-[1.1]">
                <span className="block text-gradient-brass drop-shadow-sm">
                  {businessInfo.name}
                </span>
                <span className="block text-2xl sm:text-3xl xl:text-4xl font-sans font-medium text-slate-300 mt-2 tracking-wide">
                  Bartan • Kitchenware • Appliances
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-metallic-brass via-metallic-copper to-transparent mx-auto lg:mx-0 rounded-full mt-4" />
            </div>

            {/* Factual Description grounded in actual physical store offerings */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              A comprehensive destination showroom in Rewari presenting authentic traditional brassware, pure copper vessels, heavy-gauge stainless steel bartan, designer dinnerware, and modern built-in kitchen appliances.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#showroom"
                onClick={(e) => handleScrollTo(e, '#showroom')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider bg-gradient-to-r from-metallic-brass via-metallic-brass-light to-metallic-copper text-surface-darker shadow-glow-brass hover:shadow-glow-copper transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Showroom</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#collections"
                onClick={(e) => handleScrollTo(e, '#collections')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider bg-surface-card/80 hover:bg-surface-card border border-surface-border hover:border-metallic-brass/50 text-slate-200 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <UtensilsCrossed className="w-4 h-4 text-metallic-brass" />
                <span>View Collections</span>
              </a>
            </div>

            {/* Factual Verified Pillars (Zero-Fake-Data) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-surface-border/60">
              <div className="p-3 rounded-xl bg-surface-card/40 border border-surface-border/60 text-left">
                <div className="flex items-center gap-2 text-metallic-brass mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                    Traditional
                  </span>
                </div>
                <p className="text-[12px] text-slate-400 leading-snug">
                  Brass & pure copper sacred vessels and thalis
                </p>
              </div>

              <div className="p-3 rounded-xl bg-surface-card/40 border border-surface-border/60 text-left">
                <div className="flex items-center gap-2 text-metallic-copper mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                    Heavy Gauge
                  </span>
                </div>
                <p className="text-[12px] text-slate-400 leading-snug">
                  Stainless steel storage dabbas, kadai & topes
                </p>
              </div>

              <div className="p-3 rounded-xl bg-surface-card/40 border border-surface-border/60 text-left col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Flame className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                    Modern
                  </span>
                </div>
                <p className="text-[12px] text-slate-400 leading-snug">
                  Built-in gas hobs, glass stoves & chimneys
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Real Showroom Facade Photography in Metallic Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative background framing */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-metallic-copper/40 via-metallic-brass/30 to-surface-border rounded-3xl blur-md opacity-70" />

            <div className="relative rounded-2xl overflow-hidden border border-surface-border bg-surface-card shadow-card-dark group">
              {/* Actual Showroom Exterior Image */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-surface-darker">
                <img
                  src="/images/shop/facade.webp"
                  alt="PRAHALAD BHAGAT JI Showroom Facade with Iconic Silver Thali Medallion"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle vignette gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-transparent to-black/20" />
                
                {/* Floating Emblem Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel-glow border border-metallic-brass/40 text-left">
                  <div className="flex items-center gap-2 text-xs font-semibold text-metallic-brass mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Iconic Facade & Medallion</span>
                  </div>
                  <p className="text-xs text-slate-200 font-medium">
                    Storefront featuring the signature embossed circular thali and crossed spoons emblem.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Showroom Promenade Floating Preview Pill */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-panel border border-surface-border shadow-card-dark">
              <img
                src="/images/shop/showroom-grand-aisle.webp"
                alt="Showroom Grand Central Aisle"
                className="w-12 h-12 rounded-xl object-cover border border-metallic-brass/40"
              />
              <div className="text-left pr-2">
                <span className="block text-xs font-semibold text-slate-200">Spacious Showroom Floor</span>
                <span className="text-[11px] text-slate-400">Multi-tier dedicated aisles</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
