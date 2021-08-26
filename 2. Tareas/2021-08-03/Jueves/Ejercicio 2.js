// Create an object that will be filled only by a function inside of it, and not from someone outside of it's function.. example:

// let myObject = {
//     myFunction: function (){

//     } // This function is supposed to fill this object
// }

// myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be filled from outside..

// It supposed to be filled using it's own function

// Add any type of element on the object.. arrays, objects, int, strings, etc


let myObject1 = {
  myFunction: function(prop, _value){
    Object.defineProperty(this, prop,{
      value: _value,
      enumerable: true
    })
  }
}

myObject1.myFunction('name', 'Enrique');
myObject1.myFunction('lastName', 'Palomino');
myObject1.myFunction('age', 24);
myObject1.myFunction('pets', false);

console.log(myObject1)

// Freeze impide la sobreescritura del código. En este caso es especialmente usado porque tanto los objetos como los arrays pueden ser modificados en el sentido de añadir propiedades o valores a pesar de que la función sea una constante.

Object.freeze(myObject1);

myObject1.myFunction('skills', ['swimng', 'ride bycicles'])

console.log(myObject1) //efectivamente, la consola devuelve un error: Cannot define property skills, object is not extensible