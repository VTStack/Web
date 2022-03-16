import { render } from '@testing-library/react';
import { TitleTest } from './title';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '@v-thomas/libs/thunder/themes';

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
