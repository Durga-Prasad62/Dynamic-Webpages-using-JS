 // TODAY ASSIGNMENT
// 🧩 2️⃣ Scope – Output-Based Questions
// 🔹 Output-Based Questions
var a = 10;
function test() {
  var a = 20;
  console.log(a);
}
test();
console.log(a);
// // 20
// // 10


// let x = 5;
{
  let x = 10;
  console.log(x);
}
console.log(x);
// // 10
// // 5



function outer() {
  var x = 10;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();
// 10


if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a);
console.log(typeof b);
// 1
// undefined
// 

console.log(a);
var a = 5;
console.log(b);
let b = 10;
// undefined
// reference error



// 🔹 MCQs (Scope)
// Which keyword is function-scoped in JavaScript?
//  a) var
//  b) let
//  c) const
//  d) all
// var


// What will be the output?

//  function demo() {
//   if (true) {
//     var a = 10;
//     let b = 20;
//   }
//   console.log(a);
//   console.log(b);
// }
// demo();
//  a) 10, 20
//  b) 10, ReferenceError
//  c) undefined, undefined
//  d) Error
// b


// Variables declared with let and const are in which phase before initialization?
//  a) Temporal Dead Zone
//  b) Block Phase
//  c) Variable Scope
//  d) Execution Context
// a


// Which statement is true?
//  a) Global scope is inside a function
//  b) Block scope applies only to var
//  c) Function scope applies to var
//  d) All variables are block-scoped
// c



// // 🧩 3️⃣ Functions – Output-Based Questions & MCQs
// // 🔹 Output-Based Questions
function sayHi(name = "User") {
  return "Hi " + name;
}
console.log(sayHi());
console.log(sayHi("Noorjahan"));
// Hi User
// // Hi Noorjahan

greet();
function greet() {
  console.log("Hello!");
}
// // Hello!


var greet = function() {
  console.log("Hi there!");
};
greet();
// Hi there


let a = 10;
function show() {
  console.log(a);
  let a = 20;
}
show();
// reference error

(function() {
  console.log("IIFE executed");
})();
// iife exceuted



// 🔹 MCQs (Functions)
// Which of the following is hoisted?
//  a) Function declaration
//  b) Function expression
//  c) Arrow function
//  d) All
// b


// What will be the output?

//  var greet = function() {
//   console.log("Hello");
// };
// greet();
//  a) Hello
//  b) Error
//  c) Undefined
//  d) ReferenceError
// a


// What happens if you call a function before declaration?

//  sayHello();
// function sayHello() {
//   console.log("Hi!");
// }
//  a) Error
//  b) Undefined
//  c) Prints Hi!
//  d) ReferenceError
// Hi!


// Which type of function does not have its own this keyword?
//  a) Arrow function
//  b) Function declaration
//  c) Function expression
//  d) Constructor function
// a