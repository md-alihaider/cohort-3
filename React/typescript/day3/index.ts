type userobj = {
  name: string;
  age: number;
  company: string;
  address: {
    street: string;
    city: string;
    state: string;
  };
  employeeId?:string
};

let obj: userobj = {
  name: "Ali",
  age: 24,
  company: "Sheriyans",
  address: {
    street: "Mojahidpur",
    city: "Bhagalpur",
    state: "Bihar",
  },
};

obj.name = 90;
console.log(obj);
