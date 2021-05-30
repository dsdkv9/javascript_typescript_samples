"use strict";

let user = 'John', age = 25, message = 'Hello';

console.log(`user: ${user}`);

console.log(age);

console.log("User: " + message);

console.log(`${user}, ${age}`);

let num2 = 200;
console.info(num2);
num2 = 20.90
console.info(num2);

let userName = "John";

console.info(typeof(num2))
console.info(typeof(userName));

userName = 200.10;
console.info(typeof(userName));

let nameFieldChecked = true;
console.info(typeof(nameFieldChecked));


let a1 = 100;
let b1 = "hello";
let c1 = a1 / b1;

console.log(`a1: ${typeof(a1)} & value = ${a1}`);
console.log(`b1: ${typeof(b1)} & value = ${b1}`);
console.log(`c1: ${typeof(c1)} & value = ${c1}`);

let x = 40;
console.log(`let x = ${x}`);
if (true) {
    let x = 100;
    var y = 200;
    console.log(`let x = ${x}`);
}

console.log(`var y = ${y}`); // Should print y as defined var/ global
console.log(`let x = ${x}`); // Expected 40

const num1 = 100;

console.info(num1)

//num1 = 200;

console.info(num1);


let empid = 50;

console.log(`empid: ${empid} & type: ${typeof(empid)}`);
empid = String(empid);
console.log(`empid: ${empid} & type: ${typeof(empid)}`);


let empname = null;
console.log(`empname: ${empname} && type: ${typeof(empname)}`);
empid = 0.1;
console.log(`empid: ${empid} & type: ${typeof(empid)}`);
console.log(`convert to boolean: ${Boolean(empid)}`);


if (true == 1) {
    console.log("Deepak");
}


let testUndef;
console.log(`testUndef: ${testUndef} & type: ${typeof(emtestUndefpid)}`);

