import {
  loadTodosFailure,
  loadTodosInProgress,
  loadTodosSuccess,
  createTodo,
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch("http://localhost:8080/todos-delay");
    const todos = await response.json();
    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
  }
};

export const createTodoRequest = (text) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (error) {
    console.error(error);
  }
};
