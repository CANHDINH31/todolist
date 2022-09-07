import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { listReducer } from "./reducers/listReducer";
import { messageReducer } from "./reducers/messageReducer";

import { initData } from "../mockData/initData";

const reducer = combineReducers({
  todoItems: listReducer,
  message: messageReducer,
});

const todoItemsFromStorage = localStorage.getItem("listItems")
  ? JSON.parse(localStorage.getItem("listItems"))
  : initData;

const middleware = [thunk];

const initialState = {
  todoItems: todoItemsFromStorage,
  message: {},
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
