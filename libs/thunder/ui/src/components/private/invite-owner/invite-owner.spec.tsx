import { render } from '@testing-library/react';

import { InviteOwner } from './invite-owner';

import { TestTheme } from '@v-thomas/shared/utils-test';
import { ThemeProvider } from 'styled-components';

describe('InviteOwner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={TestTheme}>
        <InviteOwner />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
