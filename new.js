// 🧩 Part 1: let, var, const & Scope — Output-Based Questions (10)
// 🧠 Concept Check: Block scope, redeclaration, reassignment, and hoisting.

// 1️⃣
var a = 10;
let b = 20;
const c = 30;
console.log(a, b, c);
// 10 20 30


// 2️⃣
var x = 5;
var x = 10;
console.log(x);
//10


// 3️⃣
let y = 5;
y = 10;
console.log(y);
// 10


// 4️⃣
// const z = 5;
// z = 10;
// console.log(z);
// TypeError: Assignment to constant variable
//error cant redclare


// 5️⃣
// {
//   var a = 1;
//   let d = 2;
//   const c = 3;
// }
// console.log(a);
// console.log(d);
// 1 error



// 6️⃣
for (var i = 0; i < 3; i++) {}
console.log(i);
//3


// 7️⃣
// for (let j = 0; j < 3; j++) {}
// console.log(j);
//  j is not defined


// 8️⃣
console.log(a);
var a = 15;
// undefined


// 9️⃣
// console.log(v);
// let v = 10;
// Cannot access 'v' before initialization


// 🔟
const person = { name: "Noor" };
person.name = "Jahan";
console.log(person.name);
// Jahan


// ⚙️ Part 2: Operators — Output-Based Questions (10)
// 🧠 Concept Check: Arithmetic, comparison, logical, bitwise, nullish, and ternary operators.

// 1️⃣
console.log(5 + "5");
// 55


// 2️⃣
console.log("5" - 2);  // “5” - 2  ⇒ 5 - 2
// 3

// 3️⃣
console.log(5 == "5");
console.log(5 === "5");
// true
// false


// 4️⃣
console.log(null == undefined);
console.log(null === undefined);
// true
// false




// 5️⃣
console.log(true && false);
console.log(true || false);
// false
// true


// 6️⃣
// console.log(5 > 3 ? "Yes" : "No");
// Yes


// 7️⃣
let g = null ?? "Default";
console.log(g);
// Default


// 8️⃣
let z= 0 ?? 5;
console.log(z);


// 9️⃣
console.log(5 & 3);     //5 ===> 5 write in binary  0101  and 3 in binary 0011  
//    1                                                           (& means and ⇒ 1 and 1 is 1 remaining all cases 0)
//                                                                      0 1 0 1
//                                                                      0 0 1 1
//                                                            —------------
//                                                                      0 0 0 1  ===> converts into values it means o/p: 1  
console.log(5 | 3);
// 7


// 🔟
let f = 5;
f += 3;
console.log(f);
// 8

