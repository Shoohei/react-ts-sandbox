import React from "react";
import LifeCycleComponent from "../../utilities/LifeCycleComponent";

import { connect } from "react-redux";
import { addTodo } from "./actions/actions";

import AddTodo from "./components/AddTodo.js";
import TodoList from "./components/TodoList.js";

class App extends LifeCycleComponent {
  render() {
    const { dispath, visibleTodos } = this.props;

    return (
      <React.Fragment>
        <AddTodo onAddClick={text => dispatch(addTodo(text))} />
        <TodoList todos={visibleTodos} />
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    visibleTodos: state.todos
  };
}

export default connect(select)(App);
