class Queue {
  constructor() {
    this.queue = [];
  }

  get size() {
    return this.queue.length;
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }

  front() {
    return this.queue[0];
  }

  // ultimo elemento
  back() {
    return this.queue[this.queue.length - 1]
  }
  // retorna la queue
  print() {
    return this.queue;
  }
  // valida si esta vacia o no
  isEmpty() {
    if(this.queue !== undefined){
      return true
    } else {
      return false
    }
  }
}

const queue1 = new Queue()
queue1.enqueue('hola');
queue1.enqueue('como');
queue1.enqueue('estas');
queue1.enqueue('esta');
queue1.enqueue('noche');

console.log(queue1.back())
console.log(queue1.print())
console.log(queue1.isEmpty())
