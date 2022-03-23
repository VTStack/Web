import { render } from '@testing-library/react';
import { DarkTheme } from '@v-thomas/thunder/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Text } from './text';

describe('Text', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={DarkTheme}>
        <Text>hello</Text>
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
