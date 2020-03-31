import React, { Component } from 'react' 
// I try to tree-shake where I can, this will help our apps be lighter. If not, by just accessing React.Component, we import every
// item associated to the React Object
import ChildComponent from './component.StyledContainer' 
// this is one of the only times I use relative paths to import component. More of this later.


// interface MyProps {
//   weCool: boolean;
// }

class MyComponent extends Component<any, any> {
  state = {
    weCool: true
  }

  render() {
    const { weCool } = this.state 
      return (
        <ChildComponent weCool={weCool} />
      )
  };
};
export default MyComponent;