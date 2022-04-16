import { render } from '@testing-library/react';

import { Navbar } from './navbar';
import { ThunderDarkTheme } from '@v-thomas/thunder/theme';
import { ThemeProvider } from 'styled-components';

describe('Navbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={ThunderDarkTheme}>
        <Navbar title={'tetin'} />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
