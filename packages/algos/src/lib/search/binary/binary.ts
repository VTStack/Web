export function BinarySearch(array: number[], number: number): { isThere: boolean; index: null | number } {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const medium = Math.round((high + low) / 2);
    if (array[medium] === number) return { isThere: true, index: medium };
    else if (array[medium] < number) low = medium + 1;
    else if (array[medium] > number) high = medium - 1;
  }
  return { isThere: false, index: null };
}
