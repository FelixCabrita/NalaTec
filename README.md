# Landing Express NalaTec

Proyecto completo de landing page para NalaTec siguiendo las especificaciones exactas del prompt.

## 📁 Estructura del Proyecto

```
/LandingExpressNalaTec
  ├── index.html                    # Página principal
  ├── README.md                     # Este archivo
  ├── sitemap.xml                   # Sitemap básico
  ├── robots.txt                    # Archivo robots
  ├── assets/
  │     ├── css/
  │     │     └── style.css         # Estilos con guía de colores NalaTec
  │     ├── js/
  │     │     └── main.js           # JavaScript con funcionalidades
  │     ├── images/
  │     │     └── placeholder.png   # Imagen placeholder SVG
  │     └── translations/
  │           ├── en.json           # Traducciones inglés
  │           └── es.json           # Traducciones español
```

## 🎨 Características Implementadas

### ✅ Estructura HTML5 Semántica
- Uso correcto de `header`, `nav`, `main`, `section`, `article`, `footer`
- Estructura Hn jerárquica
- Atributos ARIA para accesibilidad

### ✅ SEO Optimizado
- Meta tags completos
- Open Graph básico
- Sitemap XML incluido
- Estructura semántica
- Title y description dinámicos

### ✅ Performance
- CSS optimizado y minificado
- Lazy loading en imágenes
- Sin dependencias externas pesadas
- Animaciones optimizadas

### ✅ Accesibilidad
- Contraste suficiente según guía de colores
- Navegación con teclado
- Focus visible
- Alt text en imágenes
- Tamaños de click targets ≥44px

### ✅ Traducciones
- Sistema completo español/inglés
- Toggle de idioma funcional
- Archivos JSON separados
- Contenido dinámico

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints optimizados
- Grids flexibles
- Imágenes responsive

## 🎨 Guía de Colores Aplicada

El proyecto implementa exactamente la guía de colores NalaTec:

- **Primario (brand)**: `#E6B800` - Dorado refinado para CTAs y títulos
- **Accent tech**: `#1FB6FF` - Azul-cian para links e interacciones
- **Fondos oscuros**: Escalonados (`#0F1216`, `#12151A`, `#1A1F26`)
- **Tipografía**: Colores optimizados para contraste (`#E8EAED`, `#A6ADBB`)

## 🖼️ Imágenes a Reemplazar

**IMPORTANTE**: Todas las imágenes usan el placeholder `assets/images/placeholder.png`. Debes reemplazar con:

1. **Logo NalaTec** (.header__logo img)
   - Formato: PNG/SVG
   - Tamaño: 40px altura, ancho proporcional
   - Fondo transparente

2. **Hero mockup** (.hero__image)
   - Mockup de landing page o dashboard
   - Formato: PNG/JPG
   - Tamaño: 800x600px mínimo

3. **Casos de estudio** (.case__image img)
   - Mockups de proyectos reales
   - Capturas de Lighthouse
   - Comparativas antes/después
   - Formato: PNG/JPG
   - Tamaño: 400x200px

## ⚙️ Funcionalidades JavaScript

### Sistema de Traducciones
```javascript
// Cambiar idioma programáticamente
NalaTec.setLanguage('en'); // o 'es'
```

### Analytics y Tracking
```javascript
// Tracking de eventos
NalaTec.trackEvent('CTA', 'Click', 'Quiero mi landing');

// Tracking de conversiones
NalaTec.trackConversion('contact_form_submit');
```

### Notificaciones
```javascript
// Mostrar notificación
NalaTec.showNotification('Mensaje de éxito', 'success');
```

## 🚀 Instrucciones de Despliegue

### 1. Configuración de Hosting
- Subir todos los archivos al directorio raíz
- Configurar HTTPS
- Habilitar compresión GZIP

### 2. Configuración de Analytics
Reemplazar en `main.js`:
```javascript
// Línea 445: ID de Google Analytics
'AW-XXXXXXXXX/' + conversionName // Reemplazar con ID real

// Configurar Google Analytics 4
gtag('config', 'G-XXXXXXXXX'); // Agregar tu ID de GA4
```

### 3. Configuración de Formulario
Actualizar endpoint en `main.js` línea 362:
```javascript
// Reemplazar simulación con endpoint real
fetch('/api/contact', {
    method: 'POST',
    body: formData
});
```

### 4. Configuración de Integraciones
- **WhatsApp**: Actualizar número en `href="https://wa.me/1234567890"`
- **Email**: Actualizar dirección en `href="mailto:hola@nalatec.com"`

## 📱 Testing Checklist

### Performance
- [ ] LCP < 2.5s (objetivo mencionado en el copy)
- [ ] Lighthouse score > 90
- [ ] Imágenes optimizadas
- [ ] CSS y JS minificados

### SEO
- [ ] Meta tags correctos
- [ ] Estructura Hn válida
- [ ] Sitemap XML accesible
- [ ] Schema markup (añadir si necesario)

### Accesibilidad
- [ ] Contraste WCAG AA
- [ ] Navegación con teclado
- [ ] Lectores de pantalla
- [ ] Focus visible

### Funcionalidad
- [ ] Formulario funcional
- [ ] Cambio de idioma
- [ ] Menu móvil
- [ ] Scroll suave
- [ ] FAQ expandible

## 🔧 Personalización

### Cambiar Precios
Editar en `assets/translations/es.json` y `en.json`:
```json
"pricing": {
  "starter": {
    "price": "Desde $XXX" // Cambiar por precio real
  }
}
```

### Añadir Secciones
1. Agregar HTML en `index.html`
2. Agregar estilos en `style.css`
3. Agregar traducciones en archivos JSON
4. Actualizar navegación si necesario

### Modificar Colores
Todos los colores están centralizados en CSS variables:
```css
:root {
  --primary-color: #E6B800; /* Cambiar aquí */
  --accent-color: #1FB6FF;  /* Cambiar aquí */
}
```

## 📞 Soporte

Para dudas sobre la implementación:
1. Revisar este README
2. Consultar comentarios en el código
3. Verificar guía de colores original

## 🔄 Actualizaciones Futuras

### Próximas mejoras sugeridas:
- [ ] Progressive Web App (PWA)
- [ ] Schema markup avanzado
- [ ] Optimizaciones Core Web Vitals
- [ ] Tests automatizados
- [ ] CI/CD pipeline

---

**NalaTec - De ideas a proyectos digitales**  
Proyecto generado siguiendo especificaciones exactas del prompt ✅