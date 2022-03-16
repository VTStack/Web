import styled from 'styled-components';
import { CoreButton } from './core';

const colorTypes = {
  error: 'rgba(200, 50, 50, 1)',
  warn: 'rgb(255,255,0)'
};

export const OutlinedButton = styled(CoreButton)`
  position: relative;

  --color: ${({ theme, color }: { color: 'error' | 'warn'; theme: any }) => {
    if (color) {
      return colorTypes[color];
    }

    return theme.color.secondary;
  }};

  color: var(--color);

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    transition: all 0.4s ease-in-out;
    opacity: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
    border-bottom: 2px solid var(--color);
    border-right: 2px solid var(--color);
  }

  &::before {
    top: 0;
    left: 0;
    border-top: 2px solid var(--color);
    border-left: 2px solid var(--color);
  }

  &:hover::after,
  &:hover::before {
    width: calc(100% - 2px);
    height: calc(100% - 2px);

    /* width: 15px;
    height: 15px; */

    transition: all 0.4s ease-in-out, opacity 0.2s border-radius 0s 0.4s;
    opacity: 1;
  }
`;
