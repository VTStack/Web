import { BubbleSort } from './bubble';

describe('Binary Search', () => {
  it('Should work', () => {
    expect(BubbleSort([6, 7, 8, 92, 432, 432, 4])).toStrictEqual([4, 6, 7, 8, 92, 432, 432]);
  });
});
