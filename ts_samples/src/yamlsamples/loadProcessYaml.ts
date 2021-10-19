import { load } from "js-yaml";
import fs from "fs";
import * as path from 'path';

//import { serverConfigDataMap } from "./server_config_data";
import serverConfigDataMap = require("./server_config_data")

console.log(__dirname);
console.log(process.cwd());

const fileContent = fs.readFileSync(
    "src//yamlsamples//serverConfig.yaml", "utf8");
console.log(fileContent);

let serverConfigDataMapToSave= serverConfigDataMap;

serverConfigDataMapToSave = {
    "test1": {
        url : "http://google.com",
        userName: "testUser",
        password: "testpassword123#"
    },
    "test2": {
        url : "http://carta.com",
        userName: "testUserCarta",
        password: "testpCarta123#"
    },
    "test3": {
        url : "http://carta.com",
        userName: "testUserCarta",
        password: "testpCarta123#"
    }
}

// console.log(serverConfigDataMapToSave);
// console.log(serverConfigDataMapToSave["test1"]);
console.log(typeof serverConfigDataMapToSave);

let serverMap = Object.entries(serverConfigDataMapToSave);
console.log(typeof serverMap);
console.log(serverMap.length);
serverMap.forEach((value: any, key: any) => {
    console.log(serverMap.keys());
    console.log(`${value} & ${key}`);
});
