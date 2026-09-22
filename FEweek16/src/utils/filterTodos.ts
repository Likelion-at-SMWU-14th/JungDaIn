import type { Todo, TodoFilter } from "../types/todo";

export const filterTodos = (todos: Todo[], filter: TodoFilter): Todo[] => {
  switch (filter) {
    case "all":
      return todos;

    case "active":
      return todos.filter((todo) => !todo.completed);

    case "completed":
      return todos.filter((todo) => todo.completed);

    default:
      return todos;
  }
};
