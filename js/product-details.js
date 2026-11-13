/**
 * Shivba Graphics - Product Details & Configurator Controller
 * Dynamically configures materials, orientation, corner cuts, quantity, and live tiered bulk savings.
 * Direct WhatsApp order generation to Akshad Deshmukh (+91 9970833003).
 */

class ProductConfigurator {
  constructor() {
    this.product = null;
    this.profile = null;
    this.selectedMaterialId = null;
    this.selectedOrientationId = 'landscape';
    this.selectedCornerId = 'square';
    this.selectedSideId = 'single';
    this.quantity = 100;

    window.productConfigurator = this;
    this.init();
  }

  init() {
    if (typeof SHIVBA_CATALOG === 'undefined') return;

    // 1. Get product ID from URL query param
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || 'visiting-cards-standard';

    this.product = SHIVBA_CATALOG.getProduct(productId);
    this.profile = SHIVBA_CATALOG.getConfigProfile(this.product.category);

    // Set initial defaults
    const defaultMat = this.profile.materials.find(m => m.isDefault) || this.profile.materials[0];
    this.selectedMaterialId = defaultMat ? defaultMat.id : null;

    if (this.profile.hasOrientation && this.profile.orientations.length) {
      const defaultOri = this.profile.orientations.find(o => o.isDefault) || this.profile.orientations[0];
      this.selectedOrientationId = defaultOri ? defaultOri.id : null;
    }

    if (this.profile.hasCornerTypes && this.profile.cornerTypes.length) {
      const defaultCorner = this.profile.cornerTypes.find(c => c.isDefault) || this.profile.cornerTypes[0];
      this.selectedCornerId = defaultCorner ? defaultCorner.id : null;
    }

    if (this.profile.hasSides && this.profile.sides.length) {
      const defaultSide = this.profile.sides.find(s => s.isDefault) || this.profile.sides[0];
      this.selectedSideId = defaultSide ? defaultSide.id : null;
    }

    this.quantity = this.profile.minQty || 100;

    // 2. Render Page Content
    this.renderBreadcrumbs();
    this.renderProductInfo();
    this.renderSpecifications();
    this.renderConfigurator();
    this.renderRelatedProducts();

    // 3. Initial Price Calculation
    this.updateCalculation();
  }

  renderBreadcrumbs() {
    const list = document.getElementById('breadcrumb-list');
    if (!list) return;

    list.innerHTML = `
      <li><a href="index.html">Home</a></li>
      <li class="breadcrumb-separator">/</li>
      <li><a href="products.html">Products</a></li>
      <li class="breadcrumb-separator">/</li>
      <li><a href="products.html?cat=${this.product.category}">${this.product.categoryName}</a></li>
      <li class="breadcrumb-separator">/</li>
      <li class="breadcrumb-current">${this.product.name}</li>
    `;
  }

  renderProductInfo() {
    const titleEl = document.getElementById('detail-product-title');
    const catEl = document.getElementById('detail-product-cat');
    const descEl = document.getElementById('detail-product-desc');
    const badgeEl = document.getElementById('detail-product-badge');

    if (titleEl) titleEl.textContent = this.product.name;
    if (catEl) catEl.textContent = this.product.categoryName;
    if (descEl) descEl.textContent = this.product.description;
    if (badgeEl) {
      badgeEl.textContent = this.product.badge || 'Verified Quality';
      badgeEl.className = `tag ${this.product.badgeClass || 'tag-bestseller'}`;
    }

    const photoEl = document.getElementById('detail-product-photo');
    if (photoEl) {
      photoEl.src = this.product.image || `assets/images/products/${this.product.id}.jpg`;
      photoEl.alt = this.product.name;
    }

    // Update document title
    document.title = `${this.product.name} - Custom Printing | Shivba Graphics Sinnar`;
  }

  renderSpecifications() {
    const specsContainer = document.getElementById('specs-container');
    if (!specsContainer || !this.product.specs) return;

    specsContainer.innerHTML = Object.entries(this.product.specs).map(([label, val]) => `
      <div>
        <div class="spec-cell-label">${label}</div>
        <div class="spec-cell-value">${val}</div>
      </div>
    `).join('');
  }

  renderConfigurator() {
    // 1. Render Materials Dropdown Select
    const matSelect = document.getElementById('config-material-select');
    const matLabel = document.getElementById('materials-step-label');
    if (matLabel && this.profile.materialsLabel) {
      matLabel.textContent = this.profile.materialsLabel;
    }

    if (matSelect && this.profile.materials) {
      matSelect.innerHTML = this.profile.materials.map(mat => `
        <option value="${mat.id}" ${mat.id === this.selectedMaterialId ? 'selected' : ''}>
          ${mat.name} (₹${mat.basePrice} / ${mat.perUnits === 1 ? 'pc' : mat.perUnits + ' pcs'})
        </option>
      `).join('');

      matSelect.addEventListener('change', (e) => {
        this.selectedMaterialId = e.target.value;
        this.updateCalculation();
      });
    }

    // 2. Render Orientation Dropdown Select
    const oriGroup = document.getElementById('orientation-group');
    const oriSelect = document.getElementById('config-orientation-select');
    if (this.profile.hasOrientation && this.profile.orientations.length) {
      if (oriGroup) oriGroup.style.display = 'block';
      if (oriSelect) {
        oriSelect.innerHTML = this.profile.orientations.map(ori => `
          <option value="${ori.id}" ${ori.id === this.selectedOrientationId ? 'selected' : ''}>
            ${ori.name} — ${ori.dim}
          </option>
        `).join('');

        oriSelect.addEventListener('change', (e) => {
          this.selectedOrientationId = e.target.value;
          this.switchPreviewMode('mockup');
          this.updateCalculation();
        });
      }
    } else if (oriGroup) {
      oriGroup.style.display = 'none';
    }

    // 3. Render Corner Type Dropdown Select
    const cornerGroup = document.getElementById('corner-group');
    const cornerSelect = document.getElementById('config-corner-select');
    if (this.profile.hasCornerTypes && this.profile.cornerTypes.length) {
      if (cornerGroup) cornerGroup.style.display = 'block';
      if (cornerSelect) {
        cornerSelect.innerHTML = this.profile.cornerTypes.map(c => `
          <option value="${c.id}" ${c.id === this.selectedCornerId ? 'selected' : ''}>
            ${c.name} ${c.addonPerUnit > 0 ? `(+₹${c.addonPerUnit})` : '(Included)'}
          </option>
        `).join('');

        cornerSelect.addEventListener('change', (e) => {
          this.selectedCornerId = e.target.value;
          this.switchPreviewMode('mockup');
          this.updateCalculation();
        });
      }
    } else if (cornerGroup) {
      cornerGroup.style.display = 'none';
    }

    // 4. Render Sides / Lamination Dropdown Select
    const sidesGroup = document.getElementById('sides-group');
    const sidesSelect = document.getElementById('config-sides-select');
    if (this.profile.hasSides && this.profile.sides.length) {
      if (sidesGroup) sidesGroup.style.display = 'block';
      if (sidesSelect) {
        sidesSelect.innerHTML = this.profile.sides.map(s => `
          <option value="${s.id}" ${s.id === this.selectedSideId ? 'selected' : ''}>
            ${s.name} ${s.addonPerUnit > 0 ? `(+₹${s.addonPerUnit})` : '(Included)'}
          </option>
        `).join('');

        sidesSelect.addEventListener('change', (e) => {
          this.selectedSideId = e.target.value;
          this.updateCalculation();
        });
      }
    } else if (sidesGroup) {
      sidesGroup.style.display = 'none';
    }

    // 5. Render Quantity Dropdown Select + Stepper
    const qtySelect = document.getElementById('config-qty-select');
    const qtyInput = document.getElementById('calc-qty-input');
    const qtyMinus = document.getElementById('calc-qty-minus');
    const qtyPlus = document.getElementById('calc-qty-plus');

    if (qtySelect && this.profile.presetQuantities) {
      qtySelect.innerHTML = this.profile.presetQuantities.map(q => {
        const tier = this.profile.discountTiers.find(t => q >= t.minQty);
        const tierLabel = tier ? `— Save ${tier.percent}% Bulk Discount` : '— Standard Rate';
        return `<option value="${q}" ${q === this.quantity ? 'selected' : ''}>${q} pcs ${tierLabel}</option>`;
      }).join('') + `<option value="custom">Custom Quantity...</option>`;

      qtySelect.addEventListener('change', (e) => {
        if (e.target.value === 'custom') {
          if (qtyInput) qtyInput.focus();
        } else {
          this.setQuantity(parseInt(e.target.value));
        }
      });
    }

    if (qtyInput) {
      qtyInput.value = this.quantity;
      qtyInput.min = this.profile.minQty || 1;
      qtyInput.step = this.profile.step || 1;

      qtyInput.addEventListener('input', (e) => {
        let val = parseInt(e.target.value) || this.profile.minQty;
        if (val < (this.profile.minQty || 1)) val = this.profile.minQty;
        this.quantity = val;

        if (qtySelect) {
          const matchOpt = Array.from(qtySelect.options).find(opt => parseInt(opt.value) === val);
          qtySelect.value = matchOpt ? val : 'custom';
        }

        this.updateCalculation();
      });
    }

    if (qtyMinus) {
      qtyMinus.addEventListener('click', () => {
        const step = this.profile.step || 1;
        const min = this.profile.minQty || 1;
        let newQty = this.quantity - step;
        if (newQty < min) newQty = min;
        this.setQuantity(newQty);
      });
    }

    if (qtyPlus) {
      qtyPlus.addEventListener('click', () => {
        const step = this.profile.step || 1;
        this.setQuantity(this.quantity + step);
      });
    }
  }

  setQuantity(q) {
    this.quantity = q;
    const qtyInput = document.getElementById('calc-qty-input');
    if (qtyInput) qtyInput.value = q;

    const qtySelect = document.getElementById('config-qty-select');
    if (qtySelect) {
      const matchOpt = Array.from(qtySelect.options).find(opt => parseInt(opt.value) === q);
      if (matchOpt) {
        qtySelect.value = q;
      } else {
        qtySelect.value = 'custom';
      }
    }

    this.updateCalculation();
  }

  updateCalculation() {
    // 1. Calculate price with catalog helper
    const calc = SHIVBA_CATALOG.calculatePrice(
      this.product.category,
      this.selectedMaterialId,
      this.selectedCornerId,
      this.selectedSideId,
      this.quantity
    );

    // 2. Update Live Visual Preview Card
    this.updateVisualPreview(calc);

    // 3. Update Price Breakdown Card
    const baseRateEl = document.getElementById('calc-breakdown-baserate');
    const qtyLabelEl = document.getElementById('calc-breakdown-qty');
    const discountRow = document.getElementById('calc-discount-row');
    const discountLabelEl = document.getElementById('calc-discount-label');
    const discountValEl = document.getElementById('calc-discount-val');
    const grandOriginalEl = document.getElementById('calc-grand-original');
    const grandTotalEl = document.getElementById('calc-grand-total');
    const unitRateEl = document.getElementById('calc-unit-rate-label');
    const savingsBanner = document.getElementById('bulk-savings-banner');
    const savingsText = document.getElementById('bulk-savings-text');

    if (baseRateEl) {
      baseRateEl.textContent = `₹${calc.material.basePrice} / ${calc.material.perUnits === 1 ? 'pc' : calc.material.perUnits + ' pcs'}`;
    }

    if (qtyLabelEl) {
      qtyLabelEl.textContent = `${this.quantity} pcs`;
    }

    if (calc.discountPercent > 0) {
      if (discountRow) discountRow.style.display = 'flex';
      if (discountLabelEl) discountLabelEl.textContent = `Bulk Discount (${calc.discountPercent}% Off):`;
      if (discountValEl) discountValEl.textContent = `-₹${calc.discountAmount.toLocaleString('en-IN')}`;

      if (grandOriginalEl) {
        grandOriginalEl.style.display = 'inline';
        grandOriginalEl.textContent = `₹${calc.baseTotal.toLocaleString('en-IN')}`;
      }

      if (savingsBanner) {
        savingsBanner.style.display = 'flex';
        if (savingsText) {
          savingsText.innerHTML = `🎉 <strong>${calc.discountLabel} Applied!</strong> You save ₹${calc.discountAmount.toLocaleString('en-IN')} on this order.`;
        }
      }
    } else {
      if (discountRow) discountRow.style.display = 'none';
      if (grandOriginalEl) grandOriginalEl.style.display = 'none';
      if (savingsBanner) savingsBanner.style.display = 'none';
    }

    if (grandTotalEl) {
      grandTotalEl.textContent = `₹${calc.finalTotal.toLocaleString('en-IN')}`;
    }

    if (unitRateEl) {
      unitRateEl.textContent = `(Approx. ₹${calc.unitPrice} per piece)`;
    }

    // 4. Update WhatsApp Order Button
    this.updateWhatsAppButton(calc);
  }

  updateVisualPreview(calc) {
    const cardEl = document.getElementById('live-morphing-card');
    const previewDim = document.getElementById('preview-dim-label');
    const finishTag = document.getElementById('preview-finish-tag');

    if (!cardEl) return;

    // Reset layout classes
    cardEl.classList.remove('portrait-mode', 'square-mode', 'rounded-corners-mode');

    // Orientation
    if (this.selectedOrientationId === 'portrait') {
      cardEl.classList.add('portrait-mode');
    } else if (this.selectedOrientationId === 'square') {
      cardEl.classList.add('square-mode');
    }

    // Corner radius
    if (this.selectedCornerId === 'rounded') {
      cardEl.classList.add('rounded-corners-mode');
    }

    // Dimensions display
    if (previewDim) {
      const ori = this.profile.orientations?.find(o => o.id === this.selectedOrientationId);
      previewDim.textContent = ori ? ori.dim : `${this.quantity} pcs`;
    }

    // Finish tag
    if (finishTag && calc.material) {
      finishTag.textContent = calc.material.name;
    }
  }

  switchPreviewMode(mode) {
    const photoView = document.getElementById('preview-photo-view');
    const mockupView = document.getElementById('live-morphing-card');
    const tabPhoto = document.getElementById('tab-btn-photo');
    const tabMockup = document.getElementById('tab-btn-mockup');
    const noteText = document.getElementById('preview-note-text');

    if (mode === 'mockup') {
      if (photoView) photoView.style.display = 'none';
      if (mockupView) mockupView.style.display = 'flex';
      if (tabPhoto) tabPhoto.classList.remove('active');
      if (tabMockup) tabMockup.classList.add('active');
      if (noteText) noteText.textContent = '*Visual mockup dynamically reflects orientation and corner radius selections.';
    } else {
      if (photoView) photoView.style.display = 'flex';
      if (mockupView) mockupView.style.display = 'none';
      if (tabPhoto) tabPhoto.classList.add('active');
      if (tabMockup) tabMockup.classList.remove('active');
      if (noteText) noteText.textContent = '*High-definition studio photography of genuine finished product.';
    }
  }

  updateWhatsAppButton(calc) {
    const waBtn = document.getElementById('btn-whatsapp-order');
    if (!waBtn) return;

    // Get selected option labels
    const oriObj = this.profile.orientations?.find(o => o.id === this.selectedOrientationId);
    const cornerObj = this.profile.cornerTypes?.find(c => c.id === this.selectedCornerId);
    const sideObj = this.profile.sides?.find(s => s.id === this.selectedSideId);

    const messageLines = [
      `Namaste Akshad ji! I want to configure & order from Shivba Graphics:`,
      ``,
      `📋 Product: ${this.product.name} (${this.product.categoryName})`,
      `📄 Material / Finish: ${calc.material.name}`,
      oriObj ? `📐 Orientation: ${oriObj.name} (${oriObj.dim})` : null,
      cornerObj ? `✂️ Corner Cut: ${cornerObj.name}` : null,
      sideObj ? `🖨️ Sides: ${sideObj.name}` : null,
      `🔢 Quantity: ${this.quantity} pcs`,
      ``,
      `💰 Total Estimated Price: ₹${calc.finalTotal.toLocaleString('en-IN')}`,
      calc.discountPercent > 0 ? `🎁 Bulk Savings: ${calc.discountPercent}% OFF (-₹${calc.discountAmount})` : null,
      `📊 Unit Cost: ~₹${calc.unitPrice} / piece`,
      ``,
      `Please confirm artwork submission instructions and dispatch schedule.`,
      `Delivery Location: Sinnar / MIDC.`
    ].filter(line => line !== null);

    const text = encodeURIComponent(messageLines.join('\n'));
    waBtn.href = `https://wa.me/919970833003?text=${text}`;
  }

  renderRelatedProducts() {
    const relatedGrid = document.getElementById('related-products-grid');
    if (!relatedGrid) return;

    // Filter products in same category (or other popular ones)
    const related = SHIVBA_CATALOG.products
      .filter(p => p.id !== this.product.id && p.category === this.product.category)
      .slice(0, 4);

    // If not enough in category, fill with popular
    if (related.length < 4) {
      const extras = SHIVBA_CATALOG.products
        .filter(p => p.id !== this.product.id && !related.find(r => r.id === p.id))
        .slice(0, 4 - related.length);
      related.push(...extras);
    }

    relatedGrid.innerHTML = related.map(p => `
      <div class="product-card">
        <a href="product-details.html?id=${p.id}" class="product-card-visual" style="text-decoration: none;">
          <span class="tag ${p.badgeClass || 'tag-bestseller'} product-card-badge">${p.badge}</span>
          <div class="product-card-art">
            <img src="${p.image || 'assets/images/products/' + p.id + '.jpg'}" alt="${p.name}" class="product-card-img" loading="lazy">
          </div>
        </a>
        <div class="product-card-body">
          <span class="product-card-category">${p.categoryName}</span>
          <h4 class="product-card-title"><a href="product-details.html?id=${p.id}" style="color: inherit; text-decoration: none;">${p.name}</a></h4>
          <p class="product-card-desc">${p.description}</p>
          <div class="product-card-meta">
            <div>
              <span class="product-price-label">Starting at</span>
              <span class="product-price-val">${p.startingPrice}</span>
            </div>
            <span style="font-size: 0.8rem; color: var(--text-muted);">${p.unit}</span>
          </div>
          <div class="product-actions" style="margin-top: 1rem;">
            <a href="product-details.html?id=${p.id}" class="btn btn-primary btn-sm" style="width: 100%; text-align: center;">
              Customize & Price →
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Instantiate on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  new ProductConfigurator();
});
