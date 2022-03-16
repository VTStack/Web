export function MergeSort(array: number[]): number[] {
  const pointerIndex = Math.floor(array.length / 2);
  if (array.length <= 1) return array;
  const left = MergeSort(array.slice(0, pointerIndex));
  const right = MergeSort(array.slice(pointerIndex));

  const results = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (right[j] > left[i]) {
      results.push(left[i]);
      i++;
    } else {
      results.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    results.push(left[i]);
    i++;
  }
  while (j < right.length) {
    results.push(right[j]);
    j++;
  }

  return results;
}
