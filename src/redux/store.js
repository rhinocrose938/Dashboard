import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducer/rootReducer";
const initialState = {};
export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);
