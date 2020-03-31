
import React from 'react';
import { StyledContainer } from './ToDos.styles';
// As a child component it receives props as an argument. Here we are just destructuring it.

const StyledBox = ({ weCool }: any) => (
  <StyledContainer>
    STYLED BOX COMPONENT
    Are we cool? {weCool && 'You bet'}
  </StyledContainer>
);

export default StyledBox;