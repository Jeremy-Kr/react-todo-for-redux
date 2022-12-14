import { v4 as uuidv4 } from "uuid";

// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

// Action Creator
export const addTodo = (newTodoItem) => {
  return {
    type: ADD_TODO,
    newTodoItem,
  };
};

export const deleteTodo = (todoItemId) => {
  return {
    type: DELETE_TODO,
    todoItemId,
  };
};

export const toggleTodo = (todoItemId) => {
  return {
    type: TOGGLE_TODO,
    todoItemId,
  };
};

export const updateTodo = (updateTodoItem) => {
  return {
    type: UPDATE_TODO,
    updateTodoItem,
  };
};

// init
const initialState = [
  {
    todoTitle: "TodoList 만들기",
    todoContent: "투두리스트 리액트로 만들기",
    isDone: true,
    id: uuidv4(),
  },
  {
    todoTitle: "TodoList 리팩토링하기",
    todoContent: "투두리스트 리덕스로 상태관리 하기",
    isDone: true,
    id: uuidv4(),
  },
  {
    todoTitle: "TodoList 리팩토링하기",
    todoContent: "투두 아이템 수정 기능 만들기",
    isDone: true,
    id: uuidv4(),
  },
  {
    todoTitle: "TodoList 문서작업하기",
    todoContent: "Readme 작성하기",
    isDone: false,
    id: uuidv4(),
  },
];

// Reducer
const todoList = (state = initialState, action) => {
  const prevState = [...state];

  switch (action.type) {
    case ADD_TODO:
      return [...state, action.newTodoItem];

    case DELETE_TODO:
      const newTodoList = state.filter((item) => item.id !== action.todoItemId);
      return newTodoList;

    case TOGGLE_TODO:
      prevState.forEach((item) => {
        if (item.id === action.todoItemId) {
          return (item.isDone = !item.isDone);
        }
      });
      return prevState;

    case UPDATE_TODO:
      const { todoTitle, todoContent, id } = action.updateTodoItem;
      prevState.forEach((item) => {
        if (item.id === id) {
          item.todoTitle = todoTitle;
          item.todoContent = todoContent;
          return;
        }
      });

      return prevState;

    default:
      return state;
  }
};

//export default
export default todoList;
