// x = number
// n = iteration
function pow(x, n) {
    let result = 1;

    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
        //result *= x;
        result = result * x;
    }

    return result;
}

console.log(pow(3, 3));

function powrecursion(x, n) {

    if (n == 1) {
        return x;
    } else {
        return x * powrecursion(x, n - 1);
    }
}

console.log(powrecursion(3, 1));
console.log(powrecursion(3, 2));
console.log(powrecursion(3, 3));
// console.log(powrecursion(3,999));

let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};

// The function to do the job
function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
        return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
        }
        return sum;
    }
}


console.log(`All employees total salary: ${sumSalaries(company)}`);