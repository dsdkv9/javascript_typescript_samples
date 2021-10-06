console.log('**** Function Sequence ****');
function myDisplayer(str) {
    console.log(str)
}

function myFirst() {
    console.log("myFirst - before myDisplayer")
    myDisplayer("Hello");
    console.log("myFirst - after myDisplayer")
}

function mySecond() {
    console.log("mySecond - before myDisplayer")
    myDisplayer("Goodbye");
    console.log("mySecond - after myDisplayer")
}

mySecond();
myFirst();

console.log('**** Function Sequence Control ****');

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);

console.log('**** Function Callbacks ****');

function myCallbackCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCallbackCalculator(12, 19, myDisplayer);

// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

console.log('--------------');

//  program that shows the delay in execution

function greet2nd() {
    console.log('Hello world');
}

function sayName2nd(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet2nd, 2000);
sayName2nd('John');