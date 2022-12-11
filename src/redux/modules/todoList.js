import { v4 as uuidv4 } from "uuid";

// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
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
    isDone: false,
    id: uuidv4(),
  },
];

// Reducer
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return [...action.payload];
    case TOGGLE_TODO:
      return [...action.payload];
    default:
      return state;
  }
};

//export default
export default todoList;
