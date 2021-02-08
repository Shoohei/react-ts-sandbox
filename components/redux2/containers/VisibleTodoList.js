import { connect } from "react-redux";
import { toggleTodo, VisibilityFilters } from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";

const getVisibleTodos = (todos, filter) => {
  console.log("VisibleTodoList.js -> getVisibleTodos", todos, filter);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  console.log("VisibleTodoList.js -> mapStateToProps -> state", state);
  const result = {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
  console.log("VisibleTodoList.js -> mapStateToProps -> ", result);
  return result;
};
const mapDispatchToProps = dispatch => {
  console.log("VisibleTodoList.js -> mapDispatchToProps -> dispatch", dispatch);
  const result = {
    toggleTodo: id => dispatch(toggleTodo(id))
  };
  console.log("VisibleTodoList.js -> mapDispatchToProps -> ", result);
  return result;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
