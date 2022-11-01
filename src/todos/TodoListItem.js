import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <button
          className="completed-button"
          onClick={() => {
            onCompletedPressed(todo.text);
          }}
        >
          {todo.isCompleted ? "Completed" : "Mark as Completed"}
        </button>
        <button
          className="remove-button"
          onClick={() => {
            onRemovePressed(todo.text);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
