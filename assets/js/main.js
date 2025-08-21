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
        // Configurar traducciones completas inmediatamente
        setupTranslations();
        
        // Configurar eventos
        setupEventListeners();
        setupSmoothScrolling();
        setupMobileMenu();
        setupLanguageToggle();
        setupFormHandling();
        setupScrollAnimations();
        setupLazyLoading();
        
        // Set initial language
        setLanguage(currentLanguage);
        
        console.log('NalaTec Landing initialized successfully');
    }

    // Setup complete translations
    function setupTranslations() {
        translations = {
            es: {
                "page.title": "Landing Express NalaTec – lanza una página que convierte en 5–7 días",
                "page.description": "La transformación digital no tiene que ser cara. Diseñamos y desarrollamos tu landing optimizada para velocidad, SEO y conversiones, a un precio accesible.",
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
                "hero.benefit3": "🧩 Integración con WhatsApp/Email",
                "hero.trust": "Sin sorpresas: alcance cerrado, 2 rondas de revisión, soporte 30 días.",
                "why.title": "Vende más con menos: una sola página, un solo objetivo",
                "why.intro": "Una landing es la forma más rápida y eficiente de validar una oferta, captar leads o vender un servicio. En NalaTec nos enfocamos en lo que importa: claridad del mensaje, velocidad de carga y una estructura pensada para llevar al usuario a la acción.",
                "why.problem1": "Tu web actual <strong>no convierte</strong>",
                "why.solution1": "→ Diseñamos una historia clara con CTA estratégicos.",
                "why.problem2": "Tu web <strong>carga lento</strong>",
                "why.solution2": "→ Optimizamos performance desde el primer día.",
                "why.problem3": "No sabes <strong>qué medir</strong>",
                "why.solution3": "→ Entregamos métricas y eventos listos en GA4.",
                "results.title": "¿Qué vas a conseguir en 5–7 días?",
                "results.item1": "Un mensaje claro y un diseño moderno que genera confianza.",
                "results.item2": "Una estructura probada: hero potente, beneficios, prueba social, oferta, FAQ y CTA.",
                "results.item3": "Puntos de contacto integrados (WhatsApp, email).",
                "results.item4": "Métricas de rendimiento (Lighthouse) y eventos básicos en GA4.",
                "results.item5": "Un entregable listo para campañas (Google, Meta, email, orgánico).",
                "results.disclaimer": "Los resultados varían según sector y tráfico. Medimos, aprendemos y optimizamos.",
                "includes.title": "Todo lo necesario para lanzar y medir",
                "includes.strategy.title": "Estrategia & Copy",
                "includes.strategy.item1": "Brief inicial (30–45 min)",
                "includes.strategy.item2": "Propuesta de estructura (wireframe de contenido)",
                "includes.strategy.item3": "Copy orientado a conversión (títulos, subtítulos, CTA)",
                "includes.design.title": "Diseño & Desarrollo",
                "includes.design.item1": "Diseño responsive (mobile-first)",
                "includes.design.item2": "UI acorde a tu marca (paleta, tipografías, estilo)",
                "includes.design.item3": "Implementación en WordPress (Astra/Block Editor o Elementor) <em>o</em> stack liviano a medida (según preferencia)",
                "includes.performance.title": "Performance & SEO técnico",
                "includes.performance.item1": "Optimización de tiempos de carga (objetivo LCP < 2.5s)",
                "includes.performance.item2": "Etiquetas meta y estructura Hn básica",
                "includes.performance.item3": "Sitemap/robots básicos (si aplica)",
                "includes.integrations.title": "Integraciones",
                "includes.integrations.item1": "1 integración incluida (WhatsApp, email marketing o CRM simple)",
                "includes.integrations.item2": "Configuración de eventos clave (clic en CTA, envío de formulario)",
                "includes.delivery.title": "Entrega & Soporte",
                "includes.delivery.item1": "2 rondas de revisión",
                "includes.delivery.item2": "Manual corto de uso (PDF/Notion)",
                "includes.delivery.item3": "Soporte 30 días post-lanzamiento",
                "includes.note": "¿Necesitas extra? Puedes añadirlo con nuestros <strong>Add-ons</strong>.",
                "process.title": "Proceso simple. Entrega rápida.",
                "process.step1.title": "Brief & objetivos (Día 1)",
                "process.step1.desc": "entendemos tu oferta, público y acción deseada.",
                "process.step2.title": "Copy & wireframe (Día 2–3)",
                "process.step2.desc": "planteamos el mensaje y la estructura.",
                "process.step3.title": "Diseño & desarrollo (Día 3–5)",
                "process.step3.desc": "maquetamos, integramos y optimizamos.",
                "process.step4.title": "Revisiones & lanzamiento (Día 5–7)",
                "process.step4.desc": "ajustes finales, métricas y publicación.",
                "process.note": "Cumplimos tiempos si el feedback llega dentro de las 24h acordadas.",
                "pricing.title": "Planes pensados para tu momento",
                "pricing.starter.name": "Starter",
                "pricing.starter.subtitle": "Ideal para empezar",
                "pricing.starter.feature1": "1 landing (5–7 secciones)",
                "pricing.starter.feature2": "1 integración (WhatsApp/Email)",
                "pricing.starter.feature3": "SEO técnico base + métricas GA4",
                "pricing.starter.feature4": "2 rondas + soporte 30 días",
                "pricing.starter.price": "Desde $XXX",
                "pricing.pro.name": "Pro",
                "pricing.pro.subtitle": "Para acelerar",
                "pricing.pro.feature1": "Todo lo de Starter",
                "pricing.pro.feature2": "Sección extra o variante A/B",
                "pricing.pro.feature3": "1 integración adicional",
                "pricing.pro.feature4": "Implementación de schema básico",
                "pricing.pro.feature5": "CRM Simple",
                "pricing.pro.price": "Desde $XXX",
                "pricing.premium.name": "Premium",
                "pricing.premium.subtitle": "Lanzamiento completo",
                "pricing.premium.feature1": "Todo lo de Pro",
                "pricing.premium.feature2": "Ajustes de performance avanzados",
                "pricing.premium.feature3": "Copy extendido y microcopys",
                "pricing.premium.feature4": "Mantenimiento 1 mes",
                "pricing.premium.price": "Desde $XXX",
                "pricing.note": "La transformación digital no tiene que ser cara. Ajustamos el alcance a tus objetivos.",
                "addons.title": "Personaliza tu landing con extras",
                "addons.item1": "Mantenimiento (updates, backups, hardening) — <strong>$40–$120/mes</strong>",
                "addons.item2": "Multilenguaje (estructura y traducciones)",
                "addons.item3": "Integraciones avanzadas (pagos, CRM complejos, webhooks)",
                "addons.item4": "Secciones extra o páginas satélite",
                "cases.title": "Antes y después: velocidad y claridad",
                "cases.case1.client": "<strong>Cliente:</strong> [Nombre/sector]",
                "cases.case1.problem": "<strong>Problema:</strong> web lenta y sin leads.",
                "cases.case1.solution": "<strong>Solución:</strong> Landing Express con copy orientado a CTA + WhatsApp y GA4.",
                "cases.case1.result": "<strong>Resultado:</strong> LCP bajó de 4.3s a 2.1s. Leads semanales: de 2 a 9.",
                "cases.case2.client": "<strong>Cliente:</strong> [Nombre/sector]",
                "cases.case2.problem": "<strong>Problema:</strong> oferta confusa.",
                "cases.case2.solution": "<strong>Solución:</strong> nueva jerarquía de mensajes, prueba social y FAQ.",
                "cases.case2.result": "<strong>Resultado:</strong> +32% CTR en CTA principal.",
                "cases.cta": "Quiero resultados así",
                "comparison.title": "¿Constructor DIY o Landing Express?",
                "comparison.diy.title": "DIY",
                "comparison.diy.desc": "barato, pero consume tiempo, sin criterio de performance, sin medición real.",
                "comparison.nalatec.title": "NalaTec",
                "comparison.nalatec.desc": "enfoque en conversión, performance medida, entregable listo en 5–7 días, soporte.",
                "comparison.note": "Tu tiempo vale más: delega y lanza con base sólida.",
                "guarantees.title": "Trato claro, sin sorpresas",
                "guarantees.item1": "<strong>2 rondas de revisión</strong> incluidas (dentro del alcance definido).",
                "guarantees.item2": "<strong>Soporte 30 días</strong> post-lanzamiento (pequeños ajustes y dudas).",
                "guarantees.item3": "<strong>Propiedad del contenido</strong>: el sitio queda en tu hosting (o te ayudamos a migrarlo).",
                "guarantees.item4": "<strong>Cambios fuera de alcance</strong>: se cotizan como add-on o nueva fase.",
                "guarantees.disclaimer": "Trabajamos con el objetivo de <strong>LCP < 2.5s</strong>; el resultado final depende de hosting, assets y terceros.",
                "faq.title": "Preguntas frecuentes (FAQ)",
                "faq.q1.question": "¿Qué necesito para empezar?",
                "faq.q1.answer": "Logo, paleta y tipografías (si las tienes), 2–3 referencias de estilo, y la información básica de tu oferta (beneficio, precio/CTA, contacto).",
                "faq.q2.question": "¿Incluye hosting y dominio?",
                "faq.q2.answer": "No, pero te recomendamos opciones y te ayudamos a configurarlo.",
                "faq.q3.question": "¿Trabajan con Elementor o Gutenberg?",
                "faq.q3.answer": "Sí. Elegimos según tu stack, rendimiento y facilidad de edición para tu equipo.",
                "faq.q4.question": "¿Puedo pagar en partes?",
                "faq.q4.answer": "Sí: 50% al inicio, 50% al finalizar antes de publicar. Si necesitas otro esquema, lo conversamos.",
                "faq.q5.question": "¿Qué pasa si no me gusta el copy?",
                "faq.q5.answer": "Incluimos 2 rondas de revisión. Además, podemos iterar con tus textos como insumo base.",
                "faq.q6.question": "¿Incluye SEO completo?",
                "faq.q6.answer": "Incluimos <strong>SEO técnico base</strong> (estructura, metadatos, sitemap). El SEO de contenido y linkbuilding puede añadirse como add-on.",
                "faq.q7.question": "¿Pueden integrar pagos o agendamiento?",
                "faq.q7.answer": "Sí, como add-on (Stripe, PayPal, Calendly, etc.).",
                "faq.q8.question": "¿Qué diferencia a NalaTec si \"todo el mundo usa IA\"?",
                "faq.q8.answer": "Criterio. No es la herramienta, es cómo la usamos: enfoque en conversión, performance y medición real.",
                "cta_intermediate.title": "¿Listo para lanzar tu landing?",
                "cta_intermediate.subtitle": "Agenda tu brief y recibe una propuesta en menos de 24 horas.",
                "cta_intermediate.trust": "Calendario flexible. Sin compromiso en la primera llamada.",
                "about.title": "NalaTec – De ideas a proyectos digitales",
                "about.description": "Somos un equipo ágil que combina diseño, tecnología y criterio de negocio. Creemos en soluciones accesibles, medibles y enfocadas en resultados. Si buscas velocidad, claridad y un lanzamiento sin estrés, hablemos.",
                "contact.title": "¿Dudas rápidas? Escríbenos por WhatsApp o envíanos un correo.",
                "contact.whatsapp": "WhatsApp",
                "contact.email": "Email",
                "contact.schedule": "Agendar llamada",
                "contact.privacy": "Cuidamos tus datos. Lee nuestra política de privacidad.",
                "form.name": "Nombre",
                "form.email": "Email",
                "form.whatsapp": "WhatsApp",
                "form.business": "Tu negocio",
                "form.objective": "Objetivo de la landing",
                "form.objective_placeholder": "Selecciona una opción",
                "form.objective_leads": "Captar leads",
                "form.objective_sales": "Vender",
                "form.objective_bookings": "Reservar",
                "form.timeline": "Plazo deseado",
                "form.trust": "Recibirás una propuesta clara en menos de 24 horas.",
                "form.submit": "Solicitar propuesta",
                "form.privacy": "Al enviar aceptas nuestra política de privacidad.",
                "lead_magnet.title": "Checklist: \"Los 12 puntos de una landing que convierte\"",
                "lead_magnet.subtitle": "Descárgalo gratis y úsalo como guía para tu proyecto.",
                "lead_magnet.cta": "Quiero el checklist",
                "lead_magnet.note": "Recibirás el PDF por email. Sin spam.",
                "footer.terms": "Términos y condiciones",
                "footer.privacy": "Privacidad",
                "footer.support": "Soporte",
                "footer.blog": "Blog/Recursos",
                "footer.copyright": "© NalaTec. Tecnología accesible, resultados reales."
            },
            en: {
                "page.title": "Landing Express NalaTec – launch a converting page in 5–7 days",
                "page.description": "Digital transformation doesn't have to be expensive. We design and develop your landing page optimized for speed, SEO and conversions, at an affordable price.",
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
                "hero.benefit3": "🧩 WhatsApp/Email integration",
                "hero.trust": "No surprises: closed scope, 2 revision rounds, 30-day support.",
                "why.title": "Sell more with less: one page, one objective",
                "why.intro": "A landing page is the fastest and most efficient way to validate an offer, capture leads or sell a service. At NalaTec we focus on what matters: message clarity, loading speed and a structure designed to lead users to action.",
                "why.problem1": "Your current website <strong>doesn't convert</strong>",
                "why.solution1": "→ We design a clear story with strategic CTAs.",
                "why.problem2": "Your website <strong>loads slowly</strong>",
                "why.solution2": "→ We optimize performance from day one.",
                "why.problem3": "You don't know <strong>what to measure</strong>",
                "why.solution3": "→ We deliver metrics and events ready in GA4.",
                "results.title": "What will you get in 5–7 days?",
                "results.item1": "A clear message and modern design that builds trust.",
                "results.item2": "A proven structure: powerful hero, benefits, social proof, offer, FAQ and CTA.",
                "results.item3": "Integrated contact points (WhatsApp, email).",
                "results.item4": "Performance metrics (Lighthouse) and basic GA4 events.",
                "results.item5": "A deliverable ready for campaigns (Google, Meta, email, organic).",
                "results.disclaimer": "Results vary by sector and traffic. We measure, learn and optimize.",
                "includes.title": "Everything needed to launch and measure",
                "includes.strategy.title": "Strategy & Copy",
                "includes.strategy.item1": "Initial brief (30–45 min)",
                "includes.strategy.item2": "Structure proposal (content wireframe)",
                "includes.strategy.item3": "Conversion-oriented copy (headlines, subheads, CTAs)",
                "includes.design.title": "Design & Development",
                "includes.design.item1": "Responsive design (mobile-first)",
                "includes.design.item2": "UI matching your brand (palette, typography, style)",
                "includes.design.item3": "WordPress implementation (Astra/Block Editor or Elementor) <em>or</em> custom lightweight stack (based on preference)",
                "includes.performance.title": "Performance & Technical SEO",
                "includes.performance.item1": "Load time optimization (LCP < 2.5s target)",
                "includes.performance.item2": "Meta tags and basic Hn structure",
                "includes.performance.item3": "Basic sitemap/robots (if applicable)",
                "includes.integrations.title": "Integrations",
                "includes.integrations.item1": "1 integration included (WhatsApp, email marketing or simple CRM)",
                "includes.integrations.item2": "Key event configuration (CTA clicks, form submissions)",
                "includes.delivery.title": "Delivery & Support",
                "includes.delivery.item1": "2 revision rounds",
                "includes.delivery.item2": "Short usage manual (PDF/Notion)",
                "includes.delivery.item3": "30-day post-launch support",
                "includes.note": "Need extras? You can add them with our <strong>Add-ons</strong>.",
                "process.title": "Simple process. Fast delivery.",
                "process.step1.title": "Brief & objectives (Day 1)",
                "process.step1.desc": "we understand your offer, audience and desired action.",
                "process.step2.title": "Copy & wireframe (Day 2–3)",
                "process.step2.desc": "we outline the message and structure.",
                "process.step3.title": "Design & development (Day 3–5)",
                "process.step3.desc": "we design, integrate and optimize.",
                "process.step4.title": "Revisions & launch (Day 5–7)",
                "process.step4.desc": "final adjustments, metrics and publication.",
                "process.note": "We meet deadlines if feedback arrives within the agreed 24h.",
                "pricing.title": "Plans designed for your moment",
                "pricing.starter.name": "Starter",
                "pricing.starter.subtitle": "Ideal to get started",
                "pricing.starter.feature1": "1 landing page (5–7 sections)",
                "pricing.starter.feature2": "1 integration (WhatsApp/Email)",
                "pricing.starter.feature3": "Basic technical SEO + GA4 metrics",
                "pricing.starter.feature4": "2 rounds + 30-day support",
                "pricing.starter.price": "From $XXX",
                "pricing.pro.name": "Pro",
                "pricing.pro.subtitle": "To accelerate",
                "pricing.pro.feature1": "Everything from Starter",
                "pricing.pro.feature2": "Extra section or A/B variant",
                "pricing.pro.feature3": "1 additional integration",
                "pricing.pro.feature4": "Basic schema implementation",
                "pricing.pro.feature5": "Simple CRM",
                "pricing.pro.price": "From $XXX",
                "pricing.premium.name": "Premium",
                "pricing.premium.subtitle": "Complete launch",
                "pricing.premium.feature1": "Everything from Pro",
                "pricing.premium.feature2": "Advanced performance adjustments",
                "pricing.premium.feature3": "Extended copy and microcopy",
                "pricing.premium.feature4": "1-month maintenance",
                "pricing.premium.price": "From $XXX",
                "pricing.note": "Digital transformation doesn't have to be expensive. We adjust the scope to your objectives.",
                "addons.title": "Customize your landing with extras",
                "addons.item1": "Maintenance (updates, backups, hardening) — <strong>$40–$120/month</strong>",
                "addons.item2": "Multilanguage (structure and translations)",
                "addons.item3": "Advanced integrations (payments, complex CRMs, webhooks)",
                "addons.item4": "Extra sections or satellite pages",
                "cases.title": "Before and after: speed and clarity",
                "cases.case1.client": "<strong>Client:</strong> [Name/sector]",
                "cases.case1.problem": "<strong>Problem:</strong> slow website with no leads.",
                "cases.case1.solution": "<strong>Solution:</strong> Landing Express with CTA-oriented copy + WhatsApp and GA4.",
                "cases.case1.result": "<strong>Result:</strong> LCP dropped from 4.3s to 2.1s. Weekly leads: from 2 to 9.",
                "cases.case2.client": "<strong>Client:</strong> [Name/sector]",
                "cases.case2.problem": "<strong>Problem:</strong> confusing offer.",
                "cases.case2.solution": "<strong>Solution:</strong> new message hierarchy, social proof and FAQ.",
                "cases.case2.result": "<strong>Result:</strong> +32% CTR on main CTA.",
                "cases.cta": "I want results like these",
                "comparison.title": "DIY Builder or Landing Express?",
                "comparison.diy.title": "DIY",
                "comparison.diy.desc": "cheap, but time-consuming, no performance criteria, no real measurement.",
                "comparison.nalatec.title": "NalaTec",
                "comparison.nalatec.desc": "conversion focus, measured performance, deliverable ready in 5–7 days, support.",
                "comparison.note": "Your time is worth more: delegate and launch with a solid foundation.",
                "guarantees.title": "Clear deal, no surprises",
                "guarantees.item1": "<strong>2 revision rounds</strong> included (within defined scope).",
                "guarantees.item2": "<strong>30-day support</strong> post-launch (small adjustments and questions).",
                "guarantees.item3": "<strong>Content ownership</strong>: the site stays on your hosting (or we help you migrate).",
                "guarantees.item4": "<strong>Out-of-scope changes</strong>: quoted as add-on or new phase.",
                "guarantees.disclaimer": "We work with the goal of <strong>LCP < 2.5s</strong>; final result depends on hosting, assets and third parties.",
                "faq.title": "Frequently Asked Questions (FAQ)",
                "faq.q1.question": "What do I need to get started?",
                "faq.q1.answer": "Logo, palette and typography (if you have them), 2–3 style references, and basic information about your offer (benefit, price/CTA, contact).",
                "faq.q2.question": "Does it include hosting and domain?",
                "faq.q2.answer": "No, but we recommend options and help you set it up.",
                "faq.q3.question": "Do you work with Elementor or Gutenberg?",
                "faq.q3.answer": "Yes. We choose based on your stack, performance and editing ease for your team.",
                "faq.q4.question": "Can I pay in installments?",
                "faq.q4.answer": "Yes: 50% at start, 50% upon completion before publishing. If you need another scheme, we can discuss it.",
                "faq.q5.question": "What if I don't like the copy?",
                "faq.q5.answer": "We include 2 revision rounds. Plus, we can iterate with your texts as base input.",
                "faq.q6.question": "Does it include complete SEO?",
                "faq.q6.answer": "We include <strong>basic technical SEO</strong> (structure, metadata, sitemap). Content SEO and linkbuilding can be added as add-on.",
                "faq.q7.question": "Can you integrate payments or scheduling?",
                "faq.q7.answer": "Yes, as add-on (Stripe, PayPal, Calendly, etc.).",
                "faq.q8.question": "What makes NalaTec different if \"everyone uses AI\"?",
                "faq.q8.answer": "Criteria. It's not the tool, it's how we use it: focus on conversion, performance and real measurement.",
                "cta_intermediate.title": "Ready to launch your landing?",
                "cta_intermediate.subtitle": "Schedule your brief and receive a proposal in less than 24 hours.",
                "cta_intermediate.trust": "Flexible calendar. No commitment on the first call.",
                "about.title": "NalaTec – From ideas to digital projects",
                "about.description": "We are an agile team that combines design, technology and business criteria. We believe in accessible, measurable solutions focused on results. If you're looking for speed, clarity and a stress-free launch, let's talk.",
                "contact.title": "Quick questions? Write us on WhatsApp or send us an email.",
                "contact.whatsapp": "WhatsApp",
                "contact.email": "Email",
                "contact.schedule": "Schedule call",
                "contact.privacy": "We care for your data. Read our privacy policy.",
                "form.name": "Name",
                "form.email": "Email",
                "form.whatsapp": "WhatsApp",
                "form.business": "Your business",
                "form.objective": "Landing objective",
                "form.objective_placeholder": "Select an option",
                "form.objective_leads": "Capture leads",
                "form.objective_sales": "Sell",
                "form.objective_bookings": "Book appointments",
                "form.timeline": "Desired timeline",
                "form.trust": "You'll receive a clear proposal in less than 24 hours.",
                "form.submit": "Request proposal",
                "form.privacy": "By submitting you accept our privacy policy.",
                "lead_magnet.title": "Checklist: \"The 12 points of a converting landing page\"",
                "lead_magnet.subtitle": "Download it for free and use it as a guide for your project.",
                "lead_magnet.cta": "I want the checklist",
                "lead_magnet.note": "You'll receive the PDF by email. No spam.",
                "footer.terms": "Terms and conditions",
                "footer.privacy": "Privacy",
                "footer.support": "Support",
                "footer.blog": "Blog/Resources",
                "footer.copyright": "© NalaTec. Accessible technology, real results."
            }
        };
    } 
    // Load translations (now optional since they're embedded)
    async function loadTranslations() {
        // This function is now optional since translations are embedded
        // But we keep it for future external loading if needed
        console.log('Translations loaded from embedded data');
        return Promise.resolve();
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
        const langTranslations = translations[lang];
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