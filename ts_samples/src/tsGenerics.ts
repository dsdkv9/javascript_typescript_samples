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


