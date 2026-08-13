let prompt = require("prompt-sync")();
// Logic Building Questions
// 🎯 Goal: Master loops, iteration, and dry-run thinking.
// Topics covered: while, do-while, for, break, continue, mathematical series, pattern printing.

//1 Print all numbers from 1 to 10 using a loop.
// for (let i = 0; i < 10; i++) {
//   console.log(i + 1);
// }

//2 Print numbers from 10 down to 1 in reverse order.
// for (let i = 10; i > 0; i--){
//   console.log(i)
// }

//3 Print all even numbers between 1 and 100.
// for (let i = 1; i <= 100; i++){
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }

//4 Print all odd numbers between 1 and 100.
// for (let i = 1; i <= 100; i++){
//   if (i % 2 !== 0) {
//     console.log(i)
//   }
// }

//5 Print the multiplication table of a given number from n × 1 to n × 10.
// const multiplicationTable = (num) => {
//   for (let i = 1; i <= 10; i++){
//     console.log(`${num} x ${i} = ${num * i}`)
//   }
// }
// console.log("==========Multiplication Table==========");
// const number = Number(prompt("Enter Number: "))
// multiplicationTable(number)


//6 Calculate and print the sum of the first n natural numbers.
// const sumToN = (num) => {
//   let total = 0;
//   for (let i = num; i > 0; i--) {
//     total += i;
//   }
//   return total;
// }; //linear time

// const sumToNMath = (num) => (num < 0 ? 0 : (num * (num + 1)) / 2); //constant time

// console.log("==========Sum of the first n natural numbers==========");
// const number = Number(prompt("Enter Number: "));
// const res = sumToNMath(number);
// console.log(res);


//7