export type TodoPriority = "low" | "medium" | "high";
export type TodoFilter = "all" | "active" | "completed";

export interface Todo {
    readonly id: number;
    title: string;
    completed: boolean;
    priority?: TodoPriority;
}

export interface TodoStore {
    todos: Todo[];
    filter: TodoFilter;

    addTodo: (title: string, priority: TodoPriority) => void;

    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    setFilter: (filter: TodoFilter) => void;
}