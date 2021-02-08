const rTodos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("Todo.js -> ADD_TODO");
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      console.log("Todo.js -> TOGGLE_TODO");
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      console.log("Todo.js -> default");
      return state;
  }
};
export default rTodos;
