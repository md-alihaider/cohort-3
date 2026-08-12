"use strict";
// type userobj = {
//   name: string;
//   age: number;
//   company: string;
//   address: {
//     street: string;
//     city: string;
//     state: string;
//   };
//   employeeId?:string
// };
Object.defineProperty(exports, "__esModule", { value: true });
// let obj: userobj = {
//   name: "Ali",
//   age: 24,
//   company: "Sheriyans",
//   address: {
//     street: "Mojahidpur",
//     city: "Bhagalpur",
//     state: "Bihar",
//   },
// };
// obj.name = 90;
// console.log(obj);
// const sum = (a:number, b:number):number => {
//   return a + b;
// }
// let res:number = sum(8, 9)
// console.log(res)
// const sum = (a: number) => (b: number)=>{
//   if (b !== undefined) return sum(a + b)
//   return a
// }
//Curriying fn
// const sum = (a: number) => {
//   return (b: number) => {
//     if (b !== undefined) return sum(a + b);
//     return a;
//   };
// }
// let data = sum(7)(7)(8)(8)()
// console.log(data)
const sum = (...rest) => {
    let data = rest.reduce((a, v) => a + v, 0);
    return data;
};
let res = sum(7, 8, 9, 6, 4, 4, 5);
console.log(res);
//# sourceMappingURL=index.js.map