import { useState } from "react";
import TodoItem from "./components/TodoItem";
import useTodoStore from "./store/store";
import * as S from "./styles/styled";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const todos = useTodoStore((s) => s.todos);
  const addTodo = useTodoStore((s) => s.addTodo);

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;
    addTodo(newTodo);
    setNewTodo("");
  };

  const handleSubmit = (e) => {
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
              <S.PrimaryButton type="submit" title="추가">
                할일추가
              </S.PrimaryButton>
            </S.Row>
          </form>
          <S.List>
            {todos.length === 0 ? (
              <S.Empty>할 일이 없어요. 빨리 추가해봅시다!!</S.Empty>
            ) : (
              todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
          </S.List>
        </S.Card>
      </S.Page>
    </>
  );
}

export default App;
