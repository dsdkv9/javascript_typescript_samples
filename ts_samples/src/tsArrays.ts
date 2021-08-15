let fruitsArray: string[] = ['Apple', 'Orange', 'Banana'];

let fruintsGenericArray: Array<string> = ['Pears', 'Mango', 'Pineapple', 'Watermelon'];

let arrayOptionalDataTypes: Array<string | number | boolean> = ['Apple', 2, 'Orange', 3, 4, 'Banana', true];

console.log(`fruitsArray: ${fruitsArray}`);
console.log(`fruintsGenericArray: ${fruintsGenericArray}`);
console.log(`arrayOptionalDataTypes: ${arrayOptionalDataTypes}`);

// for (let i = 0; i < arrayOptionalDataTypes.length; i++) {
//     console.log(arrayOptionalDataTypes[i]);
// }

for (let ele of arrayOptionalDataTypes) {
    console.log(ele);
}