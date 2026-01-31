# React Router Project

A simple React application demonstrating React Router v7 features with multiple routes and data loading capabilities.

## Features

- **Multiple Routes**: Home, About, Contact, GitHub profile, and dynamic User routes
- **Layout System**: Shared header and footer across all pages using `Outlet`
- **Data Loaders**: Fetch GitHub user data before component render using route loaders
- **Dynamic Routing**: URL parameter-based User profile pages
- **Styled with Tailwind CSS**: Modern, responsive UI design

## Tech Stack

- **React 19** - Latest React version
- **React Router v7** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### 1. **React Router v7 Data Loaders**

Learned how to prefetch data before component rendering using `loader` functions. The GitHub component demonstrates fetching API data at the route level rather than inside `useEffect`, providing better UX and avoiding loading states.

### 2. **Nested Routing with Layout Pattern**

Implemented the `Outlet` component in a Layout wrapper to share Header and Footer across all pages. This pattern eliminates code duplication and ensures consistent navigation structure throughout the app.

### 3. **Dynamic Route Parameters**

Used URL parameters (`:userId`) to create dynamic user profile pages. React Router's `useParams` hook makes it simple to extract and use URL segments as props for rendering personalized content.

### 4. **Two Router Configuration Approaches**

Explored both object-based router configuration and JSX-based route definition using `createRoutesFromElements`. The JSX approach provides better readability and familiarity for React developers while maintaining the same functionality.
