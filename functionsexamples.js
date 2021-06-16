// a = 10;
// b = 20;
// c = 11;
// x = calculation(a, b, c);
// console.log(x);

// y = a * b;

// z = calculation(10, 2, 4);
// console.log(z);

// function calculation(i, j, k) {
//     return i * i + j * j + k * k;
// }

// Math.sqrt();

// console.log('****** Anonymous Function ******');
// (function () {
//     console.log("anonymous function");
// })();

console.log('****** Basic Function Declaration Example ******');

console.log(sum(90, 21));

function sum(a, b = 2) {
    console.log(`a = ${a} & b = ${b}`);
    return a + b;
}

console.log(sum(10, 5));

let tempSumFuncVar = sum;
console.log(tempSumFuncVar(21, 1.1));

console.log('****** Decalare Function as Variable Example ******');

let multiFuncVar = æ(x, y) {
    console.log(`x = ${x} & y = ${y}`);
    return x * y;
}

console.log(multiFuncVar(2, 6));
