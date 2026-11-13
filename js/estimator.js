/**
 * Shivba Graphics - Instant Quote & Price Estimator
 * Dynamically computes estimates & builds 1-click WhatsApp message to Akshad Deshmukh (+91 9970833003)
 */

const ESTIMATOR_CONFIG = {
  ownerPhone: '919970833003',
  categories: {
    'visiting-cards': {
      label: 'Visiting Cards / Business Cards',
      options: [
        { id: 'vc-matte', name: 'Standard 350 GSM Matte Laminated', basePrice: 180, perUnits: 100, minQty: 100, step: 100 },
        { id: 'vc-gloss', name: 'Standard 350 GSM Gloss Laminated', basePrice: 180, perUnits: 100, minQty: 100, step: 100 },
        { id: 'vc-velvet', name: 'Premium Velvet Soft-Touch (400 GSM)', basePrice: 450, perUnits: 100, minQty: 100, step: 100 },
        { id: 'vc-spotuv', name: 'Raised Spot UV + Matte Finish', basePrice: 650, perUnits: 100, minQty: 100, step: 100 },
        { id: 'vc-foil', name: 'Metallic Gold / Silver Foil Stamped', basePrice: 850, perUnits: 100, minQty: 100, step: 100 },
        { id: 'vc-pvc', name: 'Waterproof Rigid PVC Plastic (Rounded Corners)', basePrice: 750, perUnits: 50, minQty: 50, step: 50 }
      ]
    },
    't-shirts': {
      label: 'Custom T-Shirts & Apparel',
      options: [
        { id: 't-round-cotton', name: '180 GSM Combed Cotton Round Neck (DTF Print)', basePrice: 190, perUnits: 1, minQty: 5, step: 5 },
        { id: 't-polo-matty', name: '220 GSM Cotton Matty Polo (Embroidered / DTF)', basePrice: 280, perUnits: 1, minQty: 5, step: 5 },
        { id: 't-drifit-promo', name: '160 GSM Dri-Fit Sports & Event T-Shirt', basePrice: 140, perUnits: 1, minQty: 10, step: 5 },
        { id: 't-hoodie-fleece', name: '320 GSM Brushed Cotton Fleece Hoodie', basePrice: 550, perUnits: 1, minQty: 5, step: 5 }
      ]
    },
    'standees-banners': {
      label: 'Signages, Standees & Banners',
      options: [
        { id: 'st-rollup-6x3', name: 'Aluminum Roll-Up Standee (6 x 3 ft Star Vinyl + Bag)', basePrice: 850, perUnits: 1, minQty: 1, step: 1 },
        { id: 'st-rollup-6x2.5', name: 'Aluminum Roll-Up Standee (6 x 2.5 ft Star Vinyl + Bag)', basePrice: 750, perUnits: 1, minQty: 1, step: 1 },
        { id: 'st-flex-outdoor', name: 'Eco-Solvent Star Flex Banner (approx 50 sq.ft)', basePrice: 600, perUnits: 1, minQty: 1, step: 1 },
        { id: 'st-sunboard-disp', name: '3mm Sunboard Direct Vinyl Mount (approx 20 sq.ft)', basePrice: 1100, perUnits: 1, minQty: 1, step: 1 }
      ]
    },
    'mugs-bottles': {
      label: 'Drinkware & Corporate Gifts',
      options: [
        { id: 'mg-white-mug', name: 'Classic Ceramic Coffee Mug (Sublimation Print + Box)', basePrice: 140, perUnits: 1, minQty: 5, step: 5 },
        { id: 'mg-magic-mug', name: 'Magic Color-Changing Photo Mug', basePrice: 240, perUnits: 1, minQty: 5, step: 5 },
        { id: 'mg-temp-flask', name: 'Smart LED Temperature Bottle 500ml (Laser Engraved)', basePrice: 340, perUnits: 1, minQty: 5, step: 5 },
        { id: 'mg-welcome-kit', name: 'Premium Corporate 4-in-1 Onboarding Gift Kit', basePrice: 850, perUnits: 1, minQty: 5, step: 5 }
      ]
    },
    'stickers-labels': {
      label: 'Custom Stickers & Labels',
      options: [
        { id: 'stk-vinyl-waterproof', name: 'Waterproof Vinyl Die-Cut Stickers (2x2 inch)', basePrice: 180, perUnits: 100, minQty: 100, step: 100 },
        { id: 'stk-clear-transp', name: 'Clear Transparent Film Stickers (2x2 inch)', basePrice: 220, perUnits: 100, minQty: 100, step: 100 },
        { id: 'stk-paper-chromo', name: 'Chromo Paper Product Labels on Sheet', basePrice: 120, perUnits: 100, minQty: 100, step: 100 },
        { id: 'stk-gold-foil', name: 'Metallic Gold/Silver Foil Accent Labels', basePrice: 380, perUnits: 100, minQty: 100, step: 100 }
      ]
    },
    'stationery-marketing': {
      label: 'Letterheads, Flyers & Stationery',
      options: [
        { id: 'sm-letterhead-100', name: 'Executive Letterheads (100 GSM Bond Paper A4)', basePrice: 450, perUnits: 100, minQty: 100, step: 100 },
        { id: 'sm-flyers-a5', name: 'Promotional Art Paper Flyers A5 (130 GSM Gloss)', basePrice: 450, perUnits: 500, minQty: 500, step: 500 },
        { id: 'sm-bill-book', name: 'Carbonless Duplicate Bill Book (100 sets numbered)', basePrice: 320, perUnits: 1, minQty: 5, step: 5 },
        { id: 'sm-stamp-flash', name: 'Pre-Inked Flash Polymer Rubber Stamp', basePrice: 220, perUnits: 1, minQty: 1, step: 1 }
      ]
    }
  }
};

class QuoteEstimator {
  constructor() {
    this.catSelect = document.getElementById('calc-category');
    this.optSelect = document.getElementById('calc-option');
    this.qtyInput = document.getElementById('calc-qty');
    this.qtyMinus = document.getElementById('calc-qty-minus');
    this.qtyPlus = document.getElementById('calc-qty-plus');
    this.rateDisplay = document.getElementById('calc-unit-rate');
    this.totalDisplay = document.getElementById('calc-total-price');
    this.savingsRow = document.getElementById('calc-savings-row');
    this.savingsDisplay = document.getElementById('calc-savings-val');
    this.whatsappBtn = document.getElementById('calc-whatsapp-btn');

    if (this.catSelect) {
      this.init();
    }
  }

  init() {
    // Populate categories
    this.catSelect.innerHTML = '';
    Object.keys(ESTIMATOR_CONFIG.categories).forEach(key => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = ESTIMATOR_CONFIG.categories[key].label;
      this.catSelect.appendChild(opt);
    });

    // Event listeners
    this.catSelect.addEventListener('change', () => this.handleCategoryChange());
    this.optSelect.addEventListener('change', () => this.handleOptionChange());
    
    if (this.qtyInput) {
      this.qtyInput.addEventListener('input', () => this.calculate());
    }

    if (this.qtyMinus) {
      this.qtyMinus.addEventListener('click', () => this.stepQuantity(-1));
    }

    if (this.qtyPlus) {
      this.qtyPlus.addEventListener('click', () => this.stepQuantity(1));
    }

    // Initialize first state
    this.handleCategoryChange();
  }

  handleCategoryChange() {
    const catKey = this.catSelect.value;
    const catData = ESTIMATOR_CONFIG.categories[catKey];

    this.optSelect.innerHTML = '';
    catData.options.forEach(item => {
      const opt = document.createElement('option');
      opt.value = item.id;
      opt.textContent = item.name;
      this.optSelect.appendChild(opt);
    });

    this.handleOptionChange();
  }

  getCurrentOption() {
    const catKey = this.catSelect.value;
    const optId = this.optSelect.value;
    const catData = ESTIMATOR_CONFIG.categories[catKey];
    return catData.options.find(o => o.id === optId) || catData.options[0];
  }

  handleOptionChange() {
    const currentOpt = this.getCurrentOption();
    if (currentOpt) {
      this.qtyInput.value = currentOpt.minQty;
      this.qtyInput.min = currentOpt.minQty;
      this.qtyInput.step = currentOpt.step;
      this.calculate();
    }
  }

  stepQuantity(direction) {
    const currentOpt = this.getCurrentOption();
    let currentVal = parseInt(this.qtyInput.value) || currentOpt.minQty;
    const step = currentOpt.step || 1;

    currentVal += (direction * step);
    if (currentVal < currentOpt.minQty) {
      currentVal = currentOpt.minQty;
    }

    this.qtyInput.value = currentVal;
    this.calculate();
  }

  calculate() {
    const currentOpt = this.getCurrentOption();
    if (!currentOpt) return;

    let qty = parseInt(this.qtyInput.value) || currentOpt.minQty;
    if (qty < currentOpt.minQty) {
      qty = currentOpt.minQty;
      this.qtyInput.value = qty;
    }

    // Unit rate
    const unitsRatio = qty / currentOpt.perUnits;
    let baseTotal = unitsRatio * currentOpt.basePrice;

    // Apply Tiered Bulk Savings discount
    let discountPercent = 0;
    if (qty >= currentOpt.minQty * 5) {
      discountPercent = 12; // 12% bulk discount
    } else if (qty >= currentOpt.minQty * 3) {
      discountPercent = 7; // 7% bulk discount
    }

    const savingsAmount = Math.round((baseTotal * discountPercent) / 100);
    const finalTotal = Math.round(baseTotal - savingsAmount);

    // Update UI
    this.rateDisplay.textContent = `₹${currentOpt.basePrice} / ${currentOpt.perUnits === 1 ? 'pc' : currentOpt.perUnits + ' pcs'}`;
    this.totalDisplay.textContent = `₹${finalTotal.toLocaleString('en-IN')}`;

    if (this.savingsRow && this.savingsDisplay) {
      if (savingsAmount > 0) {
        this.savingsRow.style.display = 'flex';
        this.savingsDisplay.textContent = `-₹${savingsAmount.toLocaleString('en-IN')} (${discountPercent}% Bulk Save)`;
      } else {
        this.savingsRow.style.display = 'none';
      }
    }

    // Build WhatsApp URL
    const catLabel = this.catSelect.options[this.catSelect.selectedIndex].text;
    const optLabel = currentOpt.name;
    const message = `Hello Akshad ji! I am inquiring from the Shivba Graphics website for an order:\n\n` +
      `📦 Category: ${catLabel}\n` +
      `✨ Product & Finish: ${optLabel}\n` +
      `🔢 Quantity: ${qty} pcs\n` +
      `💰 Estimated Price: ₹${finalTotal.toLocaleString('en-IN')}\n\n` +
      `Please confirm the final quote and dispatch timeline for Sinnar. Thank you!`;

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/${ESTIMATOR_CONFIG.ownerPhone}?text=${encodedMsg}`;

    if (this.whatsappBtn) {
      this.whatsappBtn.href = waUrl;
    }
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new QuoteEstimator();
});
