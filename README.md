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
npm install -g hexo-cli@4.3.2
git clone --depth 1 --branch v5.1.4 https://github.com/iissnan/hexo-theme-next.git themes/next
mkdir -p source/images
cp -a images/. source/images/
hexo clean && hexo generate
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

The workflow builds and verifies the restored routes on pull requests. After this PR is merged to master, it builds again and deploys the generated `public/` directory to GitHub Pages. Before merging, set the repository Pages publishing source to **GitHub Actions** in Settings → Pages. The deployment job is gated behind a successful build.
