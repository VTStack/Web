import { BinarySearch, BinarySearchUsingRecursion } from './binary';

describe('Binary Search', () => {
  it('Normal Binary Search', () => {
    expect(BinarySearch([0, 1, 2], 0)).toStrictEqual({ isThere: true, index: 0 });
    expect(BinarySearch([0, 1, 2, 3, 4, 5, 6, 7], 7)).toStrictEqual({ isThere: true, index: 7 });
    expect(BinarySearch([0, 1, 2], 1)).toStrictEqual({ isThere: true, index: 1 });
    expect(BinarySearch([0, 1, 2], 4)).toStrictEqual({ isThere: false, index: null });
    expect(BinarySearch([0, 1, 2], -1)).toStrictEqual({ isThere: false, index: null });
  });
  it('Binary Search with Recursion', () => {
    expect(BinarySearchUsingRecursion([0, 1, 2], 0)).toBe(true);
    expect(BinarySearchUsingRecursion([0, 1, 2, 3, 4, 5, 6, 7], 7)).toBe(true);
    expect(BinarySearchUsingRecursion([0, 1, 2], 1)).toBe(true);
    expect(BinarySearchUsingRecursion([0, 1, 2], 4)).toBe(false);
    expect(BinarySearchUsingRecursion([0, 1, 2], -1)).toBe(false);
  });
});
