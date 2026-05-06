# Dharma · Sitio web (Astro)

Sitio multipágina para Dharma Educa construido con [Astro](https://astro.build).
Mantiene 1:1 la identidad visual y las interacciones del landing original.

---

## ¿Por qué Astro?

- **Exporta HTML estático puro.** El resultado final son archivos `.html`, `.css` y `.js` listos para cualquier hosting (Netlify, Vercel, Cloudflare Pages, GitHub Pages, hosting compartido…). Sin PHP, sin servidor.
- **Componentes reutilizables.** El `<nav>` y el `<footer>` se editan en un solo archivo y se actualizan en todas las páginas automáticamente.
- **SEO-friendly.** Cada página tiene su propia URL, su propio `<title>` y `description`, con canónica y Open Graph configurados.
- **Rendimiento.** Astro sirve JS mínimo y hace un solo bundle del CSS global.

---

## 📁 Estructura del proyecto

```
dharma-site/
├── public/
│   └── favicon.svg              ← Icono del mandala para la pestaña del navegador
├── src/
│   ├── styles/
│   │   └── global.css           ← Sistema de diseño completo (tokens, nav, hero, etc.)
│   ├── components/
│   │   ├── Nav.astro            ← Navegación superior (editar en un solo lugar)
│   │   ├── Footer.astro         ← Footer del sitio
│   │   ├── MandalaHero.astro    ← SVG animado del hero
│   │   └── Autodiagnostico.astro← Formulario interactivo reutilizable
│   ├── layouts/
│   │   └── BaseLayout.astro     ← Plantilla maestra (head + Nav + slot + Footer)
│   └── pages/                   ← Cada archivo = una URL
│       ├── index.astro          ← /           (Home resumida)
│       ├── servicios.astro      ← /servicios  (placeholder)
│       ├── nosotros.astro       ← /nosotros   (placeholder)
│       ├── diagnostico.astro    ← /diagnostico(autodiagnóstico dedicado)
│       └── contacto.astro       ← /contacto   (placeholder)
├── astro.config.mjs             ← Config de Astro (cambiar el dominio aquí)
├── package.json
└── tsconfig.json
```

---

## 🚀 Instalación y uso

Necesitas **Node.js 18.17+** o **20+** instalado.

```bash
# 1. Instala dependencias
npm install

# 2. Levanta el servidor de desarrollo (hot reload)
npm run dev
# → abre http://localhost:4321

# 3. Cuando estés listo, genera el sitio estático
npm run build
# → los archivos HTML/CSS/JS quedan en la carpeta `dist/`

# 4. (Opcional) Previsualiza la build localmente
npm run preview
```

---

## ✏️ Cómo editar

### Cambiar el menú de navegación
Edita `src/components/Nav.astro`. El cambio se propaga a todas las páginas.

### Cambiar colores de la marca
Edita las variables CSS al inicio de `src/styles/global.css`:

```css
:root {
  --green-dark:  #1A3325;
  --gold:        #C9A84C;
  --cream:       #F8F4ED;
  /* ... */
}
```

### Agregar una página nueva
Crea un archivo `.astro` dentro de `src/pages/`. Por ejemplo `src/pages/blog.astro` queda disponible en `/blog`. Usa la plantilla:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  current="blog"
  title="Blog · Dharma Educa"
  description="Descripción que verá Google (~155 caracteres)."
>
  <section>
    <!-- Tu contenido aquí -->
  </section>
</BaseLayout>
```

### Cambiar el dominio para SEO
En `astro.config.mjs`, actualiza la línea `site: 'https://dharma-ate.cl'` con tu dominio real. Esto afecta las URLs canónicas y los metadatos Open Graph.

---

## 🌍 Deploy

El sitio es 100% estático. Recomendados:

| Hosting | Cómo |
|---|---|
| **Netlify** | Arrastra la carpeta `dist/` a netlify.com, o conecta tu repo de GitHub |
| **Vercel** | `vercel --prod` en la raíz del proyecto |
| **Cloudflare Pages** | Conecta el repo, build command: `npm run build`, output: `dist` |
| **GitHub Pages** | Sube `dist/` a la rama `gh-pages` |
| **Hosting tradicional** | Sube el contenido de `dist/` por FTP a `public_html/` |

---

## 📋 Checklist antes de publicar

- [ ] Actualizar `site` en `astro.config.mjs` con el dominio real
- [ ] Completar las páginas placeholder (`servicios`, `nosotros`, `contacto`)
- [ ] Agregar una imagen `public/og-image.png` (1200×630px) para previews en redes
- [ ] Revisar las descripciones SEO de cada página
- [ ] Probar el formulario de autodiagnóstico
- [ ] Configurar un endpoint real para recibir los diagnósticos (hoy solo muestra resultado en pantalla)
- [ ] Configurar analítica (Plausible, GA4, etc.) si se requiere
- [ ] Crear una página `/gracias` para medir conversiones del diagnóstico

---

## 🔧 Notas técnicas

- **Fuentes:** Cormorant Garamond (display) + Montserrat (body), servidas desde Google Fonts.
- **Animaciones fade-up:** gestionadas por un `IntersectionObserver` global en el `BaseLayout`.
- **Autodiagnóstico:** el componente `Autodiagnostico.astro` usa `<script is:inline>` y event listeners (no `onclick` inline) para funcionar correctamente en todas las páginas.
- **Sin dependencias JS externas.** Todo el JS es vanilla, ligero y corre en el navegador.

---

© Dharma Educa
