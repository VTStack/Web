import { render } from '@testing-library/react';

import UserAvatar from './user-avatar';

describe('UserAvatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserAvatar />);
    expect(baseElement).toBeTruthy();
  });
});
