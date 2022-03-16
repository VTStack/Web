import styled from 'styled-components';
import { CoreButton } from './core';

export const TextButton = styled(CoreButton)`
  &:hover {
    background-color: ${({ theme }) => {
      return theme.color.secondaryHover;
    }};
  }
`;
