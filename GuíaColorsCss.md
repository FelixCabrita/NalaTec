# NalaTec — Guía de Colores, Tokens y Reglas de Uso

Este documento (.md) define la **paleta**, los **design tokens (CSS variables)** y las **reglas de aplicación** para lograr un look **premium + tech**, legible y consistente en toda la marca NalaTec.

---

## 1) Paleta Refinada

* **Dorado (brand)**: menos saturado para evitar “amarillo chillón”.
* **Oscuros**: niveles escalonados para jerarquía (fondo, secciones, cards).
* **Accent “tech”**: azul-cian profesional para microdetalles e interacciones.

| Rol                     | Color                                        | Uso recomendado                                                        |
| ----------------------- | -------------------------------------------- | ---------------------------------------------------------------------- |
| **Primario (brand)**    | `#E6B800` (hover `#D4A500`, press `#C59500`) | Botones principales, titulares, detalles de marca sobre fondos oscuros |
| **Base Dark**           | `#0F1216`                                    | Fondo global (body)                                                    |
| **Sección Oscura**      | `#12151A`                                    | Secciones con contraste sutil                                          |
| **Card / Superficie**   | `#1A1F26`                                    | Tarjetas, módulos elevados                                             |
| **Bordes discretos**    | `#2B3440`                                    | Bordes, divisores, inputs                                              |
| **Accent Tech (Azure)** | `#1FB6FF` (hover `#0EA5E9`, press `#0284C7`) | Links, estados hover/focus, chips, indicadores                         |
| **Superficies claras**  | `#F5F7FA` / `#E9EEF3`                        | Bloques puntuales, docs, tablas                                        |
| **Texto Primario**      | `#E8EAED`                                    | Texto en dark surfaces (menos brillo que blanco puro)                  |
| **Texto Secundario**    | `#A6ADBB`                                    | Subtítulos, meta, ayudas                                               |
| **Texto en claro**      | `#0F1216`                                    | Texto sobre superficies claras                                         |

> **Tip:** Si prefieres un accent más “corporativo”, usa **teal**: `#14B8A6` (hover `#0D9488`, press `#0F766E`).

---

## 2) Design Tokens (CSS Variables)

Copia y pega este bloque en tu `:root`:

```css
:root {
  /* Brand */
  --primary-color: #E6B800;
  --primary-color-hover: #D4A500;
  --primary-color-press: #C59500;

  /* Tech accent (azure/cyan) */
  --accent-color: #1FB6FF;
  --accent-color-hover: #0EA5E9;
  --accent-color-press: #0284C7;

  /* Dark surfaces */
  --base-dark: #0F1216;      /* body */
  --neutral-dark: #12151A;   /* sección */
  --neutral-medium: #1A1F26; /* cards */
  --neutral-border: #2B3440; /* bordes/inputs/dividers */

  /* Light surfaces */
  --neutral-light: #F5F7FA;
  --neutral-lighter: #E9EEF3;

  /* Typography */
  --text-primary: #E8EAED;   /* en dark */
  --text-secondary: #A6ADBB;
  --text-on-light: #0F1216;  /* en light */

  /* Misc */
  --white: #FFFFFF;
  --border-light: #2B3440;
  --focus-ring: #1FB6FF33;   /* halo accesible */
  --shadow-light: 0 2px 8px rgba(0,0,0,0.25);
  --shadow-medium: 0 8px 24px rgba(0,0,0,0.35);
  --border-radius: 10px;
  --transition: all .2s ease;

  /* Gradientes opcionales */
  --gradient-hero: linear-gradient(180deg, #0F1216 0%, #12151A 100%);
  --gradient-gold: linear-gradient(90deg, #E6B800 0%, #D4A500 100%);
  --gradient-accent: linear-gradient(90deg, #1FB6FF 0%, #0EA5E9 100%);
}
```

---

## 3) Reglas de Accesibilidad y Contraste

* **Dorado sobre oscuro** ✅ (titulares, CTAs, detalles).
* **Texto oscuro sobre dorado** ✅ (si usas fondos dorados).
* **Evita** dorado sobre blanco o blanco sobre dorado ❌ (contraste pobre).
* **Accent (azure/teal)** **solo** sobre fondos oscuros para links/hover/focus.
* Usa `--text-primary` (gris claro) para párrafos en dark mode: reduce deslumbramiento.
* Mantén tamaños y pesos adecuados: cuerpo ≥16px, titulares con buen line-height.

---

## 4) Ratio de Uso de Colores

* **80%** superficies **oscuras** (`--base-dark`, `--neutral-dark`, `--neutral-medium`)
* **15%** **dorado** (brand) en CTAs, titulares, highlights
* **5%** **accent tech** para links, estados, microdetalles

> Menos es más: el accent **no** debe competir con el dorado.

---

## 5) Componentes Base

### Botón Primario (dorado)

```css
.btn-primary {
  background: var(--primary-color);
  color: var(--text-on-light);
  border: 1px solid transparent;
  padding: 12px 20px;
  border-radius: var(--border-radius);
  font-weight: 600;
  box-shadow: var(--shadow-light);
  transition: var(--transition);
}
.btn-primary:hover { background: var(--primary-color-hover); }
.btn-primary:active { background: var(--primary-color-press); }
.btn-primary:focus { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
```

### Botón Secundario (borde dorado)

```css
.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--primary-color);
  padding: 12px 20px;
  border-radius: var(--border-radius);
  transition: var(--transition);
}
.btn-secondary:hover { border-color: var(--primary-color-hover); }
```

### Links / Microinteracciones (accent)

```css
a, .link {
  color: var(--accent-color);
  text-decoration: none;
  transition: var(--transition);
}
a:hover, .link:hover { color: var(--accent-color-hover); }
a:focus { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
```

### Cards

```css
.card {
  background: var(--neutral-medium);
  border: 1px solid var(--neutral-border);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-medium);
  color: var(--text-primary);
  padding: 20px;
}
```

### Sección Hero (gradiente sutil)

```css
.section--hero {
  background: var(--gradient-hero);
  color: var(--text-primary);
  padding: 64px 0;
}
```

### Divisor

```css
.hr {
  height: 1px;
  background: var(--neutral-border);
  border: 0;
}
```

### Inputs Accesibles (dark)

```css
.input {
  background: #141922;
  color: var(--text-primary);
  border: 1px solid var(--neutral-border);
  border-radius: 8px;
  padding: 10px 12px;
  transition: var(--transition);
}
.input::placeholder { color: var(--text-secondary); }
.input:focus {
  border-color: var(--accent-color);
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}
```

---

## 6) Do / Don’t (Guía Rápida)

**Haz**

* Usa dorado para **CTAs** y **titulares** sobre fondos oscuros.
* Emplea el accent en **links, hover, focus** y **pequeños indicadores**.
* Escalonar superficies oscuras para **profundidad** (body → sección → card).
* Mantén **tipografía legible** (Poppins / Inter, 16–18px base, buen line-height).

**Evita**

* Dorado como **color de párrafo** o bloques largos de texto.
* Texto **blanco sobre dorado** o **dorado sobre blanco**.
* Usar accent y dorado **juntos en el mismo elemento** (vibración visual).
* Fondos completamente planos sin variaciones de superficie (fatiga visual).

---

## 7) Gradientes y Detalles

* **Hero:** `--gradient-hero` (oscuro sutil para foco en el CTA).
* **Highlight:** `--gradient-gold` para subrayados o badges.
* **Accent line:** `--gradient-accent` para barras de progreso o tabs activos.

> Úsalos con moderación para no perder la estética sobria.

---

## 8) Variante Accent (Teal) — Opcional

Reemplaza los accent si prefieres un aire más “corporate”:

```css
:root {
  --accent-color: #14B8A6;       /* teal 500 */
  --accent-color-hover: #0D9488; /* teal 600 */
  --accent-color-press: #0F766E; /* teal 700 */
  --focus-ring: #14B8A633;
}
```

---

## 9) Checklists de Implementación

**Layout**

* [ ] Body con `--base-dark`.
* [ ] Secciones alternando `--neutral-dark`.
* [ ] Cards con `--neutral-medium` + `--neutral-border`.

**Tipografía**

* [ ] Titulares (Poppins) y párrafos (Inter) con `--text-primary`.
* [ ] Subtítulos/ayudas con `--text-secondary`.
* [ ] Texto en superficies claras con `--text-on-light`.

**Interacción**

* [ ] Botón primario dorado.
* [ ] Links en accent.
* [ ] Focus visible (`--focus-ring`).

**Accesibilidad**

* [ ] Evitar dorado↔blanco como texto/fondo.
* [ ] Contrast checker en combinaciones nuevas.
* [ ] Tamaños/espaciados adecuados (click targets ≥44px de alto).

---

## 10) Nota de Mantenimiento

* Centraliza los colores en estos tokens para **temar** y **ajustar** rápido.
* Si cambias el acento (azure ↔ teal), no modifiques el dorado: mantiene la identidad.
* Revisa contraste si agregas nuevos fondos/overlays.

---

**NalaTec – De ideas a proyectos digitales**
Guía de color y tokens v1.0 ✔️
Mantén este .md en el repo (ej. `/docs/design/colors.md`) y sincroniza el bloque `:root` con tu hoja global de estilos.
