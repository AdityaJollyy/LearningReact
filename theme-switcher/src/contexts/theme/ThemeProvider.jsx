import { useEffect, useState } from "react";
import { ThemeContext } from "./theme-context";

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("dark");

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext
      value={{
        themeMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext>
  );
}
