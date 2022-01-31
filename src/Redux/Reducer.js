import { combineReducers } from "redux";
import TodoReducer from "./AllReducers/index";

const todoReducers = combineReducers({
  todo: TodoReducer,
});
export default todoReducers;
