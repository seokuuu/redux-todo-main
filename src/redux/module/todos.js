// init
const init = {
  todos: [],
  todo: {},
};

// action
const ADD_TODO = "ADD_TODO";
const CHECK_TODO = "CHECK_TODO";
const DEL_TODO = "DEL_TODO";
const UPDATE_TODO = "UPDATE_TODO";

// action creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const checkTodo = (payload) => {
  return { type: CHECK_TODO, payload };
};

export const delTodo = (payload) => {
  return { type: DEL_TODO, payload };
};

export const updateTodo = (payload) => {
  return { type: UPDATE_TODO, payload };
};

// reducer
const todos = (state = init, action) => {
  console.log("@state", state);
  switch (action.type) {
    case ADD_TODO: //
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos[state.todos.length - 1]?.id + 1 || 0,
            isDone: false,
            ...action.payload,
          },
        ],
      };
    case CHECK_TODO:
      const check = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );

      return { ...state, todos: check };
    case DEL_TODO:
      const del = state.todos.filter((todo) =>
        todo.id === action.payload ? false : true
      );

      return { ...state, todos: del };
    case UPDATE_TODO:
      const todo = state.todos.find((todo) => todo.id === action.payload);

      return { ...state, todo };
    default:
      return state;
  }
};

export default todos;
