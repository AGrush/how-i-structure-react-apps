import styled from 'styled-components';
// we create the style for the element we are trying to reach
import { colors } from '../../utils/styles/helpers'
const { turqouise, shadows: { light } } = colors;

const StyledContainer = styled.div`
  width: 100%;
  background-color: ${turqouise};
  box-shadow: ${light};
`;

export { StyledContainer };