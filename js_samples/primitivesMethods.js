let num = 10;
console.log(typeof num);
console.log(typeof num.toString());


let john = {
    name: "John",
    sayHi: function () {
        alert("Hi buddy!");
    }
};

console.log(typeof john);

let empmap = {
    "emp1": "Taimur",
    "emp2": "Bappi"
};

console.log(typeof empmap);

let str = 'Widget with id';
console.log(str[0]);
console.log(str.indexOf("with"));

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits);
console.log(fruits[0]);

console.log(fruits.pop());

console.log(fruits)
fruits.push('Grapes');
console.log(fruits)
console.log(fruits.pop());

let foods = new Array();
foods.push('Pizza');
foods.push('Cake');
foods.push('Biscuits');
foods.push(1111);
console.log(foods);