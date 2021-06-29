console.log('****** Anonymous Function ******');
(function () {
    console.log("anonymous function");
})();

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


console.log('****** Basic Function Declaration Example ******');

console.log(sum(90, 21));

function sum(a, b = 2) {
    console.log(`a = ${a} & b = ${b}`);
    return a + b;
}

console.log(sum(10, 5));

let tempSumFuncVar = sum;
console.log(tempSumFuncVar(21, 1.1));

function getGreaterNumber(a, b) {
    if ( a > b) {
        return true;
    } else {
        return false;
    }
    // console.log(a > b);
}

let status = getGreaterNumber(20, 101);
console.log(`status: ${status}`);

if (status === true) {
    console.log('increase speed');
} else if (status === false) {
    console.log('decrease speed');
} else {
    console.log('Do not increase speed');
}

console.log('****** Decalare Function as Variable Example ******');

let getSum = function(a, b) {
    return a + b;
};

console.log(getSum(11, 21));


let getMultiplication = (a, b) => {
    let c = a * b;
    return c;
};

//let getMultiplication = (a, b) => a * b;

let multivalue = getMultiplication(3, 8);

console.log(multivalue);


console.log("******* How to create a Callback ******");
const message = async function() {
    await console.log(`This message is shown after seconds`);
}

let date = new Date();
const startTime = date.getTime();
setTimeout(message, 6000);
const endTime = date.getTime();
console.log(`Delay in seconds: ${(endTime - startTime)}`);