# minicontext

A minimal Context API demo built with React and Vite. This tiny project demonstrates how to share state using React Context, provides a simple login form, and shows how a consumer component can read shared state.

## Features

- Context API demonstration (`UserContext` and `UserContextProvider`)
- Simple login form and profile display
- Minimal, focused styles for quick experimentation

## Technologies Used

- React 19
- Vite
- Plain CSS (project-local `index.css`)

## Getting Started

1. Change into the project folder:

```bash
cd minicontext
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

- `src/App.jsx` — App entry that renders the provider and demo components
- `src/context/UserContext.js` — Context object
- `src/context/UserContextProvider.jsx` — Provider component (wraps children)
- `src/components/Login.jsx` — Simple login form (updates context)
- `src/components/Profile.jsx` — Consumes context and shows user info

## Key Learnings

- How to create and consume a React Context (`createContext`, `useContext`).
- Provider pattern: wrap your app with `UserContext` and pass `value` to share state.
- Small UX fixes: use `type="password"` for password inputs and validate/trim form input before storing it.

## Notes

- This project is intentionally minimal to focus on learning patterns. Feel free to extend it (persist user, add validation, routing, etc.).
