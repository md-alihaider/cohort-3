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

// Question 4 (Easy) — Update User Age

// letuser = {
//   name: "Ritik",
//   age: 20,
// };

// user.age = 21;
// console.log(user);

// Question 5 (Moderate) — Print User Information

// let user = {
//   name: "Ritik",
//   age: 20,
//   city: "Bhopal",
// };

// for (let [key, value] of Object.entries(user)) {
//   console.log(key, value);
// }

// Question 6 (Hard) — Highest Paid Employee

// let employees = {
//   aman: 25000,
//   ritik: 50000,
//   priya: 45000,
// };
// let highestSalary = 0;
// let highestSalaryEmployee;
// for (let [name, salary] of Object.entries(employees)) {
//   if (salary > highestSalary) {
//     highestSalary = salary;
//     highestSalaryEmployee = name;
//   }
// }

// console.log(highestSalaryEmployee);

// Question 7 (Easy) — Greeting Function

// function greet(name) {
//   console.log(`Hello, ${name}`);
// }

// greet("Ali");

// Question 8 (Moderate) — Discount Calculator

// let price = Number(prompt("Enter the PRICE of product: "));

// let calculateDiscount = (price) => price * 0.9  // 90%

// console.log(calculateDiscount(price));

// Question 9 (Hard) — Dynamic Sum Function

// let sum = (...numbers) => {
//   let total = numbers.reduce((acc, crValue) => {
//     return (acc += crValue);
//   }, 0);
//   return total;
// };

// console.log(sum(1, 2, 43, 6)); // 51
// let sum = (...numbers) => numbers.reduce((acc, crValue) => acc + crValue, 0);

// console.log(sum(1, 2, 43, 6)); // 51

// Question 10 (Easy) — Find Adult Users

// let users = [
//   { name: "Ritik", age: 20 },
//   { name: "Aman", age: 16 },
//   { name: "Priya", age: 25 },
// ];

// let findAdult = users.filter(({ age }) => age >= 18);

// console.log(findAdult);

// Question 11 (Moderate) — Shopping Cart Total

// let cart = [
//   { name: "Mouse", price: 500, qty: 2 },
//   { name: "Keyboard", price: 1000, qty: 1 },
//   { name: "Monitor", price: 10000, qty: 1 },
// ];

// let getCartTotal = (cart) =>
//   cart.reduce((acc, crValue) => acc + crValue.price * crValue.qty, 0);

// getCartTotal(cart); // 12000

// Question 12 (Hard) — Student Grade Report

// let students = [
//   {
//     name: "Ritik",
//     marks: [80, 90, 85],
//   },
//   {
//     name: "Aman",
//     marks: [50, 40, 60],
//   },
// ];

// let getGrade = (average) => {
//   if (average >= 80) return "A";
//   if (average >= 60) return "B";
//   if (average >= 40) return "C";
//   return "F";
// };
// let generateReport = (studentsArray) => {
//   return studentsArray.map((student) => {
//     let totalMarks = student.marks.reduce((acc, crValue) => acc + crValue, 0);
//     let average = totalMarks / student.marks.length;

//     let grade = getGrade(average);

//     return {
//       name: student.name,
//       average: Number(average.toFixed(2)),
//       grade: grade,
//     };
//   });
// };

// generateReport(students);
// console.log(generateReport(students));

// Final Challenge (Very Hard)
// Mini Library Management System

// Question 2 — Last Student in Class

// let students = ["Aman", "Ritik", "Priya", "Rahul"];

// let lastStudent = students.at(-1);

// console.log(lastStudent); // Rahul

// Question 3 — Add New Product
// let products = ["Laptop", "Mouse", "Keyboard"];

// products.push("Monitor");
// console.log(products); // ["Laptop", "Mouse", "Keyboard", "Monitor"]

// Question 4 — Remove Last Notification
// let notifications = ["Order Placed", "Order Shipped", "Order Delivered"];
// notifications.pop();
// console.log(notifications); // ["Order Placed", "Order Shipped"]

// Question 5 — Check User Exists
// let users = ["Aman", "Ritik", "Priya"];

// console.log(users.includes("Ritik")); // true

// Question 6 — Convert Marks to Percentage
// let marks = [80, 90, 70];

// let percentageMarks = marks.map((mark) => mark + "%");

// console.log(percentageMarks);

// Question 7 — Count Products
// let cart = ["Mouse", "Keyboard", "Monitor", "Laptop"];

// console.log(cart.length);

// Question 8 — Student Average
// let marks = [80, 90, 70, 85, 95];

// let averageMarks = (marks) => {
//   let total = marks.reduce((acc, crValue) => acc + crValue, 0);
//   let average = total / marks.length;
//   return average + "%";
// };
// console.log(averageMarks(marks)); // 84%

// Question 9 — Even Numbers Finder
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let allEvenNumber = numbers.filter((n) => n % 2 === 0);
// console.log(allEvenNumber); // [2, 4, 6, 8]

// Question 10 — Product Search
// let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

// console.log(products.indexOf("Keyboard")); // 2

// Question 11 — Total Revenue
// let sales = [500, 700, 1000, 300];

// let totalSales = sales.reduce((acc, current) => acc + current, 0);

// console.log(totalSales); // 2500

// Question 12 — Uppercase Usernames
// let users = ["ritik", "aman", "priya"];

// let usersUppercase = users.map((user) => user.toUpperCase());

// console.log(usersUppercase); // ["RITIK", "AMAN", "PRIYA"]

// Question 13 — Find First Adult
// let ages = [12, 15, 17, 19, 22];

// let findAdult = ages.find((age) => age >= 18);

// console.log(findAdult);

// Question 14 — Positive Number Check
// let nums = [5, 8, 10, 3];

// console.log(nums.every((num) => num > 0));

// Question 15 — Most Frequent Number
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

// Question 16 — Second Largest Number
// let nums = [10, 50, 20, 80, 40];

// let secondLargest = (n) => {
//   let sortedArray = n.sort((a, b) => a - b);
//   return sortedArray.at(-2);
// };

// console.log(secondLargest(nums));

// Question 17 — Remove Duplicates
// let ids = [1, 2, 2, 3, 4, 4, 5, 5];
// let idsWithoutDuplicate = [];
// const removeDuplicate = (ids) => {
//   for (let i = 0; i <= ids.length - 1; i++) {
//     if (!idsWithoutDuplicate.includes(ids[i])) {
//       idsWithoutDuplicate.push(ids[i]);
//     }
//   }
// };
// removeDuplicate(ids);
// console.log(idsWithoutDuplicate); // [1, 2, 3, 4, 5]
// let ids = [1, 2, 2, 3, 4, 4, 5, 5];
// const idsWithoutDuplicate = ids.filter(
//   (item, index) => ids.indexOf(item) === index,
// );
// console.log(idsWithoutDuplicate); // [1, 2, 3, 4, 5]

// Question 18 — Longest Word
// let words = ["JavaScript", "HTML", "CSS", "Programming"];

// let wordStringCount = 0;
// let longestWord;

// for (let word of words) {
//   if (word.length > wordStringCount) {
//     wordStringCount = word.length;
//     longestWord = word;
//   }
// }

// console.log(longestWord);

// Question 19 — Rotate Array Right
// let nums = [1, 2, 3, 4, 5];

// let rotedArray = (arr) => {
//   let lastElem = arr.pop();
//   arr.unshift(lastElem);
//   return arr;
// };
// console.log(rotedArray(nums));

// Question 20 — Best Selling Product
// let sales = ["Mouse", "Keyboard", "Mouse", "Laptop", "Mouse", "Keyboard"];
// let freq = {};
// let maxFreq = 0;
// let mostFreq;

// for (let prod of sales) {
//   freq[prod] = (freq[prod] || 0) + 1;

//   if (freq[prod] > maxFreq) {
//     maxFreq = freq[prod];
//     mostFreq = prod;
//   }
// }
// console.log(mostFreq);

// Question 1 — Access User Name
// let user = {
//   name: "Ritik",
//   age: 21,
//   city: "Bhopal",
// };

// console.log(user.name); // Ritik
