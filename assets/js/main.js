/**
 * Landing Express NalaTec - Main JavaScript
 * Handles all interactive functionality and user experience
 */

// Global variables
let currentLang = 'es';
let translations = {};

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Landing Express NalaTec - Initializing...');
    
    // Load translations
    loadTranslations();
    
    // Initialize core functionality
    initSmoothScrolling();
    initScrollAnimations();
    initHeaderScroll();
    initFormHandling();
    initLazyLoading();
    
    // Analytics and tracking
    initCTATracking();
    initPerformanceMonitoring();
    initPageVisibility();
    
    // Accessibility and UX
    initAccessibility();
    initErrorHandling();
    
    // Language toggle event
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    console.log('Landing Express NalaTec - Initialized successfully');
});

/**
 * Load translation files
 */
async function loadTranslations() {
    try {
        const [esResponse, enResponse] = await Promise.all([
            fetch('./assets/translations/es.json'),
            fetch('./assets/translations/en.json')
        ]);
        
        translations.es = await esResponse.json();
        translations.en = await enResponse.json();
        
        console.log('Translations loaded successfully');
    } catch (error) {
        console.error('Error loading translations:', error);
        // Fallback translations
        translations = {
            es: {
                "site-title": "🚀 Landing Express NalaTec",
                "cta-primary": "Quiero mi landing"
            },
            en: {
                "site-title": "🚀 Landing Express NalaTec", 
                "cta-primary": "I want my landing"
            }
        };
    }
}

/**
 * Toggle between Spanish and English
 */
function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[currentLang] && translations[currentLang][key];
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // Update language button
    const currentLangEl = document.getElementById('currentLang');
    if (currentLangEl) {
        currentLangEl.textContent = currentLang.toUpperCase();
    }
    
    // Update document language
    document.documentElement.lang = currentLang;
    
    // Update page title and meta description
    updatePageMetadata();
    
    // Track language change
    trackEvent('language_change', { new_language: currentLang });
}

/**
 * Update page metadata based on current language
 */
function updatePageMetadata() {
    if (currentLang === 'en') {
        document.title = "Landing Express NalaTec - Launch a converting page in 5-7 days";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = "We design and develop your landing page optimized for speed, SEO and conversions, at an affordable price. Digital transformation that doesn't have to be expensive.";
        }
    } else {
        document.title = "Landing Express NalaTec - Lanza una página que convierte en 5-7 días";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = "Diseñamos y desarrollamos tu landing optimizada para velocidad, SEO y conversiones, a un precio accesible. Transformación digital que no tiene que ser cara.";
        }
    }
}

/**
 * FAQ Toggle Function
 */
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const toggle = button.querySelector('.faq-toggle');
    const isActive = answer.classList.contains('active');

    // Close all other FAQs
    document.querySelectorAll('.faq-answer.active').forEach(faq => {
        faq.classList.remove('active');
    });
    document.querySelectorAll('.faq-toggle.active').forEach(tog => {
        tog.classList.remove('active');
    });

    // Toggle current FAQ
    if (!isActive) {
        answer.classList.add('active');
        toggle.classList.add('active');
    }
}

/**
 * Initialize smooth scrolling for internal links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize scroll animations using Intersection Observer
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Initialize header scroll effects
 */
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    let lastScrollTop = 0;

    window.addEventListener('scroll', throttle(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--white)';
            header.style.backdropFilter = 'none';
        }

        lastScrollTop = scrollTop;
    }, 16)); // ~60fps
}

/**
 * Initialize form handling with validation
 */
function initFormHandling() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!validateForm(data)) {
            return;
        }

        // Submit form
        submitForm(data);
    });
}

/**
 * Validate form data
 */
function validateForm(data) {
    const requiredFields = ['nombre', 'email', 'negocio', 'objetivo'];
    
    // Check required fields
    for (const field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            showAlert(currentLang === 'es' ? 
                'Por favor completa todos los campos obligatorios.' : 
                'Please fill in all required fields.');
            return false;
        }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showAlert(currentLang === 'es' ? 
            'Por favor ingresa un email válido.' : 
            'Please enter a valid email.');
        return false;
    }

    return true;
}

/**
 * Submit form data
 */
function submitForm(data) {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Update button state
    submitButton.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';
    submitButton.disabled = true;

    // Simulate API call (replace with actual endpoint)
    setTimeout(() => {
        // Success feedback
        showAlert(currentLang === 'es' ? 
            '¡Gracias! Recibirás una propuesta en menos de 24 horas.' : 
            'Thank you! You will receive a proposal in less than 24 hours.');
        
        // Reset form
        form.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Track successful submission
        trackEvent('form_submit_success', {
            form_name: 'contact_form',
            language: currentLang
        });
    }, 2000);
}

/**
 * Show alert message
 */
function showAlert(message) {
    // Create custom alert or use browser alert
    // For production, consider using a custom modal
    alert(message);
}

/**
 * Initialize lazy loading for images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.add('loaded');
            }
        });
    }
}

/**
 * Initialize CTA tracking
 */
function initCTATracking() {
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.textContent.trim();
            const section = e.target.closest('section')?.id || 'unknown';
            
            trackEvent('cta_click', {
                button_text: buttonText,
                section: section,
                language: currentLang
            });
        });
    });

    // Track form submissions
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            trackEvent('form_submit_attempt', {
                form_name: 'contact_form',
                language: currentLang
            });
        });
    }

    // Track FAQ interactions
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', (e) => {
            const questionText = e.target.textContent.replace('▼', '').trim();
            
            trackEvent('faq_click', {
                question: questionText,
                language: currentLang
            });
        });
    });
}

/**
 * Track analytics events
 */
function trackEvent(eventName, parameters = {}) {
    // Placeholder for Google Analytics 4 event tracking
    console.log('Event tracked:', eventName, parameters);
    
    // Example GA4 integration:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, parameters);
    // }
    
    // Example Facebook Pixel integration:
    // if (typeof fbq !== 'undefined') {
    //     fbq('track', eventName, parameters);
    // }
}

/**
 * Initialize performance monitoring
 */
function initPerformanceMonitoring() {
    // Log Core Web Vitals when available
    if ('PerformanceObserver' in window) {
        try {
            // Monitor Largest Contentful Paint (LCP)
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    console.log('LCP:', entry.startTime);
                    trackEvent('core_web_vital', {
                        metric: 'LCP',
                        value: entry.startTime
                    });
                }
            }).observe({entryTypes: ['largest-contentful-paint']});

            // Monitor First Input Delay (FID)
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    console.log('FID:', entry.processingStart - entry.startTime);
                    trackEvent('core_web_vital', {
                        metric: 'FID',
                        value: entry.processingStart - entry.startTime
                    });
                }
            }).observe({entryTypes: ['first-input']});

            // Monitor Cumulative Layout Shift (CLS)
            new PerformanceObserver((entryList) => {
                let clsValue = 0;
                for (const entry of entryList.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                }
                console.log('CLS:', clsValue);
                trackEvent('core_web_vital', {
                    metric: 'CLS',
                    value: clsValue
                });
            }).observe({entryTypes: ['layout-shift']});

        } catch (error) {
            console.log('Performance monitoring not fully supported');
        }
    }

    // Simple page load time logging
    window.addEventListener('load', () => {
        setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0];
            if (navigation) {
                const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
                console.log(`Page load time: ${loadTime}ms`);
                trackEvent('page_load_time', { load_time: loadTime });
            }
        }, 0);
    });
}

/**
 * Initialize page visibility tracking
 */
function initPageVisibility() {
    let startTime = Date.now();
    let isVisible = !document.hidden;
    
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && isVisible) {
            // Page became hidden
            const timeSpent = Date.now() - startTime;
            trackEvent('page_time', {
                time_spent: Math.round(timeSpent / 1000),
                language: currentLang
            });
            isVisible = false;
        } else if (!document.hidden && !isVisible) {
            // Page became visible
            startTime = Date.now();
            isVisible = true;
        }
    });

    // Track time when page unloads
    window.addEventListener('beforeunload', () => {
        if (isVisible) {
            const timeSpent = Date.now() - startTime;
            trackEvent('page_time', {
                time_spent: Math.round(timeSpent / 1000),
                language: currentLang
            });
        }
    });
}

/**
 * Initialize accessibility enhancements
 */
function initAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#hero';
    skipLink.textContent = currentLang === 'es' ? 'Ir al contenido principal' : 'Skip to main content';
    skipLink.className = 'sr-only';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--base-dark);
        color: var(--white);
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1001;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Improve keyboard navigation for FAQ
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });

    // Add ARIA labels where needed
    document.querySelectorAll('img').forEach(img => {
        if (!img.alt) {
            img.alt = 'Imagen decorativa';
        }
    });

    // Enhance form accessibility
    const form = document.getElementById('contactForm');
    if (form) {
        form.setAttribute('novalidate', ''); // Use custom validation
        
        // Add ARIA labels to form fields
        const formFields = form.querySelectorAll('input, select, textarea');
        formFields.forEach(field => {
            const label = form.querySelector(`label[for="${field.id}"]`);
            if (label && !field.getAttribute('aria-label')) {
                field.setAttribute('aria-label', label.textContent);
            }
        });
    }
}

/**
 * Initialize error handling
 */
function initErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript error:', e.error);
        trackEvent('javascript_error', {
            message: e.message,
            filename: e.filename,
            lineno: e.lineno
        });
    });

    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
        trackEvent('promise_rejection', {
            reason: e.reason?.toString() || 'Unknown'
        });
    });
}

/**
 * Utility Functions
 */

// Debounce function to limit function calls
function debounce(func, wait) {
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

// Throttle function to limit function calls
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Cookie utility functions
const Cookie = {
    set: (name, value, days = 30) => {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    },
    
    get: (name) => {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    
    delete: (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
};

// Local storage utility (with fallback)
const Storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            Cookie.set(key, JSON.stringify(value));
        }
    },
    
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            const item = Cookie.get(key);
            return item ? JSON.parse(item) : null;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            Cookie.delete(key);
        }
    }
};

// Export functions for potential external use
window.NalaTecLanding = {
    toggleLanguage,
    toggleFAQ,
    trackEvent,
    getCurrentLang: () => currentLang,
    Storage,
    Cookie
};

// Service Worker Registration (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to register service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}