# theme-switcher

A small demo showing a theme toggle (light/dark) implemented with React, Tailwind CSS, and the Context API. The app toggles a CSS class on the document root to enable Tailwind's dark styles and provides a reusable `ThemeButton` and a sample `Card` component to demonstrate the theme changes.

## Features

- Theme toggle (dark / light) with a single source of truth (`ThemeProvider`).
- Global theme application by adding a class to the `<html>` element for Tailwind dark-style variants.
- Accessible toggle control (checkbox-based) with visual state.
- Small component demo (`Card`) that responds to the theme.

## Technologies Used

- React 19
- Vite
- Tailwind CSS v4

## Getting Started

1. Change into the project folder:

```bash
cd theme-switcher
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Project Structure

- `src/contexts/theme/theme-context.js` — Context object and `useTheme` hook (consumer helper).
- `src/contexts/theme/ThemeProvider.jsx` — Provider that manages `themeMode` and applies the theme class to the document root.
- `src/components/ThemeButton.jsx` — Toggle control that calls `toggleTheme()` from context.
- `src/components/Card.jsx` — UI component demonstrating theme-aware styles.
- `src/App.jsx` — App entry wiring the `ThemeProvider`, `ThemeButton`, and `Card` together.

## Key Learnings

- Sharing app-wide state with Context: create a context, wrap your app with a provider, and consume values via a hook.
- Applying a theme globally by toggling a class on the `<html>` element integrates smoothly with Tailwind's dark variants and keeps component styles simple.

