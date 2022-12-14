import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  updateTodo,
} from "../../redux/modules/todoList";
import { Link } from "react-router-dom";
import { useState } from "react";

const TodoItem = ({ todoItem }) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);

  const { id } = todoItem;

  const [todoTitle, setTodoTitle] = useState(todoItem.todoTitle);
  const [todoContent, setTodoContent] = useState(todoItem.todoContent);
  const [isUpdating, setIsUpdating] = useState(false);

  const onChangeTitleInputHandler = (event) => {
    setTodoTitle(event.target.value);
  };

  const onChangeContentInputHandler = (event) => {
    setTodoContent(event.target.value);
  };

  // todo delete dispatch function
  const deleteTodoItem = () => {
    dispatch(deleteTodo(id));
  };

  // delete button onclick handler
  const onClickDeleteHandler = () => {
    deleteTodoItem();
  };

  // todo toggle dispatch function
  const toggleTodoItem = () => {
    dispatch(toggleTodo(id));
  };

  // toggle button onclick handler
  const onClickToggleHandler = () => {
    toggleTodoItem();
  };

  // todo update dispatch function
  const updateTodoItem = () => {
    dispatch(
      updateTodo({
        todoTitle,
        todoContent,
        id,
      })
    );
  };

  // update button onclick handler
  const onClickUpdateHandler = () => {
    if (!isUpdating) {
      setIsUpdating(!isUpdating);
      return;
    }
    updateTodoItem();
    setIsUpdating(!isUpdating);
  };

  // when key up enter run todo update
  const keyUpEnter = (keyCode) => {
    if (keyCode === 13) {
      updateTodoItem();
      setIsUpdating(!isUpdating);
    }
  };

  // todo title input key up handler
  const onKeyUpTitleInputHandler = (event) => {
    keyUpEnter(event.keyCode);
  };

  // todo content input key up handler
  const onKeyUpContentInputHandler = (event) => {
    keyUpEnter(event.keyCode);
  };

  return (
    <CustomLi>
      {isUpdating ? (
        <TodoTitleInput
          value={todoTitle}
          onChange={(event) => {
            onChangeTitleInputHandler(event);
          }}
          onKeyUp={(event) => {
            onKeyUpTitleInputHandler(event);
          }}
          maxLength={22}
        />
      ) : (
        <Link to={`todo/${todoItem.id}`}>
          <h3>{todoItem.todoTitle}</h3>
        </Link>
      )}

      <CustomHr />
      {isUpdating ? (
        <TodoContentInput
          value={todoContent}
          onChange={(event) => {
            onChangeContentInputHandler(event);
          }}
          onKeyUp={(event) => {
            onKeyUpContentInputHandler(event);
          }}
          valueLength={todoContent.length}
          maxLength={35}
        />
      ) : (
        <span>{todoItem.todoContent}</span>
      )}
      <ButtonContainer>
        <CustomButton
          onClick={() => {
            onClickToggleHandler();
          }}
          isDone={todoItem.isDone}
          buttonColor={todoItem.isDone ? "#F9817F" : "#68AB7D"}
        >
          {todoItem.isDone ? "취소" : "완료"}
        </CustomButton>
        <CustomButton
          onClick={() => {
            onClickUpdateHandler();
          }}
          buttonColor={"#B0DAF7"}
        >
          수정하기
        </CustomButton>
        <CustomButton
          onClick={() => {
            onClickDeleteHandler();
          }}
        >
          삭제
        </CustomButton>
      </ButtonContainer>
    </CustomLi>
  );
};

const CustomLi = styled.li`
  margin: 2rem 0;
  width: 15rem;
`;

const CustomHr = styled.hr`
  background-color: #f7cac9;
  height: 1px;
  border: none;
`;

const CustomButton = styled.button`
  background-color: ${({ buttonColor }) => buttonColor ?? "#f7cac9"};
  border: none;
  height: 2rem;
  width: 4rem;
  border-radius: 0.3rem;
  border: 1px solid #fff;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    border: 1px solid ${({ buttonColor }) => buttonColor ?? "#f7cac9"};
    background-color: #fff;
    scale: 1.05;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-around;
`;

const TodoTitleInput = styled.input`
  border: none;
  border-bottom: 1px solid #f7cac9;
  height: 1.2rem;
  font-size: 1.2rem;
  font-weight: 600;
  width: 98.5%;
  &:focus {
    outline-color: #f7cac9;
  }
`;

const TodoContentInput = styled.textarea`
  border: none;
  border-bottom: 1px solid #f7cac9;
  height: ${({ valueLength }) => (valueLength > 20 ? "2.4rem" : "1.2rem")};
  width: 98.5%;
  font-size: 1rem;
  resize: none;
  &:focus {
    outline-color: #f7cac9;
  }
`;

export default TodoItem;
