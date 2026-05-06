import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dharma-ate.cl', // ← cambia esto por tu dominio final
  build: {
    inlineStylesheets: 'auto',
  },
});
