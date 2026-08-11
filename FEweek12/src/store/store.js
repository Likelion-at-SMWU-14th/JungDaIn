import { create } from 'zustand';
import { devtools, persist } from "zustand/middleware";

const useTodoStore = create(
    devtools(
        persist(
            (set) => ({
        todos: [],
        addTodo: (rawTitle) => {
            const title = rawTitle.trim();
            if (!title) return;
            set((state) => ({
                todos: [...state.todos, { id: Date.now(), title, completed: false }],
            }),
            undefined,
            "todo/addTodo",
            );
        },
        removeTodo: (id) =>
            set((state) => ({
                todos: state.todos.filter((todo) => todo.id !== id),
            }),
            undefined,
            "todo/removeTodo",
            ),
        toggleTodo: (id) =>
            set((state) => ({
                todos: state.todos.map((todo) =>
                    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        }),
        undefined,
        "todo/toggleTodo",
        ),
        }),
        { name: "todo-store" },
    ),
    ),
);

export default useTodoStore;