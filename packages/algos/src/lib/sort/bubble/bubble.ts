export function BubbleSort(array: number[]) {
  let sorted = true;
  do {
    sorted = true;
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      const next = array[i + 1];
      if (value > next) {
        array[i] = next;
        array[i + 1] = value;
        sorted = false;
      }
    }
  } while (!sorted);
  return array;
}
