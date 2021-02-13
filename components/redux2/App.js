import React, { useState } from "react";

import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

import { CssBaseline } from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";
import teal from "@material-ui/core/colors/teal";
import grey from "@material-ui/core/colors/grey";
import Reset from "@material-ui/core/CssBaseline";
import getTheme from "../../themes/base";

import { ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  const [paletteTypeState, setPaletteTypeState] = useState(false);
  const theme = getTheme(paletteTypeState ? "dark" : "normal");

  const handleThemeChange = () => {
    setPaletteTypeState(!paletteTypeState);
  };

  console.log("App.js");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton
        type="submit"
        style={{ float: "right" }}
        color="grey"
        onClick={handleThemeChange}
      >
        <Icon className="fas fa-adjust" />
      </IconButton>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
