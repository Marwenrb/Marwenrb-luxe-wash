/* ===( CODE AASHU )=== */
function elemHoverAnim() {
  const hoverDiv = document.querySelector(".hover-image-div");
  const hoverVideo = document.querySelector(".hover-video-div");
  const hover = document.querySelector(".hover-div");
  const elems = document.querySelectorAll(".elem1");

  // Check if elements exist
  if (!hoverDiv || !hoverVideo || !hover || elems.length === 0) {
    console.log("Hover elements not found, retrying...");
    setTimeout(elemHoverAnim, 1000);
    return;
  }

  let currentHoveredElement = null;

  elems.forEach((elem) => {
    elem.addEventListener("mouseenter", function (e) {
      // Prevent multiple triggers
      if (currentHoveredElement === elem) return;
      currentHoveredElement = elem;
      
      const imageData = elem.getAttribute("hover-image");
      const videoData = elem.getAttribute("hover-video");
      
      if (imageData) {
        hover.style.display = "block";
        hoverVideo.style.display = "none";
        hoverDiv.style.display = "block";
        // Simple path replacement
        const imagePath = imageData.replace(/ /g, '%20');
        hoverDiv.style.backgroundImage = `url("${imagePath}")`;
      } else if (videoData) {
        hover.style.display = "block";
        hoverDiv.style.display = "none";
        hoverVideo.style.display = "block";
        hoverVideo.src = videoData;
      }
    });

    elem.addEventListener("mouseleave", function () {
      currentHoveredElement = null;
      hover.style.display = "none";
      hoverVideo.style.display = "none";
      hoverDiv.style.display = "none";
    });
  });

  // Hide on scroll
  window.addEventListener("scroll", function() {
    currentHoveredElement = null;
    hover.style.display = "none";
    hoverVideo.style.display = "none";
    hoverDiv.style.display = "none";
  });
}
elemHoverAnim();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  freeMode: true,
});

function sliderHover() {
  const mover = document.querySelector(".mover");
  const mySwiper = document.querySelector(".mySwiper");

  mySwiper.addEventListener("mousemove", (e) => {
    gsap.to(mover, {
      x: e.x + "px",
      y: e.y + "px",
      opacity: 1,
      scale: 1,
    });
  });
  mySwiper.addEventListener("mouseenter", (e) => {
    gsap.to(mover, {
      opacity: 1,
      scale: 1,
    });
  });
  mySwiper.addEventListener("mouseleave", (e) => {
    gsap.to(mover, {
      opacity: 0,
      scale: 0,
    });
  });
}
sliderHover();


function smoothScroll(){
  gsap.registerPlugin(ScrollTrigger);

  // Simple smooth scroll without Locomotive (fixes the blank page issue)
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Configure ScrollTrigger for regular document scroll
  ScrollTrigger.defaults({
    scroller: window
  });

  // Refresh ScrollTrigger
  ScrollTrigger.refresh();
}
smoothScroll();

function loader(){
  var tl = gsap.timeline();
  
  // Premium loader sequence
  tl.from(".loader-logo", {
    scale: 0,
    rotation: 180,
    duration: 1,
    ease: "back.out(1.7)"
  })
  .from("#brand-name", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.3")
  .from("#brand-tagline", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.2")
  .from(".loader-progress", {
    opacity: 0,
    scaleX: 0,
    duration: 0.5,
    ease: "power2.out"
  }, "-=0.1")
  .to(".progress-bar", {
    width: "100%",
    duration: 2.5,
    ease: "power2.inOut"
  }, "-=0.2")
  .to(".loader-content", {
    scale: 0.8,
    opacity: 0.8,
    duration: 0.5,
    ease: "power2.in"
  }, "+=0.5")
  .to(".loader", {
    y: "-100%",
    duration: 1,
    ease: "power2.inOut"
  }, "-=0.2");
}
loader();

function smallAnimations(){
  gsap.from(".page3 .elems .elem1 .elem1-1", {
    y: 150 + "%",
    scrollTrigger: {
      trigger: ".page3 .elems .elem1 .elem1-1",
      y: 0,
      duration: 1,
      start: "top 90%",
      end: "top 65%",
      stagger: 1,
      scrub: true,
    },
  });
  gsap.from(".page3 .elems .elem1 .elem1-2", {
    y: 150 + "%",
    scrollTrigger: {
      trigger: ".page3 .elems .elem1 .elem1-2",
      y: 0,
      duration: 1,
      start: "top 90%",
      end: "top 65%",
      stagger: 1,
      scrub: true,
    },
  });
  gsap.from(".page3 .elems .elem1 .elem1-3", {
    y: 150 + "%",
    scrollTrigger: {
      trigger: ".page3 .elems .elem1 .elem1-3",
      y: 0,
      duration: 1,
      start: "top 90%",
      end: "top 65%",
      stagger: 1,
      scrub: true,
    },
  });
  gsap.from(".page4 .swiper .swiper-wrapper", {
    y: 100 + "%",
    opacity: 0,
    scrollTrigger: {
      trigger: ".page4  .swiper .swiper-wrapper",
      y: 0,
      duration: 1.2,
      start: "top 120%",
      end: "top 100%",
      scrub: true,
    },
  });
}
smallAnimations();

// ===== NECIB LUXE WASH CUSTOM FUNCTIONALITY =====

// Contact Form Enhancement
function enhanceContactForm() {
  const form = document.querySelector('.page6 form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const name = form.querySelector('input[type="text"]').value;
      const email = form.querySelector('input[type="email"]').value;
      const message = form.querySelector('textarea').value;
      
      // Simple validation
      if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
      }
      
      // Success animation
      const button = form.querySelector('button');
      const originalText = button.innerHTML;
      button.innerHTML = '✅ Message Envoyé !';
      button.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
      
      // Reset after 3 seconds
      setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = 'linear-gradient(45deg, #ff6b35, #f7931e)';
        form.reset();
      }, 3000);
    });
  }
}

// Simple and reliable navigation without Locomotive Scroll
function enhanceNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .footer-link[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Simple, reliable smooth scroll
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
        
        // Add a small delay to ensure scroll completes
        setTimeout(() => {
          window.location.hash = targetId;
        }, 1000);
      }
    });
  });
}

// Add loading animation for PDF downloads
function enhancePDFDownloads() {
  const pdfLinks = document.querySelectorAll('a[href*=".pdf"]');
  pdfLinks.forEach(link => {
    link.addEventListener('click', function() {
      const originalText = this.innerHTML;
      this.innerHTML = '⏳ Téléchargement...';
      
      setTimeout(() => {
        this.innerHTML = originalText;
      }, 2000);
    });
  });
}

// Enhanced newsletter functionality
function enhanceNewsletter() {
  const newsletterBtn = document.querySelector('.newsletter-btn');
  const newsletterInput = document.querySelector('.newsletter-input');
  
  if (newsletterBtn && newsletterInput) {
    newsletterBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const email = newsletterInput.value.trim();
      
      if (!email) {
        alert('Veuillez entrer votre adresse email.');
        return;
      }
      
      if (!email.includes('@')) {
        alert('Veuillez entrer une adresse email valide.');
        return;
      }
      
      // Success animation
      const originalText = newsletterBtn.innerHTML;
      newsletterBtn.innerHTML = '✅ Inscrit !';
      newsletterBtn.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
      
      // Reset after 3 seconds
      setTimeout(() => {
        newsletterBtn.innerHTML = originalText;
        newsletterBtn.style.background = 'linear-gradient(45deg, #ff6b35, #f7931e)';
        newsletterInput.value = '';
      }, 3000);
    });
    
    // Enter key support
    newsletterInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        newsletterBtn.click();
      }
    });
  }
}

// Initialize all enhancements
function initNecibLuxeWash() {
  enhanceContactForm();
  enhanceNavigation();
  enhancePDFDownloads();
  enhanceNewsletter();
  enhanceLogoNavigation();
  // Back to top button is initialized separately to avoid conflicts
}

// Premium Back to Top Button
function createPremiumBackToTop() {
  // Create main button container
  const backToTopBtn = document.createElement('div');
  backToTopBtn.className = 'back-to-top-premium';
  
  // Create button content
  backToTopBtn.innerHTML = `
    <div class="btn-bg"></div>
    <div class="btn-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M12 19V5M5 12l7-7 7 7"></path>
      </svg>
    </div>
    <div class="btn-progress">
      <svg viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="22" class="progress-ring"></circle>
      </svg>
    </div>
  `;
  
  document.body.appendChild(backToTopBtn);
  
  const progressRing = backToTopBtn.querySelector('.progress-ring');
  const circumference = 2 * Math.PI * 22;
  
  // Set up progress ring
  progressRing.style.strokeDasharray = circumference;
  progressRing.style.strokeDashoffset = circumference;
  
  // Scroll progress and visibility
  function updateButton() {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const progress = scrolled / scrollTotal;
    
    // Update progress ring
    const offset = circumference - (progress * circumference);
    progressRing.style.strokeDashoffset = offset;
    
    // Show/hide button
    if (scrolled > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }
  
  // Event listeners
  window.addEventListener('scroll', updateButton);
  window.addEventListener('resize', updateButton);
  
  // Smooth scroll to top with animation
  backToTopBtn.addEventListener('click', () => {
    backToTopBtn.classList.add('clicking');
    
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Remove clicking class after animation
    setTimeout(() => {
      backToTopBtn.classList.remove('clicking');
    }, 300);
  });
  
  // Hover effects
  backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.classList.add('hover');
  });
  
  backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.classList.remove('hover');
  });
}

// Logo navigation functionality
function enhanceLogoNavigation() {
  const navLogo = document.querySelector('.nav-logo');
  const footerLogo = document.querySelector('.footer-logo');
  
  // Make navigation logo clickable (scroll to top)
  if (navLogo) {
    navLogo.style.cursor = 'pointer';
    navLogo.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Add tooltip
    navLogo.title = 'Retour en haut';
  }
  
  // Make footer logo clickable (scroll to top)
  if (footerLogo) {
    footerLogo.style.cursor = 'pointer';
    footerLogo.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Add tooltip
    footerLogo.title = 'Retour en haut';
  }
}

// Prevent conflicts with existing scroll buttons
function preventScrollConflicts() {
  // Remove any existing scroll-to-top buttons
  const existingButtons = document.querySelectorAll('.scroll-to-top, [class*="scroll-top"], [class*="back-top"]');
  existingButtons.forEach(btn => {
    if (btn && btn.parentNode) {
      btn.parentNode.removeChild(btn);
    }
  });
}

// Initialize premium back to top button safely
function initBackToTop() {
  // Prevent conflicts first
  preventScrollConflicts();
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createPremiumBackToTop);
  } else {
    createPremiumBackToTop();
  }
}

// Initialize with safety checks
initBackToTop();

// Call initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initNecibLuxeWash);

// Suppress console errors for better UX (Chrome extension errors)
window.addEventListener('error', function(e) {
  if (e.message && (e.message.includes('403') || e.message.includes('permission error') || e.message.includes('chrome-extension'))) {
    e.preventDefault();
    return false;
  }
});

// Handle unhandled promise rejections (Chrome extension errors)
window.addEventListener('unhandledrejection', function(e) {
  if (e.reason && (e.reason.code === 403 || 
      (e.reason.message && e.reason.message.includes('permission error')) ||
      (e.reason.originalError && e.reason.originalError.stack && e.reason.originalError.stack.includes('chrome-extension')))) {
    e.preventDefault();
    return false;
  }
});

// Additional error suppression for specific Chrome extension errors
const originalConsoleError = console.error;
console.error = function(...args) {
  const message = args.join(' ');
  if (message.includes('403') || 
      message.includes('permission error') || 
      message.includes('chrome-extension') ||
      message.includes('Uncaught (in promise)')) {
    return; // Suppress these errors
  }
  originalConsoleError.apply(console, args);
};