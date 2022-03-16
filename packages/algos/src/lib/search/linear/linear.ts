export function LinearSearch(array: number[], number: number) {
  const returnArray = array.filter(v => v === number);
  return returnArray.length === 1 ? returnArray[0] : returnArray;
}
