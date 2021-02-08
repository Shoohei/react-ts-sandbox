import React from "react";
import LifeCycleComponent from "../../../utilities/LifeCycleComponent";

import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

class Redux2 extends LifeCycleComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default Redux2;
