import { create } from 'zustand';
import { devtools } from "zustand/middleware";

const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (rawTitle) => {
        const title = rawTitle.trim();
        if (!title) return;
        set((state) => ({
            todos: [...state.todos, { id: Date.now(), title, completed: false }],
        }));
    },
    retmoveTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        )
    })),
}));

export default store;