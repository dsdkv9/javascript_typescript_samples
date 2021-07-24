interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: (s1: string) => string;
}

let customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function (s1: string): string {
        return (`Message for you: ${s1}`);
        throw new Error("Function not implemented.");
    }
}

console.log("Customer Object ");
console.log(customer.firstName); 
console.log(customer.lastName);
console.log(customer.sayHi('Welcome to the team!'));  