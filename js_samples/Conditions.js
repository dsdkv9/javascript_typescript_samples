let a = "male";

let b = "female";

let result;

// if ( a !== null && a !== undefined ) {
//     result = a;
// } else {
//     result = b;
// }

console.log(a !== null && a !== undefined);

result = (a !== null && a !== undefined) ? a : b;

console.log(`result: ${result}`);

let x = 10;
let y = 20;
let z = 30;

if ( x > y ) {
    console.log(`x: ${x}`);
} else if ( y > z ) {
    console.log(`y: ${y}`);
} else {
    console.log(`z: ${z}`);
}

console.log( 1 == false );
console.log( 0 === false );