import React from 'react';
import { MapPin, Sparkles, ArrowUp } from 'lucide-react';
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
    <footer className="bg-surface-darker border-t border-surface-border text-slate-400 text-xs relative overflow-hidden">
      {/* Ambient gradient line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-metallic-brass to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Store Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-metallic-brass-dark via-metallic-brass-light to-metallic-copper flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-surface-darker flex items-center justify-center">
                  <span className="font-serif font-bold text-metallic-brass text-xs">PB</span>
                </div>
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-slate-100 block tracking-wider">
                  {businessInfo.name}
                </span>
                <span className="text-[10px] text-metallic-copper uppercase tracking-widest font-medium">
                  {businessInfo.tagline}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {businessInfo.description}
            </p>

            <div className="pt-2 flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-metallic-copper shrink-0 mt-0.5" />
              <span>{businessInfo.address.fullFormatted}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Showroom Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#showroom"
                  onClick={(e) => handleNavClick(e, '#showroom')}
                  className="hover:text-metallic-brass-light transition-colors"
                >
                  Explore Our Showroom
                </a>
              </li>
              <li>
                <a
                  href="#collections"
                  onClick={(e) => handleNavClick(e, '#collections')}
                  className="hover:text-metallic-brass-light transition-colors"
                >
                  Department Collections
                </a>
              </li>
              <li>
                <a
                  href="#wedding-gifting"
                  onClick={(e) => handleNavClick(e, '#wedding-gifting')}
                  className="hover:text-metallic-brass-light transition-colors"
                >
                  Wedding & Trousseau Guide
                </a>
              </li>
              <li>
                <a
                  href="#care-guide"
                  onClick={(e) => handleNavClick(e, '#care-guide')}
                  className="hover:text-metallic-brass-light transition-colors"
                >
                  Material & Care Guide
                </a>
              </li>
              <li>
                <a
                  href="#visit-us"
                  onClick={(e) => handleNavClick(e, '#visit-us')}
                  className="hover:text-metallic-brass-light transition-colors"
                >
                  Visit Showroom & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Showroom Departments */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Showroom Departments
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {productCategories.map((cat) => (
                <span
                  key={cat.id}
                  className="p-1.5 rounded-lg bg-surface-card/40 border border-surface-border/40 text-slate-300"
                >
                  {cat.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>
            © {new Date().getFullYear()} {businessInfo.name}. All verified showroom assets and photographs reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-metallic-brass" />
              Rewari, Haryana
            </span>
            <button
              type="button"
              onClick={handleScrollToTop}
              className="p-2 rounded-lg bg-surface-card hover:bg-surface-border text-slate-300 hover:text-white border border-surface-border transition-colors flex items-center gap-1"
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
