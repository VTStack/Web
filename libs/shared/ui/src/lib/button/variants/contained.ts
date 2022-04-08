import styled from 'styled-components';
import { CoreButton } from './core';
export const ContainedButton = styled(CoreButton)`
  color: black;

  background-color: ${({ theme }) => theme.color.primary};
  &:hover {
    background-color: ${({ theme }) => theme.color.primaryHover};
  }
`;
