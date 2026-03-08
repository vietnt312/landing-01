import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://vietnt312.github.io',
  // base: '/landing-01',
  integrations: [tailwind()],
  output: 'static',
  image: {
    // Allow any remote image host (images come from user-supplied Google Sheets URLs)
    remotePatterns: [{ protocol: 'https' }, { protocol: 'http' }],
  },
});
