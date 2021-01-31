import React, { PropTypes } from "react";
import LifeCycleComponent from "../../../utilities/LifeCycleComponent";
import Todo from "./Todo.js";

export default class Todo extends LifeCycleComponent {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    );
  }
}
