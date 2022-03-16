import { render } from '@testing-library/react';

import { Navbar } from './navbar';
import { DarkTheme } from '@v-thomas/libs/thunder/themes';
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
