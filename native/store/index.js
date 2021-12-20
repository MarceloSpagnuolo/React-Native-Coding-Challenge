import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { subjectsReducer } from "./reducer";
import thunk from "redux-thunk";

export default createStore(
  subjectsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
