/**
 * ================================================================
 * NECIB LUXE WASH - ULTRA PREMIUM LOADER
 * Dynamic Animation Control & Performance Optimization
 * ================================================================
 */

class UltraPremiumLoader {
    constructor() {
        this.loader = null;
        this.progressBar = null;
        this.progressCircle = null;
        this.progressPercentage = null;
        this.progressStatus = null;
        this.liquidFill = null;
        this.isLoaded = false;
        this.currentProgress = 0;
        this.targetProgress = 0;
        this.animationId = null;
        
        // Performance monitoring
        this.startTime = performance.now();
        this.frameCount = 0;
        this.fps = 0;
        
        // Animation states
        this.animations = {
            drum: { speed: 1, acceleration: 0.05 },
            logo: { speed: 1, acceleration: 0.03 },
            water: { intensity: 1, fluctuation: 0.1 },
            clothing: { activity: 1, variation: 0.08 }
        };
        
        // Progress stages with dynamic effects
        this.progressStages = [
            { progress: 0, status: "Initialisation...", effects: { drum: 0.5, logo: 0.3 } },
            { progress: 15, status: "Chargement des ressources...", effects: { drum: 0.8, logo: 0.6, water: 0.3 } },
            { progress: 30, status: "Configuration du système...", effects: { drum: 1.0, logo: 0.8, water: 0.5, clothing: 0.3 } },
            { progress: 50, status: "Préparation de l'interface...", effects: { drum: 1.2, logo: 1.0, water: 0.8, clothing: 0.6 } },
            { progress: 70, status: "Optimisation des performances...", effects: { drum: 1.5, logo: 1.2, water: 1.0, clothing: 0.8 } },
            { progress: 85, status: "Finalisation...", effects: { drum: 1.8, logo: 1.5, water: 1.2, clothing: 1.0 } },
            { progress: 100, status: "Terminé !", effects: { drum: 2.0, logo: 2.0, water: 1.5, clothing: 1.2 } }
        ];
        
        this.currentStage = 0;
        
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    setup() {
        // Get DOM elements
        this.loader = document.querySelector('.loader');
        this.progressBar = document.querySelector('.progress-bar');
        this.progressCircle = document.querySelector('.progress-circle');
        this.progressPercentage = document.querySelector('.progress-percentage');
        this.progressStatus = document.querySelector('.progress-status');
        this.liquidFill = document.querySelector('.liquid-fill');
        
        if (!this.loader) {
            console.warn('Premium loader not found');
            return;
        }
        
        // Initialize performance monitoring
        this.initPerformanceMonitoring();
        
        // Start loading sequence
        this.startLoadingSequence();
        
        // Setup dynamic animations
        this.setupDynamicAnimations();
        
        // Setup responsive handling
        this.setupResponsiveHandling();
        
        // Setup accessibility
        this.setupAccessibility();
        
        console.log('🚀 Ultra Premium Loader initialized');
    }
    
    startLoadingSequence() {
        // Simulate realistic loading progression
        const loadingSteps = [
            { delay: 500, progress: 5 },
            { delay: 800, progress: 12 },
            { delay: 1200, progress: 25 },
            { delay: 1800, progress: 40 },
            { delay: 2200, progress: 58 },
            { delay: 2800, progress: 75 },
            { delay: 3200, progress: 90 },
            { delay: 3800, progress: 100 }
        ];
        
        loadingSteps.forEach(step => {
            setTimeout(() => {
                this.updateProgress(step.progress);
            }, step.delay);
        });
    }
    
    updateProgress(targetProgress) {
        this.targetProgress = Math.min(100, Math.max(0, targetProgress));
        
        // Update current stage
        for (let i = 0; i < this.progressStages.length; i++) {
            if (this.targetProgress >= this.progressStages[i].progress) {
                this.currentStage = i;
            }
        }
        
        // Start smooth progress animation
        this.animateProgress();
        
        // Update status text
        this.updateStatusText();
        
        // Apply dynamic effects
        this.applyDynamicEffects();
        
        // Check for completion
        if (this.targetProgress >= 100) {
            setTimeout(() => this.completeLoading(), 500);
        }
    }
    
    animateProgress() {
        const animate = () => {
            if (Math.abs(this.currentProgress - this.targetProgress) > 0.5) {
                // Smooth easing function
                const diff = this.targetProgress - this.currentProgress;
                this.currentProgress += diff * 0.1;
                
                // Update visual elements
                this.updateProgressElements();
                
                // Continue animation
                requestAnimationFrame(animate);
            } else {
                this.currentProgress = this.targetProgress;
                this.updateProgressElements();
            }
        };
        
        requestAnimationFrame(animate);
    }
    
    updateProgressElements() {
        const progress = this.currentProgress;
        const progressPercent = Math.round(progress);
        
        // Update liquid fill
        if (this.liquidFill) {
            this.liquidFill.style.width = `${progress}%`;
        }
        
        // Update progress circle
        if (this.progressCircle) {
            const circumference = 2 * Math.PI * 54; // radius = 54
            const offset = circumference - (progress / 100) * circumference;
            this.progressCircle.style.strokeDashoffset = offset;
        }
        
        // Update percentage text
        if (this.progressPercentage) {
            this.progressPercentage.textContent = `${progressPercent}%`;
        }
        
        // Add dynamic glow based on progress
        if (this.loader) {
            const glowIntensity = progress / 100;
            this.loader.style.setProperty('--glow-intensity', glowIntensity);
        }
    }
    
    updateStatusText() {
        if (this.progressStatus && this.progressStages[this.currentStage]) {
            const stage = this.progressStages[this.currentStage];
            this.progressStatus.textContent = stage.status;
            
            // Add typing animation for status changes
            this.animateStatusText(stage.status);
        }
    }
    
    animateStatusText(text) {
        if (!this.progressStatus) return;
        
        this.progressStatus.style.opacity = '0';
        
        setTimeout(() => {
            this.progressStatus.textContent = text;
            this.progressStatus.style.opacity = '1';
        }, 200);
    }
    
    applyDynamicEffects() {
        const stage = this.progressStages[this.currentStage];
        if (!stage || !stage.effects) return;
        
        // Apply dynamic animation speeds based on loading stage
        const effects = stage.effects;
        
        // Update drum rotation speed
        if (effects.drum) {
            this.updateAnimationSpeed('.washing-drum', 'drumRotate', effects.drum);
        }
        
        // Update logo animation intensity
        if (effects.logo) {
            this.updateAnimationSpeed('.logo-holder', 'logoFloat', effects.logo);
            this.updateAnimationSpeed('.logo-shine', 'shineRotate', effects.logo);
        }
        
        // Update water effects
        if (effects.water) {
            this.updateWaterEffects(effects.water);
        }
        
        // Update clothing effects
        if (effects.clothing) {
            this.updateClothingEffects(effects.clothing);
        }
    }
    
    updateAnimationSpeed(selector, animationName, speedMultiplier) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            const baseDuration = this.getBaseDuration(animationName);
            const newDuration = baseDuration / speedMultiplier;
            element.style.animationDuration = `${newDuration}s`;
        });
    }
    
    getBaseDuration(animationName) {
        const baseDurations = {
            'drumRotate': 4,
            'logoFloat': 6,
            'shineRotate': 2,
            'logoSpin': 8,
            'waterSlosh1': 3,
            'waterSlosh2': 2.5,
            'waterSlosh3': 3.5,
            'waterSlosh4': 4,
            'clothingTumble1': 5,
            'clothingTumble2': 4,
            'clothingTumble3': 6
        };
        
        return baseDurations[animationName] || 3;
    }
    
    updateWaterEffects(intensity) {
        const waterDrops = document.querySelectorAll('.water-drop');
        waterDrops.forEach((drop, index) => {
            const animationName = `waterSlosh${index + 1}`;
            const baseDuration = this.getBaseDuration(animationName);
            const newDuration = baseDuration / intensity;
            drop.style.animationDuration = `${newDuration}s`;
            drop.style.opacity = Math.min(1, intensity * 0.8);
        });
    }
    
    updateClothingEffects(intensity) {
        const clothingItems = document.querySelectorAll('.clothing-item');
        clothingItems.forEach((item, index) => {
            const animationName = `clothingTumble${index + 1}`;
            const baseDuration = this.getBaseDuration(animationName);
            const newDuration = baseDuration / intensity;
            item.style.animationDuration = `${newDuration}s`;
            item.style.opacity = Math.min(1, intensity * 0.6);
        });
    }
    
    setupDynamicAnimations() {
        // Enhanced sparkle effects based on progress
        const sparkles = document.querySelectorAll('.sparkle');
        sparkles.forEach((sparkle, index) => {
            const delay = index * 0.3;
            sparkle.style.animationDelay = `${delay}s`;
        });
        
        // Enhanced steam effects
        const steamParticles = document.querySelectorAll('.steam-particle');
        steamParticles.forEach((particle, index) => {
            const delay = index * 0.8;
            particle.style.animationDelay = `${delay}s`;
        });
        
        // Dynamic background layers
        const bgLayers = document.querySelectorAll('.bg-layer');
        bgLayers.forEach((layer, index) => {
            const delay = index * 1.2;
            layer.style.animationDelay = `${delay}s`;
        });
    }
    
    setupResponsiveHandling() {
        // Adjust animations based on screen size
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        
        const handleResponsive = (e) => {
            if (e.matches) {
                // Mobile optimizations
                this.optimizeForMobile();
            } else {
                // Desktop optimizations
                this.optimizeForDesktop();
            }
        };
        
        mediaQuery.addListener(handleResponsive);
        handleResponsive(mediaQuery);
    }
    
    optimizeForMobile() {
        // Reduce particle count for performance
        const sparkles = document.querySelectorAll('.sparkle');
        sparkles.forEach((sparkle, index) => {
            if (index > 4) sparkle.style.display = 'none';
        });
        
        const steamParticles = document.querySelectorAll('.steam-particle');
        steamParticles.forEach((particle, index) => {
            if (index > 3) particle.style.display = 'none';
        });
        
        // Reduce animation complexity
        const clothingItems = document.querySelectorAll('.clothing-item');
        clothingItems.forEach((item, index) => {
            if (index > 1) item.style.display = 'none';
        });
    }
    
    optimizeForDesktop() {
        // Restore all effects for desktop
        const hiddenElements = document.querySelectorAll('.sparkle, .steam-particle, .clothing-item');
        hiddenElements.forEach(element => {
            element.style.display = '';
        });
    }
    
    setupAccessibility() {
        // Add ARIA labels
        if (this.loader) {
            this.loader.setAttribute('aria-label', 'Chargement de Necib Luxe Wash');
            this.loader.setAttribute('role', 'progressbar');
            this.loader.setAttribute('aria-valuemin', '0');
            this.loader.setAttribute('aria-valuemax', '100');
        }
        
        // Update progress for screen readers
        const updateAriaProgress = () => {
            if (this.loader) {
                this.loader.setAttribute('aria-valuenow', Math.round(this.currentProgress));
                this.loader.setAttribute('aria-valuetext', 
                    `${Math.round(this.currentProgress)}% - ${this.progressStages[this.currentStage]?.status || 'Chargement...'}`);
            }
        };
        
        // Update ARIA values when progress changes
        const originalUpdateProgress = this.updateProgress.bind(this);
        this.updateProgress = (progress) => {
            originalUpdateProgress(progress);
            updateAriaProgress();
        };
        
        // Respect prefers-reduced-motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.loader?.classList.add('reduced-motion');
        }
    }
    
    initPerformanceMonitoring() {
        // Monitor FPS
        const measureFPS = () => {
            this.frameCount++;
            const now = performance.now();
            if (now - this.startTime >= 1000) {
                this.fps = Math.round((this.frameCount * 1000) / (now - this.startTime));
                this.frameCount = 0;
                this.startTime = now;
                
                // Adjust quality based on FPS
                this.adjustQualityBasedOnFPS();
            }
            
            if (!this.isLoaded) {
                requestAnimationFrame(measureFPS);
            }
        };
        
        requestAnimationFrame(measureFPS);
    }
    
    adjustQualityBasedOnFPS() {
        if (this.fps < 30 && this.fps > 0) {
            // Reduce quality for better performance
            this.reduceQuality();
        } else if (this.fps > 55) {
            // Increase quality if performance allows
            this.increaseQuality();
        }
    }
    
    reduceQuality() {
        // Reduce particle count
        const sparkles = document.querySelectorAll('.sparkle');
        sparkles.forEach((sparkle, index) => {
            if (index % 2 === 0) sparkle.style.display = 'none';
        });
        
        // Reduce animation complexity
        const steamParticles = document.querySelectorAll('.steam-particle');
        steamParticles.forEach((particle, index) => {
            if (index % 2 === 0) particle.style.display = 'none';
        });
        
        console.log('🔧 Reduced quality for better performance');
    }
    
    increaseQuality() {
        // Restore all effects
        const hiddenElements = document.querySelectorAll('.sparkle, .steam-particle');
        hiddenElements.forEach(element => {
            element.style.display = '';
        });
    }
    
    completeLoading() {
        this.isLoaded = true;
        
        // Apply final effects
        this.applyFinalEffects();
        
        // Wait for final animation
        setTimeout(() => {
            this.hideLoader();
        }, 1000);
    }
    
    applyFinalEffects() {
        // Dramatic final spinning
        const washingDrum = document.querySelector('.washing-drum');
        if (washingDrum) {
            washingDrum.style.animationDuration = '0.5s';
            washingDrum.style.animationTimingFunction = 'ease-out';
        }
        
        // Final logo burst
        const logoHolder = document.querySelector('.logo-holder');
        if (logoHolder) {
            logoHolder.style.transform = 'translate(-50%, -50%) scale(1.2)';
            logoHolder.style.transition = 'transform 0.8s ease-out';
        }
        
        // Final progress pulse
        if (this.progressPercentage) {
            this.progressPercentage.style.transform = 'scale(1.2)';
            this.progressPercentage.style.transition = 'transform 0.5s ease-out';
        }
    }
    
    hideLoader() {
        if (this.loader) {
            this.loader.classList.add('loaded');
            
            // Remove from DOM after animation
            setTimeout(() => {
                this.loader.style.display = 'none';
                this.cleanup();
            }, 1000);
        }
    }
    
    cleanup() {
        // Clean up event listeners and timers
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        
        // Clear any remaining timeouts
        const highestTimeoutId = setTimeout(() => {});
        for (let i = 0; i < highestTimeoutId; i++) {
            clearTimeout(i);
        }
        
        console.log('🧹 Premium loader cleanup completed');
    }
    
    // Public API methods
    setProgress(progress) {
        this.updateProgress(progress);
    }
    
    setStatus(status) {
        if (this.progressStatus) {
            this.animateStatusText(status);
        }
    }
    
    destroy() {
        this.isLoaded = true;
        this.cleanup();
        if (this.loader) {
            this.loader.remove();
        }
    }
}

// Auto-initialize when DOM is ready
let premiumLoader = null;

const initPremiumLoader = () => {
    if (document.querySelector('.loader')) {
        premiumLoader = new UltraPremiumLoader();
    }
};

// Export for manual initialization if needed
window.UltraPremiumLoader = UltraPremiumLoader;
window.premiumLoader = premiumLoader;

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPremiumLoader);
} else {
    initPremiumLoader();
}

// Fallback for older browsers
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback) {
        return setTimeout(callback, 1000 / 60);
    };
}

if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };
}

/**
 * Performance optimization utilities
 */
class PerformanceOptimizer {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    static throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    static isHighPerformanceDevice() {
        return navigator.hardwareConcurrency > 4 && 
               navigator.deviceMemory > 4 && 
               !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
}

// Export utilities
window.PerformanceOptimizer = PerformanceOptimizer;

console.log('🚀 Ultra Premium Loader system loaded'); 