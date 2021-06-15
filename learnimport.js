const fs = require('fs');

fs.readFileSync('./test1.txt', 'utf-8', (err, data) => {
    if (err) { 
        throw err; 
    } else {
        console.log(`'data:  ${data}`);
    }
});