import * as actions from "./index";

describe("todo actions", () => {
  it("addTodo should create ADD_TODO action", () => {
    expect(action.addTodo("Use Redux")).toEqual({
      type: "ADD_TODO",
      id: 0,
      text: "Use Redux"
    });
  });
});
