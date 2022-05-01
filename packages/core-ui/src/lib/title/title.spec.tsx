import { render } from '@testing-library/react';
import { Title, TitleProps } from './title';
import { ThemeProvider } from 'styled-components';
import { TestTheme } from '@v-thomas/shared/utils-test';
import { FC } from 'react';

export const TitleTest: FC<TitleProps> = props => {
  return <Title {...props}>{props.children}</Title>;
};

describe('Title', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={TestTheme}>
        <TitleTest>hello</TitleTest>
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
