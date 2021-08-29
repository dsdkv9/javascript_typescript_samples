abstract class PersonAbs {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log(this.name);
    }

    abstract find(string): PersonAbs;
}

class EmployeeAbs extends PersonAbs {
    empCode: number;

    constructor(name: string, code: number) {
        super(name); // must call super()
        this.empCode = code;
    }

    find(name: string): PersonAbs {
        // execute AJAX request to find an employee from a db
        return new EmployeeAbs(name, 1);
    }
}

let empAbs: PersonAbs = new EmployeeAbs("James", 100);
empAbs.display(); //James

let emp2Abs: PersonAbs = empAbs.find('Steve');

class EmployeeReadOnly {
    readonly empCode: number;
    empName: string;
    
    constructor(code: number, name: string)     {
        this.empCode = code;
        this.empName = name;
    }
}
let empRO = new EmployeeReadOnly(10, "John");
let empRO1 = new EmployeeReadOnly(11, "Jim");
// empRO.empCode = 20; //Compiler Error
// empRO.empCode = 20; //Compiler Error
console.log(empRO.empCode);
console.log(empRO1.empCode);

export default EmployeeAbs;