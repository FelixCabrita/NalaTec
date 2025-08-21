// NalaTec Landing Express - Main JavaScript
// ==========================================

(function() {
    'use strict';

    // Global variables
    let currentLanguage = 'es';
    let translations = {};
    let isMenuOpen = false;

    // DOM Content Loaded
    document.addEventListener('DOMContentLoaded', function() {
        initializeApp();
    });

    // Initialize application
    function initializeApp() {
        // Primero configurar las traducciones básicas de emergencia
        if (Object.keys(translations).length === 0) {
            setupFallbackTranslations();
        }
        
        // Configurar eventos inmediatamente
        setupEventListeners();
        setupSmoothScrolling();
        setupMobileMenu();
        setupLanguageToggle();
        setupFormHandling();
        setupScrollAnimations();
        setupLazyLoading();
        
        // Cargar traducciones completas y actualizar
        loadTranslations()
            .then(() => {
                // Set initial language después de cargar
                setLanguage(currentLanguage);
                console.log('NalaTec Landing initialized successfully');
            })
            .catch(error => {
                console.error('Error loading translations, using fallback:', error);
                // Usar las traducciones de emergencia que ya están configuradas
                setLanguage(currentLanguage);
            });
    }

    // Setup fallback translations immediately
    function setupFallbackTranslations() {
        translations = {
            es: {
                "nav.services": "Servicios",
                "nav.process": "Proceso", 
                "nav.pricing": "Precios",
                "nav.cases": "Casos",
                "nav.faq": "FAQ",
                "cta.primary": "Quiero mi landing",
                "cta.secondary": "Ver lo que incluye",
                "hero.title": "<strong>Landing Express NalaTec</strong> – lanza una página que <strong>convierte</strong> en 5–7 días",
                "hero.subtitle": "La transformación digital no tiene que ser cara. Diseñamos y desarrollamos tu landing optimizada para velocidad, SEO y conversiones, a un precio accesible.",
                "hero.benefit1": "⚡ Carga rápida (objetivo LCP < 2.5s)",
                "hero.benefit2": "🎯 Copy orientado a conversión", 
                "hero.benefit3": "🧩 Integración con WhatsApp/Email/CRM",
                "hero.trust": "Sin sorpresas: alcance cerrado, 2 rondas de revisión, soporte 30 días.",
                "footer.copyright": "© NalaTec. Tecnología accesible, resultados reales."
            },
            en: {
                "nav.services": "Services",
                "nav.process": "Process",
                "nav.pricing": "Pricing", 
                "nav.cases": "Cases",
                "nav.faq": "FAQ",
                "cta.primary": "I want my landing",
                "cta.secondary": "See what's included",
                "hero.title": "<strong>Landing Express NalaTec</strong> – launch a page that <strong>converts</strong> in 5–7 days",
                "hero.subtitle": "Digital transformation doesn't have to be expensive. We design and develop your landing page optimized for speed, SEO and conversions, at an affordable price.",
                "hero.benefit1": "⚡ Fast loading (LCP < 2.5s target)",
                "hero.benefit2": "🎯 Conversion-oriented copy",
                "hero.benefit3": "🧩 WhatsApp/Email/CRM integration", 
                "hero.trust": "No surprises: closed scope, 2 revision rounds, 30-day support.",
                "footer.copyright": "© NalaTec. Accessible technology, real results."
            }
        };
    }

    // Load translations
    async function loadTranslations() {
        try {
            const [esResponse, enResponse] = await Promise.all([
                fetch('assets/translations/es.json'),
                fetch('assets/translations/en.json')
            ]);

            translations.es = await esResponse.json();
            translations.en = await enResponse.json();
        } catch (error) {
            console.error('Error loading translations, using fallback:', error);
            // Fallback translations completas
            translations = {
                es: {
                    "nav.services": "Servicios",
                    "nav.process": "Proceso", 
                    "nav.pricing": "Precios",
                    "nav.cases": "Casos",
                    "nav.faq": "FAQ",
                    "cta.primary": "Quiero mi landing",
                    "cta.secondary": "Ver lo que incluye",
                    "hero.title": "<strong>Landing Express NalaTec</strong> – lanza una página que <strong>convierte</strong> en 5–7 días",
                    "hero.subtitle": "La transformación digital no tiene que ser cara. Diseñamos y desarrollamos tu landing optimizada para velocidad, SEO y conversiones, a un precio accesible.",
                    "hero.benefit1": "⚡ Carga rápida (objetivo LCP < 2.5s)",
                    "hero.benefit2": "🎯 Copy orientado a conversión", 
                    "hero.benefit3": "🧩 Integración con WhatsApp/Email/CRM",
                    "hero.trust": "Sin sorpresas: alcance cerrado, 2 rondas de revisión, soporte 30 días."
                },
                en: {
                    "nav.services": "Services",
                    "nav.process": "Process",
                    "nav.pricing": "Pricing", 
                    "nav.cases": "Cases",
                    "nav.faq": "FAQ",
                    "cta.primary": "I want my landing",
                    "cta.secondary": "See what's included",
                    "hero.title": "<strong>Landing Express NalaTec</strong> – launch a page that <strong>converts</strong> in 5–7 days",
                    "hero.subtitle": "Digital transformation doesn't have to be expensive. We design and develop your landing page optimized for speed, SEO and conversions, at an affordable price.",
                    "hero.benefit1": "⚡ Fast loading (LCP < 2.5s target)",
                    "hero.benefit2": "🎯 Conversion-oriented copy",
                    "hero.benefit3": "🧩 WhatsApp/Email/CRM integration", 
                    "hero.trust": "No surprises: closed scope, 2 revision rounds, 30-day support."
                }
            };
        }
    }

    // Setup event listeners
    function setupEventListeners() {
        // Header scroll effect
        window.addEventListener('scroll', handleScroll);
        
        // Resize handler
        window.addEventListener('resize', debounce(handleResize, 250));
        
        // Form submissions
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', handleContactForm);
        }
        
        // CTA buttons
        const ctaButtons = document.querySelectorAll('[href="#contacto"]');
        ctaButtons.forEach(button => {
            button.addEventListener('click', handleCTAClick);
        });
        
        // FAQ items
        const faqItems = document.querySelectorAll('.faq__item');
        faqItems.forEach(item => {
            item.addEventListener('toggle', handleFAQToggle);
        });
    }

    // Setup smooth scrolling
    function setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (isMenuOpen) {
                        toggleMobileMenu();
                    }
                    
                    // Track analytics event
                    trackEvent('Navigation', 'Click', href);
                }
            });
        });
    }

    // Setup mobile menu
    function setupMobileMenu() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('.header__nav');
        
        if (menuToggle && nav) {
            menuToggle.addEventListener('click', toggleMobileMenu);
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (isMenuOpen && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
                    toggleMobileMenu();
                }
            });
        }
    }

    // Toggle mobile menu
    function toggleMobileMenu() {
        const nav = document.querySelector('.header__nav');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (nav && menuToggle) {
            isMenuOpen = !isMenuOpen;
            
            nav.style.display = isMenuOpen ? 'block' : 'none';
            menuToggle.classList.toggle('active', isMenuOpen);
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = isMenuOpen ? 'hidden' : '';
            
            // Add mobile menu styles
            if (isMenuOpen) {
                nav.style.position = 'fixed';
                nav.style.top = '80px';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'var(--base-dark)';
                nav.style.padding = '2rem';
                nav.style.borderTop = '1px solid var(--neutral-border)';
                nav.style.zIndex = '999';
            } else {
                nav.style.cssText = '';
            }
        }
    }

    // Setup language toggle
    function setupLanguageToggle() {
        const langToggle = document.querySelector('.lang-toggle');
        
        if (langToggle) {
            langToggle.addEventListener('click', function() {
                const newLang = currentLanguage === 'es' ? 'en' : 'es';
                setLanguage(newLang);
                trackEvent('Language', 'Change', newLang);
            });
        }
    }

    // Set language
    function setLanguage(lang) {
        currentLanguage = lang;
        
        // Update language toggle button
        const langToggle = document.querySelector('.lang-toggle__text');
        if (langToggle) {
            langToggle.textContent = lang.toUpperCase();
        }
        
        // Update document language
        document.documentElement.lang = lang;
        
        // Update all translatable elements
        const translatableElements = document.querySelectorAll('[data-translate]');
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = getTranslation(key, lang);
            
            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translation;
                } else if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });
        
        // Update page title
        const titleKey = 'page.title';
        const pageTitle = getTranslation(titleKey, lang);
        if (pageTitle) {
            document.title = pageTitle;
        }
        
        // Update meta description
        const descKey = 'page.description';
        const pageDesc = getTranslation(descKey, lang);
        if (pageDesc) {
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.content = pageDesc;
            }
        }
    }

    // Get translation
    function getTranslation(key, lang) {
        const langTranslations = translations[lang] || translations.es;
        if (langTranslations && langTranslations[key]) {
            return langTranslations[key];
        }
        
        // Si no encuentra la traducción, buscar en el idioma alternativo
        const fallbackLang = lang === 'es' ? 'en' : 'es';
        const fallbackTranslations = translations[fallbackLang];
        if (fallbackTranslations && fallbackTranslations[key]) {
            return fallbackTranslations[key];
        }
        
        // Como último recurso, devolver el key sin los puntos
        console.warn(`Translation not found for key: ${key}`);
        return key.split('.').pop();
    }

    // Setup form handling
    function setupFormHandling() {
        // Add real-time validation
        const inputs = document.querySelectorAll('.form__input, .form__select');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }

    // Handle contact form submission
    function handleContactForm(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (!validateContactForm(data)) {
            return;
        }
        
        // Show loading state
        const submitButton = form.querySelector('[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = currentLanguage === 'es' ? 'Enviando...' : 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            // Success simulation
            showNotification(
                currentLanguage === 'es' 
                    ? '¡Gracias! Te contactaremos pronto.' 
                    : 'Thank you! We\'ll contact you soon.',
                'success'
            );
            
            form.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Track conversion
            trackEvent('Form', 'Submit', 'Contact');
            trackConversion('contact_form_submit');
            
        }, 2000);
    }

    // Validate contact form
    function validateContactForm(data) {
        let isValid = true;
        const errors = {};
        
        // Required fields
        if (!data.name || data.name.trim().length < 2) {
            errors.name = currentLanguage === 'es' 
                ? 'El nombre es requerido (mínimo 2 caracteres)' 
                : 'Name is required (minimum 2 characters)';
            isValid = false;
        }
        
        if (!data.email || !isValidEmail(data.email)) {
            errors.email = currentLanguage === 'es' 
                ? 'Email válido es requerido' 
                : 'Valid email is required';
            isValid = false;
        }
        
        // Show errors
        Object.keys(errors).forEach(field => {
            showFieldError(field, errors[field]);
        });
        
        return isValid;
    }

    // Validate individual field
    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        const name = field.name;
        
        clearFieldError(field);
        
        switch (name) {
            case 'name':
                if (value.length < 2) {
                    showFieldError(name, currentLanguage === 'es' 
                        ? 'Mínimo 2 caracteres' 
                        : 'Minimum 2 characters');
                }
                break;
            case 'email':
                if (value && !isValidEmail(value)) {
                    showFieldError(name, currentLanguage === 'es' 
                        ? 'Email inválido' 
                        : 'Invalid email');
                }
                break;
        }
    }

    // Clear field error
    function clearFieldError(field) {
        const fieldElement = typeof field === 'string' ? document.getElementById(field) : field;
        if (fieldElement) {
            fieldElement.classList.remove('error');
            const errorElement = fieldElement.parentNode.querySelector('.field-error');
            if (errorElement) {
                errorElement.remove();
            }
        }
    }

    // Show field error
    function showFieldError(fieldName, message) {
        const field = document.getElementById(fieldName);
        if (field) {
            field.classList.add('error');
            
            // Remove existing error
            clearFieldError(field);
            
            // Add new error
            const errorElement = document.createElement('span');
            errorElement.className = 'field-error';
            errorElement.textContent = message;
            errorElement.style.color = 'var(--accent-color)';
            errorElement.style.fontSize = '0.875rem';
            errorElement.style.marginTop = '0.25rem';
            errorElement.style.display = 'block';
            
            field.parentNode.appendChild(errorElement);
        }
    }

    // Validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Setup scroll animations
    function setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animateElements = document.querySelectorAll(
            '.card, .problem-solution, .process-step, .pricing-plan, .case'
        );
        
        animateElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Setup lazy loading for images
    function setupLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('fade-in');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    }

    // Handle scroll events
    function handleScroll() {
        const header = document.querySelector('.header');
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Handle resize events
    function handleResize() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth >= 768 && isMenuOpen) {
            toggleMobileMenu();
        }
    }

    // Handle CTA clicks
    function handleCTAClick(e) {
        const button = e.target;
        const ctaText = button.textContent.trim();
        
        trackEvent('CTA', 'Click', ctaText);
        
        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    }

    // Handle FAQ toggle
    function handleFAQToggle(e) {
        const faqItem = e.target;
        const question = faqItem.querySelector('.faq__question').textContent;
        
        trackEvent('FAQ', 'Toggle', question);
    }

    // Show notification
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existing = document.querySelector('.notification');
        if (existing) {
            existing.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <span class="notification__message">${message}</span>
                <button class="notification__close">&times;</button>
            </div>
        `;
        
        // Styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: type === 'success' ? 'var(--primary-color)' : 'var(--accent-color)',
            color: 'var(--text-on-light)',
            padding: '1rem 1.5rem',
            borderRadius: 'var(--border-radius)',
            boxShadow: 'var(--shadow-medium)',
            zIndex: '10000',
            animation: 'slideInRight 0.3s ease-out'
        });
        
        document.body.appendChild(notification);
        
        // Close button
        const closeBtn = notification.querySelector('.notification__close');
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Analytics tracking
    function trackEvent(category, action, label) {
        // Google Analytics 4 event tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label
            });
        }
        
        // Console log for development
        console.log('Event tracked:', { category, action, label });
    }

    // Track conversions
    function trackConversion(conversionName) {
        // Google Analytics 4 conversion tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
                send_to: 'AW-XXXXXXXXX/' + conversionName // Replace with actual conversion ID
            });
        }
        
        // Facebook Pixel tracking
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead');
        }
        
        console.log('Conversion tracked:', conversionName);
    }

    // Utility function: debounce
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

    // Utility function: throttle
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
        };
    }

    // Performance monitoring
    function measurePerformance() {
        if ('performance' in window) {
            window.addEventListener('load', function() {
                setTimeout(function() {
                    const perfData = performance.timing;
                    const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                    const domReady = perfData.domContentLoadedEventEnd - perfData.navigationStart;
                    
                    console.log('Page Performance:', {
                        loadTime: loadTime + 'ms',
                        domReady: domReady + 'ms'
                    });
                    
                    // Track in analytics
                    trackEvent('Performance', 'Load Time', Math.round(loadTime / 1000) + 's');
                    
                    // Track Core Web Vitals
                    if ('web-vitals' in window) {
                        getCLS(trackEvent.bind(null, 'Performance', 'CLS'));
                        getFID(trackEvent.bind(null, 'Performance', 'FID'));
                        getLCP(trackEvent.bind(null, 'Performance', 'LCP'));
                    }
                }, 0);
            });
        }
    }

    // Initialize performance monitoring
    measurePerformance();

    // Error handling
    window.addEventListener('error', function(e) {
        console.error('JavaScript Error:', e.error);
        trackEvent('Error', 'JavaScript', e.message);
    });

    // Export functions for external use
    window.NalaTec = {
        setLanguage,
        trackEvent,
        trackConversion,
        showNotification
    };

})();