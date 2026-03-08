import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://<YOUR_GITHUB_USERNAME>.github.io',
  base: '/<YOUR_REPO_NAME>',
  integrations: [tailwind()],
  output: 'static',
});
