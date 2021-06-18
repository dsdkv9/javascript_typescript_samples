// let myObject = { 'a': 1, 'b': 2, 'c': 3 };
// let myObjectMap = new Map(Object.entries(myObject));

// let freeCodeCampBlog = new Map([
//     ['name', 'freeCodeCamp'],
//     ['type', 'blog'],
//     ['writer', 'Tapas Adhikary'],
// ]);


// console.log("freeCodeCampBlog: " + typeof freeCodeCampBlog);
// console.log(freeCodeCampBlog);
// console.log("myObject: " + typeof myObject);
// console.log(myObject)
// console.log("Object.entries(myObject)");
// console.log(Object.entries(myObject));
// console.log("myObjectMap: " + typeof myObjectMap);
// console.log(myObjectMap);

// let map1 = new Map([
//     [1, 2],
//     [2, 3],
//     [4, 5]
// ]);

// console.log(map1.get(1));

// let map2 = new Map([
//     ["firstname", "sumit"],
//     ["lastname", "ghosh"],
//     ["website", "geeksforgeeks"]
// ]);

// console.log(map2.get("firstname"));

// let map3 = new Map([["whole numbers", [1, 2, 3, 4]],
// ["Decimal numbers", [1.1, 1.2, 1.3, 1.4]],
// ["negative numbers", [-1, -2, -3, -4]]]);

// console.log(map3.get("whole numbers"));

let studentMap = new Map([
    ['id001', ['NID01','StudentName1']],
    ['id002', ['NID02','StudentName2']],
    ['id003', ['NID03','StudentName2']],
    ['id004', ['NID04','StudentName2']],
]);

console.log('**** Student Map ****');
console.log(studentMap);
console.log('\n**** Student Map Keys ****');
console.log(studentMap.keys());
console.log('\n**** Student Map Values****');
console.log(studentMap.values());
console.log('\n**** Converted Student Details from Object to Map and Printed Keys ****');
let student = studentMap.get('id001');
console.log('student');
console.log(student);
console.log('student typeof');
console.log(typeof student);
let tempStudentMap = new Map(Object.entries(student));
console.log('Converted student object to map tempStudentMap to print:');
console.log(tempStudentMap);
console.log('\n**** tempStudentMap Map Keys ****');
console.log(tempStudentMap.keys());
console.log('\n**** tempStudentMap Map Keys ****');
console.log(tempStudentMap.values());
