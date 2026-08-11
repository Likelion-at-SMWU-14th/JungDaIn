import useTodoStore from '../store/store';
import * as S from '../styles/styled';

const TodoItem = ({ todo }) => {
    const removeTodo = useTodoStore((s) => s.removeTodo);
    const toggleTodo = useTodoStore((s) => s.toggleTodo);
    return (
        <S.ItemRow>
            <S.Check>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />
                <span />
            </S.Check>

            <S.ItemTitle className={todo.completed ? "done" : ""}>
                {todo.title}
            </S.ItemTitle>

            <S.DeleteButton onClick={() => removeTodo(todo.id)} title="삭제">
                삭제
            </S.DeleteButton>
        </S.ItemRow>
    );
}

export default TodoItem;