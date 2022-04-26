import styled, { css } from 'styled-components';
import { FC, ReactNode } from 'react';

import { Link as NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export interface LinkProps {
  to?: string;
  onClick?: () => void;
  external?: boolean;
  line?: boolean;
  icon?: boolean;
  zIndexOver?: boolean;
  children: ReactNode;
}

const StyledLink = styled(NavLink)<LinkProps>`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  position: relative;
  z-index: ${({ zIndexOver }) => (zIndexOver ? '9999 !important' : '999 !important')};
  width: 100%;

  ${({ line = false, theme }) =>
    line &&
    css`
      --padding: -3px;
      &::after {
        content: '';
        height: 5px;
        position: absolute;
        bottom: 0;
        right: var(--padding);
        background-color: ${theme.color.accent};
        transition: height 0.5s;
        z-index: -1 !important;
        width: calc(100% - var(--padding) * 2) !important;
      }
      &:hover::after {
        height: 100%;
        transition: height 0.5s;
      }
    `}
  ${({ icon }) =>
    icon
      ? css`
          &::after {
            width: calc(100% - 24px + 5px);
            right: -5px;
          }
        `
      : css`
          &::after {
            width: 100%;
          }
        `}
`;

const StyledA = styled(motion.a)<LinkProps>`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  position: relative;
  z-index: ${({ zIndexOver = false }) => (zIndexOver ? '9999 !important' : '999 !important')};
  width: 100%;

  ${({ line = false, theme }) =>
    line &&
    css`
      --padding: -3px;
      &::after {
        content: '';
        height: 5px;
        position: absolute;
        bottom: 0;
        right: var(--padding);
        background-color: ${theme.color.accent};
        transition: height 0.5s;
        z-index: -1 !important;
        width: calc(100% - var(--padding) * 2) !important;
      }
      &:hover::after {
        height: 100%;
        transition: height 0.5s;
      }
    `}
  ${({ icon }) =>
    icon
      ? css`
          &::after {
            width: calc(100% - 24px + 5px);
            right: -5px;
          }
        `
      : css`
          &::after {
            width: 100%;
          }
        `}
`;
interface RowProps {
  icon: boolean;
}
const CustomRow = styled.span<RowProps>`
  display: inline;
  width: auto !important;
  & > .material-symbols-outlined {
    color: transparent !important;
    transition: color 0.25s ease;
  }

  &:hover > .material-symbols-outlined {
    color: #9aa09a !important;
    transition: color 0.25s ease 0.25s;
  }

  ${({ icon }) =>
    icon &&
    css`
      & > a {
        position: relative;
        transition: left 0.25s ease 0.3s;
        left: 0px;
        &:hover {
          left: 28px;
          transition: left 0.25s ease;
        }
      }
    `}
`;

const Icon = styled.i`
  position: absolute;
`;

export const Link = ({ children, external = false, to = '#', icon = false, ...props }: LinkProps) => {
  return !external ? (
    <CustomRow icon={icon}>
      {icon && <Icon className="material-symbols-outlined">link</Icon>}
      <StyledLink {...props} to={to}>
        {children}
      </StyledLink>
    </CustomRow>
  ) : (
    <CustomRow icon={icon}>
      {icon && <Icon className="material-symbols-outlined">link</Icon>}
      <StyledA href={to} {...props} target="_blank">
        {children}
      </StyledA>
    </CustomRow>
  );
};
