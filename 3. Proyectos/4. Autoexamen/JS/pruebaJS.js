// # Quiz - YDKJS: Up & Going 2/3
// ​
// ## Chapter 2: Into JavaScript
// ​
// ### Self-Evaluation
// ​
// #### Section: Values & Types
// ​
// ---
// ​
// ##### 1. Name the 7 built-in types available in JavaScript.
// ​
// > strings, booleans, numbers, null, undifined, objects
// ​
// ##### 2. Name the two ways to access object properties.
// ​
// > object.property
// > object["property"]
// ​
// ##### 3. Typeof. Look at the following snippets and write what would be the ouput.
// ​
// ###### Snippet #1
// ​
// ```js
// console.log(typeof a);
// var a;
// ```
// ​
// >Error. The can't manage the variable before it gets declare
// ​
// ###### Snippet #2
// ​
// ```js
// console.log(typeof "hello world");
// ```
// ​
// > String
// ​
// ###### Snippet #3
// ​
// ```js
// console.log(typeof false);
// ```
// ​
// >Boolean
// ​
// ###### Snippet #4
// ​
// ```js
// console.log(typeof 21);
// ```
// ​
// > Number
// ​
// ###### Snippet #5
// ​
// ```js
// console.log(typeof null);
// ```
// ​
// > Null
// ​
// ###### Snippet #6
// ​
// ```js
// console.log(typeof undefined);
// ```
// ​
// > Undefined
// ​
// ###### Snippet #7
// ​
// ```js
// console.log(typeof { name: "John" });
// ```
// ​
// > Object
// ​
// ###### Snippet #8
// ​
// ```js
// console.log(typeof typeof 42);
// ```
// ​
// > ?
// ​
// ###### Snippet #9
// ​
// ```js
// console.log(typeof 3.1416);
// ```
// ​
// > number
// ​
// ###### Snippet #10
// ​
// ```js
// console.log(typeof "10");
// ```
// ​
// > string
// ​
// ###### Snippet #11
// ​
// ```js
// var person = {
//   name: "Peter",
//   age: 40
// };
// ​
// console.log(typeof person.name);
// console.log(typeof person.age);
// console.log(typeof person.lastName);
// ```
// ​
// > string
// > number
// > undifined
// ​
// ###### Snippet #12
// ​
// ```js
// console.log(typeof []);
// ```
// ​
// > object
// ​
// ###### Snippet #13
// ​
// ```js
// console.log(typeof ["Hello", 20, true][2]);
// ```
// ​
// > Boolean
// ​
// ###### Snippet #14
// ​
// ```js
// console.log(typeof ["Hello", 20, true][3]);
// ```
// ​
// > undefined
// ​
// ###### Snippet #15
// ​
// ```js
// console.log(typeof { a: 2 }["a"]);
// ```
// ​
// > number
// ​
// ###### Snippet #16
// ​
// ```js
// var index = "c";
// console.log({ a: 1, b: 2, c: 3 }[index]);
// ```
// ​
// > 3
// ​
// ###### Snippet #17
// ​
// ```js
// console.log({ x: 100, y: 200 }.x);
// ```
// ​
// > 100
// ​
// ###### Snippet #18
// ​
// ```js
// function getX (point) {
//   return point.x;
// }
// ​
// getX.PI = '3.1416';
// ​
// console.log(typeof getX);
// console.log(typeof getX({ x: 34, y: 54 }));
// console.log(typeof getX.PI);
// ```
// ​
// >function
// >object
// >string
// ​
// ###### Snippet #19
// ​
// ```js
// var n = "47";
// console.log(typeof n);
// console.log(typeof Number(n));
// ```
// ​
// > number
// > string
// ​
// ###### Snippet #20
// ​
// ```js
// var n = "47";
// console.log(typeof (n * 2));
// ```
// ​
// > string
// ​
// ##### 4. Coercion. Label the following code snippets with `explicit` or `implicit` accordingly.
// ​
// ###### Snippet #21
// ​
// ```js
// var a = "13";
// var b = a * 2;
// console.log(a); // "13"
// console.log(b); // 26
// ```
// ​
// > implicit
// > implicit
// ​
// ###### Snippet #22
// ​
// ```js
// var a = "13";
// var b = Number(a);
// console.log(a); // "13"
// console.log(b); // 13
// ```
// ​
// > implicit
// > explicit
// ​
// ##### 5. List the `falsy` values in JS.
// ​
// > _your answer here_
// ​
// ##### 6. Boolean Coercion. Write the result `true` or `false` for the following snippets.
// ​
// ###### Snippet #23
// ​
// ```js
// Boolean('');
// ```
// ​
// > false
// ​
// ###### Snippet #24
// ​
// ```js
// Boolean('.');
// ```
// ​
// >true
// ​
// ###### Snippet #25
// ​
// ```js
// Boolean("");
// ```
// ​
// > false
// ​
// ###### Snippet #26
// ​
// ```js
// Boolean(0);
// ```
// ​
// > false
// ​
// ###### Snippet #26-2
// ​
// ```js
// Boolean("0");
// ```
// ​
// > true
// ​
// ###### Snippet #27
// ​
// ```js
// Boolean(1);
// ```
// ​
// > true
// ​
// ###### Snippet #28
// ​
// ```js
// Boolean(1/0);
// ```
// ​
// > true
// ​
// ###### Snippet #29
// ​
// ```js
// Boolean(0/1);
// ```
// ​
// > true
// ​
// ###### Snippet #30
// ​
// ```js
// Boolean(NaN);
// ```
// ​
// > false
// ​
// ###### Snippet #31
// ​
// ```js
// Boolean(Infinity);
// ```
// ​
// > false
// ​
// ###### Snippet #32
// ​
// ```js
// Boolean(0 + "0");
// ```
// ​
// > NaN
// ​
// ###### Snippet #33
// ​
// ```js
// Boolean("0" + 0);
// ```
// ​
// > NaN
// ​
// ###### Snippet #34
// ​
// ```js
// Boolean("0" * 1);
// ```
// ​
// > false
// ​
// ###### Snippet #35
// ​
// ```js
// Boolean(1 * "0");
// ```
// ​
// > false
// ​
// ###### Snippet #36
// ​
// ```js
// Boolean(-1 * 0);
// ```
// ​
// > false
// ​
// ###### Snippet #37
// ​
// ```js
// Boolean(null);
// ```
// ​
// > false
// ​
// ###### Snippet #38
// ​
// ```js
// Boolean(undefined);
// ```
// ​
// > false
// ​
// ###### Snippet #39
// ​
// ```js
// Boolean(false);
// ```
// ​
// > false
// ​
// ###### Snippet #40
// ​
// ```js
// Boolean(true);
// ```
// ​
// > true
// ​
// ###### Snippet #41
// ​
// ```js
// Boolean([]);
// ```
// ​
// > true
// ​
// ###### Snippet #42
// ​
// ```js
// Boolean([1, 2, 3]);
// ```
// ​
// > true
// ​
// ###### Snippet #43
// ​
// ```js
// Boolean([0].toString());
// ```
// ​
// > true
// ​
// ###### Snippet #43-2
// ​
// ```js
// Boolean([1, '', {}][1]);
// ```
// ​
// > false
// ​
// ###### Snippet #43-3
// ​
// ```js
// Boolean([1, '', { n: 0 }][2].n);
// ```
// ​
// > false
// ​
// ###### Snippet #44
// ​
// ```js
// Boolean([].toString());
// ```
// ​
// > false
// ​
// ###### Snippet #45
// ​
// ```js
// Boolean({});
// ```
// ​
// > false
// ​
// ###### Snippet #45-2
// ​
// ```js
// Boolean({}.toString());
// ```
// ​
// > false
// ​
// ###### Snippet #46
// ​
// ```js
// Boolean({ name: "Doe" });
// ```
// ​
// > true
// ​
// ###### Snippet #47
// ​
// ```js
// Boolean({ toString: function () {
//   return '';
// }}.toString());
// ```
// ​
// > false
// ​
// ###### Snippet #48
// ​
// ```js
// Boolean({ number: 0 }.number);
// ```
// ​
// > false
// ​
// ###### Snippet #49
// ​
// ```js
// Boolean({ char: 'a' }.char);
// ```
// ​
// > true
// ​
// ###### Snippet #50
// ​
// ```js
// Boolean(function noop() {});
// ```
// ​
// > false
// ​
// ##### 7. Operator that checks for value equality with coercion allowed:
// ​
// > ===
// ​
// ##### 8. Operator that checks for value equality without allowing coercion:
// ​
// > ==
// ​
// ##### 9. Operator that checks for value non-equality with coercion allowed:
// ​
// > !==
// ​
// ##### 10. Operator that checks for value non-equality without allowing coercion:
// ​
// > !=
// ​
// ##### 11. Equality Coercion. Write the result `true` or `false` for the following snippets:
// ​
// ###### Snippet #51
// ​
// ```js
// "12" == 12;
// ```
// ​
// > true
// ​
// ###### Snippet #51-2
// ​
// ```js
// 12 === "12";
// ```
// ​
// > false
// ​
// ###### Snippet #52
// ​
// ```js
// 1 == true;
// ```
// ​
// > true
// ​
// ###### Snippet #52-2
// ​
// ```js
// true === 1;
// ```
// ​
// > false
// ​
// ###### Snippet #53
// ​
// ```js
// false == 0;
// ```
// ​
// > true
// ​
// ###### Snippet #54
// ​
// ```js
// false == "false";
// ```
// ​
// > false
// ​
// ###### Snippet #55
// ​
// ```js
// "" == false;
// ```
// ​
// >true
// ​
// ###### Snippet #56
// ​
// ```js
// null == false;
// ```
// ​
// > true
// ​
// ###### Snippet #57
// ​
// ```js
// undefined == null;
// ```
// ​
// > false
// ​
// ###### Snippet #58
// ​
// ```js
// false == undefined;
// ```
// ​
// >true
// ​
// ###### Snippet #59
// ​
// ```js
// 0 == "";
// ```
// ​
// > true
// ​
// ###### Snippet #60
// ​
// ```js
// 0 == null;
// ```
// ​
// > false
// ​
// ###### Snippet #61
// ​
// ```js
// var a;
// a == null;
// ```
// ​
// > false
// ​
// ###### Snippet #62
// ​
// ```js
// ({} == {});
// ```
// ​
// > true
// ​
// ###### Snippet #63
// ​
// ```js
// ({} === {});
// ```
// ​
// > false
// ​
// ###### Snippet #64
// ​
// ```js
//  [] == [];
// ```
// ​
// > true
// ​
// ###### Snippet #65
// ​
// ```js
//  [1, 2, 3] === [1, 2, 3];
// ```
// ​
// > false
// ​
// ###### Snippet #66
// ​
// ```js
//  [1, 2, 3] == "1,2,3";
// ```
// ​
// > false
// ​
// ###### Snippet #67
// ​
// ```js
//  NaN == NaN;
// ```
// ​
// > false
// ​
// ###### Snippet #68
// ​
// ```js
//  NaN === NaN;
// ```
// ​
// > false
// ​
// ###### Snippet #68-2
// ​
// ```js
//  (function noop (){}) == (function noop (){});
// ```
// ​
// > false
// ​
// ###### Snippet #68-3
// ​
// ```js
//  (function noop (){}).toString() == (function noop (){});
// ```
// ​
// >false
// ​
// ##### 12. Inequality Coercion. Write `true` or `false` for the following snippets
// ​
// ###### Snippet #69
// ​
// ```js
//  2 > "1";
// ```
// ​
// > true
// ​
// ###### Snippet #70
// ​
// ```js
//  "a" < "b";
// ```
// ​
// > false
// ​
// ###### Snippet #71
// ​
// ```js
//  3 < "a";
// ```
// ​
// > false
// ​
// ###### Snippet #72
// ​
// ```js
//  "3" < "a";
// ```
// ​
// > true
// ​
// ###### Snippet #73
// ​
// ```js
//  0 > NaN;
// ```
// ​
// > false
// ​
// #### Variables
// ​
// ---
// ​
// ##### 13. Are these valid JS indentifiers? Fill the table with `true` or `false`
// ​
// | identifier  | is valid? |
// |-------------|-----------|
// | `Name`      | true |
// | `0duck`     | false |
// | `last.name` | false |
// | `$account`  | true |
// | `_age`      | true |
// | `-price`    | false |
// | `car[123]`  | false |
// | `for`       | false |
// ​
// ##### 14. What's hoisting?
// ​
// > _your answer here_
// ​
// ##### 15. Hoisting. What would be the output for this snippet?
// ​
// ###### Snippet #74
// ​
// ```js
// a = 10;
// ​
// foo ();
// ​
// function foo () {
//   a = 5;
// ​
//   console.log(a);
// ​
//   var a;
// }
// ​
// var a;
// ​
// console.log(a);
// ```
// ​
// > 10
// ​
// ##### 16. What's the main difference between `var` and `let`?
// ​
// > the scope they have. Var has a global scope while let has a block scope, which means just the block where is declared can read it
// ​
// ##### 17. Nested Scopes, `var` & `let`. Write the output for the following code snippets
// ​
// ###### Snippet #75
// ​
// ```js
// var a = 1;
// ​
// function foo () {
//   if (a == 1) {
//     var b = 2;
//   }
// ​
//   console.log(b);
// }
// ​
// foo();
// ```
// ​
// > 2
// ​
// ###### Snippet #76
// ​
// ```js
// var a = 1;
// ​
// function foo () {
//   if (a == 1) {
//     let b = 2;
//   }
// ​
//   console.log(b);
// }
// ​
// foo();
// ```
// ​
// > error: b is not declared
// ​
// ###### Snippet #77
// ​
// ```js
// function foo () {
//   var a = 10
// }
// ​
// foo();
// ​
// console.log(a);
// ```
// ​
// > 10
// ​
// ###### Snippet #78
// ​
// ```js
// function foo () {
//   a = 20
// }
// ​
// foo();
// ​
// console.log(a);
// ```
// ​
// > 20
// ​
// #### Section: Conditionals
// ​
// ---
// ​
// ##### 18. Write the code to log if a number is `even` or `odd` using the `if` statement, `switch` statement and the conditional operator `?:` aka ternay operator
// ​
// _Clue_: you can determine if a number is `even` if the remainder of `n` divided by `2` is equal to `0`. Use the remainder operator `%`.
// ​
// **`if`** Solution:
// ​
// ```js
// function ifFunction (num) {
//   if(num % 2 === 0){
//     console.log(num)
//   }
// }

// ifFunction(20)
// ```
// ​
// **`switch`** Solution:
// ​
// ```js
let num = 60;
switch(num){
  case (num%2===0):
    console.log(num)
}

// ```
// ​
// **`ternary`** Solution:
// ​
// ```js
// IDK
// ```
// ​
// #### Section: Strict Mode
// ​
// ---
// ​
// ##### 19. In your own words, what's `use strict;`?
// ​
// > _your answer here_
// ​
// ##### 20. Use Strict. Write the output for the following code snippets
// ​
// ###### Snippet #79
// ​
// ```js
// function yummy () {
//   a = 50
// }
// ​
// yummy();

// console.log(a);
// ```

// > error: a is not defined

// #### Section: Functions As Values

// ---

// ##### 21. Complete the sentence

// Functions are the primary mechanism of _____ in JS.

// > _your answer here_

// ##### 22. Create a function `square` that takes one parameter `number` that returns the result of that `number` multiplied by itself. You need to perform this in `3` different ways

// ###### 22.1. by using `function declaration` syntax.

// Solution:

// ```js
// function squareNumber(num){
//   return num*num;
// }
// ```

// ###### 22.2. by using `function expression with an anonymous function` syntax.

// Solution:

// ```js
// let () ={
//   return num*num,
// }
// ```

// ###### 22.3 by using `function expression with a named function` syntax.

// Solution:

// ```js
// // your code here
// ```

// ##### 23. What's an `IIFE`? Give an example.

// > _your answer here_

// ```js
// // your code here
// ```

// ##### 24. What's a `closure` in JS?

// > _your answer here_

// ##### 25. Closure. What would be the output for the following code?

// ###### Snippet #81

// ```js
// function createHello (greeting) {
//   return function greet (name) {
//     return greeting + " " + name + "!";
//   }
// }

// var greetInSpanish = createHello('Hola');

// console.log(greetInSpanish("Pedro"));
// console.log(createHello('Hi')("Mike"));
// ```

// > _your answer here_

// #### Section: `this` Keyword

// ---

// ##### 26. `this`. Write the output for the following code

// ###### Snippet #82

// ```js
// // Kitties
// function sayHello() {
//   console.log("Hello " + this.name);
// }

// var name = "Fluffy";

// sayHello();

// var kitty = {
//   name: "Buttercup",
//   sayHello: sayHello
// };

// kitty.sayHello();

// sayHello.call({ name: "Cocoa" });

// new sayHello();
// ```

// > _your answer here_


// #### Section: Old & New

// ---

// ##### 28. What are the two main techniques to make older browsers work with newer features available in JS? Describe each
 
// > _your answer here_

// #### Section: Non-JavaScript

// ---

// ##### 29. Is the `alert` method provided by the JS engine?

// > 
// #### Section: Challenges

// ---

// ##### 2.1 Create a Class that exposes 4 methods: `plus`, `minus`, `times` and `dividedBy`. Each method should receive one parameter `firstNumber` and return a function that receives another parameter `secondNumber`. Every method should perform the operation it describes, for example, it's expected that `plus` adds the `firstNumber` to the `secondNumber`, `dividedBy` should divide the `secondNumber` by the `firstNumber` and so on.

// _**TIP:**_ You can create a `script.js`file and test your code in the browser or node.js.

// Solution:

// ```js
// // create your calculator module here
// class Calculator {
//     constructor(){

//     }
// }
// ```