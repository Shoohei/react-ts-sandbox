import React from "react";
import LifeCycleComponent from "../../utilities/LifeCycleComponent";

import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Button from "@material-ui/core/Button";
import { CssBaseline } from "@material-ui/core";

import App from "./App";
import todoApp from "./reducers";

class Redux2 extends LifeCycleComponent {
  render() {
    console.log("Redux2 -> Before createStore");
    let store = createStore(todoApp);
    console.log("Redux2 -> After createStore");
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
export default Redux2;
