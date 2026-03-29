# Kimi Agent Learning Plan Site

This app is a Vite + React + TypeScript frontend.

The runnable project lives here:

`/Users/anusha/code/vscode/mmm`

## Run locally

1. Open a terminal in the app folder:

```bash
cd "mmm"
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

4. Open the local URL Vite prints, which is usually:

```text
http://localhost:5173
```

## Test the production build locally

Build the static site:

```bash
npm run build
```

Preview the built app:

```bash
npm run preview -- --host 0.0.0.0 --port 4173
```

Then open:

```text
http://localhost:4173
```

## Available scripts

- `npm run dev` starts the Vite development server
- `npm run build` runs TypeScript build checks and creates `dist/`
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint

## Deploy to Render

Deploy this project on Render as a `Static Site`.

Use these settings:

- Service type: `Static Site`
- Branch: the branch you want Render to deploy
- Root Directory: leave blank
- Build Command: `npm ci && npm run build`
- Publish Directory: `dist`

No start command is needed.

## Exact Render setup steps

1. Push this repo to GitHub.
2. In Render, click `New +`.
3. Choose `Static Site`.
4. Connect your GitHub repo and select this repository.
5. Leave `Root Directory` empty so Render builds from the repo root.
6. Set `Build Command` to:

```bash
npm ci && npm run build
```

7. Set `Publish Directory` to:

```text
dist
```

8. Click `Create Static Site`.

## Notes for Render

- Render will run the same production build as `npm run build`.
- This app outputs a static `dist/` folder, which is what Render should publish.
- The Vite config uses `base: './'`, which is compatible with static hosting.
- No environment variables are required unless you add external API keys later.
