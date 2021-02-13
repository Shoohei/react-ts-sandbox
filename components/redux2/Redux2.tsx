import React from "react";
import LifeCycleComponent from "../../utilities/LifeCycleComponent";
import { ThemeProvider } from "@material-ui/styles";

import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Button from "@material-ui/core/Button";

import App from "./App";
import todoApp from "./reducers";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    neutral: {
      main: "#5c6ac4"
    }
  }
});

class Redux2 extends LifeCycleComponent {
  render() {
    console.log("Redux2 -> Before createStore");
    let store = createStore(todoApp);
    console.log("Redux2 -> After createStore");
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Button color="secondary"> TEST </Button>
          <App />
        </ThemeProvider>
      </Provider>
    );
  }
}
export default Redux2;
