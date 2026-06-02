import { createContext, use } from "react";

// 1. Create the Context (Export it so the Provider can use it)
export const ThemeContext = createContext(null);

// 2. The Hook (Export it for your components to use)
export function useTheme() {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
