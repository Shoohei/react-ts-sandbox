import { connect } from "react-redux";
import { toggleTodo, VisibilityFilters } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  // return todos;
  console.log("VisibleTodoList.js -> getVisibleTodos");
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return todos;
    // throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  const result = {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
  console.log("VisibleTodoList.js -> mapStateToProps -> ", result);
  return result;
};
const mapDispatchToProps = dispatch => {
  const result = {
    toggleTodo: id => dispatch(toggleTodo(id))
  };
  console.log("VisibleTodoList.js -> mapDispatchToProps -> ", result);
  return result;
};

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(TodoList);
