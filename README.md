# Landing Express NalaTec - Proyecto Completo

## 📁 Estructura del Proyecto

```
/LandingExpressNalaTec
├── index.html                    # Página principal
├── README.md                     # Este archivo
├── pages/
│   ├── page1.html               # Servicios detallados
│   └── page2.html               # Casos de estudio
├── assets/
│   ├── css/
│   │   └── style.css            # Estilos principales
│   ├── js/
│   │   └── main.js              # JavaScript principal
│   ├── images/
│   │   └── placeholder.png      # Imagen placeholder
│   └── translations/
│       ├── en.json              # Traducciones en inglés
│       └── es.json              # Traducciones en español
```

## 🚀 Instrucciones de Instalación

1. **Descarga todos los archivos** y mantenlos en la estructura de carpetas indicada
2. **Descarga la imagen placeholder** desde: https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png
3. **Guárdala como** `assets/images/placeholder.png`
4. **Abre** `index.html` en tu navegador

## 🎨 Personalización Requerida

### 📸 Imágenes a Reemplazar

Todas las imágenes actualmente usan el placeholder. Debes reemplazar:

**Logos y Branding:**
- Logo de NalaTec en header
- Favicon del sitio

**Casos de Estudio (2 imágenes):**
- `assets/images/caso-1-antes.png` - Mockup antes del proyecto 1
- `assets/images/caso-1-despues.png` - Mockup después del proyecto 1
- `assets/images/caso-2-antes.png` - Mockup antes del proyecto 2
- `assets/images/caso-2-despues.png` - Mockup después del proyecto 2

**Performance Screenshots:**
- `assets/images/lighthouse-antes.png` - Captura de Lighthouse score bajo
- `assets/images/lighthouse-despues.png` - Captura de Lighthouse score alto

**Mockups y Ejemplos:**
- Capturas de sitios web reales que hayas creado
- Screenshots de herramientas (GA4, Lighthouse, etc.)

### 💰 Precios a Actualizar

En `index.html`, buscar y reemplazar:
- `Desde $XXX` por los precios reales
- Actualizar los precios en las secciones de planes

### 📞 Información de Contacto

**En `index.html` y archivos de páginas:**
- `https://wa.me/1234567890` → Tu número de WhatsApp real
- `mailto:hola@nalatec.com` → Tu email real
- Enlaces de redes sociales si los tienes

**En `assets/js/main.js`:**
- Configurar Google Analytics ID
- Configurar eventos de tracking reales

### 🌐 Contenido Específico

**Casos de Estudio (page2.html):**
- Reemplazar `[Nombre/sector]` por casos reales
- Actualizar métricas con datos verdaderos
- Añadir testimonios reales con nombres y empresas

**Servicios (page1.html):**
- Ajustar servicios según tu oferta real
- Actualizar garantías y políticas
- Modificar tiempos si son diferentes

## ⚙️ Configuración Técnica

### 🔧 Analytics y Tracking

**Google Analytics 4:**
1. Crear cuenta en GA4
2. Obtener Measurement ID
3. Reemplazar en `main.js`:
```javascript
// Buscar esta línea y descomentar:
// gtag('config', 'TU-MEASUREMENT-ID');
```

**Google Tag Manager (Opcional):**
1. Crear cuenta en GTM
2. Añadir el código de GTM en `<head>` de todos los HTML

### 📧 Formulario de Contacto

**Opciones de implementación:**

1. **Formspree (Recomendado para principiantes):**
   - Registrarse en https://formspree.io
   - Reemplazar `action="#"` por `action="https://formspree.io/f/TU-ID"`

2. **Netlify Forms:**
   - Si hospeadas en Netlify, añadir `netlify` al form
   - `<form netlify name="contact">`

3. **Integración personalizada:**
   - Modificar la función `submitForm()` en `main.js`
   - Conectar con tu backend o servicio preferido

### 🌍 Dominio y Hosting

**Actualizar URLs:**
- `https://landing-express-nalatec.com` → Tu dominio real
- En meta tags Open Graph de todos los archivos HTML
- En canonical links

## 🎨 Personalización de Diseño

### 🎨 Colores

En `assets/css/style.css`, modificar variables CSS:

```css
:root {
    --primary-color: #FFD700;    /* Tu color primario */
    --base-dark: #1A1A1A;       /* Tu color oscuro */
    --accent-color: #00E5FF;     /* Tu color de acento */
}
```

### 🔤 Tipografías

Para cambiar la fuente, actualizar en `style.css`:

```css
body {
    font-family: 'TU-FUENTE', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

Y añadir el link de Google Fonts en el `<head>` de los HTML.

## 🌐 Configuración Multiidioma

### 🔧 Funcionamiento Actual

- Cambio de idioma mediante botón en header
- Textos almacenados en archivos JSON separados
- JavaScript maneja el cambio dinámico

### ✏️ Añadir Nuevas Traducciones

1. **Agregar nuevos textos en `es.json`:**
```json
{
  "nuevo-texto": "Texto en español"
}
```

2. **Agregar traducción en `en.json`:**
```json
{
  "nuevo-texto": "Text in english"
}
```

3. **Usar en HTML:**
```html
<p data-translate="nuevo-texto">Texto en español</p>
```

## 📱 Responsive y Performance

### ✅ Ya Optimizado Para:
- Mobile-first design
- Tablets y desktop
- Lazy loading de imágenes
- CSS optimizado para performance
- JavaScript sin dependencias externas

### 🔍 Testing Recomendado:
- Google PageSpeed Insights
- GTmetrix
- Lighthouse (DevTools)
- Pruebas en dispositivos reales

## 🔍 SEO Incluido

### ✅ Implementado:
- Meta tags optimizados
- Open Graph para redes sociales
- Estructura de headings correcta
- URLs semánticas
- Sitemap básico preparado

### 📝 Pendiente de Configurar:
- Google Search Console
- Bing Webmaster Tools
- Schema markup avanzado (opcional)

## 🚀 Siguiente Pasos

1. **Personalizar contenido** según tus datos reales
2. **Reemplazar imágenes** placeholder
3. **Configurar analytics** y formularios
4. **Subir a hosting** (Netlify, Vercel, o tradicional)
5. **Configurar dominio** personalizado
6. **Probar en dispositivos** reales
7. **Lanzar campañas** de marketing

## 🆘 Soporte

Para dudas específicas sobre implementación:
- Revisar comentarios en el código
- Consultar documentación de herramientas integradas
- Testing en navegadores principales

## 📊 Métricas a Monitorear

### 🎯 KPIs Principales:
- Tiempo de carga (LCP < 2.5s)
- Tasa de conversión del formulario
- Bounce rate
- Tiempo en página
- Conversiones por fuente de tráfico

### 🔧 Herramientas Recomendadas:
- Google Analytics 4
- Google Search Console
- Hotjar (heatmaps)
- Google Optimize (A/B testing)

---

**¡Tu Landing Express está lista para lanzar! 🚀**

Recuerda: el éxito de una landing page está en la iteración continua basada en datos reales de tus usuarios.