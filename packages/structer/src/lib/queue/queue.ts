export class Queue {
  #array: unknown[] = [];

  constructor(array: unknown[] = []) {
    this.#array = array;
  }

  push(value: unknown) {
    this.#array.unshift(value);
    return this.#array;
  }
  pop() {
    return this.#array.pop();
  }

  get peek() {
    return this.#array[this.#array.length - 1];
  }

  get isEmpty() {
    return !this.#array.length;
  }
}
