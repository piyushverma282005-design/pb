import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Search,
  ExternalLink,
  Check,
  X,
  MapPin,
} from 'lucide-react';
import { productCategories, showroomVisualItems, businessInfo } from '../data/shopData';
import { ShowroomVisualItem } from '../types/shop';

export const CollectionsCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItemModal, setActiveItemModal] = useState<ShowroomVisualItem | null>(null);

  const filteredItems = showroomVisualItems.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.categoryId === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.visibleHighlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleEnquireClick = (item: ShowroomVisualItem) => {
    setActiveItemModal(item);
  };

  const handleScrollToVisit = () => {
    setActiveItemModal(null);
    const element = document.querySelector('#visit-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="collections" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-surface-border mb-4">
            <Sparkles className="w-3.5 h-3.5 text-metallic-copper" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Curated Showroom Collections
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-100 tracking-tight">
            Our Department Collections
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-metallic-brass to-metallic-copper mx-auto rounded-full mt-3 mb-4" />
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
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-card border border-surface-border focus:border-metallic-brass focus:ring-1 focus:ring-metallic-brass text-sm text-slate-100 placeholder-slate-500 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-metallic-brass to-metallic-copper text-surface-darker shadow-glow-brass'
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
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-metallic-brass to-metallic-copper text-surface-darker shadow-glow-brass'
                      : 'bg-surface-card hover:bg-surface-border text-slate-300 border border-surface-border'
                  }`}
                >
                  {cat.name} {count > 0 && `(${count})`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Collections Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl overflow-hidden bg-surface-card border border-surface-border hover:border-metallic-brass/40 shadow-card-dark transition-all duration-300 flex flex-col group"
              >
                {/* Real Photo */}
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-darker">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/90 via-transparent to-transparent opacity-80" />

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-darker/80 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-metallic-brass uppercase tracking-wider">
                    {item.categoryName}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-metallic-brass-light transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Visible highlights */}
                    <div className="mt-3 space-y-1.5">
                      {item.visibleHighlights.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
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
                      onClick={() => handleEnquireClick(item)}
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-surface-card hover:bg-surface-border text-slate-200 border border-surface-border hover:border-metallic-brass/50 transition-colors flex items-center gap-1.5"
                    >
                      <span>Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
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
              className="px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-metallic-brass to-metallic-copper text-surface-darker font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {activeItemModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-surface-card border border-surface-border rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveItemModal(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-surface-darker/80 hover:bg-surface-darker text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-video overflow-hidden bg-surface-darker">
                <img
                  src={activeItemModal.image}
                  alt={activeItemModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-90" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-darker/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-metallic-brass uppercase tracking-wider">
                  {activeItemModal.categoryName}
                </span>
              </div>

              {/* Modal Info */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-100">
                    {activeItemModal.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Grounded strictly in actual showroom floor inventory.
                  </p>
                </div>

                {/* Visible Highlights */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-metallic-copper block">
                    Observed Features
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeItemModal.visibleHighlights.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-lg bg-surface-darker/50 border border-surface-border text-xs text-slate-200"
                      >
                        <Check className="w-3.5 h-3.5 text-metallic-brass shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Store Action Notification */}
                <div className="p-4 rounded-xl bg-surface-darker/60 border border-surface-border/80 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-metallic-copper shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <span className="font-semibold text-slate-200 block">
                      Physical Showroom Inquiries
                    </span>
                    <p className="text-slate-400">
                      Available at our Rewari showroom ({businessInfo.address.fullFormatted}). Visit us to inspect dimensions, gauge thickness, and live models.
                    </p>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={handleScrollToVisit}
                    className="w-full sm:flex-1 py-3 px-5 rounded-xl font-semibold uppercase tracking-wider text-xs bg-gradient-to-r from-metallic-brass via-metallic-brass-light to-metallic-copper text-surface-darker shadow-glow-brass hover:shadow-glow-copper transition-all flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Get Showroom Directions</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveItemModal(null)}
                    className="w-full sm:w-auto py-3 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs bg-surface-card hover:bg-surface-border text-slate-300 border border-surface-border transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
