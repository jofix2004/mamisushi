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
- uploads and deploys the generated `frontend/out` directory

If you later attach a custom domain, add a `CNAME` file to the exported output or extend the workflow to generate one during build.
