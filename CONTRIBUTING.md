# Contributing to FutureSelf.id

Welcome! 👋  
This project is meant to be a **learning playground** for React, TypeScript, and modern UI.

## 1. Getting started

1. **Fork** this repository on GitHub.
2. **Clone** your fork:

   ```bash
   git clone <your-fork-url>
   cd FutureSelf.ID
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the dev server:

   ```bash
   npm run dev
   ```

   Then open the URL printed in your terminal (usually `http://localhost:5173`).

## 2. Project overview

The main files:

- `src/main.tsx` – app entry.
- `src/App.tsx` – routing and providers.
- `src/components/AppLayout.tsx` – sidebar + header layout.
- `src/components/AppSidebar.tsx` – left navigation.
- `src/components/AppHeader.tsx` – top bar with connection status and user info.
- `src/pages/Terminal.tsx` – main dashboard console.
- `src/pages/Timeline.tsx` – future goals view.
- `src/pages/Identity.tsx` – identity configuration.
- `src/pages/Archives.tsx` – past logs and time capsules.
- `src/pages/Reflection.tsx` – writing interface.

See `docs/overview.md` for more details.

## 3. Picking an issue

1. Go to the **Issues** tab.
2. Filter by the label `good first issue` if you’re new.
3. Comment **"I’d like to work on this"** so others know it’s taken.
4. Wait for a maintainer to assign you (optional but recommended).

## 4. Working on your change

1. Create a new branch:

   ```bash
   git checkout -b feature/<short-description>
   ```

2. Make your changes and commit:

   ```bash
   git commit -m "feat: short description"
   ```

3. Push your branch:

   ```bash
   git push origin feature/<short-description>
   ```

4. Open a **Pull Request**:
   - Describe what you changed.
   - Link the issue (e.g. `Closes #12`).

## 5. Code style

- Use existing components and patterns as examples.
- Keep things simple and well-named.
- If you’re unsure, ask questions in the PR – this project is for learning.
