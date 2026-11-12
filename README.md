# cuijier.github.io — restored Hexo source

This branch reconstructs the editable Hexo project from the published static site.

## Branch safety

- Original published files remain on `master`.
- `backup/static-site-2026-11-12` is a snapshot of the original static site.
- Work is isolated on `restore/hexo-source-2026-11-12`.

## Content

Restored posts are in `source/_posts/`. Their original publication dates, categories, tags, image references, and URL paths are retained.

## Local preview

```bash
npm install
git clone --depth 1 --branch v5.1.4 https://github.com/iissnan/hexo-theme-next.git themes/next
mkdir -p source/images
cp -a images/. source/images/
npx hexo server
```

## Build

```bash
npx hexo clean
npx hexo generate
```

The generated site is written to `public/`.

## Online editing

Pages CMS configuration is in `.pages.yml`. Sign in at https://app.pagescms.org/, open this repository, and select the `restore/hexo-source-2026-11-12` branch to edit posts using the rich-text editor. Content is saved as Markdown in GitHub.

## Publishing

The workflow currently validates the build only. It deliberately does not publish to GitHub Pages. Before switching the live site, compare the generated pages with the original site and confirm the GitHub Pages deployment source.
