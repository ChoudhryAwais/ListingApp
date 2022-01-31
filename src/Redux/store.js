import { createStore } from "redux";
import todoReducers from "./Reducer";

const Store = createStore(todoReducers);

export default Store;
