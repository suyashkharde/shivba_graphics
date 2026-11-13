/**
 * Shivba Graphics - Main Frontend Script
 * Mobile Navigation, Quick Search, Modal Dialogs & Event Handlers
 * Owner: Akshad Deshmukh (+91 9970833003)
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initHeaderSearch();
  initQuickViewModal();
  initCategoryTabs();
  initHeroBannersSlider();
});

/** Sticky Header Behavior */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/** Mobile Drawer Navigation */
function initMobileDrawer() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const closeBtn = document.querySelector('.drawer-close-btn');

  if (!hamburgerBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  hamburgerBtn.addEventListener('click', openDrawer);
  overlay.addEventListener('click', closeDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  // Close drawer on clicking internal links
  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/** Instant Global Search with Auto-Complete */
function initHeaderSearch() {
  const searchInput = document.getElementById('global-search-input');
  const searchDropdown = document.getElementById('search-dropdown');

  if (!searchInput || !searchDropdown || typeof SHIVBA_CATALOG === 'undefined') return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    
    if (query.length < 2) {
      searchDropdown.classList.remove('active');
      searchDropdown.innerHTML = '';
      return;
    }

    const matches = SHIVBA_CATALOG.products.filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.categoryName.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    ).slice(0, 5);

    if (matches.length === 0) {
      searchDropdown.innerHTML = `
        <div style="padding: 1rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          No matching products found. <br>
          <a href="https://wa.me/919970833003?text=Hi%20Akshad%20ji,%20do%20you%20print%20${encodeURIComponent(query)}?" target="_blank" style="color: var(--accent); font-weight: 600; text-decoration: underline; margin-top: 0.4rem; display: inline-block;">
            Ask Akshad Deshmukh via WhatsApp
          </a>
        </div>
      `;
      searchDropdown.classList.add('active');
      return;
    }

    searchDropdown.innerHTML = matches.map(item => `
      <a href="product-details.html?id=${item.id}" class="search-result-item" style="text-decoration: none; color: inherit;">
        <div class="search-result-thumb">
          <img src="${item.image || 'assets/images/products/' + item.id + '.jpg'}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="flex: 1;">
          <div class="search-result-title">${item.name}</div>
          <div class="search-result-cat">${item.categoryName} • ${item.startingPrice}</div>
        </div>
      </a>
    `).join('');

    searchDropdown.classList.add('active');
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
      searchDropdown.classList.remove('active');
    }
  });
}

/** Quick View Modal Handler */
function initQuickViewModal() {
  const modalBackdrop = document.getElementById('quickview-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalBackdrop) return;

  const closeModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

/** Open Quick View for a specific product ID */
window.openProductQuickView = function(productId) {
  if (typeof SHIVBA_CATALOG === 'undefined') return;

  const product = SHIVBA_CATALOG.products.find(p => p.id === productId);
  if (!product) return;

  const modalBackdrop = document.getElementById('quickview-modal');
  if (!modalBackdrop) return;

  document.getElementById('modal-cat-tag').textContent = product.categoryName;
  document.getElementById('modal-title').textContent = product.name;
  document.getElementById('modal-desc').textContent = product.description;
  document.getElementById('modal-price').textContent = `${product.startingPrice} (${product.unit})`;

  const modalImg = document.getElementById('modal-img');
  if (modalImg) {
    modalImg.src = product.image || `assets/images/products/${product.id}.jpg`;
    modalImg.alt = product.name;
  }

  // Specs list
  const specsContainer = document.getElementById('modal-specs-container');
  if (specsContainer && product.specs) {
    specsContainer.innerHTML = Object.entries(product.specs).map(([key, val]) => `
      <div class="modal-spec-row">
        <span class="modal-spec-label">${key}</span>
        <span class="modal-spec-val">${val}</span>
      </div>
    `).join('');
  }

  // Set Customize & Calculate Price button
  const customBtn = document.getElementById('modal-customize-btn');
  if (customBtn) {
    customBtn.href = `product-details.html?id=${product.id}`;
  }

  // Set WhatsApp button link
  const waBtn = document.getElementById('modal-wa-btn');
  if (waBtn) {
    const waText = encodeURIComponent(
      `Hello Akshad ji! I am interested in inquiring about "${product.name}" from Shivba Graphics website.\n` +
      `Category: ${product.categoryName}\n` +
      `Starting rate: ${product.startingPrice} (${product.unit})\n\n` +
      `Please share catalog, custom design options, and pricing for my requirement. Location: Sinnar.`
    );
    waBtn.href = `https://wa.me/919970833003?text=${waText}`;
  }

  // Open modal
  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Close search dropdown if open
  const searchDropdown = document.getElementById('search-dropdown');
  if (searchDropdown) searchDropdown.classList.remove('active');
};

/** Category Tabs on Products Page / Homepage */
function initCategoryTabs() {
  const tabs = document.querySelectorAll('.cat-filter-btn');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterCat = tab.getAttribute('data-filter');
      filterProductGrid(filterCat);
    });
  });
}

function filterProductGrid(cat) {
  const cards = document.querySelectorAll('.product-grid-item');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (cat === 'all' || cardCat === cat) {
      card.style.display = 'flex';
      card.classList.add('animate-fade-in');
    } else {
      card.style.display = 'none';
    }
  });
}

/** Hero Banners Slider Controller */
function initHeroBannersSlider() {
  const track = document.getElementById('hero-banners-track');
  const prevBtn = document.getElementById('hero-slider-prev');
  const nextBtn = document.getElementById('hero-slider-next');

  if (!track || !nextBtn) return;

  const updateArrows = () => {
    const maxScroll = track.scrollWidth - track.clientWidth - 5;
    if (prevBtn) {
      if (track.scrollLeft > 20) {
        prevBtn.classList.add('visible');
      } else {
        prevBtn.classList.remove('visible');
      }
    }
    if (track.scrollLeft >= maxScroll) {
      nextBtn.classList.add('hidden');
    } else {
      nextBtn.classList.remove('hidden');
    }
  };

  const getScrollAmount = () => {
    const firstItem = track.querySelector('.hero-slider-item');
    return firstItem ? firstItem.offsetWidth + 20 : 420;
  };

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });
  }

  track.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);
  updateArrows();
}
