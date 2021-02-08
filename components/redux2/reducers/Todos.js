const todos = (state = [], action) => {
  let result;
  switch (action.type) {
    case "ADD_TODO":
      result = [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
      console.log("Todo.js -> ADD_TODO", result);
      return result;
    case "TOGGLE_TODO":
      result = state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
      console.log("Todo.js -> TOGGLE_TODO", result);
      return result;
    default:
      console.log("Todo.js -> default");
      return state;
  }
};
export default todos;
