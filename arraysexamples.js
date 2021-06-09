let studentList = ["100,Abhijeet", '101,Anna', '102,Taimur', '103,Deepak'];

// for (let student of studentList) {
//     console.log(student);
// }
// console.log('******* Array with for loop *******');

// for (let i = 0; i < studentList.length; i++) {
//     let student = studentList[i];
//     console.log(student.toUpperCase());
// }

console.log('\n******* Array with forEach() *******');

// TODO - Deepak
studentList.forEach((item, index, array) => {
    //console.log(item.toUpperCase());
    //console.log(array[index]);
    //console.log(index);
    let result = array.find(function (item, index, array) {
        if (item === 'Abhijeet') {
            return index;
        }
    });

    //console.log(result);
});

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

let user = users.find(item => item.id == 1);

//console.log(user.name); // John

console.log("********* Arrays *********");
let empList = ['Emp 1', "emp 2", "Emp 3", 10, 6, 'c', 10.3];
console.log(empList);
empList.push("Add New element");
console.log(empList);

let fruitList = new Array();
fruitList.push("Apple");
fruitList.push("Mango");
fruitList.push("Grapes");
console.log(fruitList);
//console.log(fruitList.pop());
//console.log(fruitList);
fruitList[1] = "banna";
console.log(fruitList);
console.log(fruitList[2]);

console.log("********* Arrays Iteration *********");
console.log('For loop with counter');
empList = ['Emp 1', "emp 2", "Emp 3"]
for(let i = 0; i < empList.length; i++) {
    console.log(empList[i]);
}

console.log('For loop by processing array');
for (let emp of empList) {
    console.log(emp);
}

// TODO forEach & iterator
console.log('forEach');
empList.forEach(    )
