import React from 'react';
import { ChevronRight, Check } from 'lucide-react';

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
    <section id="wedding-gifting" className="py-16 lg:py-24 bg-stone-900/40 border-b border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 block mb-2">
            Wedding & Family Gifting
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100 tracking-tight">
            Traditions of Kitchen Gifting
          </h2>
          <div className="h-1 w-16 bg-amber-600 rounded-full mt-3 mb-4" />
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            In Indian culture, kitchen utensils and sacred metalware represent auspicious beginnings and enduring utility. Families visit our Rewari showroom to personally assemble tailored collections for weddings and housewarmings.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {giftingThemes.map((theme, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden bg-stone-900 border border-stone-800 flex flex-col sm:flex-row shadow-sm"
            >
              <div className="sm:w-2/5 aspect-video sm:aspect-auto overflow-hidden bg-stone-950 shrink-0">
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-semibold text-amber-500 uppercase tracking-wider block mb-1">
                    {theme.hindiTitle}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-stone-100">
                    {theme.title}
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed mt-2">
                    {theme.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-800 space-y-1.5">
                  {theme.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-stone-300">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personalized Consultation Callout Banner */}
        <div className="rounded-lg bg-stone-900 border border-stone-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
              In-Person Consultation
            </span>
            <h3 className="text-xl font-serif font-bold text-stone-100">
              Personalized Wedding Trousseau Assembly
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
              Household requirements vary by family preferences and customs. Visit our Rewari showroom to inspect metal gauge, piece weights, and select custom combinations across stainless steel, brass, and dinnerware.
            </p>
          </div>

          <a
            href="#visit-us"
            onClick={handleScrollToVisit}
            className="shrink-0 px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider bg-amber-600 hover:bg-amber-500 text-stone-950 transition-colors flex items-center gap-1.5"
          >
            <span>Visit Showroom Floor</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
