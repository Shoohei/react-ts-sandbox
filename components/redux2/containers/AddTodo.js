import React from "react";

import { connect } from "react-redux";
import { addTodo } from "../actions";
import Button from "@material-ui/core/Button";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            console.log("AddTodo.js -> if (!input.value.trim())");
            return;
          }
          console.log("dispatch: " + input.value);
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
