var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function (s1) {
        return ("Message for you: " + s1);
        throw new Error("Function not implemented.");
    }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi('Welcome to the team!'));
