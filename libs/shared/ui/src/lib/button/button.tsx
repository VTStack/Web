import { ReactNode } from 'react';
import { ContainedButton } from './variants/contained';
import { OutlinedButton } from './variants/outlined';
import { TextButton } from './variants/text';
import { HoverOutlinedButton } from './variants/hover-outlined';

export type SharedButtonVariants = 'contained' | 'outlined' | 'text' | 'hover-outlined';

export interface Props {
  shadow?: `${string}px`;
  size?: string;
  variant?: SharedButtonVariants;
  onClick?: (e: Record<string, unknown>) => void;
  children: ReactNode;
  [key: string]: unknown;
  id?: any;
  disabled?: boolean;
}

export function Button({ variant = 'contained', children, ...props }: Props) {
  switch (variant) {
    case 'text':
      return <TextButton {...props}>{children}</TextButton>;
    case 'contained':
      return <ContainedButton {...props}>{children}</ContainedButton>;
    case 'hover-outlined':
      return <HoverOutlinedButton {...props}>{children}</HoverOutlinedButton>;
    case 'outlined':
      return <OutlinedButton {...props}>{children}</OutlinedButton>;
    default:
      return <ContainedButton {...props}>{children}</ContainedButton>;
  }
}
