import React from "react";

import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

import { CssBaseline } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";
import Reset from "@material-ui/core/CssBaseline";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: lightGreen[300],
      main: lightGreen[500],
      dark: lightGreen[700]
    },
    secondary: {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700]
    }
  }
});

const App = () => {
  console.log("App.js");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
