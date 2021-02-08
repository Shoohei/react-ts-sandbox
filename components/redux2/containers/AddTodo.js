import React from "react";
import LifeCycleComponent from "../../../utilities/LifeCycleComponent";

import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends LifeCycleComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            dispatch(addTodo(input.value));
            input.value = "";
          }}
        >
          <input ref={node => (input = node)} />
          <button type="submit">Add AddTodo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
