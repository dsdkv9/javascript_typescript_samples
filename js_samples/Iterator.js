// let i = 3;
// while (i < 3) { // shows 0, then 1, then 2
//   console.log( `while: ${i}` );
//   i++;
// }

// i = 0;
// do {
//     console.log( `do while: ${i}` );
//     i++;
// } while (i < 3)

let maxcount = 5;
let i = 1;

console.log("*********** While Loop ***********");
while(i <= maxcount) {
  console.log(`Allowed person: ${i} to enter.`);
  i++;
}
// console.log(`last value of counter: ${i}`);

let testWhile = true;

i = 0;
maxcount = 5;
while(testWhile) {
  if (i < maxcount) {
    i++;
  } else {
    testWhile = false;
  }
  console.log(`testWhile: ${testWhile}`);
}

console.log("*********** While Loop ***********");
i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( `while: ${i}` );
  i++;
}

console.log("*********** Do While ***********");
let x = 4;

do {
  console.log(`do while test -> x = ${x}`);
} while (x <= 3)

console.log("*********** For Loop ***********");

for (let j = 1; j < maxcount; j++) {
  console.log(`Value j = ${j}`);
}



outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = console.log(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    //  something with the value...
  }
}
console.log('Done!');


console.log("*********** Switch ***********");

let mode = "Air";

switch (mode) {
  case "Train":
    console.log(`Mode type: ${mode}`);
    break;
  case "Bus":
    console.log(`Mode type: ${mode}`);
    break;
  case "Air":
    console.log(`Mode type: ${mode}`);
    break;
  default:
    console.log( "Go by own vehicle" );
}

if (mode === 'Air') {
  console.log(`Mode type: ${mode}`);
} else if (mode === 'Train') {
  console.log(`Mode type: ${mode}`);
} else if (mode === 'Bus') {
  console.log(`Mode type: ${mode}`);
} else {
  console.log( "Go by own vehicle" );
}


let tempStr = "test";
console.log('***** String is iterable *****');
// for (let char of tempStr ) {
//   // triggers 4 times: once for each character
//   console.log( char ); // t, then e, then s, then t
// }

let iterator = tempStr[Symbol.iterator]();
console.log(`iterator type of : ${typeof iterator}  & ${iterator}`);

while (true) {
  let result = iterator.next();
  //console.log(result.done);
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}

let fruits = ["Apple", "Orange", "Plum"];

iterator = fruits.iterator;
