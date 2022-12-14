import axios from "axios";

// Action Value
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";

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

const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    todos,
  };
};

// redux thunk
export const getTodos = () => async (dispatch) => {
  await axios
    .get("https://6399248afe03352a94e712ea.mockapi.io/todolist")
    .then((res) => {
      dispatch(getTodosSuccess(res.data));
    })
    .catch((e) => {
      console.log(e);
    });
};

// Reducer
const todoList = (state = [], action) => {
  let prevState;
  if (state) {
    prevState = [...state];
  }

  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return action.todos;
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
