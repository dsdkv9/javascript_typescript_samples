function namedFunction(para1: string, para2: string) : string {
    console.log(`namedFunction - para1 = ${para1} & para2 = ${para2}` );
    return para1.concat(para2);
}

console.log(namedFunction('Hello', 'World'));

let arrowFunctions = (x: number, y: number) : number => {
    return x + y;
}

console.log(`arrowFunctions: ${arrowFunctions(10, 20)}`);

let parameterlessArrowFunction = (x: number, y: number) : number => x / y;

console.log(`parameterlessArrowFunction: ${parameterlessArrowFunction(27, 3)}`);

console.log('Arrow Function in Class ==>');

class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.empName = name;
    }

    display = () => console.log(this.empCode + ' & ' + this.empName);
}

let emp = new Employee(1, 'Ram');
emp.display();

console.log('**** Function Overloading ****');

function add(a:string, b:string) : string ;

function add(a:number, b:number) : number;

function add(a: any, b:any): any {
    return a + b;
}

console.log(add('Hello', 'World'));
console.log(add(10, 20));