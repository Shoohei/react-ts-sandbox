import React from "react";
import LifeCycleComponent from "../../../utilities/LifeCycleComponent";

import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "../Footer";

class Redux2 extends LifeCycleComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Redux2;
