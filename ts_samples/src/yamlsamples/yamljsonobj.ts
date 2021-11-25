import { load } from "js-yaml";
import fs from "fs";
const outputfile = 'src//yamlsamples//output.json';

const fileContent = load(fs.readFileSync(
    "src//yamlsamples//serverConfig.yaml", "utf8"));
// console.log(fileContent);
// console.log(typeof fileContent);

const jsonObj = JSON.stringify(fileContent);
// console.log(jsonObj);
// console.log(typeof jsonObj);
// fs.writeFileSync(outputfile, JSON.stringify(jsonObj, null, 2));

interface MyObj {
    name: string;
    empId: number;
}

let obj: MyObj = JSON.parse('{ "name": "Hohn T", "empId": 100 }');
obj.name = "William";
console.log(obj.name);
console.log(obj.empId);

let obj1: MyObj = new MyObj<>();
console.log(typeof obj1.name);
// obj1.name = "Tom";
// obj1.empId = 101;
// console.log(obj1.name);
// console.log(obj1.empId);

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

// console.log(empObjList["emp001"]);
// console.log(empObjList["emp001"]["address"]["city"]);

interface IMapServerConfigs {
    serverName: {
        url: string;
        role: {
            username: string;
            password: string;
        }
    }
}

let serverConfigs: IMapServerConfigs = JSON.parse(jsonObj);
// console.log(typeof serverConfig);
// console.log(serverConfig);
// console.log(serverConfig["testServer1"]);

interface IMapServerConfig {
    serverName: string;
    url: string;
    username: string;
    password: string;
}

function getServerConfiguration(serverName: string): IMapServerConfig {
    let tempServerConfig: IMapServerConfig = null;
    Object.entries(serverConfigs).forEach(
        ([key, value]) => {
            //console.log(key, value)
            if (key == serverName) {
                console.log(value);
            }
    });
    return tempServerConfig;
}

//getServerConfiguration("testServer1");