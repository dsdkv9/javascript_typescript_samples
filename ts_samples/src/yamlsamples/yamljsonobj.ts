import { load } from "js-yaml";
import fs from "fs";
const outputfile = 'src//yamlsamples//output.json';

const fileContent = load(fs.readFileSync(
    "src//yamlsamples//serverConfig.yaml", "utf8"));
console.log(fileContent);
console.log(typeof fileContent);

const jsonObj = JSON.stringify(fileContent);
console.log(jsonObj);
console.log(typeof jsonObj);
fs.writeFileSync(outputfile, JSON.stringify(jsonObj, null, 2));