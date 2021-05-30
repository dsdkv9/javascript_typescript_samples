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

console.log(`user type: ${typeof(user)}`);

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

Object.keys(user).forEach(function(key, index) {
    console.log(user[key]);
});