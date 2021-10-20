import { load } from "js-yaml";
import fs from "fs";
const outputfile = 'src//yamlsamples//output.json';

const fileContent = load(fs.readFileSync(
    "src//yamlsamples//serverConfig.yaml", "utf8"));
// console.log(fileContent);
// console.log(typeof fileContent);

const jsonObj = JSON.stringify(fileContent);
console.log(jsonObj);
console.log(typeof jsonObj);
fs.writeFileSync(outputfile, JSON.stringify(jsonObj, null, 2));

interface MyObj {
    name: string;
    empId: number;
}

let obj: MyObj = JSON.parse('{ "name": "deepak verma", "empId": 100 }');
console.log(obj.name);
console.log(obj.empId);

interface IEmpList {
    empId: {
        name: string;
        age: number;
        address: {
            city: string;
        }
    }
}

let empObjList: IEmpList = 
JSON.parse('{"emp001":{"name":"Deepak","age":42,"address":{"city":"Thane"}},"emp002":{"name":"Bappi","age":30,"address":{"city":"Mira Road"}}}');

console.log(empObjList["emp001"]);
console.log(empObjList["emp001"]["address"]["city"]);