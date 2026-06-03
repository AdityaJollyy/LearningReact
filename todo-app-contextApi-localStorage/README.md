# todo-app-contextApi-localStorage

A small Todo application demonstrating app-wide state management with the Context API and persistence using `localStorage`. The app supports adding, editing, deleting, and completing todos and is intentionally minimal for learning and experimentation.

## Features

- Add new todos with quick inline form
- Edit and save todos inline
- Toggle todo completion
- Delete todos
- Persistent storage via `localStorage` (saved automatically)

## Technologies Used

- React 19
- Vite
- Tailwind CSS (utility styles are included in the repo)

## Getting Started

1.  Change into the project folder:

```bash
cd todo-app-contextApi-localStorage
```

2.  Install dependencies:

```bash
npm install
```

3.  Run the development server:

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Project Structure

- `src/App.jsx` — Application entry with the `TodoProvider` and UI layout
- `src/contexts/todo-context.js` — Context object and consumer hook (`useTodo`)
- `src/contexts/TodoProvider.jsx` — Provider that contains todo logic and persists to `localStorage`
- `src/components/TodoForm.jsx` — Form to add todos
- `src/components/TodoItem.jsx` — Todo item with edit, toggle, and delete actions

## Key Learnings

- State sharing with Context API: centralize todos in a provider and expose actions (`addTodo`, `updateTodo`, `deleteTodo`, `toggleComplete`).
- Persisting state: use `useEffect` to save `todos` to `localStorage` whenever they change.
- Immutable updates: update state by returning new arrays/objects (e.g., `map`, `filter`) to avoid mutation bugs.
- UX patterns: inline editing and optimistic updates (update local state immediately for responsive UI).

