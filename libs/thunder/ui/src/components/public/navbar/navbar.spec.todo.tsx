import { render } from '@testing-library/react';

import { PublicNavbar } from './navbar';

describe('Navbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PublicNavbar />);
    expect(baseElement).toBeTruthy();
  });
});
