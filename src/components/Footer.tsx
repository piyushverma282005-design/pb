import React from 'react';
import { MapPin, ArrowUp } from 'lucide-react';
import { businessInfo, productCategories } from '../data/shopData';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Store Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-stone-900 border border-amber-600/60 flex items-center justify-center text-amber-400 font-serif font-bold text-xs tracking-wider">
                PB
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-stone-100 block">
                  {businessInfo.name}
                </span>
                <span className="text-[11px] text-amber-500 uppercase tracking-wider font-medium">
                  {businessInfo.tagline}
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {businessInfo.description}
            </p>

            <div className="pt-2 flex items-start gap-2 text-stone-300">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{businessInfo.address.fullFormatted}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#showroom"
                  onClick={(e) => handleNavClick(e, '#showroom')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Showroom Floor Guide
                </a>
              </li>
              <li>
                <a
                  href="#collections"
                  onClick={(e) => handleNavClick(e, '#collections')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Department Catalog
                </a>
              </li>
              <li>
                <a
                  href="#wedding-gifting"
                  onClick={(e) => handleNavClick(e, '#wedding-gifting')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Wedding & Trousseau Guide
                </a>
              </li>
              <li>
                <a
                  href="#care-guide"
                  onClick={(e) => handleNavClick(e, '#care-guide')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Metal Care Compendium
                </a>
              </li>
              <li>
                <a
                  href="#visit-us"
                  onClick={(e) => handleNavClick(e, '#visit-us')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Location & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Showroom Departments */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Showroom Departments
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {productCategories.map((cat) => (
                <span
                  key={cat.id}
                  className="p-1.5 rounded bg-stone-900 border border-stone-800 text-stone-300"
                >
                  {cat.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <p>
            © {new Date().getFullYear()} {businessInfo.name}. All showroom assets and photography verified.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-stone-400">
              Rewari, Haryana
            </span>
            <button
              type="button"
              onClick={handleScrollToTop}
              className="p-1.5 rounded bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors flex items-center gap-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
