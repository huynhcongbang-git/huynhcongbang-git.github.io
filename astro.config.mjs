import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://huynhcongbang.work.gd',
  base: '/',
  integrations: [tailwind()],
});
