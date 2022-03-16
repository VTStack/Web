import { render } from '@testing-library/react';

import { GroupHomePage } from './home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GroupHomePage />);
    expect(baseElement).toBeTruthy();
  });
});
