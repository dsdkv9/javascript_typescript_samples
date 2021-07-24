let studName: string = "John";
let score1: number = 90;
let score2: number = 89;

let sum = score1 + score2;
console.log(typeof sum);
console.log(studName);
console.log(score1);
console.log(score2);
console.log(sum);

class Numbers {
    num_val = 13;             //class variable 
    static sval = 10;         //static field 

    storeNum(): void {
        var local_num = 14;    //local variable 
    }
}

console.log(Numbers.sval);
