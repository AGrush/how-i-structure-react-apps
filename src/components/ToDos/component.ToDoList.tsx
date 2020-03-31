
import React from 'react';
import { StyledUl } from './ToDos.styles';

interface TodoListProps {
  items: {id: string, text: string}[]
}

// destructuring props, could be props.items instead of ({ items })
const ToDoList: React.FC<TodoListProps> = ({ items }) => (
  <StyledUl>
    {items.map(todo => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </StyledUl>
);

export default ToDoList;