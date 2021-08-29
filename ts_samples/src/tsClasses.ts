// https://www.tutorialsteacher.com/typescript/typescript-class
class SchoolEmployee {
    empCode: number;
    empName: string;

    // constructor(code: number, name: string) {
    //     this.empName = name;
    //     this.empCode = code;
    // }

    getSalary(): number {
        return 10000;
    }
}

let schEmp1 = new SchoolEmployee();
schEmp1.empCode = 100;
schEmp1.empName = 'Ram';
console.log(schEmp1.empName + ' & base salary: ' + schEmp1.getSalary());



class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class EmployeeP extends Person {
    empCode: number;

    constructor(empcode: number, name: string) {
        super(name);
        this.empCode = empcode;
    }

    displayName(): void {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    }
}

let empP1 = new EmployeeP(100, "Bill");
empP1.displayName(); // Name = Bill, Employee Code = 100

interface IPersonL {
    name: string;
    display(): void;
}

interface IEmployeeL {
    empCode: number;
}

class EmployeePEImp implements IPersonL, IEmployeeL {
    name: string;
    empCode: number;
    constructor(empcode: number, name:string) {
        this.empCode = empcode;
        this.name = name;
    }
    display(): void {
        console.log(`Name = ${name}`);
    }
}

let per11:IPersonL = new EmployeePEImp(100, "Bill");
per11.display(); // Name = Bill, Employee Code = 100

let emp11:IEmployeeL = new EmployeePEImp(100, "Bill");
emp11.display(); //Compiler Error: Property 'display' does not exist on type 'IEmployee'