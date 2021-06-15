const Mortgage = require('./mortage_base');
//import Mortgage from './mortage_base';

mortage = new Mortgage(2000, 11, 8);

console.log(`mortage.getMessage(): ${mortage.getMessage()}`);
console.log(`mortage.principal: ${mortage.principal}`);
console.log(`mortage.principal: ${mortage.monthlyPayment}`);