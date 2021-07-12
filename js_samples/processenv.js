let config = require('./config.json');
const fs = require('fs');
const yaml = require('js-yaml');

try {
    let fileContents = fs.readFileSync('./configyaml.yaml', 'utf8');
    let data = yaml.load(fileContents);
    console.log(typeof data);
    
    let objAttrList = Object.getOwnPropertyNames(data);

    console.log(`Object attributes list: ${objAttrList}`);
    for(let attr of objAttrList) {
        let value = data[attr];
        console.log(`Object attribute ${attr} and value:`);
        console.log(value);
        console.log(value["url"]);
    }

} catch (e) {
    console.log(e);
}

//console.log(yaml);