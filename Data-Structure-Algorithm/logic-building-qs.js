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

//7 Calculate the sum of all even numbers from 1 up to n.
// const sumToAllEven = (num) => {
//   let total = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       total += i;
//     }
//   }
//   return total;
// }; //linear O(n) time

// const sumToAllEvenMath = (num) => {
//   if (num < 2) return 0;

//   const k = Math.floor(num / 2);

//   return k * (k + 1);
// }; //Constant O(1) time

// console.log("==========Sum of all even numbers from 1 up to n==========");
// const number = Number(prompt("Enter Number: "));
// const res = sumToAllEvenMath(number);
// console.log(res);

//8 Calculate the sum of all odd numbers from 1 up to n.
// const sumToAllOdd = (num) => {
//   let total = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 !== 0) {
//       total += i;
//     }
//   }
//   return total;
// }; //linear O(n) time

// const sumToAllOddMath = (num) => {
//   if (num < 1) return 0;

//   const k = Math.floor((num + 1) / 2);
//   return k * k;
// }; //Constant O(1) time

// console.log("==========Sum of all Odd numbers from 1 up to n==========");
// const number = Number(prompt("Enter Number: "));
// const res = sumToAllOddMath(number);
// console.log(res);

//9  Calculate and print the factorial of a given number.
// const factOfGivenNum = (num) => {
//   if (num < 0) return 0;
//   let result = 1
//   let i = 1;
//   while (i <= num) {
//     result *= i;
//     i++
//   }
//   return result
// }

// console.log("==========Print the factorial of a given number==========");
// const number = Number(prompt("Enter Number: "));
// const res = factOfGivenNum(number);
// console.log(res);


//10 Find and print the product of all digits of a given number.
// const productOfDigits = (num) => {
//   if (num === 0) return 0;
//   let tempNumber = Math.abs(num)
//   let product = 1

//   while (tempNumber > 0) {
//     let lastDigit = tempNumber % 10
//     product *= lastDigit
//     tempNumber=Math.floor(tempNumber/10)
//   }
//   return product
// }

// console.log("==========Print the product of all digits of a given number==========");
// const number = Number(prompt("Enter Number: "));
// const res = productOfDigits(number);
// console.log(res);