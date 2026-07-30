import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://huynhcongbang-git.github.io',
  base: '/my-portfolio', // This must match your Github repository name exactly
  integrations: [mdx(), sitemap(), tailwind()]
});
