// una función que reciba un objeto y un string… El string va a ser el nombre de una propiedad, y  esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes la función debe retornar true o false

// var Car = {
//   wheels: 4,
//   company: 'honda',
//   name: 'civic',
//   year: 2016
// }

// function funcion(obj, prop){
//   if(obj[prop].hasOwnProperty(prop) === true){
//     return true;
//   } else {
//     return false;
//   }
// };

// Create an object that will be filled only by a function inside of it, and not from someone outside of it's function.. example:

// let myObject = {
//     myFunction: function (){

//     } // This function is supposed to fill this object
// }

// myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be filled from outside..

// It supposed to be filled using it's own function

// Add any type of element on the object.. arrays, objects, int, strings, etc


// Hacer una función para que reciba ese arreglo de objetos y que retorne la suma de "a" y "b" de cada objeto y concatenarlo al String "name" para que devuelva algo así:

var simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, {a:23, b:56, name: "Object 140"}, {a: 32, b:75, name: "T57 Heavy"}];

function mezcla (){
  return `${simpleExercise[0][0]+simpleExercise[0][1]} ${simpleExercise[0][2]} ${simpleExercise[1][0]+simpleExercise[1][1]} ${simpleExercise[1][2]} ${simpleExercise[2][0]+simpleExercise[2][1]} ${simpleExercise[2][2]}`
}

console.log(mezcla())
// ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]