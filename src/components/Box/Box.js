import {
  color,
  space,
  layout,
  shadow,
  border,
  flexbox,
  grid,
  position,
  typography,
} from 'styled-system';
import styled from 'styled-components';

const Box = styled('div')(
  color,
  space,
  layout,
  shadow,
  border,
  flexbox,
  grid,
  position,
  typography
);

export default Box;
