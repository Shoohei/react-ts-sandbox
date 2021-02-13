import React, { useState } from "react";

import { connect } from "react-redux";
import { addTodo } from "../actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  task: {
    flexDirection: "column",
    alignItems: "center"
  },
  button: {
    margin: theme.spacing(1)
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

  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className={classes.task}
        name="task"
        label="Task"
        variant="filled"
        value={task}
        onInput={e => setTask(e.target.value)}
      />
      <Icon color="primary">add_circle</Icon>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="submit"
      >
        Add
      </Button>
    </form>
  );
};

export default connect()(AddTodo);
