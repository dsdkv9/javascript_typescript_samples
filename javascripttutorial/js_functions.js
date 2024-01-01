function printStr(msg) {
  console.log(msg);
}

printStr("Hello World!");

function compare(a, b) {
  if (a > b) {
    printStr(a);
  } else if (a < b) {
    printStr(b);
  } else {
    printStr("Numbers are same");
  }
}

compare(10, 2);
compare(21, 23);
compare(5, 5);

function add(...args) {
  printStr(args);
  let sum = 0;

  for (let arg of args) {
    sum += arg;
  }

  return sum;
}

printStr(add(3, 6));
printStr(add(5, 1, 19, 7));

function temp_add(a, b) {
  return a + b;
}
let sum = temp_add;

function average(a, b, fn) {
  return fn(a, b) / 2;
}

let result = average(18, 24, sum);
printStr(result);

printStr("\n*** Functions are first-class citizens ***\n");
function compareBy(propertyName) {
  return function (a, b) {
    let x = a[propertyName],
      y = b[propertyName];

    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}

let products = [
  { name: "iPhone", price: 900 },
  { name: "Samsung Galaxy", price: 850 },
  { name: "Sony Xperia", price: 700 },
];

console.log("Products sorted by name:");
products.sort(compareBy("name"));

console.table(products);

function cmToIn(length) {
  return length / 2.54;
}

function inToCm(length) {
  return length * 2.54;
}

function convert(fn, length) {
  return fn(length);
}

let inches = convert(cmToIn, 10);
console.log(inches);

let cm = convert(inToCm, 10);
console.log(cm);


printStr('\n*** Anonymous Functions ***\n');
let person = {
  firstName: 'John',
  lastName: 'Doe'
};

(function () {
  console.log('IIFE - Immediately invoked function execution ' + person.firstName);
})(person);

printStr('\n*** Arrow Functions ***\n');
let show = function (a, b) {
  console.log('Arrow function: ' + a + " - " + b);
};

show(19, 'KKKK');

let showArrow = (a, b) => a + b;
printStr(showArrow(19, 9));

printStr("\n*** Understanding JavaScript Pass-By-Value ***\n");

function square(x) {
  x = x * x;
  return x;
}

let y = 18;

result =  square(y);
printStr(result);

let person_1 = {
  name: 'John',
  age: 25,
};

function increaseAge(obj) {
  obj.age += 1;
}

increaseAge(person_1);
printStr(person_1);

printStr("\n*** JavaScript Recursive Function ***\n");

