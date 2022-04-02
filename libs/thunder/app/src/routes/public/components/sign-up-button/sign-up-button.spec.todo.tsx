import { render } from '@testing-library/react';

import { SignUpButton } from './sign-up-button';

describe('AuthModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignUpButton />);
    expect(baseElement).toBeTruthy();
  });
});
