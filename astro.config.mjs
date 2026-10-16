import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rainbowfern.com',
  integrations: [
    sitemap(),
  ],
  adapter: netlify({
    imageService: true,
    edgeMiddleware: true,
  }),
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 4096,
    },
  },
});
