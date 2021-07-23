let message: string = 'Hello World!';
console.log(`message: ${message} & type: ${typeof message}`)

let maxNum: number = 100;
console.log(`maxNum: ${maxNum} & type: ${typeof maxNum}`);

let box;
console.log(typeof box);
box = 20.90;
console.log(typeof box);

box = 'box';
console.log(typeof box);

function getProduct(id: number) {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
      }
}

const product = getProduct(10);

console.log(`The product ${product} costs $${product.price}`);

const showProduct = (name: string, price: number) => {
    console.log(`The product ${name} costs ${price}$.`);
}


