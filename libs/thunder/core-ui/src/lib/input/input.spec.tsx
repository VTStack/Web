import { render } from '@testing-library/react';

import { Input } from './input';

import { DarkTheme } from '@v-thomas/libs/thunder/themes';
import { ThemeProvider } from 'styled-components';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={DarkTheme}>
        <Input />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
