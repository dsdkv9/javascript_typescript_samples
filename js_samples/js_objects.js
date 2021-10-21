let John = {
    age: 20,
    country: "USA",
    sayHi(str) {
        return `Hello!, ${str}`
    },
    "likes birds": true
};

console.log(John.sayHi('Good morning'));
console.log(John)
John.isAdmin = true;
console.log(John)

John["age"] = 30;
console.log(John.age);


let userRunTime = 10;
console.log(typeof userRunTime);

function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}

userRunTime = makeUser("John", 30);
console.log(typeof userRunTime);
console.log(userRunTime.name); // John


class User {
    country = '';
    constructor(firstName, lName, age, gender) {
        this.fName = firstName;
        this.lName = lName;
        this.age = age;
        this.gender = gender;
    }
    sayHi() {
        return (`Hi, my name is ${this.fName} and I from ${this.country}`);
    }
}

let user1 = new User('Abcd', 'Defg', 10, 'M');
console.log(user1);
user1.country = 'USA';
let msg = user1.sayHi();
console.log(msg);

let user2 = new User('Abcd1', 'Defg1', 10);
//console.log(user2);


class Animal {
    name = "Animal";
    _legs = 4;
    constructor(a) {
        this.age = a;
        console.log(this.name + " & " + this.age);
    }
}

class Rabbit extends Animal {
    name = "Rabbit";
    constructor(age) {
        super(age);
        //this.age = age;
        console.log(this.name + " & " + this.age);
    }
}

let animal1 = new Animal(10); // animal
console.log(animal1.age);
console.log(animal1._legs);

//new Animal(); // animal
//new Rabbit(2); // animal


class CoffeeMachine {
    _waterAmount = 0;
    _waterLimit = 210;
    #waterLimit = 200;
  
    setWaterAmount(value) {
      if (value < 0) value = 0;
      this._waterAmount = value;
    }
  
    getWaterAmount() {
      return this._waterAmount;
    }
  }
  
  let coffeeMach1 = new CoffeeMachine();
  coffeeMach1.setWaterAmount(100);
  console.log(coffeeMach1.getWaterAmount());
  console.log(coffeeMach1._waterAmount);
  console.log(coffeeMach1._waterLimit);
  //console.log(coffeeMach1.#waterLimit);