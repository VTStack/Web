import { render } from '@testing-library/react';

import { Input } from './input';

import { TestTheme } from '@v-thomas/shared/utils-test';
import { ThemeProvider } from 'styled-components';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={TestTheme}>
        <Input />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
