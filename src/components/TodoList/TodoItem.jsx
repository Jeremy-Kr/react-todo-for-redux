import styled from "styled-components";
const TodoItem = ({ todoItem, onClickDeleteHandler, onClickToggleHandler }) => {
  return (
    <CustomLi>
      <h3>{todoItem.todoTitle}</h3>
      <CustomHr />
      <span>{todoItem.todoContent}</span>
      <ButtonContainer>
        <CustomButton
          onClick={() => {
            onClickToggleHandler(todoItem.id);
          }}
          isDone={todoItem.isDone}
        >
          {todoItem.isDone ? "취소" : "완료"}
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
  background-color: ${(props) => {
    if (props.children === "삭제") {
      return "#f7cac9";
    } else {
      if (props.isDone) {
        return "red";
      } else {
        return "green";
      }
    }
  }};
  border: none;
  height: 2rem;
  width: 4rem;
  border-radius: 0.3rem;
  border: 1px solid #fff;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    border: 1px solid #f7cac9;
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
