import { render } from '@testing-library/react';

import { SignInButton } from './sign-in-modal';

describe('SignInButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignInButton />);
    expect(baseElement).toBeTruthy();
  });
});
