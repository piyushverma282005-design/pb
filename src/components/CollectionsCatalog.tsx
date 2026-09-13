import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Search,
  Check,
  X,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Eye,
} from 'lucide-react';
import { productCategories, showroomVisualItems, businessInfo } from '../data/shopData';
import { ShowroomVisualItem } from '../types/shop';

export const CollectionsCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDrawerItem, setActiveDrawerItem] = useState<ShowroomVisualItem | null>(null);

  const filteredItems = showroomVisualItems.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.categoryId === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.visibleHighlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleScrollToVisit = () => {
    setActiveDrawerItem(null);
    const element = document.querySelector('#visit-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="collections" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-metallic-brass/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-metallic-copper" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Curated Physical Inventory
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-100 tracking-tight">
            Our Department Collections
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-metallic-brass to-metallic-copper mx-auto rounded-full mt-3 mb-4" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Browse our wide spectrum of physical kitchenware, traditional sacred metalware, heavy daily bartan, and built-in appliances directly photographed on our showroom floor.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-6 mb-12">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search collections (e.g. Copper, Kadai, Chimney, Brass)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-surface-card border border-surface-border focus:border-metallic-brass focus:ring-1 focus:ring-metallic-brass text-sm text-slate-100 placeholder-slate-500 transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-metallic-brass to-metallic-copper text-surface-darker font-bold shadow-glow-brass scale-105'
                  : 'bg-surface-card hover:bg-surface-border text-slate-300 border border-surface-border'
              }`}
            >
              All Departments ({showroomVisualItems.length})
            </button>

            {productCategories.map((cat) => {
              const count = showroomVisualItems.filter((i) => i.categoryId === cat.id).length;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-metallic-brass to-metallic-copper text-surface-darker font-bold shadow-glow-brass scale-105'
                      : 'bg-surface-card hover:bg-surface-border text-slate-300 border border-surface-border'
                  }`}
                >
                  {cat.name} {count > 0 && `(${count})`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Collections Cards Grid with Motion */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl overflow-hidden bg-surface-card border border-surface-border hover:border-metallic-brass/50 shadow-card-luxury transition-all duration-300 flex flex-col group"
              >
                {/* Real Photo */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black cursor-pointer" onClick={() => setActiveDrawerItem(item)}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/90 via-transparent to-transparent opacity-80" />

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-darker/85 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-metallic-brass uppercase tracking-wider">
                    {item.categoryName}
                  </span>

                  {/* Hover Quick View Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-full glass-panel-glow border border-metallic-brass text-xs font-bold text-white flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-metallic-brass" />
                      <span>Inspect Details</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3
                      onClick={() => setActiveDrawerItem(item)}
                      className="text-lg font-serif font-bold text-slate-100 group-hover:text-metallic-brass-light transition-colors line-clamp-2 cursor-pointer"
                    >
                      {item.title}
                    </h3>

                    {/* Visible highlights */}
                    <div className="mt-3.5 space-y-1.5">
                      {item.visibleHighlights.map((feat, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-metallic-copper shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-4 border-t border-surface-border/60 flex items-center justify-between">
                    <span className="text-xs text-slate-400 italic">
                      {item.inquiryNote}
                    </span>

                    <button
                      type="button"
                      onClick={() => setActiveDrawerItem(item)}
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-surface-card hover:bg-surface-border text-slate-200 border border-surface-border hover:border-metallic-brass/50 transition-colors flex items-center gap-1.5 active:scale-95"
                    >
                      <span>Inspect</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-surface-border max-w-lg mx-auto">
            <p className="text-slate-300 font-medium mb-2">No matching collection items found.</p>
            <p className="text-xs text-slate-500 mb-4">
              Try adjusting your search query or view all available showroom departments.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-metallic-brass to-metallic-copper text-surface-darker font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Luxury Slide-Over Inspection Drawer */}
      <AnimatePresence>
        {activeDrawerItem && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDrawerItem(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            />

            {/* Sliding Drawer */}
            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 260 }}
                className="w-screen max-w-md bg-surface-darker border-l border-surface-border p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl relative"
              >
                {/* Header */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-surface-border">
                    <span className="text-xs font-semibold text-metallic-brass uppercase tracking-widest">
                      {activeDrawerItem.categoryName}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveDrawerItem(null)}
                      className="p-2 rounded-full bg-surface-card text-slate-400 hover:text-white transition-colors"
                      aria-label="Close drawer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Photo with zoom preview */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-surface-border shadow-card-luxury">
                    <img
                      src={activeDrawerItem.image}
                      alt={activeDrawerItem.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/90 via-transparent to-transparent" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-slate-100">
                      {activeDrawerItem.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      Photographed in our physical showroom inventory.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-metallic-copper block">
                      Physical Specifications & Highlights
                    </span>
                    {activeDrawerItem.visibleHighlights.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-card/60 border border-surface-border text-xs text-slate-200"
                      >
                        <ShieldCheck className="w-4 h-4 text-metallic-brass shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Address Context */}
                  <div className="p-4 rounded-xl glass-panel border border-metallic-brass/30 space-y-1 text-xs">
                    <div className="flex items-center gap-1.5 text-metallic-brass font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>On-Floor Showroom Inspection</span>
                    </div>
                    <p className="text-slate-300">
                      Available on our showroom floor at {businessInfo.address.fullFormatted}. Inquire in person to test weight and gauge thickness.
                    </p>
                  </div>
                </div>

                {/* Drawer Footer Actions */}
                <div className="pt-6 mt-6 border-t border-surface-border space-y-3">
                  <button
                    type="button"
                    onClick={handleScrollToVisit}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs bg-gradient-to-r from-metallic-brass via-metallic-brass-light to-metallic-copper text-surface-darker shadow-glow-brass hover:shadow-glow-copper transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Get Showroom Directions</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveDrawerItem(null)}
                    className="w-full py-3 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs bg-surface-card hover:bg-surface-border text-slate-300 border border-surface-border transition-colors text-center"
                  >
                    Back to Collections
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
