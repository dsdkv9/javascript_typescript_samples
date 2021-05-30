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
while(testWhile) {
  if (i < maxcount) {
    i++;
  } else {
    testWhile = false;
  }
  console.log(`testWhile: ${testWhile}`);
}

console.log("*********** For Loop ***********");

for (let j = 1; j < maxcount; j++) {
  console.log(`Value j = ${j}`);
}

