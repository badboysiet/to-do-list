export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      // return current state if empty
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        todos: [...state.todos, { name: action.payload , status: 0}]
      };
    case "COMPLETE":
     let status =  state.todos[action.payload].status == 1 ? 0 : 1 ;
      return {
        ...state,
        todos: [ ...state.todos.slice(0, action.payload),
          {
            ...state.todos[action.payload],
            ['status']: status
          },
          ...state.todos.slice(action.payload + 1)]
      };
    default:
      return state;
  }
}
