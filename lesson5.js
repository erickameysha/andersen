class BaseStorage {
  constructor(maxSize = 10) {
    if (!Number.isInteger(maxSize) || maxSize <= 0) {
      throw new Error("Invalide maxSize");
    }
    this.store = [];
    this.maxSize = maxSize;
  }
  isEmpty() {
    return this.store.length === 0;
  }
  toArray() {
    return [...this.store];
  }
}
const testSize = new BaseStorage();
console.log(testSize.toArray());

class Stack extends BaseStorage {
  constructor(maxSize) {
    super(maxSize);
  }
  push(value) {
    if (this.store.length > this.maxSize) {
      throw new Error("Maximum size is full");
    }
    this.store.push(value);
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Array is empty");
    }
    return this.store.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.store[this.store.length - 1];
  }
  static fromIterable(value) {
    console.log(value[Symbol.iterator]);

    if (value === null || !Array.isArray(value)) {
      throw new Error("Arguments is not itereble");
    }
    const items = [...value];
    const stack = new Stack(items.length);
    for (const key in items) {
      stack.push(items[key]);
    }
    return stack;
  }
}

const el = new Stack(3);
el.push(1);
el.push(2);
console.log(el.peek());

// // el.push(3);
// // el.push(4);
console.log(el);

// console.log(el.pop());
// console.log(el);
 console.log(el.isEmpty());
const iterArray = Stack.fromIterable([1, 3, 4, 5, 6]);
const readyStack = new Stack()
console.log(iterArray);

console.log(readyStack);
console.log(readyStack.toArray());

class Queue extends BaseStorage {
  constructor(maxSize) {
    super(maxSize);
  }
  push(value) {
    if (this.store.length > this.maxSize) {
      throw new Error("Maximum size is full");
    }
    this.store.push(value);
  }
  shift() {
    if (this.isEmpty()) {
      throw new Error("Array is empty");
    }
    return this.store.shift();
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.store[0];
  }
    static fromIterable(value) {
    console.log(value[Symbol.iterator]);

    if (value === null || !Array.isArray(value)) {
      throw new Error("Arguments is not itereble");
    }
    const items = [...value];
    const stack = new Queue(items.length);
    for (const key in items) {
      stack.push(items[key]);
    }
    return stack;
  }
}
const que = new Queue(3)
que.push(1)
que.push(2)
que.peek()
console.log(que);
const readyQueue = Queue.fromIterable([1,2,3,4]);
console.log(readyQueue);
console.log(readyQueue.shift());
console.log(readyQueue.toArray());
