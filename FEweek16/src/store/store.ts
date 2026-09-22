import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { TodoStore } from "../types/todo";

const useTodoStore = create(
  devtools(
    persist(
      (set): TodoStore => ({
        todos: [],
        filter: "all",
        addTodo: (rawTitle, priority = "medium") => {
          const title = rawTitle.trim();
          if (!title) return;
          set(
            (state) => ({
              todos: [
                ...state.todos,
                { id: Date.now(), title, completed: false, priority },
              ],
            }),
            undefined,
            "todo/addTodo",
          );
        },
        removeTodo: (id) =>
          set(
            (state) => ({
              todos: state.todos.filter((todo) => todo.id !== id),
            }),
            undefined,
            "todo/removeTodo",
          ),
        toggleTodo: (id) =>
          set(
            (state) => ({
              todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
              ),
            }),
            undefined,
            "todo/toggleTodo",
          ),
        setFilter: (filter) => {
          set({ filter }, undefined, "todo/setFilter");
        },
      }),
      { name: "todo-store" },
    ),
  ),
);

export default useTodoStore;
