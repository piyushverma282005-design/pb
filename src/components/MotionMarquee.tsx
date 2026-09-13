import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const marqueeItems = [
  'BARTAN & COOKWARE',
  'TRADITIONAL BRASSWARE',
  'PURE HAMMERED COPPER',
  'MODULAR KITCHEN APPLIANCES',
  'FINE PORCELAIN DINNERWARE',
  'HEAVY GAUGE STEEL DABBAS',
  'KAFF STUDIO DISPLAY',
  'SACRED POOJA THALIS',
  'THERMAL CASSEROLES',
  'DECORATIVE BRASS SURAHIS',
];

export const MotionMarquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-metallic-brass/25 bg-surface-darker/80 backdrop-blur-md">
      <div className="flex select-none">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 24 }}
          className="flex whitespace-nowrap items-center gap-8 text-xs sm:text-sm font-serif tracking-[0.25em] text-metallic-brass-light"
        >
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span>{item}</span>
              <Sparkles className="w-3.5 h-3.5 text-metallic-copper shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
