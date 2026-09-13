import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, ChevronRight, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/shopData';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Showroom Tour', href: '#showroom' },
  { name: 'Collections', href: '#collections' },
  { name: 'Wedding & Gifting', href: '#wedding-gifting' },
  { name: 'Care Guide', href: '#care-guide' },
  { name: 'Visit Us', href: '#visit-us' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel-glow py-3 bg-surface-dark/90 backdrop-blur-md shadow-lg border-b border-surface-border/60'
          : 'bg-gradient-to-b from-surface-darker/90 via-surface-darker/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity / Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Prahlad Bhagat Ji - Home"
          >
            {/* Medallion Icon Symbol mimicking the iconic facade emblem */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full p-0.5 bg-gradient-to-tr from-metallic-brass-dark via-metallic-brass-light to-metallic-copper shadow-glow-brass flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-surface-darker flex items-center justify-center border border-white/10 relative overflow-hidden">
                <span className="font-serif font-bold text-metallic-brass text-xs sm:text-sm tracking-wider">
                  PB
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-metallic-copper/15 to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-wider text-slate-100 group-hover:text-metallic-brass-light transition-colors">
                {businessInfo.name}
              </span>
              <span className="text-[10px] sm:text-xs text-metallic-copper font-medium tracking-widest uppercase">
                {businessInfo.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-metallic-brass-light hover:bg-white/[0.04] transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action & Verified Location Pill */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-surface-card/60 px-3 py-1.5 rounded-full border border-surface-border">
              <MapPin className="w-3.5 h-3.5 text-metallic-copper" />
              <span>Rewari, Haryana</span>
            </div>

            <a
              href="#visit-us"
              onClick={(e) => handleNavClick(e, '#visit-us')}
              className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-metallic-brass via-metallic-brass-light to-metallic-copper text-surface-darker hover:shadow-glow-brass transition-all duration-300 flex items-center gap-1.5 hover:scale-[1.02] active:scale-95"
            >
              <span>Explore Store</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#visit-us"
              onClick={(e) => handleNavClick(e, '#visit-us')}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-gradient-to-r from-metallic-brass to-metallic-copper text-surface-darker active:scale-95"
            >
              Store Info
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-surface-card/60 border border-surface-border focus:outline-none focus:ring-2 focus:ring-metallic-brass"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-b border-surface-border bg-surface-dark/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <div className="pb-3 mb-2 border-b border-surface-border/50 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-metallic-copper" />
                  Jhajjar Rd, Rewari
                </span>
                <span className="flex items-center gap-1 text-metallic-brass">
                  <Sparkles className="w-3.5 h-3.5" />
                  Physical Showroom
                </span>
              </div>

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-metallic-brass-light hover:bg-surface-card transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}

              <div className="pt-4 mt-2">
                <a
                  href="#visit-us"
                  onClick={(e) => handleNavClick(e, '#visit-us')}
                  className="w-full block text-center py-3 rounded-xl font-semibold uppercase tracking-wider text-xs bg-gradient-to-r from-metallic-brass via-metallic-brass-light to-metallic-copper text-surface-darker shadow-glow-brass"
                >
                  Visit Showroom & Directions
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
