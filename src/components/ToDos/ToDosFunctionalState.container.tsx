import React, { useState } from 'react' 
// I try to tree-shake where I can, this will help our apps be lighter. If not, by just accessing React.Component, we import every
// item associated to the React Object
import NewTodoFunctional from './component.NewTodoFunctional';
import ToDoListFunctional from './component.ToDoListFunctional';

interface Todo {
  id: string; 
  text: string
}

const StyledBox: React.FC = () => {
  //array destructuring of the two values useState gives us (latest state snapshot for this render cycle, function to update that state). We pass an empty array into useState initially
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      //filter loops over array and returns everything that equals true
      return prevTodos.filter(todo => (todo.id !== todoId))
    });
  }

  // render() {
  //   const { weCool, todos } = this.state;
      return (
        <React.Fragment>
          <NewTodoFunctional onAddTodo={todoAddHandler}/>
          <ToDoListFunctional items={todos} onDeleteTodo={todoDeleteHandler}/>
        </React.Fragment>
      )
  // };
};

export default StyledBox;