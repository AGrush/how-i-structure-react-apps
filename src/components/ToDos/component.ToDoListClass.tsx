
import React from 'react';
import { StyledUl } from './ToDos.styles';

interface TodoListProps {
  items: {id: string, text: string}[]
  onDeleteTodo: (id: string) => void;
}

// destructuring props, could be props.items instead of ({ items })
const ToDoListClass: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => (
  <StyledUl>
    {items.map(todo => (
      <li key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={onDeleteTodo.bind(null, todo.id)}>DELETE</button>
      </li>
    ))}
  </StyledUl>
);

export default ToDoListClass;