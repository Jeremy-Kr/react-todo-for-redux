import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/modules/todoList";
import { Link } from "react-router-dom";

const TodoItem = ({ todoItem }) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);

  const onClickDeleteHandler = (todoItemId) => {
    const newTodoList = todoList.filter((item) => item.id !== todoItemId);
    dispatch(deleteTodo(newTodoList));
  };

  const onClickToggleHandler = (todoItemId) => {
    const newTodoList = [...todoList];
    newTodoList.forEach((item) => {
      if (item.id === todoItemId) {
        return (item.isDone = !item.isDone);
      }
    });

    dispatch(toggleTodo(newTodoList));
  };

  const onClickUpdateHandler = (todoItemId) => {
    console.log(todoItemId);
  };

  return (
    <CustomLi>
      <Link to={`todo/${todoItem.id}`}>
        <h3>{todoItem.todoTitle}</h3>
      </Link>
      <CustomHr />
      <span>{todoItem.todoContent}</span>
      <ButtonContainer>
        <CustomButton
          onClick={() => {
            onClickToggleHandler(todoItem.id);
          }}
          isDone={todoItem.isDone}
          buttonColor={todoItem.isDone ? "#F9817F" : "#68AB7D"}
        >
          {todoItem.isDone ? "취소" : "완료"}
        </CustomButton>
        <CustomButton
          onClick={() => {
            onClickUpdateHandler(todoItem.id);
          }}
          buttonColor={"#B0DAF7"}
        >
          수정하기
        </CustomButton>
        <CustomButton
          onClick={() => {
            onClickDeleteHandler(todoItem.id);
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

export default TodoItem;
