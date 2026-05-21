# rolo.dev

Project Rolo's landing page. Rolo is a free, open source desktop companion.

> Built with [Astro](https://astro.build), deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output -> ./dist
npm run preview  # serve the built output
```

## Deploy

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to the `gh-pages` environment.

Repo-level setup (one-time):
1. Settings -> Pages -> Source: **GitHub Actions**
2. If served at `https://<user>.github.io/rolo.dev/`, the workflow sets `PUBLIC_BASE=/rolo.dev` automatically.
3. To use a custom domain (e.g. `rolo.dev`), add a `CNAME` file under `public/` and drop `PUBLIC_BASE` back to `/`.

## Project shape

```
src/
  layouts/    Layout.astro        — shared <head>, fonts, global styles
  components/ Header, Footer, RoloSprite, SpeechBubble, FeatureCard, ScreenshotFrame
  pages/      index.astro, faq.astro, contact.astro
  styles/     global.css          — tokens, resets, typography, animations
public/                            — favicon, static assets
```

## Design tokens

| Token         | Hex       | Role                                  |
|---------------|-----------|---------------------------------------|
| `--bg`        | `#F5EFE0` | Cream paper background                |
| `--surface`   | `#E8DFC8` | Warm linen panel surface              |
| `--sage`      | `#6B8E6F` | Dusty sage — primary brand for site   |
| `--navy`      | `#2C3E50` | Slate navy — text, chunky outlines    |
| `--text`      | `#2A2520` | Deep cocoa — body type                |
| `--honey`     | `#C9A961` | Honey gold — secondary accent         |
| `--rolo`      | `#F06449` | Rolo's warm orange — used sparingly   |

Rolo's orange is treated as a *focal* color, not a chrome color. The site stays cool/cream so he pops.
