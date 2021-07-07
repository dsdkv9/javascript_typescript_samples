let user = {
    name: "John",
    age: 30,
    "likes birds": true,  // multiword property name must be quoted
    isAdmin: true,
    userId: 1001,
    sizes: {
        height: 182,
        width: 50
    }
};

console.log(`user type: ${typeof (user)}`);

// set
user["likes birds"] = true;

// get
console.log(user["likes birds"]); // true

// delete
delete user["likes birds"];

console.log(user["likes birds"]);

let key = "name";

console.log(`name is a attribute of user object: ${key in user}`);

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};

for (let k in user) {
    console.log(user[k]);
}

Object.keys(user).forEach(function (key, index) {
    console.log(user[key]);
});


let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

let userA = {
    name: "John",
    age: 30
};

console.log(typeof (userA));
console.log(userA);
console.log(Object.keys(userA));
console.log(Object.values(userA));



class ClassUserA {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let userA1 = new ClassUserA('usaer 1', 10);
console.log(userA1);

let userA2 = new ClassUserA('usaer 2', 30);
console.log(userA2);
console.log(Object.keys(userA2));
console.log(Object.values(userA2));

let userAList = [userA1, userA2];

for (let user of userAList) {
    //console.log(Object.keys(user));
    console.log(user.age);
}

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};
console.log(typeof prices);
let doublePrices = Object.fromEntries(
    // convert to array, map, and then fromEntries gives back the object
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(typeof prices);
