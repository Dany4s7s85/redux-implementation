import Reducer from "../reducer/reducer";
import { createStore, combineReducers } from "redux";
const reducer = combineReducers({
  todoList: Reducer,
});

const store = createStore(reducer);

export default store;
