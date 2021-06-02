function printMsg(str) {
    console.log(str);
}

printMsg("Hello World!");

function calculator(a, b) {
    // console.log(`a = ${a}, b = ${b}. a + b = ${a + b}`);
    // console.log(`a = ${a}, b = ${b}. a - b = ${a - b}`);
    sum = a + b;
    return sum;
}

let result = calculator(10, 9);
console.log(`result: ${result}`);