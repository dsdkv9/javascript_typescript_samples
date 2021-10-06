console.log('**** Function Parameters ****');

function functionName(parameter1, parameter2, parameter3) {
    if (parameter1 === undefined) {
        console.log(`parameter1: ${parameter1}`);
    } else if (parameter2 === undefined) {
        console.log(`parameter2: ${parameter2}`);
    } else if (parameter3 === undefined) {
        console.log(`parameter3: ${parameter3}`);
    }
}

functionName(10, 20);
functionName(10, 20, 30);

console.log('**** The Arguments Object ****');

x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(x);