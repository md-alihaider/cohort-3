let promp = require("prompt-sync")();

// Q1 Sum of two integer

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(-10,10))

//Q2 Greet the Use
// function greet(name, age) {
//   // Write your logic here
//   console.log(`Hello ${name} you are ${age} years old.`);
// }

// greet(name="Ali",age="10")

// let age = Number(promp("Enter your age: "))

// console.log(`Age: ${age}`)
// console.log(typeof age)

// Q3 Swap two number
function swapNumbers(a, b) {
  [a, b] = [b, a];
  console.log(a);
  console.log(b);
}

swapNumbers(2,3)
