let config = require('./config.json');
const fs = require('fs');
const yaml = require('js-yaml');
//import yaml from 'yaml';

//console.log(config.testenv.length);
// console.log(config.testenv[0].canary2);
// console.log(config.testenv[0].canary2.url);


try {
    let fileContents = fs.readFileSync('./configyaml.yaml', 'utf8');
    let data = yaml.load(fileContents);
    console.log(typeof data);
    //console.log(Object.entries(data));
    let configMap = Object.entries(data);
    //console.log(configMap);
    // for(map of configMap) {
    //     console.log(map);
    // }


    // configMap.forEach((env, index) => {
    //     console.log('***** Outer loop - Start');
    //     console.log(`index: ${index}`);
    //     console.log(typeof env);
    //     console.log(env);
    //     // for ([key, value] of Object.entries(env)) {
    //     //     console.log('***** Inner loop - Start');
    //     //     console.log(key, value);
    //     //     // if (key === "staging2") {
    //     //     //     console.log(key, value);
    //     //     // }
    //     // }
    // });

    configMap.forEach((env, index) => {
        // console.log(index);
        // console.log(typeof env);
        console.log(typeof env);
        console.log(Object.getOwnPropertyNames(env));
    });

    for (let m of configMap) {
        console.log(typeof m);
        //console.log(Object.getOwnPropertyNames(m));
    }

    for (let d of data) {
        console.log(typeof d);
    }

} catch (e) {
    console.log(e);
}

//console.log(yaml);