//const Mortgage = require('./mortage_base'); // node version 12
import {Mortgage} from './mortage_base.js'; // node version 14

let mortage = new Mortgage(2000, 11, 8);

console.log(`mortage.getMessage(): ${mortage.getMessage()}`);
console.log(`mortage.principal: ${mortage.principal}`);
console.log(`mortage.principal: ${mortage.monthlyPayment}`);
console.log(process.versions);

try {
    var k = new Map();
    console.log("ES6 supported!!")
  } catch(err) {
    console.log("ES6 not supported :(")
  }
  
  try {
    var k = new HashMap();
    console.log("ES100 supported!!")
  } catch(err) {
    console.log("ES100 not supported :(")
  }