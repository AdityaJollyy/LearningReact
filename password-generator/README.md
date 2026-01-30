# Password Generator

A simple and interactive password generator built with React and styled with Tailwind CSS. Generate secure passwords with customizable length and character options.

## Features

- Generate random passwords with adjustable length (6-30 characters)
- Option to include numbers and special characters
- One-click copy to clipboard functionality
- Real-time password generation as settings change

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Key Learnings

1. **useCallback Hook**: Used to memoize the [`passwordGenerator`](src/App.jsx) function, preventing unnecessary re-renders and optimizing performance when dependencies change.

2. **useEffect Hook**: Implemented to automatically regenerate passwords whenever the [`passwordGenerator`](src/App.jsx) function changes, creating a reactive user experience.

3. **useRef Hook**: Utilized [`passwordRef`](src/App.jsx) to directly access and manipulate the password input DOM element for clipboard operations and text selection.

4. **Controlled Components**: Managed form inputs (range slider and checkboxes) with React state, ensuring the UI stays in sync with the application state.

## Technologies Used

- React
- Vite
- Tailwind CSS
