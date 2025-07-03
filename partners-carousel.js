// ===== NECIB LUXE WASH - PREMIUM PARTNERS CAROUSEL (FINAL) =====
// Ultra-professional implementation with zero loops

// Single global state manager
window.NecibPartnersState = window.NecibPartnersState || {
  initialized: false,
  carousel: null,
  animating: false
};

// Partners data with proper error handling
const partnersData = [
  {
    id: 'condor',
    name: 'Condor Electronics',
    category: 'Partenaire Technologique',
    status: 'negotiating',
    statusText: 'En Négociation',
    logo: './assets/images/NOS PARTENAIRES/320px-Condor_Electronics_logo.svg.png',
    description: 'Fournisseur exclusif de nos équipements de laverie premium (WashPro 6000 & DryMax 8000), garantissant robustesse, innovation et efficacité énergétique pour une durabilité de 10 ans.',
    features: ['Innovation', 'Durabilité', 'Efficacité']
  },
  {
    id: 'mesrs',
    name: 'MESRS Algérie',
    category: 'Partenaire Institutionnel',
    status: 'institutional',
    statusText: 'Institutionnel',
    logo: './assets/images/NOS PARTENAIRES/Embleme-minister1024- ministère de l\'Enseignement supérieur et de la Recherche scientifique.png',
    description: 'Ministère de l\'Enseignement Supérieur et de la Recherche Scientifique, acteur clé pour l\'autorisation et le déploiement dans les résidences universitaires, aligné sur la Vision Algérie 2030.',
    features: ['Autorisation', 'Vision 2030', 'Résidences']
  },
  {
    id: 'citel',
    name: 'Citel & Edahabia',
    category: 'Partenaires Financiers',
    status: 'financial',
    statusText: 'Financier',
    logo: './assets/images/NOS PARTENAIRES/carte-edahabia-baridimob-precisions-algerie-poste-citel edahabia.jpg',
    description: 'Intégration des plateformes de paiement numérique leaders en Algérie pour une expérience utilisateur moderne et sécurisée, répondant à la croissance de 340% des transactions en ligne.',
    features: ['Paiement Digital', 'Sécurité', 'Innovation']
  },
  {
    id: 'contractors',
    name: 'Contracteurs Experts',
    category: 'Partenaires de Déploiement',
    status: 'deployment',
    statusText: 'Déploiement',
    logo: './assets/images/NOS PARTENAIRES/construction316103813_std.332103016_std-contracteur locaux expert.jpg',
    description: 'Experts en installation et mise en conformité des infrastructures selon les normes algériennes (ONNA), assurant une mise en œuvre rapide et sécurisée dans toutes les résidences.',
    features: ['Installation', 'Conformité', 'Expertise']
  },
  {
    id: 'startups',
    name: 'Startups Algérie',
    category: 'Partenaires d\'Innovation',
    status: 'innovation',
    statusText: 'Innovation',
    logo: './assets/images/NOS PARTENAIRES/Startup DZ-logo.png',
    description: 'En tant que projet innovant soutenu par le Décret Exécutif n° 20-254, nous collaborons avec l\'écosystème tech algérien pour le développement de solutions numériques avancées.',
    features: ['Innovation', 'Tech', 'Digital']
  }
];

// Check if DOM is ready
function domReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}

// jQuery ready checker with fallback
function jQueryReady(callback) {
  if (typeof jQuery !== 'undefined') {
    jQuery(document).ready(callback);
  } else {
    setTimeout(() => jQueryReady(callback), 100);
  }
}

// Safe image loader with fallback
function loadImageSafely(src, callback) {
  const img = new Image();
  img.onload = () => callback(true, src);
  img.onerror = () => {
    console.warn(`Image failed to load: ${src}`);
    callback(false, src);
  };
  img.src = src;
}

// Generate partner card HTML
function generatePartnerCard(partner) {
  return `
    <div class="partner-card" data-partner="${partner.id}">
      <div class="partner-card-inner">
        <div class="partner-logo-container">
          <img src="${partner.logo}" alt="${partner.name}" class="partner-logo" loading="lazy">
          <div class="partner-status ${partner.status}">${partner.statusText}</div>
        </div>
        <div class="partner-content">
          <h4 class="partner-name">${partner.name}</h4>
          <span class="partner-category">${partner.category}</span>
          <p class="partner-description">${partner.description}</p>
          <div class="partner-features">
            ${partner.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Premium initialization function
function initializePartnersCarousel() {
  // CRITICAL: Prevent any re-initialization
  if (window.NecibPartnersState.initialized) {
    console.log("🔒 Partners carousel already initialized - BLOCKED");
    return;
  }

  console.log("🚀 Initializing Premium Partners Carousel...");

  try {
    // Check dependencies
    if (typeof jQuery === 'undefined') {
      console.error("❌ jQuery not loaded");
      return;
    }

    if (!jQuery().owlCarousel) {
      console.error("❌ OWL Carousel not loaded");
      return;
    }

    const $carousel = jQuery('.partners-carousel');
    if ($carousel.length === 0) {
      console.warn("❌ Partners carousel container not found");
      return;
    }

    // Destroy any existing carousel
    if (window.NecibPartnersState.carousel) {
      try {
        $carousel.trigger('destroy.owl.carousel');
        $carousel.removeClass('owl-carousel owl-loaded');
        $carousel.find('.owl-stage-outer').children().unwrap();
      } catch (e) {
        console.warn("Warning destroying carousel:", e);
      }
    }

    // Initialize with premium settings
    window.NecibPartnersState.carousel = $carousel.owlCarousel({
      items: 3,
      loop: true,
      margin: 30,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      smartSpeed: 800,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      navText: [
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"></path></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"></path></svg>'
      ],
      responsive: {
        0: {
          items: 1,
          margin: 10,
          nav: true,
          dots: true
        },
        768: {
          items: 2,
          margin: 20,
          nav: true,
          dots: true
        },
        1024: {
          items: 3,
          margin: 30,
          nav: true,
          dots: true
        }
      },
      onInitialized: function() {
        console.log("✅ Partners Carousel initialized successfully");
        // Mark as initialized IMMEDIATELY
        window.NecibPartnersState.initialized = true;
        
        // Add accessibility
        $carousel.find('.owl-prev').attr('aria-label', 'Partenaire précédent');
        $carousel.find('.owl-next').attr('aria-label', 'Partenaire suivant');
        
        // Single animation call
        setTimeout(runPremiumAnimations, 500);
      },
      onTranslated: function() {
        // COMPLETELY SILENT - no logs to prevent spam
      }
    });

  } catch (error) {
    console.error("❌ Error initializing partners carousel:", error);
  }
}

// Premium animations (run ONCE only)
function runPremiumAnimations() {
  // CRITICAL: Prevent animation loops
  if (window.NecibPartnersState.animating) {
    console.log("🔒 Animation already running - BLOCKED");
    return;
  }

  if (typeof gsap === 'undefined') {
    console.log("GSAP not available, skipping animations");
    return;
  }

  try {
    window.NecibPartnersState.animating = true;
    console.log("🎬 Running premium animations...");

    // Single, elegant animation
    gsap.fromTo('.partner-card', 
      {
        scale: 0.9,
        opacity: 0.7,
        y: 20
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        onComplete: () => {
          console.log("✅ Premium animations completed");
          // Reset flag after completion
          setTimeout(() => {
            window.NecibPartnersState.animating = false;
          }, 1000);
        }
      }
    );

  } catch (error) {
    console.warn("Animation error:", error);
    window.NecibPartnersState.animating = false;
  }
}

// Add interactive features with error handling
function addInteractiveFeatures() {
  document.addEventListener('click', function(e) {
    const card = e.target.closest('.partner-card');
    if (card) {
      const partnerId = card.dataset.partner || 'unknown';
      
      // Add click ripple effect
      createRippleEffect(e, card);
      
      // Log interaction
      console.log(`Partner card clicked: ${partnerId}`);
    }
  });

  console.log('✅ Partners interactive features enhanced');
}

// Create ripple effect on click
function createRippleEffect(event, element) {
  const ripple = document.createElement('div');
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
  ripple.classList.add('ripple-effect');
  
  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.appendChild(ripple);
  
  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple);
    }
  }, 600);
}

// Add ripple effect CSS dynamically
function addRippleCSS() {
  if (!document.querySelector('#ripple-styles')) {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `
      .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 107, 53, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        z-index: 10;
      }
      
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Safe initialization with timeout
function safeInitialization() {
  // Only run if not already initialized
  if (window.NecibPartnersState.initialized) {
    console.log("🔒 Already initialized - SKIPPING");
    return;
  }

  // Wait for DOM and dependencies
  setTimeout(() => {
    if (!window.NecibPartnersState.initialized) {
      initializePartnersCarousel();
    }
  }, 2000); // Increased delay to ensure all scripts load
}

// DOM Ready with safety check
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', safeInitialization);
} else {
  safeInitialization();
}

// Responsive handling (throttled)
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (window.NecibPartnersState.carousel && window.NecibPartnersState.initialized) {
      try {
        jQuery('.partners-carousel').trigger('refresh.owl.carousel');
      } catch (e) {
        console.warn('Resize refresh error:', e);
      }
    }
  }, 300);
});

// Export clean API
window.PartnersCarousel = {
  init: function() {
    if (!window.NecibPartnersState.initialized) {
      initializePartnersCarousel();
    }
  },
  refresh: function() {
    if (window.NecibPartnersState.carousel && window.NecibPartnersState.initialized) {
      jQuery('.partners-carousel').trigger('refresh.owl.carousel');
    }
  },
  destroy: function() {
    if (window.NecibPartnersState.carousel) {
      jQuery('.partners-carousel').trigger('destroy.owl.carousel');
      window.NecibPartnersState.initialized = false;
      window.NecibPartnersState.carousel = null;
    }
  }
};