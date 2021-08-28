console.log('**** Interface as Type ****');
interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = { key: 1, value: "Steve" }; // OK

// let kv2: KeyPair = { key:1, val:"Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'

// let kv3: KeyPair = { key:1, value:100 }; // Compiler Error: 

console.log(kv1);

console.log('**** Interface Class Type ****');
interface IEmployee {
    empCode: number;
    empName: string;
    getSalary(): number; // arrow function
    getManagerName(y: number): string;
}

class EmployeeInterface implements IEmployee {
    empCode: number;
    empName: string;
    salary: number;
    constructor(code: number, name: string, sal: number) {
        this.empCode = code;
        this.empName = name;
        this.salary = sal;
    }
    getSalary(): number {
        return (this.salary + this.salary / 10);
    }
    getManagerName(y: number): string {
        throw new Error("Method not implemented.");
    }
}

let emp1 = new EmployeeInterface(1001, 'John', 250);
console.log(emp1.empName);
console.log(emp1.getSalary());


console.log('**** Interface for Array Type ****');
interface NumList {
    [index: number]: number
}

let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];

interface IStringList {
    [index: string]: string
}

// let strArr: IStringList;
// strArr["TS"] = "TypeScript";
// strArr["JS"] = "JavaScript";

console.log('**** Optional Property ****');
interface IEmployee2 {
    empCode: number;
    empName: string;
    empDept?: string;
}

let empObj1: IEmployee2 = {   // OK
    empCode: 1,
    empName: "Steve"
}

let empObj2: IEmployee2 = {    // OK
    empCode: 1,
    empName: "Bill",
    empDept: "IT"
}

console.log('**** Read only Properties ****');


interface Citizen {
    name: string;
    readonly SSN: number;
}

let personObj: Citizen = { SSN: 110555444, name: 'James Bond' }

personObj.name = 'Steve Smith'; // OK
// personObj.SSN = '333666888'; // Compiler Error


console.log('**** Extending Interfaces ****');
interface IPerson {
    firstName: string;
    lastName: string;
    gender: string;
}

interface IEmployeePerson extends IPerson {
    empCode: number;
    sayHi(s1: string): string;
}

let empObj3: IEmployeePerson = {
    empCode: 1,
    firstName: "Bill",
    gender: "Male",
    lastName: "Tom",
    sayHi: function (s1: string): string {
        return (`Hello, ${s1}!`);
    }
}

console.log('**** Implementing an Interface ****');

interface IEmployee4 {
    empCode: number;
    name: string;
    getSalary: (x: number) => number;
}

class Employee1 implements IEmployee4 {
    empCode: number;
    name: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.name = name;
    }

    getSalary(empCode: number): number {
        return 20000;
    }
}

let emp2 = new Employee1(1, "Steve");
