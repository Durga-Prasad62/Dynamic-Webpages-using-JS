// 🧠 Part 1: Functional Scope vs Block Scope (let, var, const) — 10 Output Based Questions
// Concept focus: variable scope, shadowing, redeclaration, and hoisting
// Q1
// function test() {
//   var x = 10;
//   if (true) {
//     var x = 20;
//     console.log(x);
//   }
//   console.log(x);
// }
// test();
// 20
// 20

// Q2
// function example() {
//   let y = 5;
//   if (true) {
//     let y = 10;
//     console.log(y);
//   }
//   console.log(y);
// }
// example();
// 10
// 5

// Q3
// function run() {
//   if (true) {
//     var a = 100;
//     let b = 200;
//     const c = 300;
//   }
//   console.log(a);
//   console.log(typeof b);
// }
// run();
// 100
// Undefined

// Q4
// var x = 1;
// function outer() {
//   console.log(x);
//   var x = 2;
// }
// outer();
// Undefined

// Q5
// let x = 10;
// {
//   let x = 20;
//   {
//     let x = 30;
//     console.log(x);
//   }
//   console.log(x);
// }
// console.log(x);
// 30 
// 20
// 10

// Q6
// {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }
// console.log(a);
// console.log(typeof b);
// console.log(typeof c);
// // 1
// // undefined
// // undefined


// Q7
// for (var i = 0; i < 3; i++) {}
// console.log(i);
// 3

// for (let j = 0; j < 3; j++) {}
// console.log(typeof j);
// undefined

// Q8
// function demo() {
//   console.log(a);
//   var a = 50;
//   console.log(a);
// }
// demo();
// undefined
// 50

// Q9
// function blockTest() {
//   const value = 5;
//   if (true) {
//     const value = 10;
//     console.log(value);
//   }
//   console.log(value);
// }
// blockTest();
// 10
// 5

// Q10
// function testScope() {
//   if (true) {
//     var x = "var inside";
//     let y = "let inside";
//   }
//   console.log(x);
//   console.log(typeof y);
// }
// testScope();
// Var  Inside
// undefined


// 🧩 Part 2: if, else if, and switch case — Practice Tasks
// Concept focus: decision making and control flow
// 🎯 Tasks
// Write a program that checks a student's marks and prints:


// "Grade A" if marks > 80


// "Grade B" if marks between 60–80


// "Grade C" if marks between 40–60


// "Fail" otherwise
// var marks = 40
// if (marks>80){
//     console.log("Grade:A")
// }
// else if(marks>60&&marks<80){
//      console.log("Grade:B")

// }
// else if(marks>=40&&marks<=60){
//      console.log("Grade:C")
// }
// else{
//     console.log("Fail")
// }




// Use a switch case to print the day name when given a number (1–7).
// var  num =5;
// switch(num){
//     case 1:
//         console.log("Monday")
//         break;
//      case 2:
//         console.log("Tuesday")
//         break;
//      case 3:
//         console.log("wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("saturday")
//         break;
//     case 6:
//         console.log("saturday")
//         break
//      case 7:
//         console.log("sunday")
//         break
//     default:
//         console.log("No Days Is remaining")
//     }

    

        
        
        
        

    


// Create a simple calculator using switch case (add, sub, mul, div).

// var  calculator= "FLOOR";
// switch(calculator){
//     case "ADD":
//        var num1 = 5
//        var num2 = 5
//        console.log(num1+num2)
//        break;
//      case "SUB":
//          var num1 = 10
//          var num2 = 5
//          console.log(num1-num2)
//         break;
//      case "MUL":
//          var num1 = 10
//          var num2 = 5
//          console.log(num1*num2)
//         break;
//     case "DIV":
//          var num1 = 10
//          var num2 = 5
//          console.log(num1*num2)
//         break;
   
//     default:
//         console.log("No Operation is there")
//     }


// Using if...else if, check a person’s age group:


// below 13 → "Child"

// 13–19 → "Teen"

// 20–59 → "Adult"

// 60+ → "Senior"


// var Age = 18
// if (Age<13){
//     console.log("Child")
// }
// else if(Age>=13 && Age<=19){
//         console.log("Teen")
   

// }
// else if(Age<=20 && Age<=59){
//         console.log("Adult")
// }
   
// else{
//     console.log("senior")
// }


// Use switch to print a message for traffic light colors (red → stop, yellow → wait, green → go).
// var  Trafficlight= "yellow";
// switch(Trafficlight){
//     case "green":
//        console.log("GO")
//        break;
//      case "red":
//          console.log("stop")
//          break;
//      case "yellow":
//         console.log("wait")
//         break;

//     default:
//         console.log("wrong color")
//     }


// ⚡ Part 3: if...else if, switch case, falsy values & nullish coalescing — 10 Output Based Questions
// Concept focus: condition checking, falsy values (false, 0, "", null, undefined, NaN) and ?? operator
// // Q1
// let a = 0;
// if (a) console.log("Truthy");
// else console.log("Falsy");
// // Falsy

// Q2
// let value = null ?? "default";
// console.log(value);
// // default


// Q3
// let x;
// let y = x ?? 10;
// console.log(y);
// // 10

// Q4
// let name = "";
// console.log(name || "Guest");
// console.log(name ?? "Guest");
// Guest

// Q5
// let n = NaN;
// if (n) console.log("True");
// else console.log("False");
// //False

// Q6
// let choice = 2;
// switch (choice) {
//   case 1:
//     console.log("One");
//   case 2:
//     console.log("Two");
//   case 3:
//     console.log("Three");
//     break;
//   default:
//     console.log("Other");
// }
// TWO 
//  THREE

// Q7
// let userInput = undefined;
// let result = userInput ?? "No Value";
// console.log(result);
// //No Value

// Q8
let num = "5";
// if (num == 5) console.log("== works");
// if (num === 5) console.log("=== works");
// ==works

// Q9
// let test = 0 || "fallback";
// let check = 0 ?? "fallback";
// console.log(test, check);
// fallback 0

// Q10
let score = null;
if (score ?? 0 > 50) console.log("Passed");
else console.log("Failed");
//Failed

// // 