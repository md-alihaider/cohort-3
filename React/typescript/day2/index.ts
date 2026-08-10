// Type Inference and Annotation

// let a = 90
// a = 98
// a="88"
// console.log(a)

let a: string = "num";
a = "98"; //Type 'number' is not assignable to type 'string'
console.log(a);

//Primitive data Types
// string
let val: string = "Hello";

// Boolean
let flag: boolean = true;

// number
let num: number = 90;

// undefined
let h: undefined = undefined;

// bigint
let g: bigint = 353535n;

// symbol
let y: symbol = Symbol("hello");
