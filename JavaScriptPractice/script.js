// Beginner Level
//1 Create a function named greet that prints "Hello World".

// function greet() {
//   console.log("Hello World");
// }

// greet();

//2 Create a function add(a, b) that returns the sum.
// function add(a, b) {
//   return a + b;
// }

// console.log(add(23, 56));
// console.log(add(2, 56));

//3 Write a function to calculate the square of a number.

// function sqOfNumber(num) {
//   return num * num;
// }

// console.log(sqOfNumber(4));

//4 Create a function that checks whether a number is even or odd.

// function checkEvenOdd(num) {
//   if (num % 2 === 0) {
//     return "Even";
//   }
//   return "Odd";
// }

// console.log(checkEvenOdd(578));

//5 Write a function that converts Celsius to Fahrenheit.

// function celsiusToFahrenheit(c) {
//   let f = (c * 9) / 5 + 32;
//   return f;
// }

// let farenheit = celsiusToFahrenheit(25);
// console.log(`${farenheit} F`);

//6 Create a function with default parameter "Guest".

// function greet(user = "Guest") {
//   console.log(`Good morning, ${user}`);
// }

// greet("Ali");
// greet();

//7 Write a function that returns the greater of two numbers.

// function greaterOfTwoNum(num1, num2) {
//   return num1 > num2 ? num1 : num2;
// }

// console.log(greaterOfTwoNum(35, 6));
// console.log(greaterOfTwoNum(7, 6));

//8 Create a function to calculate area of rectangle.

// function calAreaOfRectangle(l, b) {
//   return 2 * (l + b);
// }

// console.log(calAreaOfRectangle(3, 15));

//9 Write a function that returns "Adult" if age ≥ 18 else "Minor".

// function checkAdultOrMinor(age) {
//   return age >= 18 ? "Adult" : "Minor";
// }

// console.log(checkAdultOrMinor(35));

//10 Create a function to reverse a string.

// function reverseString(word) {
//   let str = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     str += word[i];
//   }
//   return str;
// }
// const reverseString = (word) => [...word].reverse().join("");

// console.log(reverseString("Love"));

// console.log(reverseString("Love"));

// Intermediate Level

//1 Write a function expression for multiplication.

// function multiplication(a, b) {
//   return a * b;
// }

// console.log(multiplication(5, 8));

//2 Convert a normal function into an arrow function.

// const multiplication = (a, b) => a * b;

// console.log(multiplication(5, 9));

// const multiplication = (a, b) => {
//   return a * b;
// };

// console.log(multiplication(5, 9));

//3 Create a function that accepts unlimited numbers and returns their sum using rest operator.

// const sum = (...numbers) => {
//   let total = 0;
//   for (let num of numbers) {
//     total += num;
//   }
//   return total;
// };

// console.log(sum(2, 5, 7, 6));

// const sum = (...numbers) => {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// };

// console.log(sum(2, 5, 7, 6));

//4 Write a function that counts vowels in a string.

// const countVowelInString = (str) => {
//   let count = 0;
//   str.toLowerCase();
//   let vowel = "aeiou";
//   for (let i = 0; i < str.length; i++) {
//     if (vowel.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countVowelInString("aeiou"));

//5 Create a function that checks if a string is palindrome.

// const checkPalindrome = (str) => {
//   str.toLowerCase();
//   let word = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     word += str[i];
//   }
//   return word === str ? true : false;
// };

// console.log(checkPalindrome("racar"));

//6 Write a callback function example using setTimeout.

// A callback is a function that is passed as an argument to another function, to be called later.
// console.log("starting...");

// setTimeout(() => {
//   console.log("3 second passed");
// }, 3000);
// console.log("..ending");

// console.log("starting...");
// const callaBack = () => {
//   console.log("3 second passed");
// };
// setTimeout(callaBack, 3000);
// console.log("..ending");

//7 Create a higher-order function that executes another function twice.

// const greet = () => console.log("Good Morning");

// const greetTwice = (fn) => {
//   fn();
//   fn();
// };

// console.log(greetTwice(greet));

//8 Write a function that returns another function.

// const greeting = (greet) => {
//   return function (name) {
//     console.log(`${greet} ${name}`);
//   };
// };

// const makeGreet = greeting("Hello");

// makeGreet("Ali");

//9 Create a pure function for subtraction.
// - Given the same input, always returns the same output.
// - No side effects (doesn't change anything outside itself).

// const sub = (a, b) => a - b;

// console.log(sub(5, 4));

//10 Create an impure function using global variable modification.

// Output may vary, OR it changes something outside (modifies a global variable, logs to
// let total = 0;
// const sum = (...numbers) => {
//     for (num of numbers){
//         total += num
//     }
//     return total
// }

// console.log(sum(3,5,7,2)) // 17
// console.log(sum(3,5,7,2)) // 34