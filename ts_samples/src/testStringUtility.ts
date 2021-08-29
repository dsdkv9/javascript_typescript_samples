///// <reference path="StringUtility.ts" />
import { StringUtility } from './StringUtility';

class TestStringUtil {
    empCode: number;
    empName: string;
    constructor(name: string, code: number) {
        this.empName = StringUtility.ToCapital(name);
        this.empCode = code;
    }
    displayEmployee() {
        console.log ("Employee Code: " + this.empCode + ", Employee Name: " + this.empName );
    }
}

let testStringUtil1 = new TestStringUtil('Hello', 100);
testStringUtil1.displayEmployee();