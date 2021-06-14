let freeCodeCampBlog = new Map([
    ['name', 'freeCodeCamp'],
    ['type', 'blog'],
    ['writer', 'Tapas Adhikary'],
  ]);

class NationalId{
    constructor(id, name, gender, dob, religion, fathername, mothername) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.religion = religion;
        this.fathername = fathername;
        this.mothername = mothername;
    }
}

let citizen1 = new NationalId(101, 'name1', 'male', '10/10/1980', 'abc1', 'xyz1');
let citizen2 = new NationalId(102, 'name2', 'female', '10/10/2000', 'abc2', 'xyz2');

console.log("citizen1: " + citizen1);

let empMap = new Map([
    [1001, 'Emp 1'],
    [1002, 'Emp 2'],
    [1003, 'Emp 3'],
    [1004, 'Emp 4'],
    [1005, citizen1],
    [1006, citizen2],
]);

// console.log("empMap: ");
// console.log(empMap);
// console.log("empMap.get(1005): ")
// console.log(empMap.get(1005));
// console.info("empMap.keys(): ");
// console.info(empMap.keys());
// console.log("empMap.values(): ");
// console.log(empMap.values());

// let empArrayList = [[1001, 'Emp 1'], [1002, 'Emp 2'], [1003, 'Emp 3']];

 //let empMap


 let studentsMap = new Map();
 studentsMap.set('S0001', 'Student 1');
 studentsMap.set('S0002', 'Student 2');
 studentsMap.set('S0003', 'Student 1');

 console.log(studentsMap);

 console.log(studentsMap.has(1001));
 console.log(studentsMap.has('S0001'));

 let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);

  for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
  }
 

  recipeMap.forEach((v, k, m) => {
    console.log(k);
    console.log(v);
    console.log(m);
  });