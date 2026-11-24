import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://jichang.biz',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => {
        // Exclude drafts, internal query states, or search
        return !page.includes('/drafts/') && !page.includes('/search/');
      }
    })
  ]
});
