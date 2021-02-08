import { combineReducers } from "redux";
import rTodos from "./Todos";
import rVisibilityFilter from "./VisibilityFilter";

export default combineReducers({
  rTodos,
  rVisibilityFilter
});
