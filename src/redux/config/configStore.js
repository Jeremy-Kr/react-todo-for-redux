import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import logger from "redux-logger";
import todoList from "../modules/todoList";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  todoList,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));

export default store;
