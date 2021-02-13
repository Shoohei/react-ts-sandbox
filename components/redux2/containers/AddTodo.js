import React, { useState } from "react";

import { connect } from "react-redux";
import { addTodo } from "../actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { loadCSS } from "fg-loadcss";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  button: {
    align: "center"
  }
}));

const AddTodo = ({ dispatch }) => {
  const handleSubmit = event => {
    event.preventDefault();
    if (!task.trim()) {
      console.log("AddTodo.js -> if (!task.trim())");
      return;
    }
    console.log("dispatch: " + task);
    dispatch(addTodo(task));
    setTask("");
  };
  const [task, setTask] = useState("");
  this.focusTextInput = () => {
    // Focus the text input using the raw DOM API
    if (this.task) this.task.focus();
  };
  const classes = useStyles();
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
    return () => {
      node.parentNode ? node.parentNode.removeChild(node) : "";
    };
  }, []);
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        className={classes.task}
        name="task"
        label="Task"
        variant="filled"
        value={task}
        onInput={e => setTask(e.target.value)}
      />
      <IconButton className={classes.button} type="submit">
        <Icon className="fa fa-plus-circle" color="primary" />
      </IconButton>
    </form>
  );
};

export default connect()(AddTodo);
