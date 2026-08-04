let prompt = require("prompt-sync")();

// Math.abs()
// it convert negative value to positive and positive to positive
// console.log(Math.abs(-10)) //10
// console.log(Math.abs(10)) //10

// Math.ceil()
// it make number to its upper value if 8.3 or 8.8 or 8.9 it will make it 9
// console.log(Math.ceil(8.1)) //9

// Math.floor()
// it is just opp of ceil it make number to its lower value if 9.9 it will make it 9
// console.log(Math.floor(9.9)) //9

// Math.round()
// this combine both if val is >= 5 then it work like ceil and if val is < 5 it will work like floor
// console.log(Math.round(6.4)) //6
// console.log(Math.round(6.5)) //7

// Math.trunc()
// it remove the decimal part of val
// console.log(Math.trunc(9.99)) // 9

// Math.pow()
// it adds power to the number it accept two params first num in which to add pow and second the power val
// console.log(Math.pow(10,3)) // 1000

// Math.max()
// it returns maximum from given val it accepts multiple val
// console.log(Math.max(10,3,8,22,8)) //22

// Math.min()
// it returns minimum from given val it accepts multiple val
// console.log(Math.min(19,77,33,53,5)) //5

// Math.random()
// it gives random value between 0 to 1 like 0.22313122 or 0.034342
// console.log(Math.random())  //0.28071572290644686

// toFixed()
// if floating val like 8.998908 we want just 2 decimal or 3 decimal point val
// console.log((3.3333).toFixed(2)) //3.33

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

// let age = Number(prompt("Enter your age: "));

// if (age >= 18) {
//   console.log("Valide voter");
// } else {
//   console.log("Invalid voter")
// }

// let marks = Number(prompt("Enter your marks: "));

// if (marks > 85 && marks <= 95) console.log("Excellent");
// else if (marks > 80 && marks <= 85) console.log("Very good");
// else if (marks > 70 && marks <= 80) console.log("Good");
// else console.log("Fair");
