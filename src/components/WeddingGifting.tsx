import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, Sparkles, Home, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { businessInfo } from '../data/shopData';

interface GiftingTheme {
  title: string;
  hindiTitle: string;
  description: string;
  image: string;
  features: string[];
}

const giftingThemes: GiftingTheme[] = [
  {
    title: 'Bridal & New Home Kitchen Setup',
    hindiTitle: 'विवाह एवं गृह प्रवेश बर्तन',
    description:
      'Curated essentials for setting up a complete Indian household kitchen, including heavy-gauge stainless steel kadai, storage dabbas, topes, milk cans, and daily dining thalis.',
    image: '/images/shop/stainless-steel-cookware.webp',
    features: [
      'Comprehensive stainless steel cookware and storage',
      'Heavy-gauge, long-lasting kitchen vessels',
      'Custom configurations assembled on-site',
    ],
  },
  {
    title: 'Sacred Pooja & Ceremonial Brassware',
    hindiTitle: 'पूजा एवं मांगलिक पीतल सामग्री',
    description:
      'Hand-finished brass kalash, auspicious diyas, engraved Om copper thalis, and ritual vessels traditionally presented during weddings, housewarmings, and festive ceremonies.',
    image: '/images/shop/brass-pooja-gallery.webp',
    features: [
      'Traditional hand-polished brass lotas and kalash',
      'Sacred embossed copper pooja thalis',
      'Auspicious gifting for cultural ceremonies',
    ],
  },
  {
    title: 'Festive Dining & Fine Crockery Gifting',
    hindiTitle: 'शाही डिनर एवं क्रॉकरी उपहार',
    description:
      'Gold-patterned porcelain dinner sets, soup tureens, and bone china teaware suited for memorable family gifting and wedding trousseau collections.',
    image: '/images/shop/luxury-dining-sets.webp',
    features: [
      'Gold-filigree bordered porcelain sets',
      'Complete teaware and dinner ensembles',
      'Packaged for safe transport and gifting',
    ],
  },
  {
    title: 'Artistic Decorative Brass Showpieces',
    hindiTitle: 'पारंपरिक पीतल कलाकृतियां',
    description:
      'Intricately etched brass surahis, decorative urns, antique lamps, and sculpted metal figurines crafted for enduring home decor and distinguished gifting.',
    image: '/images/shop/antique-decor-vases.webp',
    features: [
      'Hand-carved traditional Indian motifs',
      'Timeless heirloom brassware artifacts',
      'Ideal for premium festive and family gifts',
    ],
  },
];

export const WeddingGifting: React.FC = () => {
  const handleScrollToVisit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#visit-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="wedding-gifting" className="py-20 lg:py-28 relative overflow-hidden bg-surface-dark/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-metallic-brass/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-metallic-copper/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-surface-border mb-4">
            <Gift className="w-3.5 h-3.5 text-metallic-brass" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Wedding Trousseau & Family Gifting
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-100 tracking-tight">
            Traditions of Kitchen Gifting
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-metallic-brass to-metallic-copper mx-auto rounded-full mt-3 mb-4" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            In Indian culture, kitchen utensils and sacred metalware represent auspicious beginnings and enduring utility. Families visit our Rewari showroom to personally assemble tailored collections for marriages and housewarmings.
          </p>
        </div>

        {/* 4 Themed Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {giftingThemes.map((theme, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl overflow-hidden bg-surface-card border border-surface-border hover:border-metallic-brass/50 shadow-card-dark transition-all duration-300 flex flex-col sm:flex-row group"
            >
              {/* Photo */}
              <div className="sm:w-2/5 relative aspect-video sm:aspect-auto overflow-hidden bg-surface-darker shrink-0">
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-surface-card via-transparent to-transparent opacity-70" />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-semibold text-metallic-copper uppercase tracking-wider block mb-1">
                    {theme.hindiTitle}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-slate-100 group-hover:text-metallic-brass-light transition-colors">
                    {theme.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                    {theme.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-surface-border/60 space-y-1.5">
                  {theme.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Sparkles className="w-3.5 h-3.5 text-metallic-brass shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Consultation Callout Banner (Zero-Fake-Data Compliant) */}
        <div className="rounded-3xl glass-panel-glow border border-metallic-brass/40 p-8 sm:p-12 relative overflow-hidden text-center sm:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-darker/60 border border-white/10 text-xs text-metallic-brass">
                <Heart className="w-3.5 h-3.5 text-metallic-copper" />
                <span>Personalized Family Assistance</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100">
                Plan Your Wedding or Griha Pravesh Setup in Person
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                Because household requirements vary by family preferences and customs, we invite you to visit our Rewari showroom. Our on-floor team assists you in selecting custom piece combinations across stainless steel, brass, copper, and dining ware without rigid pre-packaged constraints.
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-300 pt-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-metallic-copper" />
                  Heavy-gauge verified steel
                </span>
                <span className="flex items-center gap-1.5">
                  <Home className="w-4 h-4 text-metallic-brass" />
                  Complete kitchen setups
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  {businessInfo.address.fullFormatted}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <a
                href="#visit-us"
                onClick={handleScrollToVisit}
                className="px-6 py-4 rounded-xl font-semibold uppercase tracking-wider text-xs bg-gradient-to-r from-metallic-brass via-metallic-brass-light to-metallic-copper text-surface-darker shadow-glow-brass hover:shadow-glow-copper transition-all flex items-center gap-2 active:scale-95"
              >
                <span>Visit Showroom Floor</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
