import useTodoStore from "../store/store";
import type { Todo } from "../types/todo";
import * as S from "../styles/styled";

interface TodoItemProps {
  todo: Todo;
}

const PRIORITY_LABELS = {
  low: "낮음",
  medium: "보통",
  high: "높음",
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const removeTodo = useTodoStore((s) => s.removeTodo);
  const toggleTodo = useTodoStore((s) => s.toggleTodo);

  const priority = todo.priority ?? "medium";

  return (
    <S.ItemRow>
      <S.Check>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span />
      </S.Check>

      <S.ItemContent>
        <S.ItemTitle className={todo.completed ? "done" : ""}>
          {todo.title}
        </S.ItemTitle>

        <S.PriorityBadge $priority={priority}>
          {PRIORITY_LABELS[priority]}
        </S.PriorityBadge>
      </S.ItemContent>

      <S.DeleteButton onClick={() => removeTodo(todo.id)} title="삭제">
        삭제
      </S.DeleteButton>
    </S.ItemRow>
  );
};

export default TodoItem;
