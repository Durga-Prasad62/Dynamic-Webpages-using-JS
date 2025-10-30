//  Part 1: Concept Tasks (Practice Questions)
// 1️⃣ let / var / const Tasks
// Create a variable using var, another using let, and one using const. Print all in console.
var name = "javascript"
let name1 = "javascript"
const pie=3.14
//  pie =87
console.log(name)
console.log(name)
console.log(pie)


// Try to reassign values to each variable — note which ones throw an error.
var subject1 = "javascript"
let subject2 = "javascript"
const num=3.14
subject1="java"
subject2="python"
// num =1.23
console.log(subject1)
console.log(subject2)
console.log(num)//reassignment is not possible




// Create a block ({ }) and declare a let and a var variable inside. Try accessing them outside the block.
{
    var a = 10
}
console.log(a)

{
    let b = 10
    console.log(b) // ok
}
// {
//     let c = 10
//     // ok
// }
// console.log(c)  // c is not defined is blocked scope



// Declare a variable x with var inside a function. Try to access it outside the function.
x = "biggboss"
function Television(){
    console.log(x)
}
Television()
console.log(x)

// function Television(){
//     var y = "biggboss"
//     console.log(y)
// }
// Television()
// console.log(y)  //y is not defined



// 3️⃣ Data Types Tasks
// Create variables for all JS data types: String, Number, Boolean, Null, Undefined, Object, Array, Symbol, BigInt.


// Print typeof for each variable.
let str = "Hello";          // String
let number = 42;               // Number
let bool = true;            // Boolean
let nul = null;             // Null
let undef;                  // Undefined
let obj = {name: "Prasad"}; // Object
let arr = [1, 2, 3];        // Array
let sym = Symbol("id");     // Symbol
let big = 12345678901234567890n; // BigInt  

console.log(typeof str);
console.log(typeof number);
console.log(typeof bool);
console.log(typeof nul);
console.log(typeof undef);
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof sym);
console.log(typeof big);



// 💡 Part 2: 10 Multiple Choice Questions
// 1. Which keyword allows re-declaration of a variable in the same scope?
//  A) let
//  B) const
//  C) var         
//  D) none

//  C

// 2. Which variable declaration is block-scoped?
// A) var
//  B) let        
//  C) Both var and let
//  D) none 

// B
 

// 3. What happens if you try to reassign a value to a const variable?
// A) It updates the value
//  B) It creates a new variable
//  C) It throws an error
//  D) It silently ignores
// C TYPE ERROR



// 4. What is the output?
console.log(typeof null);
// object

// A) "null"
//  B) "undefined"
//  C) "object"
//  D) "string"
// C



// 5. What is the scope of a var declared variable inside a function?
// A) Global
//  B) Block
//  C) Function
//  D) Lexical
// C


 

// 6. Which of the following data types is not primitive?
// A) String
//  B) Number
//  C) Object
//  D) Boolean

// 7. What will this code print?
// {
//   let a = 10;
//   var b = 20;
// }
// console.log(typeof a);
// console.log(typeof b);

// A) number, number
//  B) undefined, number
//  C) error, number
//  D) error, undefined
// A

// 8. Which variable is hoisted with initialization?
// A) let
//  B) const
//  C) var
//  D) none
// C



// 9. What is the output?
// const name = "Ravi";
// name = "Raj";
// console.log(name);

// A) Ravi
//  B) Raj
//  C) Error
//  D) undefined
// C

// 10. Which of the following is a truthy value in JavaScript?
// A) 0
//  B) ""
//  C) null
//  D) "false"
// D


// 🧩 JS Output-Based Questions — let, var, const

// 1️⃣
// var x = 10;
// let y = 20;
// const z = 30;
// x = 15;
// y = 25;
// // z = 35;  // uncomment this line
// console.log(x, y, z);

// Options:
//  A) 10 20 30
//  B) 15 25 30
//  C) Error
//  D) 15 20 30
//  📝 const can’t be reassigned, but others can.
// C

// 2️⃣
// var a = 5;
// var a = 10;
// console.log(a);

// Options:
//  A) 5
//  B) 10
//  C) Error
//  D) undefined
// 10

//  📝 var allows redeclaration.

// 3️⃣
// let a = 5;
// let a = 10;
// console.log(a);

// Options:
//  A) 5
//  B) 10
//  C) Error
//  D) undefined
// C

//  📝 let doesn’t allow redeclaration in the same scope.

// 4️⃣
// {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }
// console.log(a);
// console.log(b);
// console.log(c);

// Options:
//  A) 1 2 3
//  B) 1 Error Error
//  C) 1 undefined undefined
//  D) Error
//  📝 var is function-scoped; let and const are block-scoped.
// A

// 5️⃣
// console.log(a);
// var a = 10;

// Options:
//  A) 10
//  B) undefined
//  C) Error
//  D) null
// B

//  📝 var is hoisted with undefined.

// 6️⃣
// console.log(b);
// let b = 10;

// Options:
//  A) 10
//  B) undefined
//  C) ReferenceError
//  D) null
// C

//  📝 let is hoisted but in a Temporal Dead Zone (TDZ).

// 7️⃣
// function test() {
//   if (true) {
//     var x = 100;
//     let y = 200;
//   }
//   console.log(x);
//   console.log(y);
// }
// test();

// Options:
//  A) 100 200
//  B) 100 Error
//  C) undefined 200
//  D) Error
// C

//  📝 y is block-scoped and not accessible outside if block.

// 8️⃣
// const num;
// num = 50;
// console.log(num);

// Options:
//  A) 50
//  B) undefined
//  C) Error
//  D) null
// C

//  📝 You must initialize a const when declaring it.

// 9️⃣
// var x = 1;
// let y = 2;
// {
//   var x = 10;
//   let y = 20;
//   console.log(x, y);
// }
// console.log(x, y);

// Options:
//  A) 10 20 and 1 2
//  B) 10 20 and 10 2
//  C) 1 2 and 1 2
//  D) Error
// B

//  📝 var overwrites globally; let stays block-scoped.

// 🔟
// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);

// Options:
//  A) [1, 2, 3]
//  B) [1, 2, 3, 4]
//  C) Error
//  D) undefined
// C

//  📝 const prevents reassignment, not modification of array/object contents.

