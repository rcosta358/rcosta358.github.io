# rcosta358.github.io

Personal website built with Astro, TypeScript, and SCSS.

## Development

Install dependencies:

```sh
npm install
```

Run the local development server:

```sh
npm run dev
```

The site will be available at the localhost URL printed by Astro, usually:

```text
http://localhost:4321/
```

## Build

Check and build the static site:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Content

Portfolio content is stored in Markdown under `src/content/` and rendered through Astro content collections:

- `src/content/about/`
- `src/content/projects/`
- `src/content/education/`

## Deployment

The site is deployed on GitHub Pages at `https://rcosta358.github.io` with the workflow in `.github/workflows/deploy.yml`.
