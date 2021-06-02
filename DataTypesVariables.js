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

let str = "Welcome to Office";

let newStr1 = '';

let strLength = str.length;

console.log(`str: ${str} & length: ${strLength}`);

let newStr = [];

for (let i = 0; i < strLength; i++) {
    let asciiValue = str[i].charCodeAt(0);
    console.log(str[i] + " " + asciiValue);
    if (asciiValue >= 65 & asciiValue <=90) {
        console.log(str[i]);
        newStr.push(str[i]);
        newStr1 = newStr1.concat(str[i].charCodeAt(0));
    } else if (asciiValue >= 97 & asciiValue <=122) {
        console.log("Covert to upper case");
        asciiValue = asciiValue - 32;
        console.log(String.fromCharCode(asciiValue));
        newStr.push(String.fromCharCode(asciiValue));
        newStr1 = newStr1.concat(String.fromCharCode(asciiValue));
    } else {
        console.log();
    }
}

let newStrLength = newStr.length;

console.log(`newStrLength: ${newStr1} & length: ${newStr1.length}`);

console.log(`str: ${str} & coverted to uppercase: ${newStr1}`);

console.log(`str: ${str} & coverted to uppercase: ${str.toUpperCase()}`);

console.log(typeof(str.toUpperCase()));

console.log(Boolean(strLength));


str = "Hello World abcd";
console.log(str.toUpperCase());
console.log(str.toLowerCase());


let tempNum = 0;
console.log(`tempNum: ${tempNum} & type: ${typeof tempNum}`); // "number"

let tempNumObj = new Number(100);
console.log(`tempNumObj: ${tempNumObj} & type: ${typeof tempNumObj}`); // "object"!

tempNumObj = '1000px';

console.log(parseInt('100px'));


str = 'Widget with id';

// console.log(str.equalsIgnoreCase().indexOf('widget'));