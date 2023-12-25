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

printStr('\n*** Functions are first-class citizens ***\n')
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

printStr('\n*** Anonymous Functions ***\n')
https://www.javascripttutorial.net/javascript-anonymous-functions/


