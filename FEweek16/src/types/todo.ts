export type TodoPriority = "low" | "medium" | "high";
export type TodoFilter = "all" | "active" | "completed";

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    priority: TodoPriority;
}