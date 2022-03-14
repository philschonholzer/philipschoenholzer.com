// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
import { imagetools } from 'vite-imagetools'
// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Comment out "renderers: []" to enable Astro's default component support.
  renderers: [
    // ...
    '@astrojs/renderer-react',
  ],
  vite: {
    plugins: [imagetools()],
    ssr: {
      external: ['svgo'],
    },
  },
  buildOptions: {
    sitemap: true,
    site: 'https://philipschoenholzer.com/',
  },
})
