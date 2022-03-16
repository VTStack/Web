import { render } from '@testing-library/react';

import { InvitePage } from './invite';

describe('Invite', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InvitePage />);
    expect(baseElement).toBeTruthy();
  });
});
