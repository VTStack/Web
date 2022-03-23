import { render } from '@testing-library/react';

import { Navbar } from './navbar';
import { DarkTheme } from '@v-thomas/thunder/theme';
import { ThemeProvider } from 'styled-components';

describe('Navbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={DarkTheme}>
        <Navbar title={'tetin'} />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
