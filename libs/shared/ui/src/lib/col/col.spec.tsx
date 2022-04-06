import { render } from '@testing-library/react';

import { Row } from './col';

describe('Row', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Row />);
    expect(baseElement).toBeTruthy();
  });
});
