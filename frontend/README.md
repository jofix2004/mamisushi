## Development

Run the local development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to preview the landing page.

## Production Build

This project is configured for static export, so `npm run build` generates the deployable site in `out/`.

## GitHub Pages Deploy

The repo includes a workflow at `.github/workflows/deploy-pages.yml` that deploys the `frontend` app to GitHub Pages on every push to `main`.

Before the first deploy:

1. Push the repository to GitHub.
2. Open `Settings -> Pages`.
3. In `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` or run the workflow manually from the `Actions` tab.

The workflow automatically:

- installs dependencies in `frontend`
- builds a static Next.js export
- detects whether the repo is a project page (`/<repo>`) or a user page (`/`)
- can be overridden with a repository variable named `PAGES_BASE_PATH` such as `/mamisushi`
- uploads and deploys the generated `frontend/out` directory

If you later attach a custom domain while still using this workflow, configure that domain in `Settings -> Pages`.

## Custom Domain Notes

GitHub Pages custom domains support an apex domain such as `anigastudio.space` or a subdomain such as `mamisushi.anigastudio.space`.

If you want the site to live at `https://anigastudio.space/mamisushi/`, GitHub Pages alone is not enough because the `/mamisushi` part is a path prefix, not a custom domain. In that setup:

1. Keep GitHub Pages as the static origin.
2. Set the repository variable `PAGES_BASE_PATH` to `/mamisushi`.
3. Use another layer in front of Pages, such as Cloudflare, Nginx, or another host for `anigastudio.space`, to proxy or serve the site under `/mamisushi/`.

If you want to stay entirely inside GitHub Pages, the simplest supported custom domain is `https://mamisushi.anigastudio.space/`.
