import styled from "styled-components";
import { useState } from "react";
const TodoInput = ({ onSubmitHandler }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  const handleTodoTitleOnChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleTodoContentOnChange = (event) => {
    setTodoContent(event.target.value);
  };

  return (
    <TodoInputContainer
      onSubmit={(event) => {
        if (!todoTitle && !todoContent) {
          event.preventDefault();
          return alert("뭐라도 좀 쓰쇼");
        }
        if (!todoTitle) {
          event.preventDefault();
          return alert("제목 좀 쓰쇼");
        }
        if (!todoContent) {
          event.preventDefault();
          return alert("내용도 좀 쓰쇼");
        }
        onSubmitHandler(
          event,
          todoTitle,
          todoContent,
          setTodoTitle,
          setTodoContent
        );
      }}
      className="todo"
    >
      <label htmlFor="todo-title">제목</label>
      <TodoInputBox
        value={todoTitle}
        id="todo-title"
        placeholder="제목을 입력 해 주세요."
        onChange={(event) => {
          handleTodoTitleOnChange(event);
        }}
      />
      <label htmlFor="todo-content">내용</label>
      <TodoInputBox
        value={todoContent}
        id="todo-content"
        placeholder="할 일을 입력 해 주세요."
        onChange={(event) => {
          handleTodoContentOnChange(event);
        }}
      />
      <TodoSubmitButton type="submit"> 추가하기 </TodoSubmitButton>
    </TodoInputContainer>
  );
};

const TodoInputContainer = styled.form`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-anchor: 50%;
  color: #2e050a;
`;

const TodoInputBox = styled.input`
  width: 20rem;
  height: 2rem;
  margin: 1rem;
  border-radius: 0.3rem;
  border: 1px solid #2e050a;
  padding: 0 1rem;
  color: #2e050a;
  &:focus {
    outline-color: #f7cac9;
  }
`;

const TodoSubmitButton = styled.button`
  background-color: #f7cac9;
  color: #2e050a;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 0.3rem;
  border: 1px solid #fff;
  transition: 0.3s;
  height: 2.4rem;
  &:hover {
    cursor: pointer;
    border: 1px solid #f7cac9;
    background-color: #fff;
    scale: 1.03;
  }
`;

export default TodoInput;
