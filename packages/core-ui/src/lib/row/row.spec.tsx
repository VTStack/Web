import { render } from '@testing-library/react';

import { Row, RowInputs } from './row';

export function RowTest(props: RowInputs) {
  return <Row {...props} />;
}

describe('Row', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RowTest />);
    expect(baseElement).toBeTruthy();
  });
});
