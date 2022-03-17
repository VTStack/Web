import { render } from '@testing-library/react';

import Modal from './modal';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '@v-thomas/shared/themes';

describe('Modal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={DarkTheme}>
        <Modal isOpen={true} />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should not render', () => {
    const { baseElement } = render(<Modal isOpen={false} />);
    expect(baseElement.firstChild?.firstChild).toBeFalsy();
  });
});
