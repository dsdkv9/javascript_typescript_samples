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
    [1005, citizen2],
]);

console.log("empMap: ");
console.log(empMap);
console.log("empMap.get(1005): ")
console.log(empMap.get(1005));
// console.info("empMap.keys(): ");
// console.info(empMap.keys());
// console.log("empMap.values(): ");
// console.log(empMap.values());

