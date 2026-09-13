import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
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
    <section className="relative bg-stone-950 text-stone-100 border-b border-stone-800 pt-10 pb-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Commercial Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-xs text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-medium text-stone-200">Jhajjar Road, Rewari, Haryana</span>
              <span className="text-stone-600">•</span>
              <span className="text-amber-400 font-semibold uppercase tracking-wider text-[11px]">
                Retail Showroom
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-bold text-stone-100 tracking-tight leading-[1.1]">
                {businessInfo.name}
              </h1>
              <p className="text-lg sm:text-xl font-sans font-medium text-amber-500 tracking-wide uppercase">
                {businessInfo.tagline}
              </p>
              <div className="h-1 w-20 bg-amber-600 rounded-full mt-3" />
            </div>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              A comprehensive destination showroom in Rewari presenting authentic traditional brassware, pure copper vessels, heavy-gauge stainless steel bartan, dinnerware sets, and modern built-in kitchen appliances.
            </p>

            {/* Practical Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
              <a
                href="#showroom"
                onClick={(e) => handleScrollTo(e, '#showroom')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-md font-semibold text-xs uppercase tracking-wider bg-amber-600 hover:bg-amber-500 text-stone-950 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Explore Showroom Floor</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#collections"
                onClick={(e) => handleScrollTo(e, '#collections')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-md font-semibold text-xs uppercase tracking-wider bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>View Departments</span>
              </a>

              <a
                href="#visit-us"
                onClick={(e) => handleScrollTo(e, '#visit-us')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-md font-semibold text-xs uppercase tracking-wider bg-transparent hover:bg-stone-900 text-stone-300 border border-stone-800 transition-colors flex items-center justify-center gap-2"
              >
                <span>Store Location</span>
              </a>
            </div>

            {/* Grounded Physical Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-stone-800 text-xs">
              <div className="p-3 rounded-lg bg-stone-900/60 border border-stone-800">
                <span className="block font-semibold text-stone-200 mb-0.5">Heavy Gauge Steel</span>
                <span className="text-stone-400 text-[11px]">Storage dabbas, kadai & topes</span>
              </div>

              <div className="p-3 rounded-lg bg-stone-900/60 border border-stone-800">
                <span className="block font-semibold text-stone-200 mb-0.5">Brass & Copper</span>
                <span className="text-stone-400 text-[11px]">Pooja thalis, kalash & jugs</span>
              </div>

              <div className="p-3 rounded-lg bg-stone-900/60 border border-stone-800">
                <span className="block font-semibold text-stone-200 mb-0.5">Built-in Appliances</span>
                <span className="text-stone-400 text-[11px]">Hobs, chimneys & stoves</span>
              </div>

              <div className="p-3 rounded-lg bg-stone-900/60 border border-stone-800">
                <span className="block font-semibold text-stone-200 mb-0.5">Dinnerware</span>
                <span className="text-stone-400 text-[11px]">Porcelain & bone china</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Showroom Interior Photograph */}
          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden border border-stone-800 bg-stone-900 shadow-xl">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-950">
                <img
                  src="/images/shop/showroom-grand-aisle.webp"
                  alt="PRAHLAD BHAGAT JI Showroom Interior in Rewari"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-md bg-stone-900/90 border border-stone-800 backdrop-blur-sm text-xs">
                  <span className="font-semibold text-amber-400 block mb-0.5">
                    Central Showroom Floor
                  </span>
                  <p className="text-stone-300 leading-snug">
                    Spacious multi-department showroom on Jhajjar Road, Rewari, featuring dedicated aisles for cookware, metalware, and appliances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
