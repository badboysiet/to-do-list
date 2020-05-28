import React, { useContext } from "react";
import Store from "../context";
import { TodoHeader } from "./TodoHeader";

export default function TodoList() {
  const { state, dispatch } = useContext(Store);

  console.log('syteat', state);
  let header =
    state.todos.length === 0 ? (
      <h4>No Task Found</h4>
    ) : (
      <TodoHeader>
        <span className="float-right">{`There are ${state.todos.length} todos.`}</span>
      </TodoHeader>
    );
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
            {header}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {state.todos.map((task, index) => (
                <li style={ task.status == 1 ? {textDecoration: 'line-through' } : {textDecoration: 'none'} }
                 onClick={() => dispatch({ type: "COMPLETE", payload: index })}
                 key={index} 
                 className="list-group-item">
                  {task.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
