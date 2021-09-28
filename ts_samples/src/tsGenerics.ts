console.log('**** Generic Function ****');
function getArray(items: any[]): any[] {
    return new Array().concat(items);
}

let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);

console.log(`myNumArr: ${myNumArr}`);
console.log(`myStrArr: ${myStrArr}`);

console.log('**** Multiple Type Variables ****');
function displayType<T, U>(id: T, name: U): void {
    console.log(typeof (id) + ", " + typeof (name));
}

displayType<number, string>(1, "Steve"); // number, string


let numList: number[] = [1,2,3,4,5];
let stringLit: string[] = ['hello', 'world', 'good', 'morning'];

function arrayLength<A>(array: Array<A>): number {
    return array.length;
}

console.log(arrayLength(numList));
console.log(arrayLength(stringLit));