// Hacer una función para que reciba ese arreglo de objetos y que retorne la suma de "a" y "b" de cada objeto y concatenarlo al String "name" para que devuelva algo así:

var simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, {a:23, b:56, name: "Object 140"}, {a: 32, b:75, name: "T57 Heavy"}];

function mezcla (){
  return `${simpleExercise[0][0]+simpleExercise[0][1]} ${simpleExercise[0][2]} ${simpleExercise[1][0]+simpleExercise[1][1]} ${simpleExercise[1][2]} ${simpleExercise[2][0]+simpleExercise[2][1]} ${simpleExercise[2][2]}`
}

console.log(mezcla())
// ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]