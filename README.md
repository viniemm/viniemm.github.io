# viniemm.github.io

Source for [viniemm.com](https://viniemm.com): a single-page personal site in a wireframe style, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Editing

- **Bio and links:** `src/data/profile.ts`
- **Projects:** one Markdown file per project in `src/content/projects/` (`title`, `summary`, `tech`, `repo`, `link`, `year`, `order`)
- **Look:** `src/styles/global.css` (colors are CSS variables at the top)

Push to `main` and the `Deploy to GitHub Pages` workflow rebuilds and publishes the site.

## Local

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```
