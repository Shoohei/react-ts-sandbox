import React from "react";
import LifeCycleComponent from "../../utilities/LifeCycleComponent";

import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App.jsx";
import todoApp from "./reducers/reducers";

class Redux extends LifeCycleComponent {
  render() {
    let store = createStore(todoApp);
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
export default Redux;
