import styled from 'styled-components';
import { CoreButton } from './core';

const colorTypes = {
  error: 'rgba(200, 50, 50, 1)',
  warn: 'rgb(255,255,0)'
};

export const OutlinedButton = styled(CoreButton)`
  --color: ${({ theme, color }: { color: 'error' | 'warn'; theme: { color: { secondary: string } } }) => {
    if (color) {
      return colorTypes[color];
    }

    return theme.color.secondary;
  }};

  color: var(--color);
  border: 1px solid var(--color);
  border: 1px solid var(--color);

  &:hover {
    background-color: ${({ theme }) => theme.background.secondary};
  }
`;
