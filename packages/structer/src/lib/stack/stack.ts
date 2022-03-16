export class Stack {
  #array: unknown[];
  constructor(array: unknown[] = []) {
    this.#array = array;
  }

  push(value: unknown) {
    this.#array.push(value);
    return this.#array;
  }

  pop() {
    return this.#array.pop();
  }

  get peek() {
    return this.#array[this.#array.length - 1];
  }

  get isEmpty() {
    return this.#array.length === 0;
  }
}
