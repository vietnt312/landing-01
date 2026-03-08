import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
//  site: 'https://<YOUR_GITHUB_USERNAME>.github.io',
//  base: '/<YOUR_REPO_NAME>',
  integrations: [tailwind()],
  output: 'static',
  image: {
    // Allow any remote image host (images come from user-supplied Google Sheets URLs)
    remotePatterns: [{ protocol: 'https' }, { protocol: 'http' }],
  },
});
