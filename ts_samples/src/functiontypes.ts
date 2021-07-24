function calculatorSum(a: number, b: number) : number {
    return a + b;
}

// TODO Function Overloading
// function calculatorSum(a: string, b: string, c: number) : string {
//     return a +  " " + b;
// }

console.log(calculatorSum(10, 20));

let calulatorSub = (a: number, b: number) : number => {
    return a +  b;
};

let sub: number = calulatorSub(30 , 3);
console.log(calulatorSub(29, 12));
