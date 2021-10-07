// const productos = [
//   {id: '9855', nombre: 'hola1', precio: 500},
//   {id: '9855', nombre: 'hola1', precio: 220},
//   {id: '9855', nombre: 'hola1', precio: 50},
//   {id: '9855', nombre: 'hola1', precio: 890},
//   {id: '9856', nombre: 'hola2', precio: 2000},
//   {id: '9857', nombre: 'hola3', precio: 853655}
// ];

// Object.freeze(productos)

// const esBarato = producto => producto.precio < 1000;
// const esCaro = producto => !esBarato(producto);
// const productosBaratos = productos.filter(esBarato);
// const productosCaros = productos.filter(esCaro)

// filter:

// const numeros = [1, 2, 3, 4 ,5 ,6];

// const numerosUnicos = numeros.filter((numero, posicion, numeros) => {
//   return posicion === numeros.indexOf(numero);
// });

const numeros = [3, 10, 20, 30];

let total = numeros.reduce((acumulador, numero) =>{
  return acumulador + numero;
}, 0)