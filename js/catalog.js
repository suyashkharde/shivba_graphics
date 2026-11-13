/**
 * Shivba Graphics - Product Catalog Data Store
 * Comprehensive product catalog matching Printo offerings
 * Owner: Akshad Deshmukh | Sinnar, Maharashtra (+91 9970833003)
 */

const SHIVBA_CATALOG = {
  categories: [
    { id: 'business-cards', name: 'Business Cards', icon: 'card' },
    { id: 'stationery', name: 'Office Stationery', icon: 'file-text' },
    { id: 'corporate-gifts', name: 'Corporate Gifts', icon: 'gift' },
    { id: 'apparel', name: 'Custom Apparel', icon: 'shirt' },
    { id: 'marketing', name: 'Marketing Collateral', icon: 'printer' },
    { id: 'signage', name: 'Signage & Standees', icon: 'flag' },
    { id: 'packaging', name: 'Packaging & Labels', icon: 'package' },
    { id: 'design', name: 'Design Services', icon: 'pen-tool' }
  ],

  products: [
    // 1. Business Cards
    {
      id: 'visiting-cards-standard',
      image: 'assets/images/products/visiting-cards-standard.jpg',
      name: 'Standard Visiting Cards',
      category: 'business-cards',
      categoryName: 'Business Cards',
      badge: 'Best Seller',
      badgeClass: 'tag-bestseller',
      startingPrice: '₹180',
      unit: 'per 100 pcs',
      description: 'Crisp, high-definition business cards printed on 350 GSM premium art card with smooth matte or glossy lamination.',
      specs: {
        'Paper Stock': '350 GSM Premium Art Board',
        'Finishes': 'Matte Lamination / Gloss Lamination',
        'Standard Size': '89 mm x 54 mm (Standard)',
        'Print Quality': 'High-Definition Digital Color',
        'Min Order Quantity': '100 Cards'
      },
      popular: true
    },
    {
      id: 'visiting-cards-velvet',
      image: 'assets/images/products/visiting-cards-velvet.jpg',
      name: 'Velvet Touch Visiting Cards',
      category: 'business-cards',
      categoryName: 'Business Cards',
      badge: 'Premium',
      badgeClass: 'tag-custom',
      startingPrice: '₹450',
      unit: 'per 100 pcs',
      description: 'Ultra-luxurious soft-touch velvet lamination providing an unforgettable tactile feel. Highly recommended for executives.',
      specs: {
        'Paper Stock': '400 GSM Heavy Ivory Board',
        'Finishes': 'Silky Soft-Touch Velvet Feel',
        'Standard Size': '89 mm x 54 mm',
        'Features': 'Fingerprint resistant, luxury feel',
        'Min Order Quantity': '100 Cards'
      },
      popular: true
    },
    {
      id: 'visiting-cards-spot-uv',
      image: 'assets/images/products/visiting-cards-spot-uv.jpg',
      name: 'Spot UV & Raised UV Cards',
      category: 'business-cards',
      categoryName: 'Business Cards',
      badge: 'Popular',
      badgeClass: 'tag-bestseller',
      startingPrice: '₹650',
      unit: 'per 100 pcs',
      description: 'High-gloss raised clear varnish applied selectively over your logo, brand name, or patterns for eye-catching dimension.',
      specs: {
        'Paper Stock': '350/400 GSM Matte Coated',
        'Special Effect': 'Targeted Raised Gloss UV',
        'Contrast': 'Vibrant gloss over satin matte',
        'Min Order Quantity': '100 Cards'
      },
      popular: true
    },
    {
      id: 'visiting-cards-foil',
      image: 'assets/images/products/visiting-cards-foil.jpg',
      name: 'Gold & Silver Foil Stamped Cards',
      category: 'business-cards',
      categoryName: 'Business Cards',
      badge: 'Luxury',
      badgeClass: 'tag-custom',
      startingPrice: '₹850',
      unit: 'per 100 pcs',
      description: 'Shimmering metallic gold, silver, rose gold, or copper hot foil stamping on premium dark or textured stock.',
      specs: {
        'Paper Stock': '350 GSM Imperial Matte or Black Card',
        'Foil Colors': 'Rich Gold, Silver, Rose Gold, Holographic',
        'Min Order Quantity': '100 Cards'
      },
      popular: false
    },
    {
      id: 'visiting-cards-pvc',
      image: 'assets/images/products/visiting-cards-pvc.jpg',
      name: 'PVC & Frosted Plastic Cards',
      category: 'business-cards',
      categoryName: 'Business Cards',
      badge: 'Waterproof',
      badgeClass: 'tag-new',
      startingPrice: '₹750',
      unit: 'per 50 pcs',
      description: 'Durable, completely tear-proof and waterproof PVC plastic cards in opaque, transparent, or frosted glass finish.',
      specs: {
        'Material': '0.76mm Rigid PVC Plastic',
        'Options': 'White Opaque / Frosted / Full Transparent',
        'Corners': 'Precision Round Corner Cut',
        'Min Order Quantity': '50 Cards'
      },
      popular: false
    },

    // 2. Office Stationery
    {
      id: 'stationery-letterheads',
      image: 'assets/images/products/stationery-letterheads.jpg',
      name: 'Executive Business Letterheads',
      category: 'stationery',
      categoryName: 'Office Stationery',
      badge: 'Corporate',
      badgeClass: 'tag-custom',
      startingPrice: '₹450',
      unit: 'per 100 pcs',
      description: 'Official corporate letterheads printed on smooth bond or Super Sunshine paper, printer-friendly for inkjet and laser.',
      specs: {
        'Paper Stock': '100 GSM Bond Paper / 120 GSM Sunshine',
        'Size': 'A4 Standard (210 x 297 mm)',
        'Compatibility': 'LaserJet & InkJet Guaranteed',
        'Min Order Quantity': '100 Sheets'
      },
      popular: true
    },
    {
      id: 'stationery-envelopes',
      image: 'assets/images/products/stationery-envelopes.jpg',
      name: 'Custom Branded Envelopes',
      category: 'stationery',
      categoryName: 'Office Stationery',
      badge: 'Essential',
      badgeClass: 'tag-custom',
      startingPrice: '₹350',
      unit: 'per 100 pcs',
      description: 'Professional branded mailing envelopes with peel-and-seal adhesive strip. Available in DL, C5, and C4 catalog sizes.',
      specs: {
        'Sizes': 'DL (Office), C5 (Folded A4), C4 (Full A4)',
        'Paper': '100 GSM Sunshine / Maplitho',
        'Closure': 'Self-Adhesive Peel & Seal Strip',
        'Min Order Quantity': '100 Envelopes'
      },
      popular: false
    },
    {
      id: 'stationery-bill-books',
      image: 'assets/images/products/stationery-bill-books.jpg',
      name: 'Carbonless Bill & Invoice Books',
      category: 'stationery',
      categoryName: 'Office Stationery',
      badge: 'Essential',
      badgeClass: 'tag-bestseller',
      startingPrice: '₹320',
      unit: 'per book (100 sets)',
      description: 'Custom GST invoice books, cash vouchers, receipt books, and delivery challans with sequential numbering and perforated sheets.',
      specs: {
        'Type': 'Duplicate (1+1) or Triplicate (1+2)',
        'Paper': 'NCR Self-Carbonless Paper (White, Pink, Yellow)',
        'Binding': 'Hardbound spine with serial numbering',
        'Min Order Quantity': '5 Books'
      },
      popular: true
    },
    {
      id: 'stationery-stamps',
      image: 'assets/images/products/stationery-stamps.jpg',
      name: 'Pre-Inked Self-Inking Rubber Stamps',
      category: 'stationery',
      categoryName: 'Office Stationery',
      badge: 'Quick Delivery',
      badgeClass: 'tag-express',
      startingPrice: '₹220',
      unit: 'per stamp',
      description: 'Mess-free, crisp flash pre-inked stamps with built-in ink pad. Good for 15,000+ impressions before re-inking.',
      specs: {
        'Ink Colors': 'Blue, Black, Red, Violet',
        'Shapes': 'Round (proprietor/seal), Rectangular, Oval',
        'Technology': 'High-Resolution Flash Polymer',
        'Turnaround': 'Same-Day Dispatch'
      },
      popular: true
    },
    {
      id: 'stationery-id-cards',
      image: 'assets/images/products/stationery-id-cards.jpg',
      name: 'Employee PVC ID Cards & Lanyards',
      category: 'stationery',
      categoryName: 'Office Stationery',
      badge: 'Corporate',
      badgeClass: 'tag-custom',
      startingPrice: '₹65',
      unit: 'per set (Card + Lanyard)',
      description: 'Edge-to-edge high-definition thermal printed PVC cards paired with customized 16mm/20mm satin lanyards with logo printing.',
      specs: {
        'Card Material': 'Rigid PVC CR80 (Credit Card Size)',
        'Lanyard': 'Satin Multicolor Heat Transfer Sublimation',
        'Accessories': 'Fish hook, dog hook, badge holder clip',
        'Min Order Quantity': '10 Sets'
      },
      popular: true
    },

    // 3. Corporate Gifts & Promotional Merchandise
    {
      id: 'gifts-custom-mugs',
      image: 'assets/images/products/gifts-custom-mugs.jpg',
      name: 'Custom Branded Ceramic Mugs',
      category: 'corporate-gifts',
      categoryName: 'Corporate Gifts',
      badge: 'Popular',
      badgeClass: 'tag-bestseller',
      startingPrice: '₹140',
      unit: 'per mug',
      description: 'Glossy 11oz premium ceramic coffee mugs printed with vibrant photo-quality wraparound designs. Microwave & dishwasher safe.',
      specs: {
        'Capacity': '330ml / 11oz',
        'Varieties': 'Classic White, Dual-Tone Colored, Magic Mug',
        'Printing': '300 DPI Sublimation Heat Transfer',
        'Packaging': 'Individual White Protective Gift Box'
      },
      popular: true
    },
    {
      id: 'gifts-temp-flask',
      image: 'assets/images/products/gifts-temp-flask.jpg',
      name: 'Smart LED Temperature Bottles',
      category: 'corporate-gifts',
      categoryName: 'Corporate Gifts',
      badge: 'Trending',
      badgeClass: 'tag-bestseller',
      startingPrice: '₹340',
      unit: 'per piece',
      description: 'Double-walled vacuum insulated stainless steel bottle with touch LED digital temperature display lid. Keeps drinks hot/cold for 12h.',
      specs: {
        'Capacity': '500ml',
        'Material': 'Food Grade SS304 Stainless Steel',
        'Branding': 'Precision Fiber Laser Engraving or UV Print',
        'Colors': 'Matte Black, Navy Blue, Silver, Pearl White'
      },
      popular: true
    },
    {
      id: 'gifts-engraved-pens',
      image: 'assets/images/products/gifts-engraved-pens.jpg',
      name: 'Laser-Engraved Metal Executive Pens',
      category: 'corporate-gifts',
      categoryName: 'Corporate Gifts',
      badge: 'Executive',
      badgeClass: 'tag-custom',
      startingPrice: '₹120',
      unit: 'per pen with box',
      description: 'Heavy metal rollerball and twist ballpoint pens with crisp permanent laser engraving of company logo and recipient name.',
      specs: {
        'Body': 'Matte Finish Metal with Chrome Trims',
        'Ink': 'German refill (Blue / Black 0.7mm)',
        'Packaging': 'Individual velvet pouch or hard box'
      },
      popular: false
    },
    {
      id: 'gifts-welcome-kit',
      image: 'assets/images/products/gifts-welcome-kit.jpg',
      name: 'Corporate Employee Welcome Kits',
      category: 'corporate-gifts',
      categoryName: 'Corporate Gifts',
      badge: 'B2B Top Choice',
      badgeClass: 'tag-custom',
      startingPrice: '₹850',
      unit: 'per combo kit',
      description: 'Complete onboarding welcome kit featuring customized rigid gift box with branded Diary, Metal Pen, Temperature Bottle, and USB Drive.',
      specs: {
        'Kit Contents': 'Custom Box + Diary/Planner + Pen + Bottle + Mug',
        'Branding': 'Consistent corporate brand color & logo matching',
        'Min Order Quantity': '10 Kits'
      },
      popular: true
    },
    {
      id: 'gifts-trophies-awards',
      image: 'assets/images/products/gifts-trophies-awards.jpg',
      name: 'Acrylic & Wooden Trophies / Plaques',
      category: 'corporate-gifts',
      categoryName: 'Corporate Gifts',
      badge: 'Custom Made',
      badgeClass: 'tag-custom',
      startingPrice: '₹380',
      unit: 'per award',
      description: 'Custom laser-cut acrylic mementos, crystal awards, and wooden honor plaques with UV color printing and metallic plates.',
      specs: {
        'Materials': 'High-clarity Cast Acrylic / Hardwood / Crystal',
        'Cutting': 'Precision CNC Laser Cut Shape',
        'Personalization': 'Individual awardee name printing included'
      },
      popular: false
    },

    // 4. Custom Apparel & Wearables
    {
      id: 'apparel-polo-tshirt',
      image: 'assets/images/products/apparel-polo-tshirt.jpg',
      name: 'Corporate Polo Collar T-Shirts',
      category: 'apparel',
      categoryName: 'Custom Apparel',
      badge: 'Best Seller',
      badgeClass: 'tag-bestseller',
      startingPrice: '₹280',
      unit: 'per t-shirt',
      description: 'Premium 220 GSM 100% cotton matty fabric with ribbed collar and cuffs. Ideal for corporate uniforms, events, and staff wear.',
      specs: {
        'Fabric': '220 GSM Cotton Matty (Pre-shrunk)',
        'Branding': 'High-Density Computerized Embroidery or DTF',
        'Sizes': 'S, M, L, XL, XXL, 3XL',
        'Colors': 'Navy Blue, Black, White, Royal Blue, Maroon, Grey'
      },
      popular: true
    },
    {
      id: 'apparel-round-neck',
      image: 'assets/images/products/apparel-round-neck.jpg',
      name: 'Custom Round Neck Cotton T-Shirts',
      category: 'apparel',
      categoryName: 'Custom Apparel',
      badge: 'Popular',
      badgeClass: 'tag-custom',
      startingPrice: '₹190',
      unit: 'per t-shirt',
      description: 'Comfortable 180 GSM combed single jersey cotton tees. Vibrant photo-quality DTF printing on front chest, back, and sleeves.',
      specs: {
        'Fabric': '180 GSM 100% Combed Cotton (Bio-washed)',
        'Printing Technique': 'Direct-To-Film (DTF) / Screen Print',
        'Durability': '50+ Washes without fade or peel',
        'Min Order Quantity': '5 T-Shirts'
      },
      popular: true
    },
    {
      id: 'apparel-hoodies',
      image: 'assets/images/products/apparel-hoodies.jpg',
      name: 'Custom Branded Winter Hoodies',
      category: 'apparel',
      categoryName: 'Custom Apparel',
      badge: 'Winter Special',
      badgeClass: 'tag-new',
      startingPrice: '₹550',
      unit: 'per hoodie',
      description: 'Heavy 320 GSM brushed fleece cotton hoodies with kangaroo pockets and double-layer hood with drawstring.',
      specs: {
        'Fabric': '320 GSM Cotton Fleece Interior',
        'Options': 'Pullover Kangaroo Hoodie / Zip-up Hoodie',
        'Branding': 'High-Density Embroidery or DTF Print'
      },
      popular: false
    },
    {
      id: 'apparel-caps',
      image: 'assets/images/products/apparel-caps.jpg',
      name: 'Embroidered Baseball Caps',
      category: 'apparel',
      categoryName: 'Custom Apparel',
      badge: 'Promotional',
      badgeClass: 'tag-custom',
      startingPrice: '₹110',
      unit: 'per cap',
      description: 'Structured 6-panel twill cotton caps with brass buckle or velcro closure and front 3D embossed embroidery.',
      specs: {
        'Fabric': '100% Heavy Brushed Cotton Twill',
        'Closure': 'Adjustable metal buckle / Velcro back',
        'Min Order Quantity': '20 Caps'
      },
      popular: false
    },

    // 5. Marketing Collaterals & Prints
    {
      id: 'marketing-flyers',
      image: 'assets/images/products/marketing-flyers.jpg',
      name: 'Promotional Flyers & Pamphlets',
      category: 'marketing',
      categoryName: 'Marketing Collateral',
      badge: 'High Volume',
      badgeClass: 'tag-bestseller',
      startingPrice: '₹450',
      unit: 'per 500 pcs',
      description: 'Vibrant, high-contrast promotional inserts and hand-out pamphlets on glossy or matte art paper. Essential for business marketing.',
      specs: {
        'Paper Stock': '130 GSM / 170 GSM Art Paper',
        'Sizes': 'A5 (Half A4), A4 Standard, 8.5 x 5.5 inches',
        'Print Type': 'High-Speed Commercial Offset Print',
        'Turnaround': '1 to 2 Working Days'
      },
      popular: true
    },
    {
      id: 'marketing-brochures',
      image: 'assets/images/products/marketing-brochures.jpg',
      name: 'Folded Product Brochures',
      category: 'marketing',
      categoryName: 'Marketing Collateral',
      badge: 'Corporate',
      badgeClass: 'tag-custom',
      startingPrice: '₹850',
      unit: 'per 200 pcs',
      description: 'Professional multi-panel folded brochures with precision machine creasing. Perfect for presenting product lines and company profiles.',
      specs: {
        'Folds Available': 'Bi-Fold (4 Pages), Tri-Fold (6 Pages), Z-Fold',
        'Paper Stock': '250 GSM or 300 GSM Art Board',
        'Lamination': 'Thermal Matte or Gloss Lamination'
      },
      popular: true
    },
    {
      id: 'marketing-menus',
      image: 'assets/images/products/marketing-menus.jpg',
      name: 'Restaurant Menus & Table Tents',
      category: 'marketing',
      categoryName: 'Marketing Collateral',
      badge: 'Hospitality',
      badgeClass: 'tag-new',
      startingPrice: '₹160',
      unit: 'per laminated menu',
      description: 'Waterproof, tear-resistant heavy duty laminated food menus and acrylic table tent inserts for restaurants, cafes, and hotels.',
      specs: {
        'Protection': 'Thick 250 Micron Thermal Lamination (100% Washable)',
        'Binding': 'Hardbound Book, Spiral Wire-O, or Folded Card'
      },
      popular: false
    },
    {
      id: 'marketing-certificates',
      image: 'assets/images/products/marketing-certificates.jpg',
      name: 'Award Certificates & Diplomas',
      category: 'marketing',
      categoryName: 'Marketing Collateral',
      badge: 'Institutional',
      badgeClass: 'tag-custom',
      startingPrice: '₹22',
      unit: 'per certificate',
      description: 'Prestigious award certificates for schools, colleges, sports meets, and corporate recognition with optional gold foil border.',
      specs: {
        'Paper': '300 GSM Natural Textured / Pearl Ivory Paper',
        'Size': 'A4 Standard (210 x 297 mm)',
        'Enhancement': 'Embossed Gold Metallic Seal'
      },
      popular: false
    },

    // 6. Signages, Banners & Displays
    {
      id: 'signage-rollup-standee',
      image: 'assets/images/products/signage-rollup-standee.jpg',
      name: 'Roll-Up Banner Standees',
      category: 'signage',
      categoryName: 'Signage & Standees',
      badge: 'Events Top Pick',
      badgeClass: 'tag-bestseller',
      startingPrice: '₹850',
      unit: 'per complete unit',
      description: 'Aluminum retractable pull-up standee banner with anti-curl non-tear vinyl print and carry bag. Sets up in 30 seconds.',
      specs: {
        'Standard Size': '6 ft height x 2.5 ft / 3 ft width',
        'Media': 'Star Non-Tear Matte Laminated Film',
        'Hardware': 'Lightweight Heavy-Gauge Aluminum Base + Padded Bag',
        'Setup Time': 'Under 1 Minute'
      },
      popular: true
    },
    {
      id: 'signage-flex-banner',
      image: 'assets/images/products/signage-flex-banner.jpg',
      name: 'Outdoor Flex & Star Banners',
      category: 'signage',
      categoryName: 'Signage & Standees',
      badge: 'Economical',
      badgeClass: 'tag-bestseller',
      startingPrice: '₹12',
      unit: 'per sq. ft',
      description: 'High-definition eco-solvent outdoor banners with reinforced taped hems and metal eyelets for outdoor hoarding and storefronts.',
      specs: {
        'Media Quality': 'Normal Flex, Star Flex, Backlit Flex',
        'Resolution': '1440 DPI Japanese Eco-Solvent Ink',
        'Finishing': 'Reinforced Hemming + Brass Eyelets / Pockets'
      },
      popular: true
    },
    {
      id: 'signage-acrylic-led',
      image: 'assets/images/products/signage-acrylic-led.jpg',
      name: '3D Acrylic & LED Backlit Signboards',
      category: 'signage',
      categoryName: 'Signage & Standees',
      badge: 'Shopfront Special',
      badgeClass: 'tag-custom',
      startingPrice: '₹120',
      unit: 'per sq. inch',
      description: 'Premium illuminated shop and office facade signboards with laser-cut cast acrylic letters and Samsung waterproof LED modules.',
      specs: {
        'Face': 'Cast Acrylic 3mm/5mm with vinyl coating',
        'Base': 'Aluminum Composite Panel (ACP) Sheet',
        'Lighting': 'Samsung Waterproof High-Lumen LED Modules with Power Supply',
        'Warranty': '1 Year Full Electrical & LED Warranty'
      },
      popular: true
    },
    {
      id: 'signage-sunboard',
      image: 'assets/images/products/signage-sunboard.jpg',
      name: 'Sunboard Printed Displays',
      category: 'signage',
      categoryName: 'Signage & Standees',
      badge: 'Retail',
      badgeClass: 'tag-custom',
      startingPrice: '₹55',
      unit: 'per sq. ft',
      description: 'Direct laminated vinyl mounted on high-density 3mm or 5mm foam PVC board. Great for retail branding and indoor displays.',
      specs: {
        'Thickness': '3mm or 5mm Virgin Sunboard',
        'Lamination': 'Matte / Gloss Anti-Glare Scratch Resistant',
        'Mounting': 'Ready with 3M heavy-duty double side tape'
      },
      popular: false
    },

    // 7. Packaging & Labels
    {
      id: 'packaging-stickers',
      image: 'assets/images/products/packaging-stickers.jpg',
      name: 'Custom Die-Cut Stickers & Product Labels',
      category: 'packaging',
      categoryName: 'Packaging & Labels',
      badge: 'Best Seller',
      badgeClass: 'tag-bestseller',
      startingPrice: '₹180',
      unit: 'per 100 stickers',
      description: 'Custom contour-cut stickers and roll labels. Available in waterproof vinyl, transparent clear film, and metallic foil.',
      specs: {
        'Material': 'Waterproof Vinyl / Paper Chromo / Transparent',
        'Cut': 'Precision Digital Kiss-Cut or Die-Cut Any Shape',
        'Adhesive': 'Permanent Industrial Tack'
      },
      popular: true
    },
    {
      id: 'packaging-boxes',
      image: 'assets/images/products/packaging-boxes.jpg',
      name: 'Custom Printed Corrugated & Monocarton Boxes',
      category: 'packaging',
      categoryName: 'Packaging & Labels',
      badge: 'E-commerce',
      badgeClass: 'tag-custom',
      startingPrice: '₹18',
      unit: 'per box',
      description: 'Branded shipping mailer boxes, rigid gift boxes, and pharmaceutical/cosmetic monocarton packaging tailored to your dimensions.',
      specs: {
        'Flute': '3-Ply, 5-Ply E-Flute & B-Flute Corrugated Board',
        'Print': 'Full Color CMYK Exterior & Interior Printing',
        'Min Order Quantity': '50 Boxes'
      },
      popular: false
    },
    {
      id: 'packaging-paper-bags',
      image: 'assets/images/products/packaging-paper-bags.jpg',
      name: 'Eco-Friendly Kraft & Shopping Bags',
      category: 'packaging',
      categoryName: 'Packaging & Labels',
      badge: 'Eco Friendly',
      badgeClass: 'tag-new',
      startingPrice: '₹14',
      unit: 'per bag',
      description: 'Sturdy brown/white kraft paper shopping bags and luxury laminated art paper boutique bags with twisted or rope handles.',
      specs: {
        'Material': '120 GSM Virgin Brown Kraft or 250 GSM Art Board',
        'Handles': 'Twisted Paper Handle / Braided Cotton Rope',
        'Capacity': 'Holds up to 5 kg comfortably'
      },
      popular: true
    },

    // 8. Graphic Design Services
    {
      id: 'design-logo-branding',
      image: 'assets/images/products/design-logo-branding.jpg',
      name: 'Professional Logo & Brand Identity Design',
      category: 'design',
      categoryName: 'Design Services',
      badge: 'Creative',
      badgeClass: 'tag-custom',
      startingPrice: '₹999',
      unit: 'per project',
      description: 'Unique, copyright-ready vector logo design and corporate brand style guide crafted by in-house graphic designers.',
      specs: {
        'Deliverables': 'Vector AI, EPS, PDF, High-Res PNG, SVG',
        'Concepts': '3 Distinct Design Concepts to Choose From',
        'Revisions': 'Unlimited revisions until final satisfaction'
      },
      popular: true
    },
    {
      id: 'design-vector-prepress',
      image: 'assets/images/products/design-vector-prepress.jpg',
      name: 'Artwork Vectorization & Print Pre-Press',
      category: 'design',
      categoryName: 'Design Services',
      badge: 'Technical',
      badgeClass: 'tag-express',
      startingPrice: '₹199',
      unit: 'per file',
      description: 'Convert blurry JPEGs and sketches into crisp vector art with proper CMYK color separation, bleed margins, and cut lines.',
      specs: {
        'Turnaround': 'Within 2 to 4 hours',
        'Color Profile': 'Accurate CMYK Print Match'
      },
      popular: false
    }
  ],

  /**
   * Category-level & Product-level Customization Configurations
   * Defines selectable materials, orientations, corner types, sides, preset quantities, and bulk discount ladders.
   */
  configProfiles: {
    'business-cards': {
      title: 'Visiting Cards Customizer',
      materialsLabel: 'Paper Stock & Finish',
      materials: [
        { id: '350-matte',
      image: 'assets/images/products/350-matte.jpg', name: 'Standard 350 GSM Matte Laminated', desc: 'Smooth anti-glare finish, durable 350 GSM art board', basePrice: 180, perUnits: 100, isDefault: true },
        { id: '350-gloss',
      image: 'assets/images/products/350-gloss.jpg', name: 'Standard 350 GSM Gloss Laminated', desc: 'High-shine reflective finish with vibrant color pop', basePrice: 180, perUnits: 100 },
        { id: '400-velvet',
      image: 'assets/images/products/400-velvet.jpg', name: 'Premium 400 GSM Velvet Soft-Touch', desc: 'Ultra-luxurious silky suede tactile feel, executive grade', basePrice: 450, perUnits: 100 },
        { id: 'spot-uv',
      image: 'assets/images/products/spot-uv.jpg', name: 'Raised Spot UV + Matte Finish', desc: '3D clear gloss embossed selectively over logos & text', basePrice: 650, perUnits: 100 },
        { id: 'gold-foil',
      image: 'assets/images/products/gold-foil.jpg', name: 'Metallic Gold / Silver Hot Foil Stamped', desc: 'Rich shimmering metallic foil on heavy cardstock', basePrice: 850, perUnits: 100 },
        { id: 'pvc-plastic',
      image: 'assets/images/products/pvc-plastic.jpg', name: '0.76mm Waterproof Rigid PVC Plastic', desc: 'Untearable, 100% waterproof credit card grade plastic', basePrice: 750, perUnits: 50 }
      ],
      hasOrientation: true,
      orientations: [
        { id: 'landscape',
      image: 'assets/images/products/landscape.jpg', name: 'Horizontal (Landscape)', dim: '89 x 54 mm (Standard)', aspect: '1.65', isDefault: true },
        { id: 'portrait',
      image: 'assets/images/products/portrait.jpg', name: 'Vertical (Portrait)', dim: '54 x 89 mm (Modern)', aspect: '0.61' },
        { id: 'square',
      image: 'assets/images/products/square.jpg', name: 'Square Format', dim: '65 x 65 mm (Creative)', aspect: '1.0' }
      ],
      hasCornerTypes: true,
      cornerTypes: [
        { id: 'square',
      image: 'assets/images/products/square.jpg', name: 'Standard Square Corners', desc: 'Sharp, clean 90° precision cut', addonPerUnit: 0, isDefault: true },
        { id: 'rounded',
      image: 'assets/images/products/rounded.jpg', name: 'Rounded Corners (4mm Radius)', desc: 'Smooth die-cut rounded corners', addonPerUnit: 40 }
      ],
      hasSides: true,
      sides: [
        { id: 'single',
      image: 'assets/images/products/single.jpg', name: 'Single Sided (Front Only)', desc: 'Blank or solid reverse', addonPerUnit: 0, isDefault: true },
        { id: 'double',
      image: 'assets/images/products/double.jpg', name: 'Double Sided (Front & Back)', desc: 'Full color high-res printing on both sides', addonPerUnit: 60 }
      ],
      minQty: 100,
      step: 100,
      presetQuantities: [100, 250, 500, 1000, 2500, 5000],
      discountTiers: [
        { minQty: 5000, percent: 25, label: '25% Mega Bulk Savings' },
        { minQty: 2500, percent: 20, label: '20% Bulk Discount' },
        { minQty: 1000, percent: 15, label: '15% Bulk Discount' },
        { minQty: 500,  percent: 10, label: '10% Savings' },
        { minQty: 250,  percent: 5,  label: '5% Savings' }
      ]
    },

    'stationery': {
      title: 'Stationery & Office Prints Customizer',
      materialsLabel: 'Paper Grade & Stock',
      materials: [
        { id: '100-bond',
      image: 'assets/images/products/100-bond.jpg', name: '100 GSM Executive Bond Paper', desc: 'Smooth, bright white paper compatible with office printers', basePrice: 450, perUnits: 100, isDefault: true },
        { id: '120-sunshine',
      image: 'assets/images/products/120-sunshine.jpg', name: '120 GSM Super Sunshine Paper', desc: 'Heavier premium crisp sheet for executive correspondence', basePrice: 550, perUnits: 100 },
        { id: '130-texture',
      image: 'assets/images/products/130-texture.jpg', name: '130 GSM Royal Laid Textured Stock', desc: 'Textured luxury feel for certificates and high-level letters', basePrice: 750, perUnits: 100 },
        { id: 'pvc-id',
      image: 'assets/images/products/pvc-id.jpg', name: 'Rigid PVC Plastic CR80 + Satin Lanyard', desc: 'Credit card format with heat-transfer printed neck ribbon', basePrice: 65, perUnits: 1 }
      ],
      hasOrientation: true,
      orientations: [
        { id: 'portrait',
      image: 'assets/images/products/portrait.jpg', name: 'Vertical / Portrait (A4 Standard)', dim: '210 x 297 mm', aspect: '0.71', isDefault: true },
        { id: 'landscape',
      image: 'assets/images/products/landscape.jpg', name: 'Horizontal / Landscape (A4)', dim: '297 x 210 mm', aspect: '1.41' }
      ],
      hasCornerTypes: true,
      cornerTypes: [
        { id: 'square',
      image: 'assets/images/products/square.jpg', name: 'Standard Square Cut', desc: 'Sharp precision guillotine cut', addonPerUnit: 0, isDefault: true },
        { id: 'rounded',
      image: 'assets/images/products/rounded.jpg', name: 'Rounded Corners', desc: 'Smooth edge contouring', addonPerUnit: 30 }
      ],
      hasSides: true,
      sides: [
        { id: 'single',
      image: 'assets/images/products/single.jpg', name: 'Single Sided Print', desc: 'Front face full color', addonPerUnit: 0, isDefault: true },
        { id: 'double',
      image: 'assets/images/products/double.jpg', name: 'Double Sided Print', desc: 'Full color both sides', addonPerUnit: 120 }
      ],
      minQty: 100,
      step: 100,
      presetQuantities: [100, 250, 500, 1000, 2500, 5000],
      discountTiers: [
        { minQty: 5000, percent: 25, label: '25% Mega Bulk Savings' },
        { minQty: 2500, percent: 20, label: '20% Bulk Discount' },
        { minQty: 1000, percent: 15, label: '15% Bulk Discount' },
        { minQty: 500,  percent: 10, label: '10% Savings' },
        { minQty: 250,  percent: 5,  label: '5% Savings' }
      ]
    },

    'apparel': {
      title: 'Custom Apparel & Merchandise Customizer',
      materialsLabel: 'Fabric & Apparel Type',
      materials: [
        { id: 'cotton-180',
      image: 'assets/images/products/cotton-180.jpg', name: '180 GSM 100% Combed Cotton (Round Neck)', desc: 'Soft breathable cotton, premium DTF color print', basePrice: 190, perUnits: 1, isDefault: true },
        { id: 'polo-220',
      image: 'assets/images/products/polo-220.jpg', name: '220 GSM Heavy Cotton Matty Polo (Collar)', desc: 'Corporate collared polo, reinforced collar & cuffs', basePrice: 280, perUnits: 1 },
        { id: 'drifit-160',
      image: 'assets/images/products/drifit-160.jpg', name: '160 GSM Quick-Dry Dri-Fit Sports Polyester', desc: 'Moisture wicking fabric ideal for sports and events', basePrice: 140, perUnits: 1 },
        { id: 'hoodie-320',
      image: 'assets/images/products/hoodie-320.jpg', name: '320 GSM Brushed Fleece Premium Hoodie', desc: 'Warm winter hoodie with kangaroo pocket & hood', basePrice: 550, perUnits: 1 }
      ],
      hasOrientation: false,
      orientations: [],
      hasCornerTypes: false,
      cornerTypes: [],
      hasSides: true,
      sides: [
        { id: 'front',
      image: 'assets/images/products/front.jpg', name: 'Front Chest Logo Only', desc: 'Up to 10 x 10 cm high-def DTF print', addonPerUnit: 0, isDefault: true },
        { id: 'front-back',
      image: 'assets/images/products/front-back.jpg', name: 'Front Chest + Back Full Graphic', desc: 'Chest crest plus large A4/A3 back graphic', addonPerUnit: 60 }
      ],
      minQty: 5,
      step: 5,
      presetQuantities: [5, 10, 25, 50, 100, 250, 500],
      discountTiers: [
        { minQty: 250, percent: 25, label: '25% Corporate Volume Savings' },
        { minQty: 100, percent: 20, label: '20% Bulk Discount' },
        { minQty: 50,  percent: 15, label: '15% Volume Discount' },
        { minQty: 25,  percent: 10, label: '10% Team Discount' },
        { minQty: 10,  percent: 5,  label: '5% Group Savings' }
      ]
    },

    'signage': {
      title: 'Signages, Standees & Banners Customizer',
      materialsLabel: 'Signage Material & Hardware',
      materials: [
        { id: 'rollup-6x3',
      image: 'assets/images/products/rollup-6x3.jpg', name: 'Aluminum Roll-Up Standee (6 x 3 ft Star Vinyl)', desc: 'Lightweight retractable aluminum base with padded carry bag', basePrice: 850, perUnits: 1, isDefault: true },
        { id: 'rollup-6x2.5', name: 'Aluminum Roll-Up Standee (6 x 2.5 ft Star Vinyl)', desc: 'Compact portable aluminum banner stand with carry bag', basePrice: 750, perUnits: 1 },
        { id: 'star-flex',
      image: 'assets/images/products/star-flex.jpg', name: 'Eco-Solvent Heavy Star Flex Banner (approx 50 sq ft)', desc: 'Heavyweight weatherproof flex with corner eyelets', basePrice: 600, perUnits: 1 },
        { id: 'sunboard-3mm',
      image: 'assets/images/products/sunboard-3mm.jpg', name: '3mm Sunboard Direct Vinyl Mount (approx 20 sq ft)', desc: 'Rigid PVC sunboard with matte protective laminate', basePrice: 1100, perUnits: 1 },
        { id: 'acrylic-led',
      image: 'assets/images/products/acrylic-led.jpg', name: '3D Acrylic Letters + Waterproof Samsung LED', desc: 'Custom 3D illuminated letters for storefronts & corporate lobbies', basePrice: 2400, perUnits: 1 }
      ],
      hasOrientation: true,
      orientations: [
        { id: 'portrait',
      image: 'assets/images/products/portrait.jpg', name: 'Vertical / Portrait (6 x 3 ft)', dim: 'Height 6 ft x Width 3 ft', aspect: '0.5', isDefault: true },
        { id: 'landscape',
      image: 'assets/images/products/landscape.jpg', name: 'Horizontal / Landscape (8 x 4 ft)', dim: 'Width 8 ft x Height 4 ft', aspect: '2.0' }
      ],
      hasCornerTypes: true,
      cornerTypes: [
        { id: 'square',
      image: 'assets/images/products/square.jpg', name: 'Standard Finished Edge', desc: 'Clean trimmed perimeter', addonPerUnit: 0, isDefault: true },
        { id: 'eyelets',
      image: 'assets/images/products/eyelets.jpg', name: 'Heavy-Duty Brass Eyelets / Grommets', desc: 'Reinforced corner & edge grommets for easy hanging', addonPerUnit: 50 }
      ],
      hasSides: false,
      sides: [],
      minQty: 1,
      step: 1,
      presetQuantities: [1, 2, 5, 10, 20, 50],
      discountTiers: [
        { minQty: 20, percent: 20, label: '20% Large Order Savings' },
        { minQty: 10, percent: 15, label: '15% Volume Discount' },
        { minQty: 5,  percent: 10, label: '10% Multi-Unit Discount' },
        { minQty: 2,  percent: 5,  label: '5% Savings' }
      ]
    },

    'packaging': {
      title: 'Stickers, Labels & Packaging Customizer',
      materialsLabel: 'Substrate & Adhesive Film',
      materials: [
        { id: 'vinyl-waterproof',
      image: 'assets/images/products/vinyl-waterproof.jpg', name: 'Waterproof Vinyl Die-Cut Stickers', desc: 'Tearproof, waterproof outdoor rated vinyl with vibrant print', basePrice: 180, perUnits: 100, isDefault: true },
        { id: 'clear-transparent',
      image: 'assets/images/products/clear-transparent.jpg', name: 'Clear Transparent Film Stickers', desc: 'Crystal clear film for glass bottles and luxury packaging', basePrice: 220, perUnits: 100 },
        { id: 'chromo-paper',
      image: 'assets/images/products/chromo-paper.jpg', name: 'Chromo Gloss Paper Product Labels', desc: 'High-gloss cost effective labels supplied on pre-cut sheets', basePrice: 120, perUnits: 100 },
        { id: 'gold-foil-stk',
      image: 'assets/images/products/gold-foil-stk.jpg', name: 'Metallic Gold / Silver Foil Accent Stickers', desc: 'Shimmering metallic foil accents on dark or white substrate', basePrice: 380, perUnits: 100 },
        { id: 'kraft-bags',
      image: 'assets/images/products/kraft-bags.jpg', name: '120 GSM Virgin Kraft Shopping Bags with Handles', desc: 'Eco-friendly shopping bags custom branded with your logo', basePrice: 1400, perUnits: 100 }
      ],
      hasOrientation: true,
      orientations: [
        { id: 'square',
      image: 'assets/images/products/square.jpg', name: 'Square / Round Shape', dim: '50 x 50 mm (2 x 2 inch)', aspect: '1.0', isDefault: true },
        { id: 'landscape',
      image: 'assets/images/products/landscape.jpg', name: 'Rectangular Landscape', dim: '75 x 50 mm (3 x 2 inch)', aspect: '1.5' },
        { id: 'portrait',
      image: 'assets/images/products/portrait.jpg', name: 'Rectangular Portrait', dim: '50 x 75 mm (2 x 3 inch)', aspect: '0.67' }
      ],
      hasCornerTypes: true,
      cornerTypes: [
        { id: 'square',
      image: 'assets/images/products/square.jpg', name: 'Standard Square Cut', desc: 'Sharp edges', addonPerUnit: 0, isDefault: true },
        { id: 'rounded',
      image: 'assets/images/products/rounded.jpg', name: 'Die-Cut Rounded / Circle Shape', desc: 'Smooth radius cut for easy peeling', addonPerUnit: 30 }
      ],
      hasSides: false,
      sides: [],
      minQty: 100,
      step: 100,
      presetQuantities: [100, 250, 500, 1000, 2500, 5000],
      discountTiers: [
        { minQty: 5000, percent: 25, label: '25% Mega Bulk Savings' },
        { minQty: 2500, percent: 20, label: '20% Bulk Discount' },
        { minQty: 1000, percent: 15, label: '15% Bulk Discount' },
        { minQty: 500,  percent: 10, label: '10% Savings' },
        { minQty: 250,  percent: 5,  label: '5% Savings' }
      ]
    },

    'corporate-gifts': {
      title: 'Drinkware & Corporate Gifts Customizer',
      materialsLabel: 'Product Model & Finishing',
      materials: [
        { id: 'ceramic-mug',
      image: 'assets/images/products/ceramic-mug.jpg', name: 'Classic 11oz Ceramic Coffee Mug (Sublimation)', desc: 'Gloss white ceramic with full color wrap print, gift boxed', basePrice: 140, perUnits: 1, isDefault: true },
        { id: 'magic-mug',
      image: 'assets/images/products/magic-mug.jpg', name: 'Magic Color-Changing Photo Ceramic Mug', desc: 'Heat-activated thermochromic coating reveals print when hot', basePrice: 240, perUnits: 1 },
        { id: 'temp-flask',
      image: 'assets/images/products/temp-flask.jpg', name: 'Smart LED Temperature Bottle 500ml (SS304)', desc: 'Digital touch display lid, vacuum insulated, laser engraved', basePrice: 340, perUnits: 1 },
        { id: 'engraved-pen',
      image: 'assets/images/products/engraved-pen.jpg', name: 'Executive Metal Pen + Velveteen Presentation Box', desc: 'Precision laser engraved with individual or company name', basePrice: 120, perUnits: 1 },
        { id: 'onboarding-kit',
      image: 'assets/images/products/onboarding-kit.jpg', name: 'Premium 4-in-1 Employee Welcome Gift Box', desc: 'Includes Bottle, Diary, Pen & Keychain custom branded', basePrice: 850, perUnits: 1 }
      ],
      hasOrientation: false,
      orientations: [],
      hasCornerTypes: false,
      cornerTypes: [],
      hasSides: false,
      sides: [],
      minQty: 5,
      step: 5,
      presetQuantities: [5, 10, 25, 50, 100, 250],
      discountTiers: [
        { minQty: 250, percent: 25, label: '25% Corporate Mega Discount' },
        { minQty: 100, percent: 20, label: '20% Bulk Discount' },
        { minQty: 50,  percent: 15, label: '15% Volume Discount' },
        { minQty: 25,  percent: 10, label: '10% Savings' },
        { minQty: 10,  percent: 5,  label: '5% Savings' }
      ]
    },

    'marketing': {
      title: 'Flyers, Brochures & Marketing Customizer',
      materialsLabel: 'Paper Weight & Lamination',
      materials: [
        { id: '130-art',
      image: 'assets/images/products/130-art.jpg', name: '130 GSM Gloss Art Paper (Standard Flyers)', desc: 'Bright, glossy promotional paper with crisp text', basePrice: 450, perUnits: 500, isDefault: true },
        { id: '170-art',
      image: 'assets/images/products/170-art.jpg', name: '170 GSM Premium Art Paper (Brochures & Catalogs)', desc: 'Substantial, sturdy brochure stock with rich color reproduction', basePrice: 650, perUnits: 500 },
        { id: '300-card',
      image: 'assets/images/products/300-card.jpg', name: '300 GSM Heavy Cardstock + Matte Lamination', desc: 'Heavyweight card ideal for restaurant menus and counter cards', basePrice: 950, perUnits: 250 }
      ],
      hasOrientation: true,
      orientations: [
        { id: 'portrait',
      image: 'assets/images/products/portrait.jpg', name: 'Vertical / Portrait (A5 / A4)', dim: 'A5: 148 x 210 mm', aspect: '0.71', isDefault: true },
        { id: 'landscape',
      image: 'assets/images/products/landscape.jpg', name: 'Horizontal / Landscape (A5 / A4)', dim: 'A5: 210 x 148 mm', aspect: '1.41' }
      ],
      hasCornerTypes: true,
      cornerTypes: [
        { id: 'square',
      image: 'assets/images/products/square.jpg', name: 'Standard Square Cut', desc: 'Precision straight edges', addonPerUnit: 0, isDefault: true },
        { id: 'rounded',
      image: 'assets/images/products/rounded.jpg', name: 'Rounded Corners (4mm)', desc: 'Smooth die-cut corners', addonPerUnit: 50 }
      ],
      hasSides: true,
      sides: [
        { id: 'single',
      image: 'assets/images/products/single.jpg', name: 'Single Sided Print', desc: 'Front face full color', addonPerUnit: 0, isDefault: true },
        { id: 'double',
      image: 'assets/images/products/double.jpg', name: 'Double Sided Full Color', desc: 'Front and back vibrant color printing', addonPerUnit: 150 }
      ],
      minQty: 250,
      step: 250,
      presetQuantities: [250, 500, 1000, 2500, 5000],
      discountTiers: [
        { minQty: 5000, percent: 25, label: '25% Mega Volume Savings' },
        { minQty: 2500, percent: 20, label: '20% Bulk Discount' },
        { minQty: 1000, percent: 15, label: '15% Bulk Discount' },
        { minQty: 500,  percent: 10, label: '10% Savings' }
      ]
    },

    'design': {
      title: 'Design & Pre-Press Services',
      materialsLabel: 'Design Service Tier',
      materials: [
        { id: 'logo-brand',
      image: 'assets/images/products/logo-brand.jpg', name: 'Logo & Complete Brand Identity', desc: '3 Concepts, vector master files, style guide, full rights', basePrice: 999, perUnits: 1, isDefault: true },
        { id: 'vector-trace',
      image: 'assets/images/products/vector-trace.jpg', name: 'Artwork Vectorization & CMYK Pre-Press', desc: 'Convert raster to vector, color calibration, cut lines', basePrice: 199, perUnits: 1 },
        { id: 'banner-design',
      image: 'assets/images/products/banner-design.jpg', name: 'Marketing Banner / Social Media Graphic', desc: 'High-resolution CMYK banner or social media creative', basePrice: 350, perUnits: 1 }
      ],
      hasOrientation: false,
      orientations: [],
      hasCornerTypes: false,
      cornerTypes: [],
      hasSides: false,
      sides: [],
      minQty: 1,
      step: 1,
      presetQuantities: [1, 2, 3, 5],
      discountTiers: [
        { minQty: 5, percent: 20, label: '20% Multi-Project Discount' },
        { minQty: 3, percent: 10, label: '10% Package Discount' }
      ]
    }
  },

  /** Helper method to fetch single product by id */
  getProduct(productId) {
    if (!productId) return this.products[0];
    return this.products.find(p => p.id === productId) || this.products[0];
  },

  /** Helper method to get configurator profile for category */
  getConfigProfile(category) {
    return this.configProfiles[category] || this.configProfiles['business-cards'];
  },

  /** Helper to calculate real-time pricing and bulk savings */
  calculatePrice(category, materialId, cornerId, sidesId, qty) {
    const profile = this.getConfigProfile(category);
    const material = profile.materials.find(m => m.id === materialId) || profile.materials[0];
    
    let cornerAddon = 0;
    if (profile.hasCornerTypes && cornerId) {
      const corner = profile.cornerTypes.find(c => c.id === cornerId);
      if (corner) cornerAddon = corner.addonPerUnit;
    }

    let sidesAddon = 0;
    if (profile.hasSides && sidesId) {
      const side = profile.sides.find(s => s.id === sidesId);
      if (side) sidesAddon = side.addonPerUnit;
    }

    // Units ratio based on perUnits
    const unitsRatio = qty / material.perUnits;
    const baseTotal = unitsRatio * (material.basePrice + cornerAddon + sidesAddon);

    // Bulk discount ladder calculation
    let discountPercent = 0;
    let discountLabel = '';
    for (const tier of profile.discountTiers) {
      if (qty >= tier.minQty) {
        discountPercent = tier.percent;
        discountLabel = tier.label;
        break;
      }
    }

    const discountAmount = Math.round((baseTotal * discountPercent) / 100);
    const finalTotal = Math.max(0, Math.round(baseTotal - discountAmount));
    const unitPrice = (finalTotal / qty).toFixed(2);

    return {
      material,
      qty,
      baseTotal: Math.round(baseTotal),
      discountPercent,
      discountLabel,
      discountAmount,
      finalTotal,
      unitPrice
    };
  }
};

