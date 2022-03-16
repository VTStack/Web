import { Queue } from './queue';

describe('queue', () => {
  it('should work', () => {
    const queue = new Queue([1]);
    expect(queue.peek).toBe(1);
  });
});
