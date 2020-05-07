import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import NavEl from "../src/components/NavEl/NavEl";
import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "../src/redux/reducer/rootReducer";
import { createBrowserHistory } from "history";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(reduxThunk))
);

describe("NavEl", () => {
  test("should render", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <NavEl />
      </Provider>
    );

    expect(wrapper.exists()).toBeTruthy();
  });
});
