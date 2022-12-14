import axios from "axios";

// Action Value
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const POST_TODO_SUCCESS = "POST_TODO_SUCCESS";
const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
const TOGGLE_TODO_SUCCESS = "TOGGLE_TODO_SUCCESS";
const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";

// Action Creator

const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    todos,
  };
};

const postTodoSuccess = (todo) => {
  return {
    type: POST_TODO_SUCCESS,
    todo,
  };
};

const deleteTodoSuccess = (todoItemId) => {
  return {
    type: DELETE_TODO_SUCCESS,
    todoItemId,
  };
};

const toggleTodoSuccess = (todoItemId) => {
  return {
    type: TOGGLE_TODO_SUCCESS,
    todoItemId,
  };
};

const updateTodoSuccess = (todo) => {
  return {
    type: UPDATE_TODO_SUCCESS,
    todo,
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

export const postTodo = (newTodo) => async (dispatch) => {
  await axios
    .post("https://6399248afe03352a94e712ea.mockapi.io/todolist", newTodo)
    .then((res) => {
      dispatch(postTodoSuccess(res.data));
    })
    .catch((e) => {
      console.log(e);
    });
};

export const deleteTodo = (todoId) => async (dispatch) => {
  await axios
    .delete(`https://6399248afe03352a94e712ea.mockapi.io/todolist/${todoId}`)
    .then((res) => {
      dispatch(deleteTodoSuccess(res.data.id));
      alert("삭제완료!");
    });
};

export const toggleTodo =
  ({ isDone, id }) =>
  async (dispatch) => {
    await axios
      .put(`https://6399248afe03352a94e712ea.mockapi.io/todolist/${id}`, {
        isDone: !isDone,
      })
      .then((res) => dispatch(toggleTodoSuccess(res.data.id)))
      .catch((e) => {
        console.log(e);
      });
  };

export const updateTodo = (newTodo) => async (dispatch) => {
  await axios
    .put(
      `https://6399248afe03352a94e712ea.mockapi.io/todolist/${newTodo.id}`,
      newTodo
    )
    .then((res) => dispatch(updateTodoSuccess(res.data)));
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

    case POST_TODO_SUCCESS:
      return [...state, action.todo];

    case DELETE_TODO_SUCCESS:
      const newTodoList = prevState.filter(
        (item) => item.id !== action.todoItemId
      );
      return newTodoList;

    case TOGGLE_TODO_SUCCESS:
      prevState.forEach((item) => {
        if (item.id === action.todoItemId) {
          return (item.isDone = !item.isDone);
        }
      });
      return prevState;

    case UPDATE_TODO_SUCCESS:
      const { todoTitle, todoContent, id } = action.todo;
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
