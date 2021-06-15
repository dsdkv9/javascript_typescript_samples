(function () {
    console.log("anonymous function");
})();

function sum(a = 10, b = 20) {
    console.log("Normal function");
    return a + b;
}

console.log(sum(30));