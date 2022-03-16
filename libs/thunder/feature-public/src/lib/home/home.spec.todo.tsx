import { render } from '@testing-library/react';
import { DarkTheme } from '@v-thomas/libs/thunder/themes';
import { ThemeProvider } from 'styled-components';

import { HomePage } from './home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={DarkTheme}>
        <HomePage />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
