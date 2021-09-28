import { load } from "js-yaml";
import * as fs from "fs";

console.log(__dirname);
console.log(process.cwd());
const fileContent = fs.readFileSync(
    "src//yamlsamples//sampledata.yaml", "utf8");

console.log(fileContent);