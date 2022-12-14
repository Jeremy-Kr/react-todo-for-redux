import styled from "styled-components";
import { TodoList } from "./";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodos } from "../../redux/modules/todoList";

const TodoContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  const todoList = useSelector((state) => state.todoList);

  const todoItems = todoList.filter((item) => !item.isDone);
  const doneItems = todoList.filter((item) => item.isDone);

  return (
    <TodoFlexBox>
      <TodoList todoItems={todoItems}>🔥 Todo 🔥</TodoList>
      <TodoList todoItems={doneItems}>🎊 Done 🎊</TodoList>
    </TodoFlexBox>
  );
};

const TodoFlexBox = styled.article`
  display: flex;
  justify-content: space-around;
`;

export default TodoContainer;
