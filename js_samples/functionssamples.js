console.log('****** Anonymous Function ******');
(function () {
    console.log("anonymous function");
})();

function printMsg(str) {
    console.log(str);
}

printMsg("Hello World!");

console.log('********** Function Declartion **********');

function calculator(a, b) {
    // console.log(`a = ${a}, b = ${b}. a + b = ${a + b}`);
    // console.log(`a = ${a}, b = ${b}. a - b = ${a - b}`);
    c = a + b;
    return c;
}

let result = calculator(10, 9);
console.log(`result: ${result}`);


console.log('\n********** Function Expression **********');
let funcExpCalculator = function (a, b) {
    c = a + b;
    return c;
}

let result1 = funcExpCalculator(10, 9);
console.log(`result1: ${result1}`);


console.log('\n********** Arrow Function **********');
let funcExpSubs = (a, b) => {
    c = a - b;
    return c;
}

let result2 = funcExpSubs(10, 9);
console.log(`result2: ${result2}`);


let userName = 'John';

function showMessage() {
    console.log(`original userName: ${userName}`);
    userName = "Bob"; // (1) changed the outer variable
    console.log(`updated userName: ${userName}`);
}

showMessage();

console.log(`original userName: ${userName}`);
