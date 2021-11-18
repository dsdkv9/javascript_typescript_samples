let testStr = 'Hello World 123! Test';

console.log(testStr);
function getOnlyStrWithChar(str) {
    let newStr = "";
    let j = 0;
    for (let i = 0; i <= String(str).length; i++ ) {
        //console.log(str[i] + " = " + str.charCodeAt(i));
        let strIntVal = str.charCodeAt(i);
        if ((strIntVal >= 65  && strIntVal <= 90) || (strIntVal >= 97  && strIntVal <= 122)) {
            console.log(str[i]);
            newStr = newStr + str[i];
        }
    }
    return newStr;
}

console.log(getOnlyStrWithChar(testStr));