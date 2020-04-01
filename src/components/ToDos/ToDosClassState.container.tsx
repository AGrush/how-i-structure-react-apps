import React, { Component } from 'react' 
// I try to tree-shake where I can, this will help our apps be lighter. If not, by just accessing React.Component, we import every
// item associated to the React Object
import ChildComponent from './component.StyledBox' 
import ToDoListClass from './component.ToDoListClass'
import NewTodoClass from './component.NewTodoClass';

// interface MyProps {
//   weCool: boolean;
// }

class StyledBox extends Component<any, any> {
  state = {
    weCool: true,
    todos: [
      {
        id: 't1', 
        text: 'Finish the course'
      }
    ]
  }

  todoAddHandler = (text: string) => {
    const { todos } = this.state;
    let tempArr = [...todos];
    tempArr.push({id: Math.random().toString(), text: text});
    this.setState({
      todos: tempArr
    });
  }

  onDeleteTodo = (id: string) => {
    this.setState(this.state.todos.filter(todo => (todo.id !== id)))
  }

  render() {
    const { weCool, todos } = this.state;
      return (
        <React.Fragment>
          <ChildComponent weCool={weCool} />
          <NewTodoClass onAddTodo={this.todoAddHandler}/>
          <ToDoListClass items={todos} onDeleteTodo={this.onDeleteTodo}/>
        </React.Fragment>
      )
  };
};

export default StyledBox;