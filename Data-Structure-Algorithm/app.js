let prompt = require("prompt-sync")();

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
// function swapNumbers(a, b) {
//   [a, b] = [b, a];
//   console.log(a);
//   console.log(b);
// }

// swapNumbers(2,3)

// Q4 Compound Interest Caluculation
// function calculateCompoundInterest(P, r, t, n) {
//   // Write your logic here
//   let totalAmount = P * (1 + r / n) ** (n * t);
//   let interest = totalAmount - P;
//   return interest.toFixed(2);
// }

// console.log(calculateCompoundInterest(1500, 0.04, 6, 2));

//Q5 calculate compound interest
// let p = Number(prompt("Enter principle: ")); // 10000
// let r = Number(prompt("Enter rate of interest: ")); //5
// let t = Number(prompt("Enter time: ")); //3

// let compounnInterest = p * Math.pow(1 + r / 100, t) - p;

// console.log(compounnInterest.toFixed(2))  // 1576.25

//Q6 Generate OTP

// function otpGenerate() {
//   let randomFourDigit = (Math.random() * 9000) + 1000
//   let otp = Math.trunc(randomFourDigit);
//   return otp
// }

// console.log(otpGenerate())

//Q7 Caluculate area of triangle using Heron's formula

// function calculateTriangleArea(a, b, c) {
//   // Write your logic here
//   let s = (a + b + c) / 2;
//   let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

//   return area.toFixed(2);
// }

// console.log(calculateTriangleArea(3,4,5)) // 6.00

//Q8 Calculate Circumference and area of circle
// function calculateCircleProperties(r) {
//   // Write your logic here
//   let circumference = 2 * Math.PI * r;
//   let area = Math.PI * r ** 2;

//   return [circumference.toFixed(2), area.toFixed(2)];
// }

// console.log(calculateCircleProperties(5.2)) //[ '32.67', '84.95' ]

//Q10 Accepts two number and print greatest of them
// let n1 = Number(prompt("Enter first num: "))
// let n2 = Number(prompt("Enter second num: "))

// if (n1 > n2) console.log(`${n1} is greater than ${n2}`)
// else console.log(`${n2} is greater than ${n1}`);

//Q11 Accept an integer and check wether it is even or odd
// const isEven = (num) => {
//   if (num % 2 === 0) return "Even"
//   else return "Odd"
// }

// let number = Number(prompt("Enter a number: "))
// console.log(isEven(number))

//Q12 Accept name and age from the user and check if user is a valid voter
// let name = prompt("Enter your name: ")
// let age = Number(prompt("Enter your age: "))

// if(age>=18) console.log(`${name} is eligible to vote`)
// else console.log(`${name} is not eligible to vote`)

//Q13 Accept three number and print greatest of all
// let n1 = Number(prompt("Enter first num: "))
// let n2 = Number(prompt("Enter second num: "))
// let n3 = Number(prompt("Enter third num: "))

// if(n1 > n2 && n1 > n3) console.log(`${n1} is greatest of all three`)
// else if(n2 > n1 && n2 > n3) console.log(`${n2} is greatest of all three`)
// else console.log(`${n3} is greatest of three`)

//Q14 Accept year and print if leap year or not
// let year = Number(prompt("Enter year: "))

// if(year % 4 ===0 && year % 100 !== 0) console.log("Leap year")
// else if(year % 400 === 0) console.log("Leap year")
// else console.log("Not Leap year")

//Q15 Accept amount and after discount give payable amount
// let amount = Number(prompt("Enter amount: "));
// let payableAmount = 0;

// if (amount > 0 && amount <= 5000) {
//   payableAmount = amount;
// } else if (amount > 5000 && amount <= 7000) {
//   payableAmount = amount - (5 * amount) / 100;
// } else if (amount > 7000 && amount <= 9000) {
//   payableAmount = amount - (10 * amount) / 100;
// } else {
//   payableAmount = amount - (20 * amount) / 100;
// }

// console.log("Payable amount is " + payableAmount)

// let amount = Number(prompt("Enter amount: "));
// let discount = 0;

// if (amount > 0 && amount <= 5000) discount = 0;
// else if (amount > 5000 && amount <= 7000) discount = 5;
// else if (amount > 7000 && amount <= 9000) discount = 10;
// else discount = 20;

// const payableAmount = (amount - (discount * amount) / 100)
// console.log("Payable amount is " + payableAmount);

//Q16 Bijli bill
let unit = Number(prompt("Enter your unit: ")); //260

// if (unit > 0 && unit <= 100) console.log(unit * 4.2)
// else if (unit > 100 && unit <= 200) {
//   console.log((100 * 4.2) + (unit - 100) *6)
// } else if (unit > 200 && unit <= 400) {
//   console.log((100 *4.2)+ (100 *6) + (unit-200)*8)
// } else {
//   console.log((100*4.2)+(100*6)+(200*8)+(unit-400)*13)
// }

if (unit > 0 && unit <= 100) console.log(unit * 4.2);
else if (unit > 100 && unit <= 200) {
  console.log(100 * 4.2 + (unit - 100) * 6);
} else if (unit > 200 && unit <= 400) {
  console.log(100 * 4.2 + 100 * 6 + (unit - 200) * 8);
} else {
  console.log(100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13);
}
