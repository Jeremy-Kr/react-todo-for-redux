import styled from "styled-components";
import TodoList from "./TodoList";
const TodoContainer = ({
  todoList,
  onClickDeleteHandler,
  onClickToggleHandler,
}) => {
  const todoItems = todoList.filter((item) => !item.isDone);
  const doneItems = todoList.filter((item) => item.isDone);

  return (
    <TodoFlexBox>
      <TodoList
        onClickToggleHandler={onClickToggleHandler}
        onClickDeleteHandler={onClickDeleteHandler}
        todoItems={todoItems}
      >
        🔥 Todo 🔥
      </TodoList>
      <TodoList
        onClickToggleHandler={onClickToggleHandler}
        onClickDeleteHandler={onClickDeleteHandler}
        todoItems={doneItems}
      >
        🎊 Done 🎊
      </TodoList>
    </TodoFlexBox>
  );
};

const TodoFlexBox = styled.article`
  display: flex;
  justify-content: space-around;
`;

export default TodoContainer;
