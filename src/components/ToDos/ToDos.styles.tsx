import styled from 'styled-components';
// we create the style for the element we are trying to reach
import { colors } from '../../utils/styles/helpers'
const { turqouise, shadows: { light } } = colors;

const StyledContainer = styled.div`
  width: 50%;
  padding: 20px;
  background-color: ${turqouise};
  box-shadow: ${light};
`;

const StyledUl = styled.ul`
  width: 60%;
  padding: 20px;
  background-color: orange;
`;

export { StyledContainer, StyledUl};