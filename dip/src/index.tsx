import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App/App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./redux/reducer/rootReducer";
import { createBrowserHistory } from "history";

import { ConnectedRouter } from "connected-react-router";

import "./index.scss";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  return result;
};

export const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk))
);

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
