let nextTodoId = 0;

export const addTodo = text => {
  const result = {
    type: "ADD_TODO",
    id: nextTodoId++,
    text
  };
  console.log("actions -> addTodo -> ", result);
  return result;
};

export const setVisibilityFilter = filter => {
  const result = {
    type: "SET_VISIBILITY_FILTER",
    filter
  };
  console.log("actions -> addTodo -> ", result);
  return result;
};

export const toggleTodo = id => {
  const result = {
    type: "TOGGLE_TODO",
    id
  };
  console.log("actions -> toggleTodo -> ", result);
  return result;
};

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
