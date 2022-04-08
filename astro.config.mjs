import { defineConfig } from 'astro/config'
import astroImagePlugin from 'astro-imagetools/plugin'
// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
// @ts-check

// https://astro.build/config
export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */
  {
    vite: {
      plugins: [astroImagePlugin],
      ssr: {
        external: ['svgo'],
      },
    },
    site: 'https://philipschoenholzer.com/',
    integrations: [],
  }
)
