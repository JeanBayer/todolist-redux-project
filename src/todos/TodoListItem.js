import React from "react";
import styled from "styled-components";

const TodoListItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
`;

const ButtonComplete = styled(Button)`
  background-color: #22ee22;
`;

const ButtonRemove = styled(Button)`
  background-color: #ee2222;
  margin-left: 8px;
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  return (
    <TodoListItemContainer>
      <h3>{todo.text}</h3>
      <ButtonContainer>
        {todo.isCompleted ? null : (
          <ButtonComplete
            onClick={() => {
              onCompletedPressed(todo.id);
            }}
          >
            Marked as Completed
          </ButtonComplete>
        )}
        <ButtonRemove
          onClick={() => {
            onRemovePressed(todo.id);
          }}
        >
          Remove
        </ButtonRemove>
      </ButtonContainer>
    </TodoListItemContainer>
  );
};

export default TodoListItem;
