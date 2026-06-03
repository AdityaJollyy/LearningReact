import { useEffect, useState } from "react";
import { TodoContext } from "./todo-context";

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");

    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? {
              ...prevTodo,
              completed: !prevTodo.completed,
            }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
      }}
    >
      {children}
    </TodoContext>
  );
}
