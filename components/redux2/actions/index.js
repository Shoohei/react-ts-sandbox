let nextTodoId = 0;

export const addTodo = text => {
  const result = {
    type: "ADD_TODO",
    id: nextTodoId++,
    text
  };
  console.log("actions.js -> addTodo -> ", result);
  return result;
};

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER"
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
