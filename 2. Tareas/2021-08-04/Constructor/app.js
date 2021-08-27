// Classes were added in last version of JavaScript (called ECMAScript 6 or just ES6). It's something similar to how classes work in other languages (Java, Ruby, etc). This is a very important concept in programming, so sooner or later you'll want to learn about it. (And I highly recommend you to do it before the Java modules).


// Create a  Car class:

// 1) Add properties like model, so you can create a "Ford" with model "Mondeo". Add the properties you like in the constructor method.
// 2) Add a method to accelerate
// 3) Add a method to stop
// 4) Add a method turn directions
// 5) Add a method call status to display the information of the car (properties, methods, etc)

// Instance at least 2.

class CreateCar {
  constructor(brand, model){
    this.model = model;
    this.brand = brand;
  }

  colors(color){
    this.color = color
  }

  acelerate(km){
    this.km = km
  }

  stop(sto){
    this.sto = sto
  }

  directions(direction){
    this.direction = direction
  }

  console(){
    console.log(`Hi! my brand is ${this.brand}. My model is ${this.model}`)
  }
}

const ford = new CreateCar('Ford', 'Aguila');
ford.console()

