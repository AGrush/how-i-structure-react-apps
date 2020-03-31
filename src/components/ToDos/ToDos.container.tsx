import React, { Component } from 'react' 
// I try to tree-shake where I can, this will help our apps be lighter. If not, by just accessing React.Component, we import every
// item associated to the React Object
import ChildComponent from './component.StyledBox' 
import ToDoList from './component.ToDoList'
import NewTodo from './component.NewTodo';

// interface MyProps {
//   weCool: boolean;
// }

class StyledBox extends Component<any, any> {
  state = {
    weCool: true
  }

  render() {
    const todos = [{id: 't1', text: 'Finish the course'}];
    const { weCool } = this.state;
      return (
        <React.Fragment>
          <ChildComponent weCool={weCool} />
          <ToDoList items={todos} />
        </React.Fragment>
        
      )
  };
};
export default StyledBox;