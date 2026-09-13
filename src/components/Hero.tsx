import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Flame,
  Sparkles,
  ChevronRight,
  Play,
  Pause,
} from 'lucide-react';
import { businessInfo } from '../data/shopData';

interface HeroScene {
  id: string;
  label: string;
  tag: string;
  title: string;
  image: string;
  highlight: string;
}

const heroScenes: HeroScene[] = [
  {
    id: 'facade',
    label: 'Grand Facade',
    tag: 'Architectural Storefront',
    title: 'Iconic Facade & Medallion',
    image: '/images/shop/facade.webp',
    highlight: 'Embossed circular silver thali & crossed spoons emblem',
  },
  {
    id: 'grand-aisle',
    label: 'Central Promenade',
    tag: 'Showroom Main Floor',
    title: 'Spacious Walking Promenade',
    image: '/images/shop/showroom-grand-aisle.webp',
    highlight: 'Geometric wooden coffered ceiling & multi-tier metalware gondolas',
  },
  {
    id: 'brass-gallery',
    label: 'Brass Sanctum',
    tag: 'Sacred Utensils',
    title: 'Traditional Brass & Pooja Hub',
    image: '/images/shop/brass-pooja-gallery.webp',
    highlight: 'Illuminated teal display cubes with polished brassware & kalash',
  },
  {
    id: 'appliances-studio',
    label: 'Appliances Studio',
    tag: 'Modern Living',
    title: 'Built-in Kitchen Appliances',
    image: '/images/shop/modular-kitchen-appliances.webp',
    highlight: 'KAFF modular display with built-in hobs, glass stoves & chimneys',
  },
];

export const Hero: React.FC = () => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-progress the hero scenes every 6 seconds
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveSceneIndex((prev) => (prev + 1) % heroScenes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const currentScene = heroScenes[activeSceneIndex];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Background Full-Bleed Real Photography with Ken Burns effect */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene.id}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 0.45, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentScene.image}
              alt={currentScene.title}
              className="w-full h-full object-cover object-center filter brightness-90"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-surface-darker/60 to-surface-darker/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Royal Typography & Editorial Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8"
          >
            {/* Store Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel-glow border border-metallic-brass/40 shadow-glow-brass"
            >
              <Sparkles className="w-4 h-4 text-metallic-copper animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-xs font-semibold uppercase tracking-widest text-gradient-gold">
                Rewari's Premier Kitchenware Destination
              </span>
            </motion.div>

            {/* Grand Royal Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-bold tracking-tight text-white leading-[1.08]">
                <span className="block text-gradient-brass drop-shadow-lg">
                  {businessInfo.name}
                </span>
                <span className="block text-xl sm:text-3xl font-sans font-light tracking-[0.2em] text-slate-300 uppercase mt-3">
                  {businessInfo.tagline}
                </span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-metallic-brass via-metallic-copper to-transparent mx-auto lg:mx-0 rounded-full mt-4" />
            </div>

            {/* Factual Description grounded in actual store offerings */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Step into a vast physical showroom dedicated to traditional brassware, pure hammered copper, heavy-gauge stainless steel bartan, fine dinnerware, and modern built-in kitchen appliances.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#showroom"
                onClick={(e) => handleScrollTo(e, '#showroom')}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-widest bg-gradient-to-r from-metallic-brass via-metallic-brass-light to-metallic-copper text-surface-darker shadow-glow-brass hover:shadow-glow-copper transition-all flex items-center justify-center gap-2.5"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Showroom Floor</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#collections"
                onClick={(e) => handleScrollTo(e, '#collections')}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-widest glass-panel border border-metallic-brass/40 text-slate-200 hover:text-white hover:border-metallic-brass transition-all flex items-center justify-center gap-2"
              >
                <span>Browse Collections</span>
                <ChevronRight className="w-4 h-4 text-metallic-brass" />
              </motion.a>
            </div>

            {/* Interactive Scene Switcher Bar */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="uppercase tracking-wider font-semibold text-metallic-brass">
                  Live Showroom Scenes
                </span>
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                  aria-label={isPlaying ? 'Pause auto-rotation' : 'Play auto-rotation'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isPlaying ? 'Auto Rotating' : 'Paused'}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {heroScenes.map((scene, idx) => {
                  const isActive = idx === activeSceneIndex;
                  return (
                    <button
                      key={scene.id}
                      type="button"
                      onClick={() => {
                        setActiveSceneIndex(idx);
                        setIsPlaying(false);
                      }}
                      className={`text-left p-2.5 rounded-xl transition-all duration-300 relative overflow-hidden border ${
                        isActive
                          ? 'bg-surface-card/90 border-metallic-brass shadow-glow-brass'
                          : 'bg-black/40 hover:bg-black/60 border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <span className="block text-[10px] uppercase font-bold text-metallic-copper tracking-wider">
                        0{idx + 1}
                      </span>
                      <span className="block text-xs font-semibold text-slate-200 truncate">
                        {scene.label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeSceneIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-metallic-brass to-metallic-copper"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Framed Spotlight of Current Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Animated Background Aura */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-metallic-copper/40 via-metallic-brass/30 to-transparent rounded-3xl blur-xl opacity-60 animate-pulse" />

            <div className="relative rounded-2xl overflow-hidden glass-panel-glow border border-metallic-brass/40 shadow-card-luxury p-3">
              {/* Scene Photo Display */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentScene.id}
                    src={currentScene.image}
                    alt={currentScene.title}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Floating Inspection Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-metallic-brass uppercase tracking-wider">
                    {currentScene.tag}
                  </span>
                  <span className="text-[11px] text-slate-300 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                    {activeSceneIndex + 1} / {heroScenes.length}
                  </span>
                </div>

                {/* Scene Caption Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-metallic-brass/30 text-left space-y-1">
                  <span className="text-xs font-semibold text-metallic-brass block">
                    {currentScene.title}
                  </span>
                  <p className="text-xs text-slate-300 leading-snug">
                    {currentScene.highlight}
                  </p>
                </div>
              </div>
            </div>

            {/* Factual Highlights Micro-Ribbon */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-3 rounded-xl glass-panel border border-white/10 flex items-center gap-2.5 text-left">
                <ShieldCheck className="w-5 h-5 text-metallic-copper shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-slate-200 block">Heavy Gauge Steel</span>
                  <span className="text-[11px] text-slate-400">Authentic Bartan</span>
                </div>
              </div>

              <div className="p-3 rounded-xl glass-panel border border-white/10 flex items-center gap-2.5 text-left">
                <Flame className="w-5 h-5 text-metallic-brass shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-slate-200 block">KAFF Appliances</span>
                  <span className="text-[11px] text-slate-400">Built-in Studio</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
