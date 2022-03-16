import { Stack } from './stack';

describe('Stack', () => {
  it('should work', () => {
    const queue = new Stack([1]);
    expect(queue.peek).toBe(1);
  });
});
