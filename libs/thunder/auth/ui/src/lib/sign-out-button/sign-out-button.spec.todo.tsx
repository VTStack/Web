import { render } from '@testing-library/react';

import SignOutButton from './sign-out-button';

describe('SignOutButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignOutButton />);
    expect(baseElement).toBeTruthy();
  });
});
