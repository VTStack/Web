import { render } from '@testing-library/react';

import { InviteButton } from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InviteButton />);
    expect(baseElement).toBeTruthy();
  });
});
