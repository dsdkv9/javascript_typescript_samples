function printStr(msg) {
  console.log(msg);
}

class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let per1 = new Person("John Doe");
