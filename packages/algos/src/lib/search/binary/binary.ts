export function BinarySearchUsingRecursion(array: number[], number: number): boolean {
  const low = 0;
  const high = array.length - 1;
  const medium = Math.floor(high / 2);

  if (array.length === 0) return false;
  if (array[medium] === number) return true;
  if (array[medium] > number) return BinarySearchUsingRecursion(array.splice(low, medium), number);
  if (array[medium] < number) return BinarySearchUsingRecursion(array.splice(medium + 1, high), number);

  return false;
}

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
