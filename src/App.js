import { Layout, GlobalStyle, TodoInput, TodoContainer } from "./components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      todoTitle: "TodoList 만들기",
      todoContent: "투두리스트 리액트로 만들기",
      isDone: true,
      id: uuidv4(),
    },
    {
      todoTitle: "TodoList 리팩토링하기",
      todoContent: "투두리스트 리덕스로 상태관리 하기",
      isDone: false,
      id: uuidv4(),
    },
  ]);

  const handleOnSubmit = (
    event,
    todoTitle,
    todoContent,
    setTodoTitle,
    setTodoContent
  ) => {
    event.preventDefault();

    const newTodoItem = {
      todoTitle,
      todoContent,
      isDone: false,
      id: uuidv4(),
    };

    setTodoList([...todoList, newTodoItem]);
    setTodoTitle("");
    setTodoContent("");
  };

  const handleDeleteOnClick = (todoItemId) => {
    const newTodoList = todoList.filter((item) => item.id !== todoItemId);
    setTodoList(newTodoList);
  };

  const handleToggleOnClick = (todoItemId) => {
    const newTodoList = [...todoList];

    newTodoList.forEach((item) => {
      if (item.id === todoItemId) {
        return (item.isDone = !item.isDone);
      }
    });

    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Layout>
        <TodoInput onSubmitHandler={handleOnSubmit} />
        <TodoContainer
          onClickToggleHandler={handleToggleOnClick}
          onClickDeleteHandler={handleDeleteOnClick}
          todoList={todoList}
        />
      </Layout>
    </div>
  );
};

export default App;
