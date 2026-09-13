import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, ChevronRight, Sparkles, Sun, Moon } from 'lucide-react';
import { businessInfo } from '../data/shopData';
import { useTheme } from '../context/ThemeContext';

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
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 glass-panel-glow shadow-card-luxury'
          : 'py-5 bg-gradient-to-b from-black/80 via-black/30 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity / Logo */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Prahlad Bhagat Ji - Home"
          >
            {/* Medallion Icon Symbol with subtle pulsing glow */}
            <motion.div
              whileHover={{ scale: 1.08, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full p-0.5 bg-gradient-to-tr from-metallic-brass-dark via-metallic-brass-light to-metallic-copper shadow-glow-brass flex items-center justify-center cursor-pointer"
            >
              <div className="w-full h-full rounded-full bg-surface-darker flex items-center justify-center border border-white/10 relative overflow-hidden">
                <span className="font-serif font-bold text-gradient-brass text-sm tracking-wider">
                  PB
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-metallic-copper/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-wider text-slate-100 dark:text-slate-100 group-hover:text-metallic-brass-light transition-colors">
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
                className="relative px-3.5 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-metallic-brass-light transition-all duration-200 group"
              >
                <span>{item.name}</span>
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-metallic-brass to-metallic-copper scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Right Action Bar: Theme Switcher & Store CTA */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* 1-Click Luxury Theme Switcher */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-surface-card/80 hover:bg-surface-card border border-surface-border text-metallic-brass hover:text-metallic-brass-light transition-all duration-300 active:scale-90"
              title={isDark ? 'Switch to Champagne Ivory Mode' : 'Switch to Royal Obsidian Mode'}
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -15, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 15, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Location Pill */}
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-300 bg-surface-card/60 px-3.5 py-2 rounded-full border border-surface-border">
              <MapPin className="w-3.5 h-3.5 text-metallic-copper" />
              <span>Rewari, Haryana</span>
            </div>

            {/* Explore Showroom Button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              href="#visit-us"
              onClick={(e) => handleNavClick(e, '#visit-us')}
              className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-metallic-brass via-metallic-brass-light to-metallic-copper text-surface-darker shadow-glow-brass flex items-center gap-1.5 transition-all"
            >
              <span>Visit Showroom</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Mobile Actions */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full bg-surface-card border border-surface-border text-metallic-brass"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-200 bg-surface-card border border-surface-border"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="sm:hidden border-b border-surface-border bg-surface-darker/98 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-8 space-y-3">
              <div className="pb-3 mb-2 border-b border-surface-border flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-metallic-copper" />
                  Jhajjar Rd, Rewari
                </span>
                <span className="flex items-center gap-1 text-metallic-brass">
                  <Sparkles className="w-3.5 h-3.5" />
                  Live Showroom
                </span>
              </div>

              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-3 rounded-xl text-base font-serif font-medium text-slate-200 hover:text-metallic-brass-light hover:bg-surface-card transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </motion.a>
              ))}

              <div className="pt-4 mt-2">
                <a
                  href="#visit-us"
                  onClick={(e) => handleNavClick(e, '#visit-us')}
                  className="w-full block text-center py-3.5 rounded-xl font-semibold uppercase tracking-wider text-xs bg-gradient-to-r from-metallic-brass via-metallic-brass-light to-metallic-copper text-surface-darker shadow-glow-brass"
                >
                  Visit Showroom Floor
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
