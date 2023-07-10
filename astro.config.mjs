import { defineConfig } from "astro/config";
import { METADATA } from "./src/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: METADATA.SITE_URL,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    prefetch(),
    react(),
  ],
});
