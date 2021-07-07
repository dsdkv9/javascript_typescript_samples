/*
let myObject = { 'a': 1, 'b': 2, 'c': 3 };
let myObjectMap = new Map(Object.entries(myObject));

let freeCodeCampBlog = new Map([
    ['name', 'freeCodeCamp'],
    ['type', 'blog'],
    ['writer', 'Tapas Adhikary'],
]);


console.log("freeCodeCampBlog: " + typeof freeCodeCampBlog);
console.log(freeCodeCampBlog);
console.log("myObject: " + typeof myObject);
console.log(myObject)
console.log("Object.entries(myObject)");
console.log(Object.entries(myObject));
console.log("myObjectMap: " + typeof myObjectMap);
console.log(myObjectMap);

let map1 = new Map([
    [1, 2],
    [2, 3],
    [4, 5]
]);

console.log(map1.get(1));

let map2 = new Map([
    ["firstname", "sumit"],
    ["lastname", "ghosh"],
    ["website", "geeksforgeeks"]
]);

console.log(map2.get("firstname"));

let map3 = new Map([["whole numbers", [1, 2, 3, 4]],
["Decimal numbers", [1.1, 1.2, 1.3, 1.4]],
["negative numbers", [-1, -2, -3, -4]]]);

console.log(map3.get("whole numbers"));

*/

let studentMap = new Map([
    ['id001', ['NID01','StudentName1']],
    ['id002', ['NID02','StudentName2']],
    ['id003', ['NID03','StudentName2']],
    ['id004', ['NID04','StudentName2']],
]);

// console.log('**** Student Map ****');
// console.log(studentMap);
// console.log('\n**** Student Map Keys ****');
// console.log(studentMap.keys());
// console.log('\n**** Student Map Values****');
// console.log(studentMap.values());
// console.log('\n**** Converted Student Details from Object to Map and Printed Keys ****');
// let student = studentMap.get('id001');
// console.log('student');
// console.log(student);
// console.log('student typeof');
// console.log(typeof student);
// let tempStudentMap = new Map(Object.entries(student));
// console.log('Converted student object to map tempStudentMap to print:');
// console.log(tempStudentMap);
// console.log('\n**** tempStudentMap Map Keys ****');
// console.log(tempStudentMap.keys());
// console.log('\n**** tempStudentMap Map Keys ****');
// console.log(tempStudentMap.values());

for (const[studentId, studentDetils] of studentMap.entries()) {
    //console.log(`${studentId} : ${studentDetils}`);
    console.log(studentDetils.entries());
}

studentMap = new Map([
    ['id001',
        {
            'name': 'StudentName1',
            'dob': '01/01/2001',
            'gender': 'M'
        }
    ],
    ['id002',
        {
            'name': 'StudentName2',
            'dob': '10/01/2002',
            'gender': 'M'
        }],
    ['id003',
        {
            'name': 'StudentName2',
            'dob': '01/01/2005',
            'gender': 'F'
        }
    ],
    ['id004',
        {
            'name': 'StudentName2'
        }
    ],
]);

console.log('**** Student Map ****');
let studentDetails = studentMap.get('id001');
//console.log(studentDetails);

console.log('\tFrom Stuent Map read and print name:');

studentMap.forEach((studentDetails) => {
    for ([key, value] of Object.entries(studentDetails)) {
        //console.log(key, value);
        if (key === 'name') {
            console.log(`${value}`);
        }
    }
});
/*
studentMap.forEach((studentDetails) => {
    //console.log(studentId +  " : " + studentDetails);
    for (const [key, value] of Object.entries(studentDetails)) {
        //console.log(`${key}: ${value}`);
        if (key === 'name') {
            console.log(`${value}`);
        }
    }
});
*/


console.log('\n**** Person Map ****');
class Person {
    constructor(name, dob, gender) {
        this.name = name;
        this.dob = dob;
        this.gender = gender;
    }
}

let person1 = new Person('EmpName 1', '10/10/1980', 'M');
let person2 = new Person('EmpName 2', '01/2/1990', 'F');
let person3 = new Person('EmpName 3', '09/20/1985', 'M');

let employeesMap = new Map();
employeesMap.set('E001', person1);
employeesMap.set('E002', person2);
employeesMap.set('E003', person3);

// console.log('**** Employees Map ****');
// console.log(employeesMap);
// let employee = employeesMap.get('E001');
// console.log(studentDetails)

console.log('\tConvert employee object to map & gets its values');
console.log(Object.entries(person1));

console.log('\tFrom Employee Map read and print name:');
employeesMap.forEach((employeesMap, empId) => {
    //console.log(studentId +  " : " + studentDetails);
    for (const [key, value] of Object.entries(employeesMap)) {
        //console.log(`${key}: ${value}`);
        if (key === 'name') {
            console.log(`${value}`);
        }
    }
});
