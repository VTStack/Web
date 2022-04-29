import { ReactNode } from 'react';
import { ContainedButton } from './variants/contained';
import { OutlinedButton } from './variants/outlined';
import { TextButton } from './variants/text';
import { HoverOutlinedButton } from './variants/hover-outlined';
import { NoStyleButton } from './variants/no-style';

export type SharedButtonVariants = 'contained' | 'outlined' | 'text' | 'hover-outlined';

export interface Props {
  shadow?: `${string}px`;
  size?: string;
  variant?: SharedButtonVariants;
  onClick?: (e: Record<string, unknown>) => void;
  children: ReactNode;
  [key: string]: unknown;
  id?: string | number;
  disabled?: boolean;
  type: 'reset' | 'submit' | 'button';
  noStyle?: boolean;
}

export function Button({ variant = 'contained', children, noStyle = false, ...props }: Props) {
  const type = props.type || 'button';

  props = { ...props, type };

  if (noStyle) return <NoStyleButton {...props}>{children}</NoStyleButton>;
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
