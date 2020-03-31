
import React from 'react';
import { StyledContainer } from './MyComponent.styles';
// As a child component it receives props as an argument. Here we are just destructuring it.

const MyComponent = ({ weCool }: any) => (
  <StyledContainer>
    Hello welcome dfdsto fsdfMyComponent. 
    Are we cool? {weCool && 'You bet'}
  </StyledContainer>
);

export default MyComponent;