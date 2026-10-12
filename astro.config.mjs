import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://rainbowfern.com',
  integrations: [
    sitemap(),
  ],
  adapter: netlify({
    imageService: true,
  }),
  vite: {
    build: {
      assetsInlineLimit: 4096,
    },
  },
});
