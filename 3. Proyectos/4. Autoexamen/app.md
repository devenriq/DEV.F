# Quiz - JavaScript Basics

### Nombre completo: 
> Octavio Enrique Palomino Castello 

-----------

## Self-Evaluation

#### Auto evaluación de los temas vistos en clase. Responde  a las siguientes preguntas sin utilizar ningun recurso para solucionarlas. Tu conocimiento es muy importante para nosotros. 

#### Objetivo de la evaluación: conocer que tanto haz aprendido sobre JavaScript y ver que temas se necesitan para una asesoria.

Reglas:

1. No googlear
2. No buscar en ningun libro
3. Realizarlo de forma individual

---

##### 1. ¿Qué es un algoritmo?

> Secuencia de pasos que buscan solucionar un problema

##### 2. ¿Qué es un lenguaje de programación?

> Es un compilado de palabras mediante las cuales podemos 'comunicarnos' con las computadoras para que éstas sigan nuestras intstrucciones

##### 3. Describe que es un tipo de dato:

> la manera en la que se almacena información. Es decir, para almacenar números uso un tipo de dato "number" para el mismo

##### 4. ¿Cuáles son los tipos de dato que conoces?

> numbers, strings, undeffined, null, boolean, NaN, objects


##### 6. ¿Qué es NaN?

> Not a Number. En mi experiencia, ocurre cuando se mezcla un elemento tipo number con un string (probablemente no sea la única razón por la que exista)

##### 7. ¿Cual es el uso de `typeof`?

> Retorna el tipo de dato que se quiere analizar. Eg: console.log(typeof('hola')) retornará en la consola 'string'

##### 8. ¿Cuál es la diferencia entre `==` y `===`?

> El == es para una comparación 'superficial'. Si se compara 4 == '4', retornará true porque no está evaluando el tipo de dato. El === se usa para una comparación estricta. Si el dato no es exactamente el mismo en el caso de ===, esta situación retornará false. 

##### 9. ¿Qué es una variable?

> Es como una caja que almacena información reutilizable. Justamente una de las razones por las que existen las variables es la flexibilidad que aportan al código

##### 10. ¿Qué es un statement?

> Es la parte de la función que se ejecutará

##### 11. Del siguiente statement `a = b * 2` identifica sus partes _(literals, variables, operators)._

> literal, operator, literal, operator, literal

##### 12. ¿Qué es una expression?

> No lo sé

##### 13. ¿Cuántas expressions puedes identificar del siguiente statement `a = b * 2;`?

> No lo sé

##### 14. ¿Cuál es la diferencia entre lenguaje `interpreted` y `compiled`?

> No lo sé

##### 15. Es JavaScript `interpreted` o `compiled`? Justifica tu respuesta.

> No lo sé

##### 16. ¿Cuales son los tipos de comentarios en JavaScript?

> Hay dos tipos, uno que tiene un límite superior e inferior. El otro es en línea

---------

## Sección Inténtalo tu mismo:

---

### Output Exercises.

Considera: `var a = 1;`

Escribe el código para:

##### 1 Imprimir `a` en consola:

> console.log(a)

##### 2. mostrar `a` en una alerta:

> alert(a)

### Input Exercises.

Pregunta al usuario su nombre con una función __prompt__ y que el mensaje diga: 
`"Porfavor, escribe tu nombre"` y guarda su nombre en una variable llamada `username`, después loguea el valor en consola

Solución:

js

let username = prompt('Por favor, escribe tu nombre');

console.log(username)


### Sección: Operadores

---

##### 1. Completa la oración:

JavaScript has both unity(es unitario, pero no lo sé en inglés) and binary operators, and one special ternary operator

> unity(es unitario, pero no lo sé en inglés) , binary, ternary

##### 2. Tipos de Operadores

Nombre los _tipos de operadores_ que conoces, y da un ejemplo básico de cada uno que menciones:

> suma = + , resta = - , multiplicacion = * , division = / , módulo = %

##### 3. Describe el uso de los operadores aritméticos:

> Se usan para realizar operaciones aritméticas simples


##### 4. ¿Qué es coercion en JS?

> No sé


##### 5. ¿Es esto un código válido en JS?

js
var amount = 100;

{
  amount = amount * 2;
  console.log(amount)
}

> Si, ya que var puede ser reescrito. Esta situación no se puede dar si la variable fuese 'const'


### Estructuras de Control

##### 1. Describe que son y para que funcionan las estructuras de control:

> Como yo lo entiendo, son reglas usadas para definir la secuencia de acción que se quiere tomar. Es decir, si cierta condición se cumple, el programa tiene que realizar cierta acción


##### 2. Realiza una estructura de control simple utilizando una condicion, si la condición se cumple, retorna true, en caso contrario, retorna false.

js
if (weather = sunny){
  console.log('You can go out. The life is beatiful')
} else {
  console.log('Lie in bed all day long and cry. Life wants you dead')
}

##### 3. Escribe un bloque de código para validar si una variable `number` es menor que `10` para loguear `one digit`, de lo contrario, loguea `two digits`.

Solution:

js
let number = ;

if(number < 10){
  console.log('one digit');
} else {
  console.log('two digits');
}


### Ciclos

##### 1. Describe que es un ciclo y para que funcionan:

> Es una suerte de instrucciones que repiten una accion reiteradamente. Funcionan para realizar tareas repetitivas

##### 2. Realiza un ciclo for iterando el siguiente arreglo: var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:

js

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < myArray.length; i++){
  console.log(myArray[i])
}


##### 3. Escribe un bloque de código para loguear los números de `0-9` usando `while` y  `do-while`  loops.

**`while`** solution:

js
let numbers = 0;

while(numbers < 9) {
  console.log(numbers);
  i++;
}

**`do-while`** solution:

js
// Desconozco

##### 4. ¿Cuales son las 3 clausulas de sintaxis para un `for` loop?

> declaración de variable, condición y modificador

### Sección: Functions

---

##### 1. ¿Qué es una función?

> Es código cuya función es ejecutar ciertas reglas sobre parámetros dados

##### 2 Escribe una función `sum` que reciba dos numberos como argumentos y que regrese la suma de ambos.

Solution:

js
function sum(num1, num2){
  return num1 + num2;
}

##### 3. ¿Qué es el scope en JavaScript?

> Es el alcance que tienen las variables. Las variables se pueden definir dentro de funciones. El alcance de las mismas es local; es decir, los elementos fuera de la función no acutarán sobre ella. Es más, es como si no existiera para el resto del código. Asimismo, las variables locales si pueden interactuar con las variables globales

##### 4. Responde `true` o `false` para las siguientes preguntas:

Consider:

js
function outer() {
  var a = 1;

  function inner() {
    var b = 2;
  }

  inner();
}

outer();

##### 5. ¿La función `inner` tiene acceso a al scope de la función `outer`?

> true

###### 6. ¿La función `outer` tiene acceso al scope de la función `inner`?

> false

## Section: Challenges

---

##### 1. Crea una funcion llamada `calculateAreaOfACircle` que reciba `radius` como parámetro. Usa una variable llamada `PI` igual a `3.14159`.

Solution:

js

const PI = 3.14159;

// crea tu funcion aqui

function calculateAreaOfACircle('radius'){
  return (PI * radius * radius)
}


##### 2. Escribe una función que revierta el siguiente array

js
// No conozco


##### 3. Escribe una funcion que compare dos arreglos y retorne true si son idénticos, retorna false en caso contrario.

js
function comparission(arr1, arr2){
  if(arr1 === arr2){
    true
  } else {
    false
  }
};