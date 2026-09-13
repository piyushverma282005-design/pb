import {
  BusinessInfo,
  ShowroomZone,
  ProductCategory,
  ShowroomVisualItem,
  MaterialCareInfo,
} from '../types/shop';

/**
 * Verified business information for PRAHLAD BHAGAT JI.
 * Unknown or unsupplied details (phone, hours, direct URLs) remain strictly null
 * in accordance with the Zero-Fake-Data policy.
 */
export const businessInfo: BusinessInfo = {
  name: 'PRAHLAD BHAGAT JI',
  tagline: 'Bartan • Kitchenware • Appliances',
  description:
    'Destination showroom offering traditional and modern kitchen utensils, heavy-gauge cookware, brassware, copper vessels, dinner sets, kitchen tools, and modular appliances.',
  address: {
    street: 'Jhajjar Rd',
    landmark: 'Opposite Agarwal Metal Works',
    locality: 'AERD Society',
    city: 'Rewari',
    fullFormatted: 'Jhajjar Rd, opposite Agarwal Metal Works, AERD Society, Rewari',
  },
  phone: null,
  whatsapp: null,
  email: null,
  googleMapsUrl: null,
  openingHours: null,
  socialLinks: {
    instagram: null,
    facebook: null,
    youtube: null,
  },
};

/**
 * Showroom departments/categories based strictly on the verified showroom photography.
 */
export const productCategories: ProductCategory[] = [
  {
    id: 'cookware-bartan',
    name: 'Cookware & Bartan',
    hindiName: 'बर्तन एवं कुकवेयर',
    description:
      'Heavy-gauge stainless steel utensils, storage dabbas, kadai, pressure cookers, milk cans, and daily cooking essentials.',
    coverImage: '/images/shop/stainless-steel-cookware.webp',
  },
  {
    id: 'brass-copper',
    name: 'Brass & Copper Utensils',
    hindiName: 'पीतल एवं तांबे के बर्तन',
    description:
      'Traditional hammered copper water vessels, pooja lotas, engraved Om thalis, and polished brass cookware.',
    coverImage: '/images/shop/sacred-copper-brassware.webp',
  },
  {
    id: 'modular-appliances',
    name: 'Kitchen Appliances',
    hindiName: 'किचन एप्लायंसेज',
    description:
      'Modern kitchen gas cooktops, multi-burner hobs, and built-in chimneys display studio.',
    coverImage: '/images/shop/modular-kitchen-appliances.webp',
  },
  {
    id: 'dinnerware-crockery',
    name: 'Dinnerware & Crockery',
    hindiName: 'डिनरवेयर एवं क्रॉकरी',
    description:
      'Porcelain dinner sets, gold-accented tea sets, soup bowls, bone china, and serving dish collections.',
    coverImage: '/images/shop/luxury-dining-sets.webp',
  },
  {
    id: 'culinary-tools',
    name: 'Culinary Tools & Cutlery',
    hindiName: 'किचन टूल्स एवं कटलरी',
    description:
      'Stainless steel ladles, skimmers, strainers, graters, peelers, vegetable slicers, and kitchen organizers.',
    coverImage: '/images/shop/culinary-tools-utensils.webp',
  },
  {
    id: 'decorative-gifting',
    name: 'Decorative Metalware & Gifts',
    hindiName: 'सजावटी पीतल एवं उपहार',
    description:
      'Handcrafted brass vases, etched surahis, decorative lamps, and brass figurines for home and gifting.',
    coverImage: '/images/shop/antique-decor-vases.webp',
  },
  {
    id: 'insulated-storage',
    name: 'Thermal Ware & Storage',
    hindiName: 'इंसुलेटेड बर्तन एवं डिब्बे',
    description:
      'Thermal casseroles, insulated tiffins, lunchboxes, water bottles, and modular melamine containers.',
    coverImage: '/images/shop/insulated-lunchware.webp',
  },
];

/**
 * 13 Verified Showroom Zones corresponding directly to the 13 real photographs in public/images/shop/
 */
export const showroomZones: ShowroomZone[] = [
  {
    id: 'facade',
    title: 'Grand Storefront & Facade',
    categoryTag: 'Exterior & Entry',
    shortDescription: 'Modern showroom facade with signature emblem.',
    detailedDescription:
      'The exterior features modern vertical architectural louvers and a large circular embossed medallion depicting a traditional thali and spoons emblem with "PRAHALAD BHAGAT JI" signage.',
    image: '/images/shop/facade.webp',
    visibleFeatures: [
      'Circular metallic thali & spoons medallion',
      'Architectural louvered facade',
      'Glazed customer entryway',
    ],
  },
  {
    id: 'grand-aisle',
    title: 'Central Showroom Promenade',
    categoryTag: 'Main Floor',
    shortDescription: 'Spacious central aisle with architectural timber ceiling.',
    detailedDescription:
      'A wide, well-illuminated central walking gallery displaying tiered metalware racks, directional spotlighting, and wooden boxed ceiling fixtures.',
    image: '/images/shop/showroom-grand-aisle.webp',
    visibleFeatures: [
      'Wooden coffered ceiling design',
      'Dual-sided metalware display gondolas',
      'Spacious tiled central walking aisle',
    ],
  },
  {
    id: 'brass-pooja-gallery',
    title: 'Traditional Brass & Pooja Gallery',
    categoryTag: 'Brassware',
    shortDescription: 'Illuminated teal display cubes highlighting brass articles.',
    detailedDescription:
      'Specialized display shelving featuring illuminated showcase cubes filled with polished brass thalis, puja kalash, diyas, and traditional vessels.',
    image: '/images/shop/brass-pooja-gallery.webp',
    visibleFeatures: [
      'Teal illuminated presentation cubes',
      'Polished brass thalis & kalash',
      'Traditional pooja and ritual utensils',
    ],
  },
  {
    id: 'sacred-copper-brassware',
    title: 'Copper & Sacred Brassware Section',
    categoryTag: 'Copper & Brass',
    shortDescription: 'Hammered copper jugs, Om engraved plates, and lotas.',
    detailedDescription:
      'Dedicated glass shelves presenting pure hammered copper water carafes, engraved Om sacred thalis, brass lotas, and traditional hand-crank food processing tools.',
    image: '/images/shop/sacred-copper-brassware.webp',
    visibleFeatures: [
      'Hammered pure copper carafes & tumblers',
      'Engraved sacred Om copper thalis',
      'Traditional brass lotas and kalash',
    ],
  },
  {
    id: 'modular-kitchen-appliances',
    title: 'Kitchen Appliances Gallery',
    categoryTag: 'Appliances',
    shortDescription: 'Gas cooktops, multi-burner hobs, and designer chimneys.',
    detailedDescription:
      'Studio display area showcasing built-in black glass gas hobs, toughened glass cooktops, and modern wall-mounted chimneys featuring visible KAFF studio branding.',
    image: '/images/shop/modular-kitchen-appliances.webp',
    visibleFeatures: [
      'Built-in multi-burner gas hobs',
      'Designer glass chimneys & range hoods',
      'Visible KAFF studio display area',
    ],
  },
  {
    id: 'luxury-dining-sets',
    title: 'Luxury Dinnerware & Teaware Display',
    categoryTag: 'Dinnerware',
    shortDescription: 'Gold-accented porcelain tea sets and soup tureens.',
    detailedDescription:
      'Tiered display counters presenting fine porcelain dinner sets, gold-rimmed teacups with matching saucers, soup tureens, and covered casseroles.',
    image: '/images/shop/luxury-dining-sets.webp',
    visibleFeatures: [
      'Gold-patterned porcelain dinnerware',
      'Classic covered soup tureens',
      'Fine bone china teaware sets',
    ],
  },
  {
    id: 'dinnerware-crockery',
    title: 'Dinnerware & Crockery Aisle',
    categoryTag: 'Crockery',
    shortDescription: 'Extensive ceramic dinner sets and packaged tableware.',
    detailedDescription:
      'Spacious aisles dedicated to ceramic and opalware dinner sets, serving platters, and branded boxed dinner collections.',
    image: '/images/shop/dinnerware-crockery.webp',
    visibleFeatures: [
      'Multi-tier dinner plate racks',
      'Packaged dinner set boxed inventory',
      'Glassware and ceramic serving dishes',
    ],
  },
  {
    id: 'stainless-steel-cookware',
    title: 'Stainless Steel Bartan & Cookware Section',
    categoryTag: 'Cookware',
    shortDescription: 'Heavy-gauge stainless steel dabbas, kadai, and pressure cookers.',
    detailedDescription:
      'Heavy storage shelving presenting daily Indian kitchenware including deep storage dabbas, stainless milk cans, heavy-bottom kadai, pressure cookers, and serving buckets.',
    image: '/images/shop/stainless-steel-cookware.webp',
    visibleFeatures: [
      'Heavy stainless steel storage containers (dabbas)',
      'Traditional stainless steel milk cans',
      'Deep kadai, topes, and pressure cookers',
    ],
  },
  {
    id: 'culinary-tools-utensils',
    title: 'Culinary Tools & Cutlery Department',
    categoryTag: 'Kitchen Tools',
    shortDescription: 'Stainless steel ladles, skimmers, graters, and cutters.',
    detailedDescription:
      'Hanging pegboard display featuring a wide range of stainless steel culinary tools, strainers, graters, vegetable slicers, and silicone spatulas.',
    image: '/images/shop/culinary-tools-utensils.webp',
    visibleFeatures: [
      'Hanging stainless ladles and skimmers',
      'Handheld graters, slicers, and peelers',
      'Silicone spatulas and cooking turners',
    ],
  },
  {
    id: 'antique-decor-vases',
    title: 'Decorative Brassware & Gift Studio',
    categoryTag: 'Decor & Gifting',
    shortDescription: 'Artistic carved brass surahis, lamps, and decorative vases.',
    detailedDescription:
      'Boutique shelving grid presenting intricately etched brass surahis, tall vases, artistic table lamps, and sculpted brass showpieces for interior decor and gifting.',
    image: '/images/shop/antique-decor-vases.webp',
    visibleFeatures: [
      'Etched brass surahis and decorative urns',
      'Table lamps with artistic shades',
      'Sculpted metal animal showpieces',
    ],
  },
  {
    id: 'insulated-lunchware',
    title: 'Thermal Lunchware & Insulated Containers',
    categoryTag: 'Storage',
    shortDescription: 'Thermal casseroles, tiffins, and Milton water bottles.',
    detailedDescription:
      'Organized shelving unit featuring stainless steel insulated lunchboxes, thermal casseroles, food jars, and branded water bottles.',
    image: '/images/shop/insulated-lunchware.webp',
    visibleFeatures: [
      'Multi-tier stainless and plastic lunchboxes',
      'Thermal insulated food casseroles',
      'Milton branded drinkware inventory',
    ],
  },
  {
    id: 'melamine-organizers',
    title: 'Melamine Tableware & Kitchen Storage',
    categoryTag: 'Tableware',
    shortDescription: 'Melamine dinnerware, bowls, and modular storage baskets.',
    detailedDescription:
      'Vibrant display shelving featuring patterned melamine dinner plates, stackable bowls, and modular plastic kitchen organizers and storage baskets.',
    image: '/images/shop/melamine-organizers.webp',
    visibleFeatures: [
      'Patterned melamine dinner sets and plates',
      'Stackable prep and serving bowls',
      'Modular under-counter storage bins',
    ],
  },
  {
    id: 'reception-lounge',
    title: 'Customer Lounge & Reception Area',
    categoryTag: 'Hospitality',
    shortDescription: 'Comfortable consultation area with decorative floral feature wall.',
    detailedDescription:
      'Dedicated reception and consultation area with client seating benches, billing and inquiry counter, and a textured floral accent wall.',
    image: '/images/shop/reception-lounge.webp',
    visibleFeatures: [
      'Textured floral feature wall',
      'Visitor bench seating area',
      'Customer consultation & billing counter',
    ],
  },
];

/**
 * Visual-first product catalog items directly grounded in the real showroom photographs.
 * No speculative prices, weights, or SKU numbers are hardcoded.
 */
export const showroomVisualItems: ShowroomVisualItem[] = [
  {
    id: 'item-hammered-copper-jug',
    title: 'Hammered Pure Copper Water Carafe & Tumblers',
    categoryId: 'brass-copper',
    categoryName: 'Brass & Copper',
    image: '/images/shop/sacred-copper-brassware.webp',
    visibleHighlights: ['Hammered texture finish', 'Pure copper construction', 'Matching tumblers'],
    inquiryNote: 'Contact store for current sizes and specifications',
  },
  {
    id: 'item-sacred-om-thali',
    title: 'Sacred Om Engraved Copper & Brass Thalis',
    categoryId: 'brass-copper',
    categoryName: 'Brass & Copper',
    image: '/images/shop/sacred-copper-brassware.webp',
    visibleHighlights: ['Traditional embossed Om motif', 'Beaded border', 'Pooja & ritual design'],
    inquiryNote: 'Contact store for available diameters and designs',
  },
  {
    id: 'item-brass-pooja-articles',
    title: 'Traditional Brass Kalash, Lotas & Diyas',
    categoryId: 'brass-copper',
    categoryName: 'Brass & Copper',
    image: '/images/shop/brass-pooja-gallery.webp',
    visibleHighlights: ['High-polish golden finish', 'Classic Indian silhouettes', 'Durable solid brass'],
    inquiryNote: 'Contact store for individual pieces and sets',
  },
  {
    id: 'item-stainless-kadai-dabbas',
    title: 'Heavy Stainless Steel Kadai & Storage Dabbas',
    categoryId: 'cookware-bartan',
    categoryName: 'Cookware & Bartan',
    image: '/images/shop/stainless-steel-cookware.webp',
    visibleHighlights: ['Heavy gauge food-grade steel', 'Deep storage containers', 'Sturdy steel handles'],
    inquiryNote: 'Contact store for volume capacity and sizing',
  },
  {
    id: 'item-modular-gas-hobs',
    title: 'Built-in Gas Hobs & Toughened Glass Cooktops',
    categoryId: 'modular-appliances',
    categoryName: 'Kitchen Appliances',
    image: '/images/shop/modular-kitchen-appliances.webp',
    visibleHighlights: ['Toughened black glass tops', 'Multi-burner configurations', 'KAFF studio collection'],
    inquiryNote: 'Contact store for burner configuration and installation details',
  },
  {
    id: 'item-designer-kitchen-chimneys',
    title: 'Designer Kitchen Chimneys & Range Hoods',
    categoryId: 'modular-appliances',
    categoryName: 'Kitchen Appliances',
    image: '/images/shop/modular-kitchen-appliances.webp',
    visibleHighlights: ['Wall-mounted modern hoods', 'Sleek black finish', 'Baffle filter display'],
    inquiryNote: 'Contact store for suction capacities and dimensions',
  },
  {
    id: 'item-luxury-tea-dinner-sets',
    title: 'Fine Porcelain & Gold-Accented Tea Dinner Sets',
    categoryId: 'dinnerware-crockery',
    categoryName: 'Dinnerware & Crockery',
    image: '/images/shop/luxury-dining-sets.webp',
    visibleHighlights: ['Gold filigree borders', 'Covered soup tureens', 'Matching cups and saucers'],
    inquiryNote: 'Contact store for set piece counts and designs',
  },
  {
    id: 'item-stainless-ladles-tools',
    title: 'Stainless Steel Ladles, Strainers & Culinary Tools',
    categoryId: 'culinary-tools',
    categoryName: 'Culinary Tools & Cutlery',
    image: '/images/shop/culinary-tools-utensils.webp',
    visibleHighlights: ['One-piece stainless construction', 'Hanging hook handles', 'Strainers & slicers'],
    inquiryNote: 'Contact store for individual utensils and sets',
  },
  {
    id: 'item-etched-brass-vases-surahi',
    title: 'Handcrafted Etched Brass Surahis & Decorative Vases',
    categoryId: 'decorative-gifting',
    categoryName: 'Decorative Metalware',
    image: '/images/shop/antique-decor-vases.webp',
    visibleHighlights: ['Intricate hand-carved floral patterns', 'Antiqued and polished finishes', 'Gifting showpieces'],
    inquiryNote: 'Contact store for heights and custom gifting options',
  },
  {
    id: 'item-insulated-casseroles-tiffins',
    title: 'Insulated Hotpots, Thermal Casseroles & Tiffins',
    categoryId: 'insulated-storage',
    categoryName: 'Thermal Ware & Storage',
    image: '/images/shop/insulated-lunchware.webp',
    visibleHighlights: ['Double-wall insulation', 'Stainless interior lining', 'Milton brand options'],
    inquiryNote: 'Contact store for litre capacity and color options',
  },
  {
    id: 'item-melamine-dinner-organizers',
    title: 'Melamine Dinnerware & Modular Kitchen Baskets',
    categoryId: 'insulated-storage',
    categoryName: 'Tableware & Storage',
    image: '/images/shop/melamine-organizers.webp',
    visibleHighlights: ['Lightweight & shatter-resistant', 'Vibrant designs', 'Stackable organizers'],
    inquiryNote: 'Contact store for available patterns and sets',
  },
];

/**
 * Factual, neutral material care and maintenance guidelines.
 * Strictly free of any medical or unsupported health claims.
 */
export const materialCareGuides: MaterialCareInfo[] = [
  {
    id: 'brass-pital',
    materialName: 'Brass (पीतल)',
    subtitle: 'Traditional Copper-Zinc Alloy',
    characteristics: [
      'Alloy composed primarily of copper and zinc.',
      'Distinctive warm golden metallic sheen and solid heft.',
      'Naturally forms a subtle surface oxide layer when exposed to air and moisture.',
    ],
    traditionalUsage: [
      'Traditionally used in Indian households for cookware, serving thalis, and water storage.',
      'Widely chosen for pooja rituals, kalash, lamps (diyas), and decorative showpieces.',
      'For cooking acidic foods (like tamarind or curd), traditional brass utensils are traditionally lined with tin (kalai).',
    ],
    careAndMaintenance: [
      'Wash with mild soap and warm water for regular cleaning.',
      'To restore golden shine, use natural pastes made of lemon juice with salt or tamarind paste, or proprietary brass polishing powder.',
      'Always rinse thoroughly with clean water and dry immediately with a soft cloth to avoid water spots.',
      'Store in a dry location away from high humidity when not in regular use.',
    ],
  },
  {
    id: 'copper-tamba',
    materialName: 'Copper (तांबा)',
    subtitle: 'Pure Elemental Metal',
    characteristics: [
      'Elemental metal known for its reddish-orange color and high thermal conductivity.',
      'Reacts naturally with atmospheric elements to develop an organic patina over time.',
      'Durable and long-lasting when cared for properly.',
    ],
    traditionalUsage: [
      'Commonly fashioned into water jugs, carafes, and tumblers (Tamra Patra) for traditional overnight water storage.',
      'Used in sacred pooja vessels, havan samagri thalis, and holy water containers (gangajali).',
      'Should not be used to store or prepare acidic substances such as citrus juices, vinegar, or fermented dairy.',
    ],
    careAndMaintenance: [
      'Regularly remove natural darkening or tarnish using lemon slices rubbed with fine salt or a mild flour-salt-vinegar paste.',
      'Gently wipe the exterior with a damp microfiber cloth; avoid rough wire scrubbers that can scratch the smooth metal finish.',
      'Do not wash copper vessels in automatic dishwashers or use bleach-based detergents.',
      'Ensure complete drying with a clean cotton towel after washing.',
    ],
  },
  {
    id: 'stainless-steel',
    materialName: 'Food-Grade Stainless Steel (स्टेनलेस स्टील)',
    subtitle: 'Modern Daily Kitchen Standard',
    characteristics: [
      'Alloy composed of iron, chromium, and nickel that resists corrosion and rust.',
      'Non-porous, non-reactive surface that does not leach or alter food flavor.',
      'Resistant to thermal shock and daily kitchen wear.',
    ],
    traditionalUsage: [
      'The cornerstone of everyday Indian kitchens: kadai, pressure cookers, saucepans, and topes.',
      'Food storage dabbas, spice masala dabbas, and tiffins for safe long-term grain and spice storage.',
      'Serving thalis, katoris, and cutlery for daily family dining.',
    ],
    careAndMaintenance: [
      'Suitable for daily washing with standard dishwashing detergents and sponge pads.',
      'To maintain high mirror finish, avoid abrasive scouring pads or coarse wire brushes on polished exterior surfaces.',
      'To remove heat marks or rainbow discoloration caused by high cooking heat, wipe with a small amount of white vinegar.',
      'Safe for hand washing and regular kitchen drying racks.',
    ],
  },
];
