// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://CBMODS.github.io',
  base: '/Alerta_Dengue',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});