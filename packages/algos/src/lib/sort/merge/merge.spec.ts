import { MergeSort } from '.';

describe('Merge sort', () => {
  it('Should work', () => {
    expect(MergeSort([6, 7, 8, 92, 432, 432, 4])).toStrictEqual([4, 6, 7, 8, 92, 432, 432]);
  });
});
