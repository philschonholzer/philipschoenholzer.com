import { defineConfig } from 'astro/config'
import image from '@astrojs/image'
// https://docs.astro.build/reference/configuration-reference
// @ts-check
// https://astro.build/config
export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */
  {
    vite: {
      ssr: {
        external: ['svgo'],
      },
    },
    site: 'https://philipschoenholzer.com/',
    integrations: [image()],
  }
)
