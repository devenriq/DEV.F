// 1. Se tiene una cola de colores y se tiene que dividir en dos colas, respetando
// el orden y alternando a partir de su índice. los pares en una y los nones en otra
// Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
// Cola 1: [ amarillo, rojo, azul, morado]
// Cola 2: [rosa, verde, negro, blanco]

// let colors = [ "amarillo", 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco'];

// function dividir(colores){
//   let pares = [];
//   let impares = [];
//   for(let i=0; i<colores.length; i+=2){
//     pares.push(colores[i]);
//     colores[i+1] && impares.push(colores[i + 1])
//   }
//   return pares, impares
// }

// console.log(dividir(colors))

// 2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención.
// Sin embargo, llegada la hora de inicio hay muchos "colados", es por esto que se le ordena
// al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial,
// qué elementos fueron retirados de la cola y la cola final.

// Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.

let cola = [
  { user: "User1", ticket: true },
  { user: "User2", ticket: true },
  { user: "User3", ticket: false },
  { user: "User4", ticket: true },
  { user: "User5", ticket: false },
  { user: "User6", ticket: false },
  { user: "User7", ticket: true },
  { user: "User8", ticket: true },
  { user: "User9", ticket: true },
  { user: "User10", ticket: false },
  { user: "User11", ticket: true },
];

function colados(colas) {
  let legales = [],
    colados = [];

  for (let i = 0; i < colas.length; i++) {
    // let unQueue = colas.shift();
    // console.log(unQueue)
    console.log(cola[1][1]);
  }
}

colados(cola);
