# Kimi Agent Learning Plan Site

This app is a Vite + React + TypeScript frontend.

The runnable project lives here:

`/Users/anusha/code/vscode/mmm/Kimi_Agent_Learning Plan Site/app`

## Run locally

1. Open a terminal in the app folder:

```bash
cd "/Users/anusha/code/vscode/mmm/Kimi_Agent_Learning Plan Site/app"
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

This project should be deployed on Render as a `Static Site`.

### Option 1: If this `app` folder is the root of its own GitHub repo

Use these settings:

- Service type: `Static Site`
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`

No start command is needed for a static site.

### Option 2: If this project is inside a larger repo

Use these settings:

- Service type: `Static Site`
- Root Directory: `Kimi_Agent_Learning Plan Site/app`
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`

If Render asks for a branch, pick the branch that contains this app.

## Exact Render setup steps

1. Push the code to GitHub.
2. In Render, click `New +`.
3. Choose `Static Site`.
4. Connect your GitHub repo.
5. Select the repo.
6. If needed, set `Root Directory` to `Kimi_Agent_Learning Plan Site/app`.
7. Set `Build Command` to:

```bash
npm install && npm run build
```

8. Set `Publish Directory` to:

```text
dist
```

9. Click `Create Static Site`.

## Notes for Render

- This app already builds to a static `dist/` folder, which is exactly what Render needs.
- The Vite config uses `base: './'`, which is safe for static hosting.
- No environment variables are required unless you add API keys later.

## Verified commands

These commands were run successfully in this app directory:

- `npm install`
- `npm run build`
- `npm run preview -- --host 127.0.0.1 --port 4173`
