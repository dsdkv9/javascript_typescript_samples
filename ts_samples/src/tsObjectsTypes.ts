// https://www.typescriptlang.org/docs/handbook/2/objects.html

class Shape {
    shapeName: string;
    constructor(shape: string) {
        this.shapeName = shape;
    }
}

console.log('**** Property Modifiers -> Optional Properties ****');
interface PainOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}

function paintShape(opts: PainOptions) {
    console.log(opts.xPos);
    console.log(opts.yPos);
}

const shape = new Shape('Circle');
console.log(shape.shapeName);

paintShape({ shape });
paintShape({ shape, xPos: 10 });
paintShape({ shape, yPos: 20 });
paintShape({ shape, xPos: 15, yPos: 25 });

console.log('**** Property Modifiers -> Readonly Properties ****');

interface SomeType {
    readonly prop: String;
}

function doSomething(obj: SomeType) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);

    // But we can't re-assign it.
    // obj.prop = "hello"; //   Cannot assign to 'prop' because it is a read-only property.
}

interface Person {
    name: string;
    age: number;
}

interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}

let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'

console.log('**** Property Modifiers -> Index Signatures ****');
interface StringArray {
    [index: number]: string;
}


// TODO from Index Signatures https://www.typescriptlang.org/docs/handbook/2/objects.html
// Property Modifiers