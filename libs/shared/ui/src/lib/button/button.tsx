import { ReactNode } from 'react';
import { ContainedButton } from './variants/contained';
import { OutlinedButton } from './variants/outlined';
import { TextButton } from './variants/text';
import { AlwaysOutlinedButton } from './variants/always-outlined';
export interface Props {
  shadow?: `${string}px`;
  size?: string;
  variant?: 'outlined' | 'text' | 'contained' | 'always-outlined';
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
    case 'outlined':
      return <OutlinedButton {...props}>{children}</OutlinedButton>;
    case 'always-outlined':
      return <AlwaysOutlinedButton {...props}>{children}</AlwaysOutlinedButton>;
    default:
      return <ContainedButton {...props}>{children}</ContainedButton>;
  }
}
