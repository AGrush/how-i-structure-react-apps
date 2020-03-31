import styled from 'styled-components';
// we create the style for the element we are trying to reach
import { colors } from '../../utils/styles/helpers'
const { shadows: { light } } = colors;

const StyledContainer = styled.div`
  width: 80%;
  background-color: red;
  box-shadow: ${light};
`;

export { StyledContainer };