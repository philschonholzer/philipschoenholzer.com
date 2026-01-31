import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
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
    integrations: [icon()],
    server: {
      port: 4321,
    },
    preview: {
      port: 4322,
      host: true,
    },
  },
)
