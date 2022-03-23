import { render } from '@testing-library/react';

import { InviteOwner } from './invite-owner';

import { DarkTheme } from '@v-thomas/thunder/theme';
import { ThemeProvider } from 'styled-components';

describe('InviteOwner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={DarkTheme}>
        <InviteOwner />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
