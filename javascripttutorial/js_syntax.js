let formatted = true;

if (formatted) {
  let formatted = false;
  console.log(formatted);
  console.log("The code is easy to read");
}

console.log(formatted);

let counter = 100;
console.log(counter);

const workday = 5;
console.log(workday);

let null_type = null;
console.log(typeof null_type);
console.log(null_type);

let undefined_type = undefined;
console.log(typeof undefined_type);
console.log(undefined_type);

let num_type = 100;
console.log(typeof num_type);
console.log(num_type);

let emptyObject = {};
console.log(typeof emptyObject);
console.log(emptyObject);

let person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(typeof person);
console.log(person);

let contact = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "(408)-555-9999",
  address: {
    building: "4000",
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

console.log(contact.address);

person.address = contact.address;
person.email = contact.email;
console.log(person);
console.log(person.email);
delete person.email;
console.log(person);

let student_list = new Array();
student_list.push('Test 1');
student_list.push('Test 2');
student_list.push('Test 3');
student_list.push(12);
student_list.push('Test 5');
console.log(student_list);

console.log("\n*** ror (let i = 0; i < student_list.length; i++) { ***");
for (let i = 0; i < student_list.length; i++) {
    console.log(student_list[i]);
}

console.log("\n*** for (i in student_list) { ***");
for (i in student_list) {
    console.log(student_list[i]);
}

console.log("\n*** for (stud of student_list) { ***");
for (stud of student_list) {
    console.log(stud);
}

console.log("\n*** student_list.forEach((stud) => { }); ***");
student_list.forEach((stud) => {
    console.log(stud);
});