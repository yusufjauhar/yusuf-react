import { combineReducers, createStore } from "redux";
import counterReducer from "./Features/Counter/reducer";

let rootReducers = combineReducers({
  counter: counterReducer,
});

let Store = createStore(rootReducers);

export default Store;
