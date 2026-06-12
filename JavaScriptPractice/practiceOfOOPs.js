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