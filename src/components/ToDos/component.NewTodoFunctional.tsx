import React, { useRef } from 'react';

interface MyProps {
  onAddTodo: (todoText: string) => void;

}

const NewTodoFunctional: React.FC<MyProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  }

  return (
    <React.Fragment>
      <form onSubmit={todoSubmitHandler}>
        <label htmlFor="todo-text"></label>
        <input type="text" id="todo=text" placeholder="write stuff" ref={textInputRef}/>
      </form>
    </React.Fragment>
  )
    
    
}

export default NewTodoFunctional