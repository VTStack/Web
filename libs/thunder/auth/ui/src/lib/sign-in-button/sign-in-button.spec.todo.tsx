import { render } from '@testing-library/react';

import { SignInButton } from './sign-in-button';

describe('AuthModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignInButton />);
    expect(baseElement).toBeTruthy();
  });
});
