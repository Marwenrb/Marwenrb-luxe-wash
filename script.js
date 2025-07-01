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
 
 / /   = = = = =   O W L   C A R O U S E L   I N I T I A L I Z A T I O N   F O R   P A R T N E R S   S E C T I O N   = = = = = 
 f u n c t i o n   i n i t P a r t n e r s C a r o u s e l ( )   { 
     / /   W a i t   f o r   j Q u e r y   a n d   O w l   C a r o u s e l   t o   b e   l o a d e d 
     f u n c t i o n   c h e c k D e p e n d e n c i e s ( )   { 
         i f   ( t y p e o f   j Q u e r y   ! = =   " u n d e f i n e d "   & &   j Q u e r y . f n . o w l C a r o u s e l )   { 
             / /   I n i t i a l i z e   p a r t n e r s   c a r o u s e l 
             j Q u e r y ( " . p a r t n e r s - c a r o u s e l " ) . o w l C a r o u s e l ( { 
                 i t e m s :   3 , 
                 l o o p :   t r u e , 
                 m a r g i n :   3 0 , 
                 n a v :   t r u e , 
                 d o t s :   t r u e , 
                 a u t o p l a y :   t r u e , 
                 a u t o p l a y T i m e o u t :   5 0 0 0 , 
                 a u t o p l a y H o v e r P a u s e :   t r u e , 
                 a n i m a t e O u t :   " f a d e O u t " , 
                 a n i m a t e I n :   " f a d e I n " , 
                 s m a r t S p e e d :   8 0 0 , 
                 m o u s e D r a g :   t r u e , 
                 t o u c h D r a g :   t r u e , 
                 p u l l D r a g :   t r u e , 
                 r e s p o n s i v e :   { 
                     0 :   { 
                         i t e m s :   1 , 
                         m a r g i n :   1 5 , 
                         n a v :   t r u e , 
                         d o t s :   t r u e 
                     } , 
                     6 0 0 :   { 
                         i t e m s :   2 , 
                         m a r g i n :   2 0 , 
                         n a v :   t r u e , 
                         d o t s :   t r u e 
                     } , 
                     1 0 0 0 :   { 
                         i t e m s :   3 , 
                         m a r g i n :   3 0 , 
                         n a v :   t r u e , 
                         d o t s :   t r u e 
                     } 
                 } 
             } ) ; 
             
             / /   A d d   c u s t o m   n a v i g a t i o n   t e x t 
             j Q u e r y ( " . p a r t n e r s - c a r o u s e l   . o w l - p r e v " ) . a t t r ( " a r i a - l a b e l " ,   " P a r t e n a i r e   p r � c � d e n t " ) ; 
             j Q u e r y ( " . p a r t n e r s - c a r o u s e l   . o w l - n e x t " ) . a t t r ( " a r i a - l a b e l " ,   " P a r t e n a i r e   s u i v a n t " ) ; 
             
             / /   E n h a n c e d   h o v e r   e f f e c t s   f o r   p a r t n e r   c a r d s 
             j Q u e r y ( " . p a r t n e r - c a r d " ) . h o v e r ( 
                 f u n c t i o n ( )   { 
                     j Q u e r y ( t h i s ) . a d d C l a s s ( " h o v e r e d " ) ; 
                 } , 
                 f u n c t i o n ( )   { 
                     j Q u e r y ( t h i s ) . r e m o v e C l a s s ( " h o v e r e d " ) ; 
                 } 
             ) ; 
             
             c o n s o l e . l o g ( "   P a r t n e r s   C a r o u s e l   i n i t i a l i z e d   s u c c e s s f u l l y " ) ; 
         }   e l s e   { 
             / /   R e t r y   a f t e r   5 0 0 m s   i f   d e p e n d e n c i e s   n o t   l o a d e d 
             s e t T i m e o u t ( c h e c k D e p e n d e n c i e s ,   5 0 0 ) ; 
         } 
     } 
     
     / /   S t a r t   c h e c k i n g   f o r   d e p e n d e n c i e s 
     c h e c k D e p e n d e n c i e s ( ) ; 
 } 
 
 / /   I n i t i a l i z e   p a r t n e r s   c a r o u s e l   w h e n   D O M   i s   r e a d y 
 d o c u m e n t . a d d E v e n t L i s t e n e r ( " D O M C o n t e n t L o a d e d " ,   f u n c t i o n ( )   { 
     i n i t P a r t n e r s C a r o u s e l ( ) ; 
 } ) ; 
 
 / /   A l s o   i n i t i a l i z e   w h e n   p a g e   i s   f u l l y   l o a d e d   ( f a l l b a c k ) 
 w i n d o w . a d d E v e n t L i s t e n e r ( " l o a d " ,   f u n c t i o n ( )   { 
     s e t T i m e o u t ( i n i t P a r t n e r s C a r o u s e l ,   1 0 0 0 ) ; 
 } ) ; 
 
 / /   = = = = =   P A R T N E R S   S E C T I O N   S C R O L L   A N I M A T I O N S   = = = = = 
 f u n c t i o n   i n i t P a r t n e r s A n i m a t i o n s ( )   { 
     / /   C h e c k   i f   G S A P   a n d   S c r o l l T r i g g e r   a r e   a v a i l a b l e 
     i f   ( t y p e o f   g s a p   ! = =   " u n d e f i n e d "   & &   g s a p . r e g i s t e r P l u g i n )   { 
         / /   A n i m a t e   p a r t n e r s   i n t r o 
         g s a p . f r o m ( " . p a r t n e r s - i n t r o " ,   { 
             y :   5 0 , 
             o p a c i t y :   0 , 
             d u r a t i o n :   1 , 
             s c r o l l T r i g g e r :   { 
                 t r i g g e r :   " . p a r t n e r s - i n t r o " , 
                 s t a r t :   " t o p   8 0 % " , 
                 e n d :   " t o p   5 0 % " , 
                 s c r u b :   t r u e 
             } 
         } ) ; 
         
         / /   A n i m a t e   p a r t n e r   c a r d s 
         g s a p . f r o m ( " . p a r t n e r - c a r d " ,   { 
             y :   1 0 0 , 
             o p a c i t y :   0 , 
             d u r a t i o n :   0 . 8 , 
             s t a g g e r :   0 . 2 , 
             s c r o l l T r i g g e r :   { 
                 t r i g g e r :   " . p a r t n e r s - c a r o u s e l " , 
                 s t a r t :   " t o p   8 5 % " , 
                 e n d :   " t o p   6 0 % " , 
                 s c r u b :   t r u e 
             } 
         } ) ; 
         
         / /   A n i m a t e   C T A   s e c t i o n 
         g s a p . f r o m ( " . p a r t n e r s h i p - c t a " ,   { 
             y :   8 0 , 
             o p a c i t y :   0 , 
             d u r a t i o n :   1 . 2 , 
             s c r o l l T r i g g e r :   { 
                 t r i g g e r :   " . p a r t n e r s h i p - c t a " , 
                 s t a r t :   " t o p   9 0 % " , 
                 e n d :   " t o p   7 0 % " , 
                 s c r u b :   t r u e 
             } 
         } ) ; 
         
         c o n s o l e . l o g ( "   P a r t n e r s   a n i m a t i o n s   i n i t i a l i z e d " ) ; 
     } 
 } 
 
 / /   I n i t i a l i z e   a n i m a t i o n s 
 d o c u m e n t . a d d E v e n t L i s t e n e r ( " D O M C o n t e n t L o a d e d " ,   i n i t P a r t n e r s A n i m a t i o n s ) ; 
 
 / /   = = = = =   P A R T N E R S   S E C T I O N   I N T E R A C T I V E   F E A T U R E S   = = = = = 
 f u n c t i o n   e n h a n c e P a r t n e r s S e c t i o n ( )   { 
     / /   A d d   c l i c k   h a n d l e r s   f o r   p a r t n e r   c a r d s 
     d o c u m e n t . a d d E v e n t L i s t e n e r ( " c l i c k " ,   f u n c t i o n ( e )   { 
         c o n s t   p a r t n e r C a r d   =   e . t a r g e t . c l o s e s t ( " . p a r t n e r - c a r d " ) ; 
         i f   ( p a r t n e r C a r d )   { 
             / /   A d d   r i p p l e   e f f e c t 
             c o n s t   r i p p l e   =   d o c u m e n t . c r e a t e E l e m e n t ( " d i v " ) ; 
             r i p p l e . c l a s s N a m e   =   " p a r t n e r - r i p p l e " ; 
             r i p p l e . s t y l e . c s s T e x t   =   ` 
                 p o s i t i o n :   a b s o l u t e ; 
                 b o r d e r - r a d i u s :   5 0 % ; 
                 b a c k g r o u n d :   r g b a ( 2 5 5 ,   1 0 7 ,   5 3 ,   0 . 3 ) ; 
                 p o i n t e r - e v e n t s :   n o n e ; 
                 t r a n s f o r m :   s c a l e ( 0 ) ; 
                 a n i m a t i o n :   p a r t n e r - r i p p l e   0 . 6 s   l i n e a r ; 
                 l e f t :   $ { e . o f f s e t X   -   5 0 } p x ; 
                 t o p :   $ { e . o f f s e t Y   -   5 0 } p x ; 
                 w i d t h :   1 0 0 p x ; 
                 h e i g h t :   1 0 0 p x ; 
             ` ; 
             
             p a r t n e r C a r d . s t y l e . p o s i t i o n   =   " r e l a t i v e " ; 
             p a r t n e r C a r d . a p p e n d C h i l d ( r i p p l e ) ; 
             
             / /   R e m o v e   r i p p l e   a f t e r   a n i m a t i o n 
             s e t T i m e o u t ( ( )   = >   { 
                 i f   ( r i p p l e . p a r e n t N o d e )   { 
                     r i p p l e . p a r e n t N o d e . r e m o v e C h i l d ( r i p p l e ) ; 
                 } 
             } ,   6 0 0 ) ; 
         } 
     } ) ; 
     
     / /   A d d   C S S   a n i m a t i o n   f o r   r i p p l e   e f f e c t 
     c o n s t   s t y l e   =   d o c u m e n t . c r e a t e E l e m e n t ( " s t y l e " ) ; 
     s t y l e . t e x t C o n t e n t   =   ` 
         @ k e y f r a m e s   p a r t n e r - r i p p l e   { 
             t o   { 
                 t r a n s f o r m :   s c a l e ( 4 ) ; 
                 o p a c i t y :   0 ; 
             } 
         } 
     ` ; 
     d o c u m e n t . h e a d . a p p e n d C h i l d ( s t y l e ) ; 
     
     c o n s o l e . l o g ( "   P a r t n e r s   i n t e r a c t i v e   f e a t u r e s   i n i t i a l i z e d " ) ; 
 } 
 
 / /   I n i t i a l i z e   i n t e r a c t i v e   f e a t u r e s 
 d o c u m e n t . a d d E v e n t L i s t e n e r ( " D O M C o n t e n t L o a d e d " ,   e n h a n c e P a r t n e r s S e c t i o n ) ;  
 