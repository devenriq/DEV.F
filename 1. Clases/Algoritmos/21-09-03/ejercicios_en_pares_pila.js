// 1.- Hacer una función que reciba como parámetros una pila, y un número.
// La función debe retornar tantos elementos como diga el número (segundo parámetro).
// Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'],4)
// Salida: ['Manzana','Cebolla','Apio','Naranja']

// function retornar(arr, num) {
//   let newArr = [];
//   for (let i = 0; i < num; i++) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(
//   retornar(
//     ["Manzana", "Cebolla", "Apio", "Naranja", "Papaya", "Sandía", "Melón"],
//     6
//   )
// );

// 2.- Escribe una función "reemplazar" que tenga como parámetros una pila de elementos de 
// tipo Number, y dos valores también de tipo Number "nuevo" y "viejo", de forma 
// que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por 
// el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
// Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
// Salida: [3,2,3,4,6,8,1,7]

// function reemplazar(arr, nuevo, old){
//   for(let i=0; i<arr.length; i++){
//     console.log(arr)
//     if(arr[i]===old){
//       console.log(arr.push(old))
//     }
//   }
// }

// reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)

// 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
// pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
// camino. Muestre el camino recorrido tanto de ida como de vuelta.
// Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
// Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

let camino = ['origen', 'pueblo 1', 'pueblo 2', 'pueblo 3', 'pueblo 4', 'destino']

function ida(arr){
  return (`${arr[0]} → ${arr[1]} → a${arr[2]} → ${arr[3]} → ${arr[4]} → ${arr[5]}`)
}

function vuelta(arr){
  let reverse = arr.reverse();
  return `${reverse[0]} → ${reverse[1]} → a${reverse[2]} → ${reverse[3]} → ${reverse[4]} → ${reverse[5]}`
}

console.log(ida(camino));
console.log(vuelta(camino))

