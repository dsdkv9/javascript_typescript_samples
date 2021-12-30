import { resourceUsage } from "process";

let jsFruitsArray = ['Apple', 'Orange', 'Banana', 123];

let fruitsArray: string[] = ['Apple', 'Orange', 'Banana'];

// fruitsArray.push(100); // Argument of type 'number' is not assignable to parameter of type 'string'

let fruintsGenericArray: Array<string> = ['Pears', 'Mango', 'Pineapple', 'Watermelon'];

let arrayOptionalDataTypes: Array<string | number | boolean> = ['Apple', 2, 'Orange', 3, 4, 'Banana', true];

console.log(`jsFruitsArray: ${jsFruitsArray}`);

console.log(`fruitsArray: ${fruitsArray}`);
console.log(`fruintsGenericArray: ${fruintsGenericArray}`);
console.log(`arrayOptionalDataTypes: ${arrayOptionalDataTypes}`);

// for (let i = 0; i < arrayOptionalDataTypes.length; i++) {
//     console.log(arrayOptionalDataTypes[i]);
// }

for (let ele of arrayOptionalDataTypes) {
    console.log(ele);
}

let values: Array<string | number | boolean> = ['Apple', 2, 'Orange', 3, 4, 'Banana', true, 1234];
console.log(`values: ${values}`);

for (let i in values) {
    console.log(values[i]);
}

console.log(values.indexOf("Orange"));

console.log(values.shift());

console.log(`values: ${values}`);

console.log(values.includes("Orage"));

let isElementFound = false;

for (let i = 0; i < values.length; i++) {
    if (values[i] === "Ornge") {
        isElementFound = true;
        break;
    }
}
console.log(`isElementFound: ${isElementFound}`);


let twoDimArray = [
	[10, 11, 18, 21],
	[99, 17, 12, 78, 99],
	[9, 11, 10, 9],
];

/*
    [
        [[0,0], [0,1],[0,2],[0,3]],
        [[1,0], [1,1],[1,2],[1,3],[1,4]],
        [[2,0], [2,1],[2,2],[3,3]],
    ]
*/

let findNumber : number = 10

// output: [
// 	["row = 1", "pos = 1"],
// 	["row = 2", "pos = notfound"],
// 	["row = 3", "pos = 3"],
// ]

let mapSaveResult = new Array();

for (let i =0; i < twoDimArray.length; i++) {
    //console.log(twoDimArray[i].length);
    for (let j = 0; j < twoDimArray[i].length; j++) {
        if (twoDimArray[i][j] == findNumber) {
            console.log(`position: [${i}, ${j}], ${twoDimArray[i][j]}`);
            //mapSaveResult[i] = twoDimArray[i][j];
        }
    }
}

let employee: [number, string, true]  = [1, "Steve", true];
console.log(employee);
employee.push(true);
console.log(employee);

let tempNum : number | undefined;
console.log(tempNum);