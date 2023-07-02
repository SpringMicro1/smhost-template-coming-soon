# Astro Starter Kit: Minimal

```
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## History

### Build own integration

https://docs.astro.build/en/guides/integrations-guide/#building-your-own-integration

[Integrations](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

### Scripts run

```bash
# empty, typescript=strict
npm create astro
npx astro add tailwind sitemap mdx prefetch react
# tailwind https://docs.astro.build/en/guides/integrations-guide/tailwind/
npx astro add tailwind
sed -i 's/tailwind()/tailwind({applyBaseStyles: false})/g' astro.config.mjs
# images https://docs.astro.build/en/guides/integrations-guide/image/
npx astro add image
npm i sharp
sed -i 's/image()/image({serviceEntryPoint: \"@astrojs\/image\/sharp\"})/g' astro.config.mjs
sed -i 's/astro\/client/@astrojs\/image\/client/g' src/env.d.ts

# if vercel, otherwise use astro add node
# npx astro add vercel
# in beta, waiting to merge to authjs: https://github.com/nowaythatworked/auth-astro
# not added atm
# npx astro add auth-astro
# for theming
npm i -D @tailwindcss/typography@latest daisyui@latest react-daisyui@latest

mkdir src/components
mkdir src/layouts
mkdir src/markdown
```

### Deployment

These have astro integrations. For now, use Vercel. In the future, use GitLab Pages

### Tailwind and Daisy UI

#### Default tailwind config

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
