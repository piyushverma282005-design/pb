import React, { useState } from 'react';
import { MapPin, Clock, Menu, X, ChevronRight } from 'lucide-react';
import { businessInfo } from '../data/shopData';

const navLinks = [
  { name: 'Showroom Floor', href: '#showroom' },
  { name: 'Departments', href: '#collections' },
  { name: 'Wedding Trousseau', href: '#wedding-gifting' },
  { name: 'Metal Care Guide', href: '#care-guide' },
  { name: 'Visit & Location', href: '#visit-us' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur-md border-b border-stone-800 text-stone-100">
      {/* Top Information Strip */}
      <div className="bg-stone-900/90 border-b border-stone-800 text-stone-300 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-amber-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>Jhajjar Rd, Opposite Agarwal Metal Works, Rewari</span>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-stone-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              <span>Standard Retail Market Hours</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-amber-950/40 border border-amber-800/40 text-amber-300 text-[11px] font-medium">
              Physical Showroom
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="PRAHLAD BHAGAT JI Home"
          >
            <div className="w-11 h-11 rounded-full bg-stone-900 border-2 border-amber-600/60 flex items-center justify-center text-amber-400 font-serif font-bold text-sm tracking-wider shadow-inner group-hover:border-amber-500 transition-colors">
              PB
            </div>
            <div>
              <span className="block font-serif font-bold text-xl sm:text-2xl tracking-wide text-stone-100 group-hover:text-amber-300 transition-colors">
                {businessInfo.name}
              </span>
              <span className="block text-[11px] font-sans text-amber-500 font-medium tracking-widest uppercase">
                {businessInfo.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3.5 py-2 rounded-md text-sm font-medium text-stone-300 hover:text-amber-400 hover:bg-stone-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#visit-us"
              onClick={(e) => handleScrollTo(e, '#visit-us')}
              className="px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-amber-600 hover:bg-amber-500 text-stone-950 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>Store Location</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#visit-us"
              onClick={(e) => handleScrollTo(e, '#visit-us')}
              className="px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider bg-amber-600 text-stone-950 sm:hidden"
            >
              Location
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-stone-300 hover:text-white bg-stone-900 border border-stone-800 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-800 bg-stone-950 px-4 pt-3 pb-6 space-y-2">
          <div className="pb-3 mb-2 border-b border-stone-800 text-xs text-stone-400 space-y-1">
            <div className="flex items-center gap-1.5 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>Jhajjar Rd, Rewari, Haryana</span>
            </div>
            <p className="text-[11px] text-stone-500">
              Opposite Agarwal Metal Works, AERD Society
            </p>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="block px-3 py-2.5 rounded text-base font-medium text-stone-200 hover:text-amber-400 hover:bg-stone-900 transition-colors flex items-center justify-between"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-stone-600" />
            </a>
          ))}

          <div className="pt-3">
            <a
              href="#visit-us"
              onClick={(e) => handleScrollTo(e, '#visit-us')}
              className="w-full block text-center py-3 rounded text-xs font-semibold uppercase tracking-wider bg-amber-600 text-stone-950"
            >
              Get Showroom Directions
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
