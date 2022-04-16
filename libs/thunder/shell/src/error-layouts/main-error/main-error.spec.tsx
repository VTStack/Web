import { render } from '@testing-library/react';

import MainError from './main-error';
import { ThunderDarkTheme } from '@v-thomas/thunder/theme';
import { ThemeProvider } from 'styled-components';

describe('MainError', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={ThunderDarkTheme}>
        <MainError />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
