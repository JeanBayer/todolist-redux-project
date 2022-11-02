import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_SUCCESS,
} from "./actions";

const initialState = {
  isLoading: false,
  data: [],
};

export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return {
        ...state,
        data: state.data.concat(todo),
      };
    }
    case REMOVE_TODO: {
      const { id } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== id),
      };
    }
    case MARK_TODO_AS_COMPLETED: {
      const { updatedTodo } = payload;
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === updatedTodo.id) return updatedTodo;
          return todo;
        }),
      };
    }
    case LOAD_TODOS_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return { data: todos, isLoading: false };
    }
    case LOAD_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
