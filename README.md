# Parna Das — Full Stack Developer Portfolio

A professional responsive portfolio built with React, Vite and Tailwind CSS.

## Stack

- React 18
- Vite
- Tailwind CSS 3
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build

```bash
npm run build
```

## Before deploying

Open `src/App.jsx` and update:

- `profile.email`
- GitHub URL if needed
- LinkedIn URL if needed
- Resume filename/path
- Project links/descriptions
- Any skills or experience details you want to change

Add your PDF resume to:

`public/Parna-Das-Resume.pdf`

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

No environment variables are required for this static portfolio.

## Tailwind note

This project intentionally uses Tailwind CSS 3 with PostCSS. It does NOT require `@tailwindcss/vite`, avoiding the common Vite build error caused by a missing Tailwind Vite plugin package.
# parna_das_portfolio
