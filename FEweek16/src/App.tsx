import { useState, type SubmitEvent } from "react";
import TodoItem from "./components/TodoItem";
import useTodoStore from "./store/store";
import { filterTodos } from "./utils/filterTodos";
import type { TodoFilter, TodoPriority } from "./types/todo";
import * as S from "./styles/styled";

const PRIORITY_OPTIONS: {
  value: TodoPriority;
  label: string;
}[] = [
  { value: "low", label: "낮음" },
  { value: "medium", label: "보통" },
  { value: "high", label: "높음" },
];

const FILTER_OPTIONS: {
  value: TodoFilter;
  label: string;
}[] = [
  { value: "all", label: "전체" },
  { value: "active", label: "진행 중" },
  { value: "completed", label: "완료" },
];

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [newPriority, setNewPriority] = useState<TodoPriority>("medium");

  const todos = useTodoStore((s) => s.todos);
  const addTodo = useTodoStore((s) => s.addTodo);
  const filter = useTodoStore((s) => s.filter);
  const setFilter = useTodoStore((s) => s.setFilter);

  const visibleTodos = filterTodos(todos, filter);

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;

    addTodo(newTodo, newPriority);

    setNewTodo("");
    setNewPriority("medium");
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleAddTodo();
  };

  return (
    <>
      <S.GlobalStyle />
      <S.Page>
        <S.Card>
          <S.H1>투두리스트 ^_^</S.H1>

          <form onSubmit={handleSubmit}>
            <S.Row>
              <S.TextInput
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="할 일을 추가해봐~"
              />

              <S.PrioritySelect
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value)}
              >
                {PRIORITY_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </S.PrioritySelect>

              <S.PrimaryButton type="submit" title="추가">
                할일추가
              </S.PrimaryButton>
            </S.Row>
          </form>

          <S.FilterGroup>
            {FILTER_OPTIONS.map((option) => (
              <S.FilterButton
                key={option.value}
                type="button"
                $active={filter === option.value}
                onClick={() => setFilter(option.value)}
              >
                {option.label}
              </S.FilterButton>
            ))}
          </S.FilterGroup>

          <S.List>
            {visibleTodos.length === 0 ? (
              <S.Empty>조건에 맞는 할 일이 없습니다.</S.Empty>
            ) : (
              visibleTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
          </S.List>
        </S.Card>
      </S.Page>
    </>
  );
}

export default App;
