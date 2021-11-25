let num;
console.log(typeof num);
num = 100;
console.log(typeof num);
num = "Hello";
console.log(typeof num);
num = {
    name: "Deepak",
    companyName: "Carta"
}
console.log(typeof num);
num = "Hello";
console.log(typeof num);
console.log(num);

let t1 = 6;

console.log(t1);
console.log( 1 / 0 );
let isGreater = false;

if (2.5 > 1) {
    isGreater = true
}
console.log( isGreater );

let value = 100;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

let n1 = 100;
console.log(typeof n1);

// if (n1 === value) {
//     console.log("Type conversion failed")
// } else {
//     console.log("Type conversion passed")
// }
value = true;
console.log(Number(value));

let t2 = "www";

if (Boolean(t2)) {
    console.log("Number/ string converted to boolean");
} else {
    console.log("Variable t2 is null or undefined");
}

console.log( '3' + 2 );
console.log( Number('1') + 2 );
console.log( +('3') + 2 );
console.log(6 - '12');
console.log(6 * '12');
console.log(1 + 2 * 3);
console.log((1 + 2) * 3);

let counter = 0;
let t3 = counter++;
console.log(t3);
let t4 = ++counter;
console.log(t4);
console.log(t4);

