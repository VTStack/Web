import { render } from '@testing-library/react';
import { Title, TitleProps } from './title';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '@v-thomas/test-theme';
import { FC } from 'react';

export const TitleTest: FC<TitleProps> = props => {
  return <Title {...props}>{props.children}</Title>;
};

describe('Title', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={DarkTheme}>
        <TitleTest>hello</TitleTest>
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
