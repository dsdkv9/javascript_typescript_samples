let i = 5;
while (i < 5) {
    console.log(`i = ${i}`);
    i++;
}

do {
    console.log(`i = ${i}`);
    i++;
} while (i < 5)

for (let i = 0; i < 6; i++) {
    console.log(`i = ${i}`);
    if (i == 3) {
        break;
    }
}


function testSwicth(a) {
    switch (a) {
        case 3:
            console.log('Too small');
            break;
        case 4:
            console.log('Exactly!');
            break;
        case 5:
            console.log('Too big');
            break;
        default:
            console.log("I don't know such values");
    }
}
testSwicth(3);
testSwicth(6);
testSwicth(4);
testSwicth(5);
testSwicth(null);

// calculator method: 2 parameters x, y, opearation -> switch: add, sub, div, mul
// calculatorMethod(10, 20, add)