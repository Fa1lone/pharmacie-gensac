import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pharmacie-gensac.fr',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
