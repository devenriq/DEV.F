// funtion constructora

const CreateAnimal = function (name){
  this.name = name;
}

const jirafa = new CreateAnimal('Jirafa')

console.log(jirafa)

// class notation

class CreateAnimal1 {
  constructor(name){
    this.name = name;
  }
}

const iguana = new CreateAnimal1('Iguana');
console.log(iguana)