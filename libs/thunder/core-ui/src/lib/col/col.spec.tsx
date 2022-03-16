import { render } from '@testing-library/react';

import { Col } from './col';

describe('Col', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Col />);
    expect(baseElement).toBeTruthy();
  });
});
