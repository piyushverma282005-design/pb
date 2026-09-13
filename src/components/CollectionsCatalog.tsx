import React, { useState } from 'react';
import { Search, Check, X, MapPin, Eye } from 'lucide-react';
import { productCategories, showroomVisualItems, businessInfo } from '../data/shopData';
import { ShowroomVisualItem } from '../types/shop';

export const CollectionsCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItem, setActiveItem] = useState<ShowroomVisualItem | null>(null);

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
    setActiveItem(null);
    const element = document.querySelector('#visit-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="collections" className="py-16 lg:py-24 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 block mb-2">
            Catalog & Department Index
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100 tracking-tight">
            Our Department Collections
          </h2>
          <div className="h-1 w-16 bg-amber-600 rounded-full mt-3 mb-4" />
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Browse our core departments photographed directly inside our Rewari showroom. We carry extensive physical stock for daily cooking, traditional ceremonies, and home setups.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="space-y-5 mb-10">
          {/* Search Input */}
          <div className="max-w-md relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search collections (e.g. Copper, Kadai, Chimney, Brass)..."
              className="w-full pl-10 pr-4 py-2.5 rounded bg-stone-900 border border-stone-800 focus:border-amber-600 focus:outline-none text-sm text-stone-100 placeholder-stone-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded text-xs font-medium transition-colors border ${
                selectedCategory === 'all'
                  ? 'bg-amber-600 text-stone-950 font-semibold border-amber-600'
                  : 'bg-stone-900 text-stone-300 border-stone-800 hover:bg-stone-800'
              }`}
            >
              All Collections ({showroomVisualItems.length})
            </button>

            {productCategories.map((cat) => {
              const count = showroomVisualItems.filter((i) => i.categoryId === cat.id).length;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded text-xs font-medium transition-colors border ${
                    isActive
                      ? 'bg-amber-600 text-stone-950 font-semibold border-amber-600'
                      : 'bg-stone-900 text-stone-300 border-stone-800 hover:bg-stone-800'
                  }`}
                >
                  {cat.name} {count > 0 && `(${count})`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden bg-stone-900 border border-stone-800 hover:border-stone-700 transition-colors flex flex-col justify-between shadow-sm group"
            >
              {/* Photo */}
              <div
                className="relative aspect-[4/3] overflow-hidden bg-stone-950 cursor-pointer"
                onClick={() => setActiveItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-stone-950/90 border border-stone-800 text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                  {item.categoryName}
                </span>
              </div>

              {/* Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    onClick={() => setActiveItem(item)}
                    className="text-base font-serif font-bold text-stone-100 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {item.title}
                  </h3>

                  <div className="mt-3 space-y-1.5">
                    {item.visibleHighlights.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                        <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                  <span className="text-stone-400 italic text-[11px]">
                    Available in store
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveItem(item)}
                    className="px-3 py-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors flex items-center gap-1 font-medium"
                  >
                    <Eye className="w-3 h-3 text-amber-400" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 px-4 rounded border border-dashed border-stone-800 max-w-md mx-auto">
            <p className="text-stone-300 font-medium text-sm mb-1">No items found.</p>
            <p className="text-xs text-stone-500 mb-3">Adjust your search query or reset category filter.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-1.5 rounded text-xs font-semibold uppercase tracking-wider bg-amber-600 text-stone-950"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Item Detail Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6">
          <div className="bg-stone-900 border border-stone-800 rounded-lg max-w-xl w-full overflow-hidden shadow-2xl relative">
            <div className="flex items-center justify-between p-4 border-b border-stone-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                {activeItem.categoryName}
              </span>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="p-1 rounded text-stone-400 hover:text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video overflow-hidden bg-stone-950">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-100">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Photographed in physical showroom inventory in Rewari.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block">
                  Observed Physical Specifications
                </span>
                {activeItem.visibleHighlights.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-stone-200">
                    <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded bg-stone-950 border border-stone-800 text-xs text-stone-300 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Available on the showroom floor at {businessInfo.address.fullFormatted}. Inquire in store for sizes and piece configurations.
                </span>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleScrollToVisit}
                  className="flex-1 py-2.5 px-4 rounded text-xs font-semibold uppercase tracking-wider bg-amber-600 hover:bg-amber-500 text-stone-950 transition-colors text-center"
                >
                  Get Showroom Directions
                </button>
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="py-2.5 px-4 rounded text-xs font-medium text-stone-300 hover:text-white bg-stone-800 border border-stone-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
