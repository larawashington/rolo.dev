import { defineConfig } from 'astro/config';

// GitHub Pages config.
// If the repo is served at https://<user>.github.io/rolo.dev/, set `base: '/rolo.dev'`.
// If a custom domain is wired up later (e.g. rolo.dev itself), drop base back to '/'.
// The GH Actions workflow exports PUBLIC_BASE so this picks up automatically.
const base = process.env.PUBLIC_BASE ?? '/';

export default defineConfig({
  site: 'https://larawashington.github.io',
  base,
  trailingSlash: 'ignore',
  build: {
    assets: 'assets',
  },
});
