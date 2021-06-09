let arrayTest =  [43, "what", 9, true, "cannot", false, "be", 3, true];

let len = arrayTest.length;

console.log(`arrayTest: ${len} & array: ${arrayTest}`);


for (let i = 1; i <= len; i++) {
    console.log(arrayTest[len - i]);
}