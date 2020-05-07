import { combineReducers } from "redux";
import AppReducer from "./AppReducer";
import { connectRouter } from "connected-react-router";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    AppReducer,
  });
export default rootReducer;
