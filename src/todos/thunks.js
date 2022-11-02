import {
  loadTodosFailure,
  loadTodosInProgress,
  loadTodosSuccess,
  createTodo,
  removeTodo,
  markTodoAsCompleted,
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

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo.id));
  } catch (error) {
    console.error(error);
  }
};

export const completeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      {
        method: "POST",
      }
    );
    const updatedTodo = await response.json();
    dispatch(markTodoAsCompleted(updatedTodo));
  } catch (error) {}
};
