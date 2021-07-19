// let config = require('./config.json');
const fs = require('fs');
const yaml = require('js-yaml');

try {
    //let fileContents = fs.readFileSync('./configyaml.yaml', 'utf8');
    let fileContents = fs.readFileSync('./yamls/login.page.yaml', 'utf8');
    let configurationsObj = yaml.load(fileContents);
    // console.log(typeof configurationsObj);
    // console.log(configurationsObj);

    // console.log('****** Without Recurssion - Start******');
    // Object.keys(configurationsObj).forEach(function (key) {
    //     //let value = configurationsObj[key];
    //     //console.log(typeof key);
    //     console.log(key);
    //     console.log(typeof configurationsObj[key]);
    //     console.log(configurationsObj[key]);
    // });
    // console.log('****** Without Recurssion - End******\n');
    function getKey(obj, res = [], parent = '') {
        const keys = Object.keys(obj);

        /** Loop throw the object keys and check if there is any object there */
        keys.forEach(key => {
            if (typeof obj[key] !== 'object') {
                // Generate the heirarchy
                parent ? res.push(`${parent}.${key}`) : res.push(key);
            } else {
                // If object found then recursively call the function with updpated parent
                let newParent = parent ? `${parent}.${key}` : key;
                getKey(obj[key], res, newParent);
            }

        });
    }

    function getObjectAttributeValue(obj, attributeName) {
        console.log('**** getObjectAttributeValue ****');
        console.log(obj);
        for (let k in obj) {
            // console.log(k);
            // console.log(typeof k);
            if (typeof obj[k] === "object") {
                getObjectAttributeValue(obj[k]);
            } else {
                // stop recurring
                // console.log(k);
                // console.log(obj[k]);
                // console.log(typeof k);
                if (String(k) === attributeName) {
                    console.log(obj[k]);
                    break;
                }
            }
        }
    }

    function getValue(objects, envName, attributeName) {
        console.log(`envName: ${envName}`);
        console.log(`attributeName: ${attributeName}`);
        const keys = Object.keys(objects);
        keys.forEach(key => {
            if (key === envName) {
                console.log(objects[key]);
                getObjectAttributeValue(objects[key], attributeName);
            }
        });
    }

    //getValue(configurationsObj, "staging2", "creator.password");
    //getValue(configurationsObj, "staging2", "secret_key");
    //getValue(configurationsObj, "canary2", "userName");
    console.log(configurationsObj);
    getValue(configurationsObj, "carta_login_page", "login_input");

} catch (e) {
    console.log(e);
}

//console.log(yaml);