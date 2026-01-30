# Currency Converter

A simple and elegant currency converter application built with React and Tailwind CSS. This app allows users to convert between different currencies using real-time exchange rates from a public API.

## Features

- 🔄 Real-time currency conversion
- 💱 Swap functionality to quickly reverse currencies
- 🎨 Beautiful UI with glassmorphism design
- 📱 Responsive and user-friendly interface
- 🌍 Supports multiple international currencies

## Technologies Used

- **React 19** - Frontend framework
- **Vite** - Build tool for fast development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Currency API** - Real-time exchange rates

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd currency-converter
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Key Learnings

- **Custom Hooks**: Created `useCurrencyInfo` custom hook to fetch and manage currency data, demonstrating how to encapsulate API logic and make it reusable across components.

- **Component Reusability**: Built a flexible `InputBox` component that handles both input and display modes, showcasing the power of props and conditional rendering in React.

- **State Management**: Implemented bidirectional currency conversion with proper state management using `useState`, including swap functionality that demonstrates controlled components.

- **API Integration**: Integrated external currency API with `useEffect` hook to fetch real-time data, learning how to handle asynchronous operations and side effects in React functional components.
