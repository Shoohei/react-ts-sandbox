import { VisibilityFilters } from "../actions";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      console.log("VisibilityFilter.js -> SET_VISIBILITY_FILTER");
      return action.filter;
    default:
      console.log("VisibilityFilter.js -> default", state);
      return state;
  }
};

export default visibilityFilter;
