{
  // Part 1 — Functions Basics (1–20)
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
}

{ //   # Part 2 — Advanced Functions (21–35)

  // 1. Write a recursive function for factorial.
  // const factorial = (n) => {
  //   if (n <= 1) return 1;
  //   return n * factorial(n - 1);
  // };
  // console.log(factorial(5));

  // 2. Write recursive Fibonacci function.
  // const fibonacci = (n) => {
  //   if (n <= 1) return n;
  //   return fibonacci(n - 1) + fibonacci(n - 2);
  // };
  // console.log(fibonacci(6));

  // 3. Create a function that finds power using recursion.
  // const power = (base, exponent) => {
  //   if (exponent === 0) return 1;
  //   return base * power(base, exponent - 1);
  // };
  // console.log(power(2, 4));
  // 4. Create an IIFE that prints `"Executed"`.
  // (function () {
  //   console.log("Executed");
  // })();

  // 5. Write a function that memoizes factorial calculation.
  // const factorial = (n, memo = {}) => {
  //   if (n in memo) return memo[n];
  //   if (n <= 1) return 1;
  //   memo[n] = n * factorial(n - 1, memo);
  //   return memo[n];
  // };
  // console.log(factorial(5));
  // console.log(factorial(3));

  // 6. Create a closure counter function.
  // A closure is a feature in JavaScript where an inner function has access to the variables of its outer function, even after the outer function has finished running.
  //  const createCounter = () => {
  //    let count = 0;
  //    return () => {
  //      count++;
  //      return count;
  //    };
  //  };
  //  const myCounter = createCounter();
  //  console.log(myCounter()); // 1
  //  console.log(myCounter()); // 2
  //  console.log(myCounter()); // 3
  //  console.log(myCounter()); // 4

  // 7. Write a function currying example for addition.
  // Currying is a technique in JavaScript where a function that normally takes multiple arguments all at once is transformed into a series of functions that take only one argument at a time.
  // const curriedAddition = (num1) => {
  //   return (num2) => {
  //     return (num3) => {
  //       return num1 + num2 + num3;
  //     };
  //   };
  // };

  // console.log(curriedAddition(2)(7)(5));

  // 8. Create debounce function logic.
  // 9. Create throttle function logic.
  // 10. Write a function that executes only once.
  // 11. Create custom implementation of `map`.
  // 12. Create custom implementation of `filter`.
  // 13. Create custom implementation of `reduce`.
  // 14. Create custom `forEach`.
  // 15. Explain output:
  //   function test() {
  //     return;
  //     console.log("Hello");
  // }
  // console.log(test());
}
