const testFolder = './yamls/';
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

let fileContents = '';
let pageObjectMap = new Map();

try {
    fs.readdirSync(testFolder).forEach(file => {
        let fileRelativePath = path.join(__dirname,'yamls', file);
        fileContents = fs.readFileSync(fileRelativePath, 'utf8');
        // console.log(Object.keys(yaml.load(fileContents)));
        // console.log(Object.values(yaml.load(fileContents)));
        pageObjectMap.set(Object.keys(yaml.load(fileContents)), 
        Object.values(yaml.load(fileContents)));
    });
} catch (e) {
    console.log(e);
}

pageObjectMap.forEach((value, key) => {
    if (String(key) === 'carta_login_page') {
        for (let k in value) {
            getObjectAttributeValue(value[k], 'login_input');
        }
    }
});

function getObjectAttributeValue(obj, attributeName) {
    console.log('**** getObjectAttributeValue ****');
    console.log(obj);
    for (let k in obj) {
        if (typeof obj[k] === "object") {
            getObjectAttributeValue(obj[k]);
        } else {
            if (String(k) === attributeName) {
                console.log(obj[k]);
                break;
            }
        }
    }
}