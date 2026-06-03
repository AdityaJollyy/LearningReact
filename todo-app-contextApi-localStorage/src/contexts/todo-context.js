import { createContext, use } from "react";

export const TodoContext = createContext(null);

export function useTodo() {
  const context = use(TodoContext);

  if (!context) {
    throw new Error("useTodo must be used within TodoProvider");
  }

  return context;
}
