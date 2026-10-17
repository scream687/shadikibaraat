import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://shadikibaraat.com',
  trailingSlash: 'always',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
