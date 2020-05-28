import reducer from "../reducer";

test("adds todo", async () => {
  const state =  { todos: [{name : "b", status: 0}] }
  const newState = reducer(state, { type: "ADD_TODO", payload: "b" });
  expect(JSON.stringify(state));
  expect(JSON.stringify(newState));
});
