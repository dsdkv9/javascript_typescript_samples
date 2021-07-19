const testFolder = './yamls/';
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

let fileContents = '';
let pageObjectArray = new Array();
try {
    fs.readdirSync(testFolder).forEach(file => {
        let fileRelativePath = path.join(__dirname,'yamls', file);
        fileContents = fs.readFileSync(fileRelativePath, 'utf8');
        pageObjectArray.push(yaml.load(fileContents));
    });
} catch (e) {
    console.log(e);
}


let pageObjectMap = new Map();

for (let item in pageObjectArray) {
    pageObjectMap.set(Object.keys(pageObjectArray[item]), Object.values(pageObjectArray[item]));
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