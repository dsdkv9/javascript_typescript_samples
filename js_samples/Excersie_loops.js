let arrayTest =  [43, "what", 9, true, "cannot", false, "be", 3, true];

let len = arrayTest.length;

console.log(`arrayTest: ${len} & array: ${arrayTest}`);


for (let i = 1; i <= len; i++) {
    console.log(arrayTest[len - i]);
}

let n = 10;

// for (let i = 0; i <= n; i++) {
//     console.log(i);

//     if (i == 6) {
//         break;
//     }
// }

let i = 1;

while(i) {
    //console.log("i = " + i);
    if (i == 8) {
        console.log(`${i} i`);
        break;
    }
    i++; 
}