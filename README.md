# philipschoenholzer.com

Personal website built with [Astro](https://astro.build) and deployed on a VPS.

## Tech Stack

- **Framework**: Astro 5.17
- **Styling**: SCSS
- **Icons**: astro-icon with Iconify
- **Testing**: Playwright
- **Code Quality**: Biome (formatting & linting)
- **Package Manager**: pnpm
- **Deployment**: Infomaniak VPS

## Development

All commands are run from the root of the project:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm start`           | Starts local dev server at `localhost:4321`      |
| `pnpm run build`       | Type-check and build production site to `./dist/`|
| `pnpm run preview`     | Preview your build locally before deploying      |
| `pnpm run test`        | Run Playwright tests                             |
| `pnpm run test:ci`     | Run tests in CI mode with server                 |
| `pnpm run format`      | Format code with Biome                           |
| `pnpm run lint`        | Lint code with Biome                             |
| `pnpm run check`       | Check code formatting and linting                |

## Project Structure

```
/
├── public/           # Static assets (favicons, images)
├── src/
│   ├── components/   # Astro components (Header, Footer, etc.)
│   ├── images/       # Source images
│   ├── layouts/      # Page layouts
│   ├── pages/        # Page routes
│   └── styles/       # Global SCSS styles
└── tests/            # Playwright test files
```
