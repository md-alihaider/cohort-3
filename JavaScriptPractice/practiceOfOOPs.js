// Question 1 — Understanding this in an Object

// const user = {
//   name: "Ritik",
//   greet() {
//     console.log(this.name);
//   },
// };
// user.greet(); // Ritik

// Question 2 — Default Binding
// function show() {
//   console.log(this);
// }
// show();

// Browser /window
// Node.js /global context
// Strict Mode /undefined




// Question 5 — Fix Lost this
// const user = {
//   name: "Ritik",
//   greet() {
//     console.log(this.name);
//   },
// };

// // const fn = user.greet;
// const fn = user.greet.bind(user);
// fn();



// Question 6 — Create an Inheritance Chain
// const animal = {
//   eats: true,
// };

// const dog = Object.create(animal);
// dog.barks = true;
// console.log(dog.eats); // true


// Question 7 — Prototype Method
// function Person(name) {
//   this.name = name;
// }


// Person.prototype.greet = function () {
//   console.log(`Hello, ${this.name}`);
// };

// const person1 = new Person("Ritik");
// const person2 = new Person("Aman");

// person1.greet(); // Hello, Ritik
// person2.greet(); // Hello, Aman



// Question 8 — Student Class System
// class Students{
//   constructor(name, marks) {
//     this.name = name;
//     this.marks = marks;
//   }
//   getGrade() {
//     if(this.marks >= 90) {
//       return "A";
//     } else if (this.marks >= 75) {
//       return "B";
//     } else if (this.marks >= 60) {
//       return "C";
//     } else {
//       return "Fail";
//     }
//   }
// }

// const student1 = new Students("Ritik", 80);
// const student2 = new Students("Aman", 50);

// console.log(student1.getGrade()); // B
// console.log(student2.getGrade()); // Fail