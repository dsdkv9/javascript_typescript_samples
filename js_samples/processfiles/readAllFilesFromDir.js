const testFolder = '../yamls';
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

let fileContents = '';
let pageObjectMap = new Map();

try {
    console.log(`__dirname: ${__dirname}`);
    let filepath = path.resolve(__dirname, testFolder);
    console.log(`filepath: ${filepath}`);
    console.log('***************************');
    fs.readdirSync(filepath).forEach(file => {
        console.log(`file: ${file}`);
        let fileRelativePath = path.join(filepath, file);
        fileContents = fs.readFileSync(fileRelativePath, 'utf8');
        pageObjectMap.set(Object.keys(yaml.load(fileContents)), 
        Object.values(yaml.load(fileContents)));
    });
} catch (e) {
    console.log(e);
}

function getObjectAttributeValue(obj, attributeName) {
    for (let k in obj) {
        if (typeof obj[k] === "object") {
            getObjectAttributeValue(obj[k]);
        } else {
            if (String(k) === attributeName) {
                //console.log(obj[k]);
                return obj[k];
                break;
            }
        }
    }
}

function getPageElementLocator (page_name, element) {
    let locator;
    pageObjectMap.forEach((value, key) => {
        if (String(key) === page_name) {
            for (let k in value) {
                locator = getObjectAttributeValue(value[k], element);
                if (locator != null)
                {
                    break;
                }
            }
        }
    });
    return locator;
}

console.log(getPageElementLocator('carta_login_page', 'login_input'));
console.log(getPageElementLocator('carta_home_page', 'main_menu_button'));