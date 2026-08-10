// Type Inference and Annotation

// let a = 90
// a = 98
// a="88"
// console.log(a)

// let a: string = "num";
// a = "98"; //Type 'number' is not assignable to type 'string'
// console.log(a);

//Primitive data Types
// string
// let val: string = "Hello";

// // Boolean
// let flag: boolean = true;

// // number
// let num: number = 90;

// // undefined
// let h: undefined = undefined;

// // bigint
// let g: bigint = 353535n;

// // symbol
// let y: symbol = Symbol("hello");


console.log("Array and Tuples")
//Array
let arr: any[] = [1, 2, 45, "adk", undefined, true, null]
let arr1:number[] = [1,2,3,3]
let arr2: string[] = ["apple", "banana", "grapes"]
let arr3:boolean[]=[true,false,true]

//Tuples
let arrtuple :[number,number]=[54,53] // In tuples src and target element should be same