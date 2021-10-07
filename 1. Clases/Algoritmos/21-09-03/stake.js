// STACK - PILAS

class Stack {
  constructor() {
    this.count = 0
    this.storage = {}
  }

  push (item) {
    this.count++
    this.storage[this.count] = item;
    return this.count
  }

  pop () {
    const deletedItem = this.storage[this.count]
    delete this.storage[this.count]
    this.count--
    return deletedItem
  }

  peek (){
    return this.storage[this.count]
  }

  size(){
    return this.count;
  }
}

const pila = new Stack()
console.log(pila.push('Rocio'))
console.log(pila.push('fw'))
console.log(pila.push("faewfa"))


// console.log(pila.pop())

console.log(pila.peek())

console.log(pila.size())

// METODO PEEK
// METODO SIZE