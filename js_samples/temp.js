// let empArray = new Array(); // []
// empArray.push("emp1");
// empArray.push("emp2");
// empArray.push("emp3");
// empArray.push("emp3");

// console.log(empArray);


// let empSet = new Set(); // []
// empSet.add("emp1");
// empSet.add("emp2");
// empSet.add("emp3");
// empSet.add("emp3");

// console.log(empSet);

// let empMap = new Map();
// empMap.set(1001, "emp1");
// empMap.set(1002, "emp2");
// empMap.set(1003, "emp1");
// empMap.set(1001, "emp4");
// console.log(empMap);

// console.log(typeof empArray);
// console.log(typeof empSet);
// console.log(typeof empMap);

// console.log(Object.keys(empSet));
// console.log(Object.keys(empArray));
// console.log(Object.keys(empMap));

// console.log(Object.values(empSet));
// console.log(Object.values(empArray));
// console.log(Object.values(empMap));

// let user = {
//     name: "John",
//     age: 30
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// let userMap = new Map();
// userMap.set('name', 'John');
// userMap.set('age', '30');
// console.log(userMap);
// console.log(userMap.keys());

// const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
// console.log(typeof obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));


console.log('**** Object.entries & Object.fromEntries ****');

let jimCurrentSal = {
    empid: 'E0001',
    basic: 10000,
    da: 50000,
    ta: 5000
};

console.log(jimCurrentSal);

// Object.entries(jimCurrentSal).map(entry => {
//     return ([entry[0], entry[1] * 2]);
// });

let jimNewSal = Object.fromEntries(
    //Object.entries(jimCurrentSal).map(entry => [entry[0], entry[1] * 2])
    Object.entries(jimCurrentSal).map(entry => {
        let value = entry[1];
        if (entry[0] !== 'empid') {
            value = value + (value / 10);
        }
        return ([entry[0], value]);
    })
);

console.log(jimNewSal);