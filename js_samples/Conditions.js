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

