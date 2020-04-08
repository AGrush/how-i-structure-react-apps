
import React from 'react';
import { StyledUl } from './ToDos.styles';

interface TodoListProps {
  items: {id: string, text: string}[]
  onDeleteTodo: (id: string) => void;
}

// bin passes (this, first parameter) as arguments
const ToDoListFunctional: React.FC<TodoListProps> = props => (
  <StyledUl>
    {props.items.map(todo => (
      <li key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
      </li>
    ))}
  </StyledUl>
);

export default ToDoListFunctional;