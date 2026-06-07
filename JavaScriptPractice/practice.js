// Q1. Create a function that returns the sum of two numbers.

// const sum = (a, b) => a + b;

// sum(4, 5); //9

// Q2. Create a function that returns the square of a number.

// const square = (num) => num * num;

// square(9); //81

// Q3. Create a function that checks whether a number is Even or Odd.

// const checkEvenOdd = (num) => (num % 2 === 0) ? "Even" : "Odd";

// checkEvenOdd(8); //Even

// Q4. Create a function that returns the larger number among two numbers

// const maxNum = (num1, num2) => (num1 > num2 ? num1 : num2);

// maxNum(8, 14); //14

// Q5. Create a function that checks if a person is eligible to vote.

// const isEligibleToVote = (age) => {
//   if (age >= 18) {
//     return "Eligible";
//   } else {
//     return "Not Eligible";
//   }
// };

// isEligibleToVote(89); // Eligible

// Q6. Print numbers from 1 to 50 using a loop.

// const toPrintNumTill = (num) => {
//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//   }
// };

// toPrintNumTill(8); // 1 2 3 4 5 6 7 8

// Q7. Print all even numbers between 1 and 100.
// const toPrintAllEven = (num) =>{
//    for(let i = 1; i <= num; i++){
//       if(i % 2 === 0){
//          console.log(i)
//       }
//    }
// }

// toPrintAllEven(100)

// Q8. Find the sum of numbers from 1 to 100.

// const sumOfNum = (num) => {
//     let total = 0
//     for(let i = 1; i <= num; i++){
//         total += i;
//     }
//     return total;
// }

// sumOfNum(100) //5050

// Q9. Print the multiplication table of a number.

// const multiplicationTable = (num) => {
//     for(let i = 1; i <= 10; i++){
//         console.log(`${num} x ${i} = ${num*i}`)
//     }
// }

// multiplicationTable(5)

// Q10. Count how many digits are present in a number.

// function countDigits(num){
//     if(num === 0) return 1;

//     let cnt = 0
//     let temp = Math.abs(num)

//     while(temp > 0){
//         temp = Math.floor(temp / 10)
//         cnt++
//     }
//     return cnt;
// }

// countDigits(23045)
// const countDigits = (num) => String(Math.abs(num)).length;

// console.log(countDigits(20345));

// Question 1 (Easy) — Find Expensive Products

// let prices = [100, 250, 500, 150, 700];

// let expensiveProd = prices.filter((prices) => prices > 300);

// console.log(expensiveProd);

// Question 2 (Moderate) — Student Average

// let marks = [80, 90, 70, 85, 95];

// let sumOfMarks = marks.reduce((acc, crValue) => {
//   return (acc += crValue);
// }, 0);

// let averageMarks = sumOfMarks / marks.length;
// console.log(averageMarks);

// Question 3 (Hard) — Most Frequent Number
// let numbers = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];

// let freq = {};
// let maxFreq = 0;
// let mostFreq;

// for (let num of numbers) {
//   freq[num] = (freq[num] || 0) + 1;

//   if (freq[num] > maxFreq) {
//     maxFreq = freq[num];
//     mostFreq = num;
//   }
// }

// console.log(mostFreq);