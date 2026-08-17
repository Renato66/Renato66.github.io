# Renato Vicente

Personal site of [Renato Vicente](https://renato66.github.io/) — programmer, DJ, traveller, communicator, comedian, and creative.

Live at [renato66.github.io](https://renato66.github.io/).

## Pages

- [Home](https://renato66.github.io/) — short bio and companies he has worked with
- [Travel Log](https://renato66.github.io/travel-log) — countries and cities visited
- [Achievements](https://renato66.github.io/achievements) — work, life, and travel milestones
- [Ask AI](https://renato66.github.io/llm) — copyable prompt that points assistants at [`/llms.txt`](https://renato66.github.io/llms.txt)

Available in English, Brazilian Portuguese, and Spanish.

## Stack

Nuxt 4, Vue 3, Tailwind CSS 4, and `@nuxtjs/i18n`. Package manager is [Bun](https://bun.sh/).

## Local development

```bash
bun install
bun run dev
```

Other scripts:

```bash
bun run generate   # static export
bun run preview    # preview the production build
bun run typecheck
bun run lint
```

## Deploy

Pushes to `main` build a static site with `nuxi build --preset github_pages` and publish it through [GitHub Pages](https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

The workflow lives in [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). In the repository, set **Settings → Pages → Source** to **GitHub Actions**.
