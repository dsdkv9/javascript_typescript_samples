function printStr(msg) {
  console.log(msg);
}

let person_1 = {
    firstName: 'John',
    lastName: 'Doe'
};

person_1.greet = function(x) {
    printStr(x);
}

person_1.greet("Greet");


let person_2 = {
  firstName: 'Test',
  lastName: 'Object',
  greet_2: function() {
    printStr("Method inside object");
  },
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  } 
};

function greet() {
  printStr("Learning JS Objects");
}

person_2.greet = greet;
person_2.greet();
person_2.greet_2();
printStr(person_2);
printStr(person_2.getFullName());

// https://www.javascripttutorial.net/javascript-object-methods/

function Person(firstName, lastName) {
  console.log(new.target);

  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

let person_constructor = new Person("John", "Doe");

printStr(person_constructor);

class PersonClass {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let p1 = new PersonClass('John1', 'Doe1');
let p2 = new PersonClass('John2', 'Doe2');

printStr(p1.getFullName());
printStr(p2.getFullName());