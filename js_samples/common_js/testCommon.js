// Export by export
module.exports.age = 1

module.exports.printMsg = function (msg) { 
    return (`Hello from CommonJS, ${msg}`)
}

exports.a = 'hello'

function printMsgOne(msg) { 
    return (`Goodbye from CommonJS, ${msg}`)
}

module.exports.printMsgOne = printMsgOne;



//Whole export
//module.exports = { age: 1, a: 'hello', printMsg: function () { } }

//Cannot use 'exports' for overall export. Cannot use' exports' for import
//exports = { age: 1, a: 'hello', printMsg: function () { } }