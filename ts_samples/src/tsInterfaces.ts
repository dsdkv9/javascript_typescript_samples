console.log('**** Interface as Type ****');
interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = { key:1, value:"Steve" }; // OK

// let kv2: KeyPair = { key:1, val:"Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'

// let kv3: KeyPair = { key:1, value:100 }; // Compiler Error: 

console.log(kv1);

console.log('**** Interface Class Type ****');
interface IEmployee {
    empCode: number;
    empName: string;
    getSalary() : number; // arrow function
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
    getSalary() : number {
        return (this.salary + this.salary / 10);
    }
    getManagerName(y: number): string {
        throw new Error("Method not implemented.");
    }
}

let emp1 = new EmployeeInterface(1001, 'John', 250);
console.log(emp1.empName);
console.log(emp1.getSalary());
