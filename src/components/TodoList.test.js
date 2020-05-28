import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Store from "../context";
import TodoList from "./TodoList";

Enzyme.configure({ adapter: new Adapter() });

test("<TodoList /> #display", async () => {
  const todos = [];
  const dispatch = () => {};
  const list = mount(
    <Store.Provider value={{ state: { todos }, dispatch }}>
      <TodoList />
    </Store.Provider>
  );
});
